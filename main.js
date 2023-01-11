const form = document.getElementById('form-agenda');

const contato= [];
const telefone=[];
let formEValido=false;

let linhas = '';

function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; 

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-'; 

}

form.addEventListener('submit', function(e){
    e.preventDefault();
    addContato();
    atualizaAgenda();
})


function addContato(){
    const inputNomeContato = document.getElementById('agenda-nome')
    const inputTelefoneContato = document.getElementById('agenda-telefone')

    if (contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`)

    }else {
        contato.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        console.log(contato)
        console.log(telefone)
    }
    inputNomeContato.value = "";
    inputTelefoneContato.value = "";
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas
}




