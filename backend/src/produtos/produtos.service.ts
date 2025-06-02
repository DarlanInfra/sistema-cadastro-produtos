import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  findOne(codigo: number): Promise<Produto | null> {
    return this.produtosRepository.findOneBy({ codigo });
  }

  create(produto: Produto): Promise<Produto> {
    return this.produtosRepository.save(produto);
  }

  async update(codigo: number, produto: Produto): Promise<Produto | null> {
    await this.produtosRepository.update(codigo, produto);
    return this.findOne(codigo);
  }

  async remove(codigo: number): Promise<void> {
    await this.produtosRepository.delete(codigo);
  }
} 