let numeroAleatorio;
let intentos;
const intentosTotales = 7;
const input = document.getElementById("numeroIngresado");
const adivinarButton = document.getElementById("adivinarButton");
const pista = document.getElementById("pista");
const intentosRestantes = document.getElementById("intentosRestantes");
const reiniciarButton = document.getElementById("reiniciarButton");

function juego() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  intentos = intentosTotales;
  pista.textContent = "";
  adivinarButton.disabled = false;
  intentosRestantes.textContent = `Te quedan ${intentos} intentos`;
}

adivinarButton.addEventListener("click", () => {
  const numeroIngresado = Number(input.value);
  if (numeroIngresado < 1 || numeroIngresado > 100) {
    pista.textContent = "Numero invalido";
    return;
  }
  intentos--;

  if (numeroIngresado === numeroAleatorio) {
    pista.textContent = `Adivinaste el numero ${numeroAleatorio}!`;
    adivinarButton.disabled = true;

  } else if (intentos > 0) {
    pista.textContent = numeroIngresado < numeroAleatorio ? "El numero es mayor" : "El numero es menor";
    intentosRestantes.textContent = `Te quedan ${intentos} intentos`;

  } else {
    pista.textContent = `El numero era ${numeroAleatorio}`;
    intentosRestantes.textContent = "No te quedan mas intentos";
    adivinarButton.disabled = true;

  }
});
reiniciarButton.addEventListener("click", juego);
juego();
