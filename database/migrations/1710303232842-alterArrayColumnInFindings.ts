import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterArrayColumnInFindings1710303232842
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('findings').then(async (table) => {
      await queryRunner.changeColumns(table, [
        {
          oldColumn: table.findColumnByName('reference'),
          newColumn: new TableColumn({
            name: 'reference',
            type: 'varchar',
            isArray: true,
            isNullable: true,
          }),
        },
        {
          oldColumn: table.findColumnByName('recommendation'),
          newColumn: new TableColumn({
            name: 'recommendation',
            type: 'varchar',
            isArray: true,
            isNullable: true,
          }),
        },
      ]);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('findings').then(async (table) => {
      await queryRunner.changeColumns(table, [
        {
          oldColumn: table.findColumnByName('reference'),
          newColumn: new TableColumn({
            name: 'reference',
            type: 'varchar',
            isArray: false,
            isNullable: true,
          }),
        },
        {
          oldColumn: table.findColumnByName('recommendation'),
          newColumn: new TableColumn({
            name: 'recommendation',
            type: 'varchar',
            isArray: false,
            isNullable: true,
          }),
        },
      ]);
    });
  }
}
