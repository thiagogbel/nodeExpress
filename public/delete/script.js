async function deletarRegistro() {
    const cpf = document.getElementById('cpfDelete').value;
    const resposta = await fetch(`/usuarios/${cpf}`, { method: 'DELETE' });
    
    if (resposta.ok) {
        alert('Usuário deletado permanentemente.');
    } else {
        alert('Erro ou CPF não encontrado.');
    }
}