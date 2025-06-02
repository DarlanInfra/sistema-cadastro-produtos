# Sistema de Gerenciamento de Produtos

Este é um sistema full-stack para gerenciamento de produtos, desenvolvido com NestJS no backend e HTML/CSS/JavaScript no frontend.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 8.0 ou superior)
- Git

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL chamado `produtos_db`
2. O sistema irá criar automaticamente a tabela necessária na primeira execução

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd projeto-node-front-end
```

2. Instale as dependências do backend:
```bash
cd backend
npm install
```

3. Configure o arquivo de ambiente:
- Copie o arquivo `.env.example` para `.env` (se existir)
- Ou crie um arquivo `.env` na pasta `backend` com as seguintes configurações:
```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=produtos_db
```

## Executando o Projeto

1. Inicie o backend:
```bash
cd backend
npm run start:dev
```
O servidor backend estará disponível em `http://localhost:3000`

2. Para o frontend, você pode usar qualquer servidor web simples. Por exemplo:
- Use a extensão "Live Server" do VS Code
- Ou abra o arquivo `index.html` diretamente no navegador

## Rotas da API

- `GET /` - Status da API
- `GET /produtos` - Lista todos os produtos
- `GET /cliente?codigo=X` - Busca um produto pelo código
- `POST /` - Cria um novo produto
- `PUT /:codigo` - Atualiza um produto
- `DELETE /:codigo` - Remove um produto

## Estrutura do Projeto

```
projeto-node-front-end/
├── backend/           # API NestJS
├── css/              # Estilos CSS
├── js/               # Scripts JavaScript
└── index.html        # Página principal
```

## Suporte

Em caso de dúvidas ou problemas, entre em contato com o desenvolvedor. 