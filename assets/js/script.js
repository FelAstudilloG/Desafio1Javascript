const button = document.querySelector('button');

const setFinal = () => {
  const precio= 850000;
  let colorseleccionado = document.querySelector('#color').value;
  let cantidaddeconsolas = document.querySelector('#cantidad').value;
  let total = cantidaddeconsolas * precio;  
 
  
  if (isNaN(total)) {
    alert("Datos invalidos, favor reintente");   
  } else {
    document.querySelector('#preciofinal').textContent = total;
    document.querySelector('#cantidadfinal').textContent = cantidaddeconsolas;
  }
  document.querySelector('.circulo').style.backgroundColor = colorseleccionado;
  if (colorseleccionado) {
    document.querySelector('.circulo').style.border = "2px solid black";
  }
};

button.addEventListener("click", setFinal);