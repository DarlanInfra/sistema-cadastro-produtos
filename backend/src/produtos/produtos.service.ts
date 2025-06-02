import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  async findOne(codigo: number): Promise<Produto> {
    const produto = await this.produtosRepository.findOne({ where: { codigo } });
    if (!produto) {
      throw new NotFoundException(`Produto com código ${codigo} não encontrado`);
    }
    return produto;
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtosRepository.save(produto);
  }

  async update(codigo: number, produto: Produto): Promise<Produto> {
    const produtoExistente = await this.findOne(codigo);
    const produtoAtualizado = this.produtosRepository.merge(produtoExistente, produto);
    return this.produtosRepository.save(produtoAtualizado);
  }

  async remove(codigo: number): Promise<void> {
    const produto = await this.findOne(codigo);
    await this.produtosRepository.remove(produto);
  }
} 