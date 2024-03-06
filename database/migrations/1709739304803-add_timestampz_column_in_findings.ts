import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTimestampzColumnInFindings1709739304803
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('finding').then(async (table) => {
      if (!table.columns.find((column) => column.name === 'created_at')) {
        await queryRunner.query(
          `ALTER TABLE findings ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP`,
        );
      }
      if (!table.columns.find((column) => column.name === 'updated_at')) {
        await queryRunner.query(
          `ALTER TABLE findings ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP`,
        );
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('finding').then(async (table) => {
      if (table.columns.find((column) => column.name === 'created_at')) {
        await queryRunner.query(`ALTER TABLE findings DROP COLUMN created_at`);
      }
      if (table.columns.find((column) => column.name === 'updated_at')) {
        await queryRunner.query(`ALTER TABLE findings DROP COLUMN updated_at`);
      }
    });
  }
}
