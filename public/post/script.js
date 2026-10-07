document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const usuario = {
        id: document.getElementById('cpf').value, // CPF será o ID para busca direta
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('telefone').value,
        rg: document.getElementById('rg').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };

    await fetch('/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
    alert('Usuário cadastrado com sucesso!');
    e.target.reset();
});