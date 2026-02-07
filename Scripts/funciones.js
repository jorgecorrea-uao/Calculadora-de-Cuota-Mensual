/*
*  archivo funciones.js
* función calcularCuota para la calculadora de cuotas mensuales
*  Fórmula: cuota = prestamo * (((1+i)^n * i) / ((1+i)^n - 1))
*/

/**
 * Calcula la cuota mensual de un préstamo
 * @param {string} nombre - Nombre de la persona
 * @param {number} prestamo - Monto del préstamo
 * @param {number} n - Número de meses
 * @param {number} i - Tasa de interés (Ej: 0.15 para 15%)
 * @returns {string} Mensaje con el resultado formateado
 */

function calcularCuota(nombre, prestamo, n, i){
    let cuotaMensual;
    
    if (i === 0) {
        cuotaMensual = prestamo / n;
    } else {
        const potencia = Math.pow(1 + i, n);
        cuotaMensual = prestamo * ((potencia * i) / (potencia - 1));
    }
    
    const porcentajeInteres = (i * 100).toFixed(2);
    
    return `${nombre} debe pagar $ ${cuotaMensual.toFixed(2)} cada mes por el préstamo de $ ${prestamo} a ${n} meses con el interés del ${porcentajeInteres}%`;
}

export {calcularCuota};