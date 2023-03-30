const frm = document.querySelector("form")  // Obtém os elementos da página
const tbFilmes =document.querySelector("table")

frm.addEventListener("subit", (e) => {  // Cria um ouvinte de evento para o botão submit
    e.preventDefault()    // Evita o envio do form

    const titulo = frm.inTitulo.value  // Obtém os conteúdos dos campos
    const genero = frm.inGenero.value

    inseriLinha(titulo, genero) //Chama a function que insere filmes na tabela
    gravarFilme(titulo, genero) // Chama a function que grava filmes em localStorage

    frm.reset()  // Limpa os campos do form
    frm.inTitulo.focus()  // Posiciona o cursor em inTitulo
})

const inseriLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1)  // Adiciona uma linha na tabela

    const col1 = linha.insertCell(0)  // Cria colunas na linha inserida
    const col2 =linha.insertCell(1)
    const col3 =linha.insertCell(2)

    col1.innerText = titulo  // Joga um conteúdo em cada celula
    col2.innerText = genero
    col3.innerHTML = "<i class=`exclui` title=`Excluir`>&#10008</i>"
}

const gravarFilme = (titulo, genero) => {
    // Se ouver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        //...Obtém od dados e acrescenta ";" e o titulo/genero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", filmesTitulo) // Grava os dados
        localStorage.setItem("filmesGenero", filmesGenero)
    }
}

window.addEventListener("load", () => {  // Ao carregar a página
  // Se ouver dados no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    // Obtém conteúdo e converte em elementos de vetor (na ocorrencia ";")
    const titulos = localStorage.getItem("filmesTitulo").split(";")
    const generos = localStorage.getItem("filmesGenero").split(";")

    // Percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < titulos.length; i++) {
        inseriLinha(titulos[i], generos[i])
    }
  }
})