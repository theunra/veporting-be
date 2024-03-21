import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddStatusInReport1710392610968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('report').then(async (table) => {
      if (!table.columns.find((column) => column.name === 'status')) {
        await queryRunner.addColumn(
          'report',
          new TableColumn({
            name: 'status',
            type: 'enum',
            enum: ['ongoing', 'done'],
            default: " 'ongoing' ",
          }),
        );

        await queryRunner.addColumn(
          'report',
          new TableColumn({
            name: 'userId',
            type: 'uuid',
          }),
        );
      }
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.getTable('report').then(async (table) => {
      if (table.columns.find((column) => column.name === 'status')) {
        await queryRunner.dropColumn('report', 'status');
      }

      if (table.columns.find((column) => column.name === 'userId')) {
        await queryRunner.dropColumn('report', 'userId');
      }
    });
  }
}
