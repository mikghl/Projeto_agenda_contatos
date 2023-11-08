const formulario = document.getElementById('form-contatos')
const formReset = document.getElementById('resetar')
const nomes = [];
const numeros = [];

let linhas = '';

// Esse submit vai servir para chamar outras funcões que criarei abaixo
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

// Essa função serve para adicionar linhas de nome, telefone e relação
function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const optionRelacaoContato = document.querySelector('.option');

    const numeroTelefone = parseInt(inputNumeroContato.value)

    if (isNaN(numeroTelefone) || numeroTelefone < 100000000) {
        alert("O número de telefone deve ter pelo menos 9 dígitos.");
    } else if (numeros.includes(numeroTelefone)) {
        alert(`O contato de número: ${numeroTelefone} já foi adicionado.`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(numeroTelefone);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${numeroTelefone}</td>`;
        linha += `<td>${optionRelacaoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}
// Aqui essa função atualiza a tabela por meio do innerHTML

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

// Essa função limpa o nome, numero e relação do contato
formulario.addEventListener('reset', function limpar() {
    
})

// Essa função reseta os contatos da agenda
formReset.addEventListener('click', function resetarAgenda() {
    const confirmarReset = confirm('Deseja resetar os contatos de sua agenda?');

    if (confirmarReset) {
        nomes.length = 0;
        numeros.length = 0;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = '';

        window.location.reload();
    }
});