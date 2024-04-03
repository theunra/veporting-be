import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UserToReportRelation1710897874821 implements MigrationInterface {
  foreignKey = new TableForeignKey({
    columnNames: ['userId'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('reports').then(async (table) => {
      if (
        !table.foreignKeys.find((fk) => fk.columnNames.indexOf('userId') !== -1)
      ) {
        await queryRunner.createForeignKeys('reports', [this.foreignKey]);
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reports', this.foreignKey);
  }
}
