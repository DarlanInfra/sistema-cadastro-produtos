
async function statusServidor(){
  const URL = "http://localhost:3000";

  try {
    const response = await fetch(URL, {
      method: "GET",
      mode: 'cors',
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain',
      }
    });

    const resposta = await response.text();
    console.log(resposta);

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

statusServidor();

async function listarClientes(){
  const URL = "http://localhost:3000/clientes";
  try {
    const response = await fetch(URL, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });

    const clientes = await response.json();
    console.log(clientes);
    return clientes;

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

async function buscarClientePorId(id){
  const URL = "http://localhost:3000/cliente?id="+ id;
  try {
    const response = await fetch(URL, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });

    const cliente = await response.json();
    return cliente;

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

const getTableBody = document.querySelector('tbody');
async function createTr() {
  const clientes = await listarClientes();

  //Percorre a lista de clientes e
  //cria as linnhas da tabela
  const tr = clientes.map((cliente) => {
    return `<tr>
        <td>${cliente.id}</td>  
        <td>${cliente.nome}</td>  
        <td>${cliente.email}</td>
        <td>${cliente.anoNacimento}</td>
        <td>
          <button type="button" onclick="editar(${cliente.id})">Editar</button>
          <button type="button" onclick="deletar(${cliente.id})">Excluir</button>
        </td>  
      </tr>`
  }).join('');
  getTableBody.innerHTML = tr;
}

async function editar(id) {
  const cliente = await buscarClientePorId(id);
  console.log(cliente);
};

function deletar(id) {
  alert("Deletar id"+ id);
};

