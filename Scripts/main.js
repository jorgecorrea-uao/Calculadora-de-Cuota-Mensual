/*
*  archivo main.js
*
*  Descripción: 
*  Permite manipular los elementos de la pagina web y hacerla dinámica
*
*  Calculadora de Cuota Mensual
*/

import {calcularCuota, agregarPrestamo, prestamos, sumarCuotas, filtrarCuotaAlta, filtrarMenosDeUnAno, encontrarPrestamoMasAlto, encontrarPrestamoInteresBajo} from './funciones.js';

// Selectores de elementos del DOM
const btnEjecutar = document.getElementById("ejecutar");
const btnRecordar = document.getElementById("recordar");
const btnDesplegar = document.getElementById("desplegar");
const btnFiltrar = document.getElementById("filtrar");
const btnMenosAno = document.getElementById("menosAno");
const btnEncontrar = document.getElementById("encontrar");
const btnInteresBajo = document.getElementById("interesBajo");
let tARespuesta = document.getElementById("laRespuesta");
const btnSumar = document.getElementById("sumar");


// Helpers para formatear préstamos (evita duplicidad)
function formatPrestamoLine(p, index) {
    return `${index + 1}. ${p.nombre}\n` +
           `   Préstamo: $${p.prestamo}\n` +
           `   Meses: ${p.meses}\n` +
           `   Interés: ${(p.interes * 100).toFixed(2)}%\n` +
           `   Cuota Mensual: $${p.cuota.toFixed(2)}\n\n`;
}

// Formatea los detalles de un préstamo para mostrarlo en la salida
function formatPrestamoDetails(p) {
    return `Nombre: ${p.nombre}\n` +
           `Préstamo: $${p.prestamo}\n` +
           `Meses: ${p.meses}\n` +
           `Interés: ${(p.interes * 100).toFixed(2)}%\n` +
           `Cuota Mensual: $${p.cuota.toFixed(2)}`;
}


// Funciones para manejar eventos de botones
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
        res = agregarPrestamo(nombre, monto, nMeses, interes)
        tARespuesta.textContent = res   
        }
}

<<<<<<< HEAD
=======
// Limpia los campos del formulario y el área de respuesta
>>>>>>> 6f38a86 (Tercer commit: nuevas funciones y botones de reportes.)
function limpiarFormulario(){
    document.getElementById("elNombre").value = '';
    document.getElementById("elMonto").value = '';
    document.getElementById("elNMeses").value = '';
    document.getElementById("elInteres").value = '';
    document.getElementById("error").innerHTML = "";
    tARespuesta.textContent = 'Salida---';
}

// Funciones para desplegar información en el área de respuesta
function desplegarPrestamos(){
    if (prestamos.length === 0) {
        tARespuesta.textContent = 'No hay préstamos registrados';
        return;
    }
    
    let resultado = 'PRÉSTAMOS REGISTRADOS:\n\n';
    prestamos.forEach((p, index) => {
        resultado += formatPrestamoLine(p, index);
    });
    
    tARespuesta.textContent = resultado;
}

// Despliega los préstamos con cuota mayor a $300000
function desplegarCuotasAltas(){
    const filtrados = filtrarCuotaAlta();
    
    if (filtrados.length === 0) {
        tARespuesta.textContent = 'No hay préstamos con cuota mayor a $300000';
        return;
    }
    
    let resultado = 'PRÉSTAMOS CON CUOTA > $300000:\n\n';
    filtrados.forEach((p, index) => {
        resultado += formatPrestamoLine(p, index);
    });
    
    tARespuesta.textContent = resultado;
}

// Despliega los préstamos que se pagan en menos de un año
function desplegarMenosDeUnAno(){
    const filtrados = filtrarMenosDeUnAno();
    
    if (filtrados.length === 0) {
        tARespuesta.textContent = 'No hay préstamos que se paguen en menos de un año';
        return;
    }
    
    let resultado = 'PRÉSTAMOS A PAGAR EN MENOS DE 1 AÑO:\n\n';
    filtrados.forEach((p, index) => {
        resultado += formatPrestamoLine(p, index);
    });
    
    tARespuesta.textContent = resultado;
}

// Despliega el primer préstamo con monto superior a $5000000
function desplegarPrestamoMasAlto(){
    const encontrado = encontrarPrestamoMasAlto();
    
    if (encontrado === undefined) {
        tARespuesta.textContent = 'No hay préstamos superiores a $5000000';
        return;
    }
    
    let resultado = 'PRIMER PRÉSTAMO > $5000000:\n\n';
    resultado += formatPrestamoDetails(encontrado);
    
    tARespuesta.textContent = resultado;
}

// Despliega el primer préstamo con interés inferior a 2%
function desplegarPrestamoInteresBajo(){
    const encontrado = encontrarPrestamoInteresBajo();
    
    if (encontrado === undefined) {
        tARespuesta.textContent = 'No hay préstamos con interés inferior a 2%';
        return;
    }
    
    let resultado = 'PRIMER PRÉSTAMO CON INTERÉS < 2%:\n\n';
    resultado += formatPrestamoDetails(encontrado);
    
    tARespuesta.textContent = resultado;
}

// Event listeners para botones
btnEjecutar.addEventListener('click', ingresarPersona);
btnRecordar.addEventListener('click', limpiarFormulario);
btnDesplegar.addEventListener('click', desplegarPrestamos);
btnFiltrar.addEventListener('click', desplegarCuotasAltas);
btnMenosAno.addEventListener('click', desplegarMenosDeUnAno);
btnEncontrar.addEventListener('click', desplegarPrestamoMasAlto);
btnInteresBajo.addEventListener('click', desplegarPrestamoInteresBajo);
btnSumar.addEventListener('click', () => {
    const resultado = sumarCuotas();
    tARespuesta.textContent = resultado; 
});
