import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddFindings1708502654826 implements MigrationInterface {
  name?: string;
  transaction?: boolean;
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'findings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'level',
            type: 'int',
          },
          {
            name: 'cvss',
            type: 'float',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['open', 'closed'],
          },
          {
            name: 'target',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'upload_poc',
            type: 'jsonb',
          },
          {
            name: 'recommendation',
            type: 'varchar',
          },
          {
            name: 'reference',
            type: 'varchar',
          },
          {
            name: 'reportId',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['reportId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reports',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('findings');
  }
}
