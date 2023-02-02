let reloj = document.getElementById('#reloj');

let intervaloReloj = setInterval(function() {
  let fecha = new Date();
  let textoReloj = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

  reloj.innerText = textoReloj;
}, 1000);