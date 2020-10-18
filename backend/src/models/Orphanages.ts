import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Image from './Image'

@Entity('orphanages')//associando a tabela no banco com a classe definida aqui no model
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @Column()
    whatsapp_number: string;


    @OneToMany(() => Image, image=>image.orphanage, {
        cascade: ['insert','update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[]
}