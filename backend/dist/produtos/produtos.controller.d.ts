import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    getStatus(): string;
    findAll(): Promise<Produto[]>;
    findOne(codigo: string): Promise<Produto | null>;
    create(produto: Produto): Promise<Produto>;
    update(codigo: string, produto: Produto): Promise<Produto | null>;
    remove(codigo: string): Promise<void>;
}
