let PartidosGanados = false;
let PartidosEmpatados = false;
let PartidosPerdidos = false;
let GolesFavor = false;
let GolesEncontra = false;
let DiferenciaGol = false;
let Puntaje = false;
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.children[1].value);
  console.log(event.target.children[2].value);
}
