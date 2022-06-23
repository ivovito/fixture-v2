function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;

  let ganoLocal = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal == golesVisitante) empate = true;




  console.log(event.target.children[1].value);
  console.log(event.target.children[2].value);

  let tds = document.querySelectorAll('td');
  console.log(tds);
  for (let td of tds) {

    if (td.textContent.includes(local)) {
      if (ganoLocal) {
      console.log(td.parentElement.children[2].textContent)
        td.parentElement.children[2].textContent = +td.parentElement.children[2].textContent +1;
      }else if (empate) {

      }
        td.parentElement.children[4].textContent = +td.parentElement.children[4].textContent + 1;
        }

    }

if (td.textContent.includes(visitante)) {
  if (ganoLocal) {
    td.parentElement.children[4].textContent = +td.parentElement.children[4].textContent + 1;
  }else if (empate) {

  }else {
    td.parentElement.children[2].textContent = +td.parentElement.children[2].textContent + 1;
  }
}

    if (td.textContent.includes(local)|| td.textContent.includes (visitante)){
    console.log(td.parentElement);
                                              //partidosGanados

    if (empate) {
      console.log(td.parentElement.children[3].textContent);
      td.parentElement.children[3].textContent =
      +td.parentElement.children[3].textContent + 1 ;
    }
    if (empate) {
      td.parentElement.children[8].textContent = +td.parentElement.children[8].textContent + 1;
    }
    }
  }
