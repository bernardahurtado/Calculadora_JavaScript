var operaciona;
var operacionb;
var operacion;

function init() {
    //Variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var potencia = document.getElementById("potencia");
    var raizCuadrada = document.getElementById("raizCuadrada");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var punto = document.getElementById("punto");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }      
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }      
    reset.onclick = function(e){
        resetear();
    }
    potencia.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "^";
        limpiar();
    }
    raizCuadrada.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "√";
        limpiar();
    }
    suma.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operaciona = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionb = resultado.textContent;       
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";    
}

function resetear() {
    resultado.textContent = "";
    operaciona = 0;
    operacionb = 0;
    operacion = "";    
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "^":
            res = Math.pow(parseFloat(operaciona),parseFloat(operacionb));
            break;
        case "√":
            res = Math.sqrt(parseFloat(operaciona));
            break;
        case "+":
            res = parseFloat(operaciona) + parseFloat(operacionb);
            break;
        case "-":
            res = parseFloat(operaciona) - parseFloat(operacionb);
            break;
        case "*":
            res = parseFloat(operaciona) * parseFloat(operacionb);
            break;
        case "/":
            res = parseFloat(operaciona) / parseFloat(operacionb);
            break;      
    }
    resetear();
    resultado.textContent = res;
}