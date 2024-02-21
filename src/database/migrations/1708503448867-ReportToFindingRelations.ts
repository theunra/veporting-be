import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ReportToFindingRelations1708503448867
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('findings').then(async (table) => {
      if (
        !table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('reportId') !== -1,
        )
      ) {
        await queryRunner.createForeignKey('findings', {
          columnNames: ['reportId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'reports',
          onDelete: 'CASCADE',
          '@instanceof': undefined,
          clone: function (): TableForeignKey {
            throw new Error('Function not implemented.');
          },
        });
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('findings', 'reportId');
  }
}
