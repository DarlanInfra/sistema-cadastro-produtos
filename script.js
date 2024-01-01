
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

function editar(id) {
  alert("Editar", id);
};

function deletar(id) {
  alert("Deletar", id);
};

const getTableBody = document.querySelector('tbody');
async function createTr() {
  const clientes = await listarClientes();
  console.log("foi", clientes);  

  const tr = clientes.map((cliente) => {
    return `<tr>
        <td>${cliente.id}</td>  
        <td>${cliente.nome}</td>  
        <td>${cliente.email}</td>
        <td>${cliente.anoNacimento}</td>
        <td>
          <i class="bi bi-pencil-square" onclick="editar(${cliente.id})"></i>
          <i class="bi bi-trash" onclick="deletar(${cliente.id})"></i>
        </td>  
      </tr>`
  }).join('');
  getTableBody.innerHTML = tr;
}

