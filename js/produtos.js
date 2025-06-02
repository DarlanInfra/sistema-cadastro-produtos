// Função para carregar a lista de produtos
async function carregarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/produtos');
        const produtos = await response.json();
        const tbody = document.getElementById('listaProdutos');
        tbody.innerHTML = '';
        
        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produto.codigo}</td>
                <td>${produto.nome}</td>
                <td>R$ ${Number(produto.preco).toFixed(2)}</td>
                <td>
                    <button class="btn-sm btn-primary" onclick="editarProduto(${produto.codigo})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-sm btn-danger" onclick="excluirProduto(${produto.codigo})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        alert('Erro ao carregar produtos. Por favor, tente novamente.');
    }
}

// Função para salvar um produto
async function salvarProduto(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    
    const produto = {
        nome,
        preco: parseFloat(preco),
        descricao
    };
    
    try {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });
        
        if (!response.ok) {
            throw new Error('Erro ao salvar produto');
        }
        
        fecharModal();
        carregarProdutos();
        document.getElementById('formProduto').reset();
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
        alert('Erro ao salvar produto. Por favor, tente novamente.');
    }
}

// Função para editar um produto
async function editarProduto(codigo) {
    try {
        const response = await fetch(`http://localhost:3000/cliente?codigo=${codigo}`);
        const produto = await response.json();
        
        document.getElementById('nome').value = produto.nome;
        document.getElementById('preco').value = produto.preco;
        document.getElementById('descricao').value = produto.descricao;
        
        abrirModal();
        
        // Alterar o comportamento do formulário para atualizar
        const form = document.getElementById('formProduto');
        form.onsubmit = async (event) => {
            event.preventDefault();
            
            const produtoAtualizado = {
                nome: document.getElementById('nome').value,
                preco: parseFloat(document.getElementById('preco').value),
                descricao: document.getElementById('descricao').value
            };
            
            try {
                const response = await fetch(`http://localhost:3000/${codigo}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(produtoAtualizado)
                });
                
                if (!response.ok) {
                    throw new Error('Erro ao atualizar produto');
                }
                
                fecharModal();
                carregarProdutos();
                form.reset();
                form.onsubmit = salvarProduto; // Restaurar o comportamento padrão
            } catch (error) {
                console.error('Erro ao atualizar produto:', error);
                alert('Erro ao atualizar produto. Por favor, tente novamente.');
            }
        };
    } catch (error) {
        console.error('Erro ao carregar produto:', error);
        alert('Erro ao carregar produto. Por favor, tente novamente.');
    }
}

// Função para excluir um produto
async function excluirProduto(codigo) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        try {
            const response = await fetch(`http://localhost:3000/${codigo}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Erro ao excluir produto');
            }
            
            carregarProdutos();
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            alert('Erro ao excluir produto. Por favor, tente novamente.');
        }
    }
}

// Carregar produtos ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    document.getElementById('formProduto').addEventListener('submit', salvarProduto);
}); 