import { query } from "express";
import {MigrationInterface, QueryRunner, Table, TreeRepository} from "typeorm";

export class createOrphanages1602594346093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar as tarefas que queremos
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy:'increment',
                },
                {
                    name : 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name : 'whatsapp_number',
                    type: 'string'
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Desfaz as tarefas feitas no up
        await queryRunner.dropTable('orphanages')
    }

}
