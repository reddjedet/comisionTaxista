let monto = prompt("Recaudación a ingresar...");

function calcular(monto) {
  if (monto >= 4000) {
    alert(
      ` El chofer se lleva el 35%, o sea $${(monto * 0.35).toFixed(
        2
      )} \n El titular se lleva el 65%, o sea $${(monto * 0.65).toFixed(2)} `
    );
  } else {
    alert(
      ` El chofer se lleva el 30%, o sea $${(monto * 0.3).toFixed(
        2
      )} \n El titular se lleva el 70%, o sea $${(monto * 0.7).toFixed(2)} `
    );
  }
}

calcular(monto);
