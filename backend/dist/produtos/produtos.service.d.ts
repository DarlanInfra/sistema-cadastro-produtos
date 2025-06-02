import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
export declare class ProdutosService {
    private produtosRepository;
    constructor(produtosRepository: Repository<Produto>);
    findAll(): Promise<Produto[]>;
    findOne(codigo: number): Promise<Produto | null>;
    create(produto: Produto): Promise<Produto>;
    update(codigo: number, produto: Produto): Promise<Produto | null>;
    remove(codigo: number): Promise<void>;
}
