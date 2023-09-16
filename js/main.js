let tipoCambio = {
    USD: {
        EUR: 0.85,
        ARS: 750
    },
    EUR: {
        USD: 1.18,
        ARS: 370
    },
    ARS: {
        USD: 0.0029,
        EUR: 0.0027
    }
};

function convertirMoneda() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const deMoneda = document.getElementById("deMoneda").value;
    const aMoneda = document.getElementById("aMoneda").value;

    if (isNaN(cantidad)) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    if (deMoneda === aMoneda) {
        document.getElementById("resultado").textContent = cantidad + " " + aMoneda;
        return;
    }

    const tasaCambio = tipoCambio[deMoneda][aMoneda];
    if (tasaCambio) {
        const convertido = cantidad * tasaCambio;
        document.getElementById("resultado").textContent = convertido.toFixed(2) + " " + aMoneda;
    } else {
        alert("No se encontró una tasa de cambio para la conversión seleccionada.");
    }
}