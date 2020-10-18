import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanages'

@Entity('images')//associando a tabela no banco com a classe definida aqui no model
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(()=>Orphanage, orphanage=>orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage
}