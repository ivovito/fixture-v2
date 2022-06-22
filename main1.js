let PartidosGanados = false;
let PartidosEmpatados = false;
let PartidosPerdidos = false;
let GolesFavor = false;
let GolesEncontra = false;
let DiferenciaGol = false;
let Puntaje = false;
function handleSubmit(event) {
  event.preventDefault();
  let formis = form.querySelector('label');
  let nashe = form.element.querySelector('label')[3];
  console.log(event.target.children[formis]);
  console.log(event.target.children[1].value);
  console.log(event.target.children[2].value);
  console.log(event.target.children[nashe]);
}
