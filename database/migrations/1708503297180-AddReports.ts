import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddReports1708503297180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (await queryRunner.hasTable('reports')) return;

    await queryRunner.createTable(
      new Table({
        name: 'reports',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'client_name',
            type: 'varchar',
          },
          {
            name: 'test_method',
            type: 'int',
          },
          {
            name: 'product_type',
            type: 'int',
          },
          {
            name: 'report_date',
            type: 'date',
          },
          {
            name: 'end_date',
            type: 'date',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reports');
  }
}
