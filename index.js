function calcularCuotas() {
    var monto = parseFloat(document.getElementById("monto").value);
    var cuota3 = monto / 3;
    var cuota6 = monto / 6;
    var cuota12 = (monto * 1.20) / 12;
    if (monto === 0) {
        alert("No se puede ingresar 0.");
        return;
    } else {
        var resultadoHTML = "Resultados: ";
        resultadoHTML += "3 cuotas sin interés: $" + cuota3.toFixed(2) + " cada una. ";
        resultadoHTML += "6 cuotas sin interés: $" + cuota6.toFixed(2) + " cada una. ";
        resultadoHTML += "12 cuotas con 20% de interés: $" + cuota12.toFixed(2) + " cada una. ";
        console.log(resultadoHTML);
    }
}