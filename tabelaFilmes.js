const frm = document.querySelector("form"); // Obtém os elementos da página
const tbFilmes = document.querySelector("table");

frm.addEventListener("subit", (e) => {
  // Cria um ouvinte de evento para o botão submit
  e.preventDefault(); // Evita o envio do form

  const titulo = frm.inTitulo.value; // Obtém os conteúdos dos campos
  const genero = frm.inGenero.value;

  inseriLinha(titulo, genero); //Chama a function que insere filmes na tabela
  gravarFilme(titulo, genero); // Chama a function que grava filmes em localStorage

  frm.reset(); // Limpa os campos do form
  frm.inTitulo.focus(); // Posiciona o cursor em inTitulo
});

const inseriLinha = (titulo, genero) => {
  const linha = tbFilmes.insertRow(-1); // Adiciona uma linha na tabela

  const col1 = linha.insertCell(0); // Cria colunas na linha inserida
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.innerText = titulo; // Joga um conteúdo em cada celula
  col2.innerText = genero;
  col3.innerHTML = "<i class=`exclui` title=`Excluir`>&#10008</i>";
};

const gravarFilme = (titulo, genero) => {
  // Se ouver dados salvos em localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //...Obtém od dados e acrescenta ";" e o titulo/genero informado
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;
    localStorage.setItem("filmesTitulo", filmesTitulo); // Grava os dados
    localStorage.setItem("filmesGenero", filmesGenero);
  }
};

window.addEventListener("load", () => {
  // Ao carregar a página
  // Se ouver dados no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    // Obtém conteúdo e converte em elementos de vetor (na ocorrencia ";")
    const titulos = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");

    // Percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < titulos.length; i++) {
      inseriLinha(titulos[i], generos[i]);
    }
  }
});

tbFilmes.addEventListener("click", (e) => {
  //Se a class do elemento alvo clicado contém exclui
  if (e.target.classList.contains("exclui")) {
    //Acessa o pai do pai do elemento alvo, e obtém o texto do 1º filho
    const titulo = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Confirma o exclusão do filme "${titulo}"?`)) {
      // Remove a linha da tabela, correspondente ao símbolo de excluir clicado
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("filmesTitulo"); // Exclui filmes salvos
      localStorage.removeItem("filmesGenero");

      //Salva novamante "se existir", acessando o conteudo da tabela
      for (let i = 1; i < tbFilmes.rows.length; i++) {
        //Obtém o conteudo da tabela (coluna 0: título; coluna 1: gênero)
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
        const auxGenero = tbFilmes.rows[i].cells[1].innerText;
        gravarFilme(auxTitulo, auxGenero); // chama gravarFilmes com dados da tabela
      }
    }
  }
});
