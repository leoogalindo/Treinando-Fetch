fetch('pessoas.json')
    .then(resp => resp.json())
    .then(json => carregaElementosPag(json))

function carregaElementosPag (json){
    const table = document.createElement('table')
    const trTitulo = document.createElement('tr')
    trTitulo.className = 'titulo-table' 

    const tdNome = document.createElement('td')
    tdNome.innerText = 'Nome'

    const tdIdade = document.createElement('td')
    tdIdade.innerText = 'Idade'

    const tdSalario = document.createElement('td')
    tdSalario.innerText = 'Salário'
    
    trTitulo.appendChild(tdNome)
    trTitulo.appendChild(tdIdade)
    trTitulo.appendChild(tdSalario)
    table.appendChild(trTitulo)
    for(let pessoa of json) {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }
    const resultado = document.querySelector('.result')
    resultado.appendChild(table)
}