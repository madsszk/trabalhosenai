let usuarios = []; 
let demandas = [];

function exibirFormulario(tipo) {
  const formularioDiv = document.getElementById('formulario');
  formularioDiv.innerHTML = '';

  if (tipo === 'usuario') {
    formularioDiv.innerHTML = ` 
      <h2>Cadastrar Usuário</h2>
      <label>Nome: <input type="text" id="nomeUsuario"></label><br>
      <label>Email: <input type="email" id="emailUsuario"></label><br>
      <button onclick="cadastrarUsuario()">Cadastrar Usuário</button>
    `;
  } else if (tipo === 'demanda') {
    formularioDiv.innerHTML = `
      <h2>Cadastrar Demanda</h2>
      <label>Descrição: <input type="text" id="descricaoDemanda"></label><br>
      <label>Responsável: <input type="text" id="responsavelDemanda"></label><br>
      <button onclick="cadastrarDemanda()">Cadastrar Demanda</button>
    `;
  }
}

function cadastrarUsuario() {
  const nome = document.getElementById('nomeUsuario').value;
  const email = document.getElementById('emailUsuario').value;

  const usuario = { nome, email };
  usuarios.push(usuario);
}

function cadastrarDemanda() {
  const descricao = document.getElementById('descricaoDemanda').value;
  const responsavel = document.getElementById('responsavelDemanda').value;

  const demanda = { descricao, responsavel };
  demandas.push(demanda);
}

function exibirDemandas() {
  const formularioDiv = document.getElementById('formulario');
  formularioDiv.innerHTML = '<h2>Demandas Cadastradas</h2>';

  demandas.forEach((demanda, index) => {
    formularioDiv.innerHTML += `
      <div>
        <strong>Demanda ${index + 1}:</strong> ${demanda.descricao}<br>
        <strong>Responsável:</strong> ${demanda.responsavel}<br>
        <button onclick="removerDemanda(${index})">Remover</button>
      </div>
      <hr>
    `;
  });
}

function removerDemanda(index) {
  demandas.splice(index, 1);
  exibirDemandas();
}