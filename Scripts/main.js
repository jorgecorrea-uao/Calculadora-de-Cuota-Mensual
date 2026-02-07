/*
*  archivo main.js
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica
*
*  Calculadora de Cuota Mensual
*/

import {calcularCuota} from './funciones.js';

const btnEjecutar = document.getElementById("ejecutar");
const btnRecordar = document.getElementById("recordar");

btnEjecutar.addEventListener('click', ingresarPersona)
btnRecordar.addEventListener('click', limpiarFormulario)

let tARespuesta = document.getElementById("laRespuesta");

function ingresarPersona(){
    let nombre = document.getElementById("elNombre").value;   
    let monto = parseFloat(document.getElementById("elMonto").value);
    let nMeses = parseInt(document.getElementById("elNMeses").value);
    let interes = parseFloat(document.getElementById("elInteres").value);
    let res

    if (nombre.length==0 || isNaN(monto) || isNaN(nMeses) || isNaN(interes)){
        res = 'El nombre, monto, meses o interés no fueron ingresados o tienen valores errados'
        
        document.getElementById("error").innerHTML = res;
        console.log(res);

    }else{
        document.getElementById("error").innerHTML = "";
        res = calcularCuota(nombre, monto, nMeses, interes)
        tARespuesta.textContent = res   
    }
}

function limpiarFormulario(){
    document.getElementById("elNombre").value = '';
    document.getElementById("elMonto").value = '';
    document.getElementById("elNMeses").value = '';
    document.getElementById("elInteres").value = '';
    document.getElementById("error").innerHTML = "";
    tARespuesta.textContent = 'Salida---';
}