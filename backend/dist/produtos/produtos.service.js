"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./entities/produto.entity");
let ProdutosService = class ProdutosService {
    produtosRepository;
    constructor(produtosRepository) {
        this.produtosRepository = produtosRepository;
    }
    async findAll() {
        return this.produtosRepository.find();
    }
    async findOne(codigo) {
        const produto = await this.produtosRepository.findOne({ where: { codigo } });
        if (!produto) {
            throw new common_1.NotFoundException(`Produto com código ${codigo} não encontrado`);
        }
        return produto;
    }
    async create(produto) {
        return this.produtosRepository.save(produto);
    }
    async update(codigo, produto) {
        const produtoExistente = await this.findOne(codigo);
        const produtoAtualizado = this.produtosRepository.merge(produtoExistente, produto);
        return this.produtosRepository.save(produtoAtualizado);
    }
    async remove(codigo) {
        const produto = await this.findOne(codigo);
        await this.produtosRepository.remove(produto);
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map