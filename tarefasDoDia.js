const frm = document.querySelector("form"); // Obtém os elementos da página
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
  //Cria um ouvinte de evento para botão submit
  e.preventDefault(); // Evita o envio do form
  const tarefa = frm.inTarefa.value; // Obtém o conteúdo digitado

  const h5 = document.createElement("h5"); // Cria o elemento html h5
  const texto = document.createTextNode(tarefa); // cria um texto
  h5.appendChild(texto); // Define que texto será filho de h5
  dvQuadro.appendChild(h5); // E que h5 será filho de divQuadrado

  frm.inTarefa.value = ""; // limpa o campo de adição
  frm.inTarefa.focus(); // Joga o cursor neste campo
});

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // Obtém as tags h5 da página

  if (tarefas.length == 0) {
    alert("Não há tarefas para selecionar"); // Se não há terefea exibe o alerta
    return; // E retorna
  }

  let aux = -1; // Variável auxiliar para indicar tarefa selecionada

  // Percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
  for (let i = 0; i < tarefas.length; i++) {
    // Se tag é da class tarefa-selecionada (está selecionada)
    if ((tarefas[i].className = "tarefa-selecionada")) {
      tarefas[i].className = "tarefa-normal"; // Troca para normal
      aux = i; // Muda o valor da variável aux
      break; // Sai da repetição
    }
  }

  // Se a linha que está selecionada é a última, ira voltar para a primeira
  if (aux == tarefas.length - 1) {
    aux = -1;
  }
  tarefas[aux + 1].className = "tarefa-selecionada"; // muda o estilo da próxima linha
});

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // Obtém as tags h5 da página

  let aux = -1; // Variável auxiliar para indicar a linha selecionada

  // Percorre a lista das tarefas inseridas na página (elementos h5)
  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecinada") {
      // Se é da classe tarefa-selecionada
      aux = i; // Muda o valor da variável aux
    }
  });

  if (aux == -1) {
    // Se não há tarefas selecionadas (ou se lista vazia...)
    alert("Seleciona uma tarefa para removê-la...");
    return;
  }

  //Solicita confirmação (exibindo o conteudo da tag h5 selecionada)
  if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
    dvQuadro.removeChild(tarefas[aux]); // Remove um dos filhos de dvQuadro
  }
});

frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // Obtém as tags h5 da página

  if (tarefas.length == 0) {
    alert("Não há tarefas para serem salvas"); // se não há tarefas exibe o alerta
    return;
  }

  let dados = ""; // Irá acumular os dados a serem salvos

  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";"; // Acumula o conteúdo de cada h5
  });

  // Grava os dados em localStorage, removendo o último ";"
  localStorage.setItem("tarefasDia", dados.slice(0, -1));

  // Confere se dados forma armazenados em localStorage
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Salvas");
  }
});

window.addEventListener("load", () => {
  // Verifica se há tarefas salvas no navegador do usúario
  if (localStorage.getItem("tarefasDia")) {
    // Cria um vetor com a lista de tarefas (separadas pelo split(";"))
    const dados = localStorage.getItem("tarefasDia").split(";");

    // Percorre os dados armazenados em localStorage
    dados.forEach((dado) => {
      const h5 = document.createElement("h5"); // Cria o elemento h5
      const texto = document.createTextNode("dado"); // cria um texto
      h5.appendChild(texto); // Define que texto será filho de h5
      dvQuadro.appendChild(h5); // E que h5 será filho de dvQuadro
    });
  }
});
