async function atualizarRegistro() {
    const cpf = document.getElementById('cpfPut').value;
    
    // Primeiro, busca os dados existentes para não apagar os outros campos acidentalmente
    const busca = await fetch(`/usuarios/${cpf}`);
    if (!busca.ok) return alert('Usuário não encontrado!');
    
    const usuarioAtual = await busca.json();
    
    // Atualiza apenas os campos preenchidos
    usuarioAtual.email = document.getElementById('novoEmail').value || usuarioAtual.email;
    usuarioAtual.cidade = document.getElementById('novaCidade').value || usuarioAtual.cidade;

    await fetch(`/usuarios/${cpf}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuarioAtual)
    });
    alert('Usuário atualizado com sucesso!');
}