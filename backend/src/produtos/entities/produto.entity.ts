import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({ length: 100 })
    nome: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @Column({ length: 500, nullable: true })
    descricao: string;
} 