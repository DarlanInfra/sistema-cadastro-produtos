function abrirModal() {
    const modal = document.getElementById('modalCadastro');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne rolagem do body
}

function fecharModal() {
    const modal = document.getElementById('modalCadastro');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem do body
}

// Fechar modal ao clicar fora
document.getElementById('modalCadastro').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharModal();
    }
});

// Manipular envio do formulário
document.getElementById('formProduto').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você adiciona a lógica para salvar o produto
    // Após salvar com sucesso:
    fecharModal();
}); 