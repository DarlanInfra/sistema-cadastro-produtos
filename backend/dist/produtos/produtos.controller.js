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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produto_entity_1 = require("./entities/produto.entity");
const produtos_service_1 = require("./produtos.service");
let ProdutosController = class ProdutosController {
    produtosService;
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    getStatus() {
        return 'API de Produtos funcionando!';
    }
    findAll() {
        return this.produtosService.findAll();
    }
    create(produto) {
        return this.produtosService.create(produto);
    }
    findOne(codigo) {
        return this.produtosService.findOne(codigo);
    }
    update(codigo, produto) {
        return this.produtosService.update(codigo, produto);
    }
    remove(codigo) {
        return this.produtosService.remove(codigo);
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Get)('produtos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_entity_1.Produto]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('cliente'),
    __param(0, (0, common_1.Query)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, produto_entity_1.Produto]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "remove", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map