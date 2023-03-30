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