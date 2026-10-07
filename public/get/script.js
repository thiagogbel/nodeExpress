async function buscarCPF() {
    const cpf = document.getElementById('cpfBusca').value;
    const resposta = await fetch(`/usuarios/${cpf}`);
    const divResultado = document.getElementById('resultado');
    
    if (resposta.ok) {
        const dados = await resposta.json();
        divResultado.innerHTML = `<p><strong>Nome:</strong> ${dados.nome} ${dados.sobrenome}</p>
                                  <p><strong>Email:</strong> ${dados.email} | <strong>Idade:</strong> ${dados.idade}</p>
                                  <p><strong>Local:</strong> ${dados.cidade}/${dados.estado}</p>`;
    } else {
        divResultado.innerHTML = `<p style="color:red;">CPF não encontrado.</p>`;
    }
}