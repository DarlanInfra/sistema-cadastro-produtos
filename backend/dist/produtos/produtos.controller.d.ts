import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    getStatus(): string;
    findAll(): Promise<Produto[]>;
    create(produto: Produto): Promise<Produto>;
    findOne(codigo: number): Promise<Produto>;
    update(codigo: number, produto: Produto): Promise<Produto>;
    remove(codigo: number): Promise<void>;
}
