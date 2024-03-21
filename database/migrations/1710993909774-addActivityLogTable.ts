import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddActivityLogTable1710993909774 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activity_log',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'action',
            type: 'varchar',
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

    await queryRunner.createForeignKey(
      'activity_log',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activity_log');
  }
}
