import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddStatusInReport1710392610968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('reports').then(async (table) => {
      if (!table.columns.find((column) => column.name === 'status')) {
        await queryRunner.addColumn(
          'reports',
          new TableColumn({
            name: 'status',
            type: 'enum',
            enum: ['ongoing', 'done'],
            default: " 'ongoing' ",
          }),
        );

        await queryRunner.addColumn(
          'reports',
          new TableColumn({
            name: 'userId',
            type: 'uuid',
          }),
        );
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('reports').then(async (table) => {
      if (table.columns.find((column) => column.name === 'status')) {
        await queryRunner.dropColumn('reports', 'status');
      }

      if (table.columns.find((column) => column.name === 'userId')) {
        await queryRunner.dropColumn('reports', 'userId');
      }
    });
  }
}
