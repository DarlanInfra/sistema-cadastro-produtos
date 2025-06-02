import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';

@Controller()
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  getStatus(): string {
    return 'API funcionando!';
  }

  @Get('produtos')
  findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get('produto')
  findOne(@Query('codigo') codigo: string): Promise<Produto | null> {
    return this.produtosService.findOne(+codigo);
  }

  @Post()
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  @Put(':codigo')
  async update(@Param('codigo') codigo: string, @Body() produto: Produto): Promise<Produto | null> {
    const produtoAtualizado = await this.produtosService.update(+codigo, produto);
    if (!produtoAtualizado) {
      throw new Error('Produto não encontrado');
    }
    return produtoAtualizado;
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: string): Promise<void> {
    return this.produtosService.remove(+codigo);
  }
} 