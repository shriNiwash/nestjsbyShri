import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Book_inventory{
    @PrimaryGeneratedColumn()
    id:Number

    @Column()
    name:string

    @Column()
    sold:Number
}