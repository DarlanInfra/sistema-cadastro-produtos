import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  getStatus(): string {
    return 'API de Produtos funcionando!';
  }

  @Get('produtos')
  findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Post()
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  @Get('cliente')
  findOne(@Query('codigo') codigo: number): Promise<Produto> {
    return this.produtosService.findOne(codigo);
  }

  @Put(':codigo')
  update(@Param('codigo') codigo: number, @Body() produto: Produto): Promise<Produto> {
    return this.produtosService.update(codigo, produto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: number): Promise<void> {
    return this.produtosService.remove(codigo);
  }
} 