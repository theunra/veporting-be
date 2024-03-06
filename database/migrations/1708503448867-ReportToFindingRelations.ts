import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ReportToFindingRelations1708503448867
  implements MigrationInterface
{
  name?: string;
  transaction?: boolean;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('finding').then(async (table) => {
      if (
        !table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('reportId') !== -1,
        )
      ) {
        await queryRunner.createForeignKeys('finding', [
          new TableForeignKey({
            columnNames: ['reportId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reports',
            onDelete: 'CASCADE',
          }),
        ]);
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('finding', 'reportId');
  }
}
