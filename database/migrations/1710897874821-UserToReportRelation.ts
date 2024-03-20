import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UserToReportRelation1710897874821 implements MigrationInterface {
    foreignKey = new TableForeignKey({
      columnNames: ['userId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
    });
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.getTable('report').then(async (table) => {
            if (
              !table.foreignKeys.find(
                (fk) => fk.columnNames.indexOf('userId') !== -1,
              )
            ) {
              await queryRunner.createForeignKeys('report', [
                this.foreignKey,
              ]);
            }
          });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('report', this.foreignKey);
    }

}
