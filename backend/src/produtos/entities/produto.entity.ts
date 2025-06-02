import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class Produto {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({ length: 30 })
    descricao: string;

    @Column({ length: 30 })
    marca: string;

    @Column('decimal', { precision: 8, scale: 2 })
    valor: number;
} 