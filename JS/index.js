function calcularPrecioTotal() {
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let categoria = document.getElementById("Categoias-seleccionadas").value;
  
  let precios = {
    "Estudiante": 0.80,
    "Trainee": 0.50,
    "Junior": 0.15
  };

  let precioTotal = cantidad * precios[categoria];

  // Mostrar el resultado 
  if (cantidad === 0) {
      document.querySelector("#totalPago").textContent = "$0.00";
  } else {
      document.querySelector("#totalPago").textContent = precioTotal.toFixed(2);
  }
  
let totalPago = document.getElementById("totalPago");
totalPago.style.fontSize = "18px";
  // Reiniciar la cantidad a cero
  
}

function borrarCantidad() {
  document.getElementById("cantidad").value = 0;
}