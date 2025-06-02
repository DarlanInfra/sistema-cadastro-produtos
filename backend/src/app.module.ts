import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'produtos_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Ativado para desenvolvimento
      autoLoadEntities: true,
      logging: true, // Ativa logs do SQL
    }),
    ProdutosModule,
  ],
})
export class AppModule {}
