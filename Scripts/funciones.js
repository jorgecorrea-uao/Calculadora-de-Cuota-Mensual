/*
*  archivo funciones.js
* función calcularCuota para la calculadora de cuotas mensuales
*  Fórmula: cuota = prestamo * (((1+i)^n * i) / ((1+i)^n - 1))
*/

// Arreglo para almacenar los préstamos
let prestamos = [];


/**
 * Calcula y retorna solo el valor de la cuota mensual
 * @param {number} prestamo - Monto del préstamo
 * @param {number} n - Número de meses
 * @param {number} i - Tasa de interés
 * @returns {number} El valor de la cuota mensual
 */

function calcularCuotaValor(prestamo, n, i) {
    if (i === 0) {
        return prestamo / n;
    } else {
        const potencia = Math.pow(1 + i, n);
        return prestamo * ((potencia * i) / (potencia - 1));
    }
}
/**
 * Calcula la cuota mensual de un préstamo
 * @param {string} nombre - Nombre de la persona
 * @param {number} prestamo - Monto del préstamo
 * @param {number} n - Número de meses
 * @param {number} i - Tasa de interés
 * @returns {string} Mensaje con el resultado formateado
 */

function calcularCuota(nombre, prestamo, n, i){
    const cuotaMensual = calcularCuotaValor(prestamo, n, i);
    const porcentajeInteres = (i * 100).toFixed(2);
    return `${nombre} debe pagar $ ${cuotaMensual.toFixed(2)} cada mes por el préstamo de $ ${prestamo} a ${n} meses con el interés del ${porcentajeInteres}%`;
}

/**
 * Agrega un préstamo al arreglo y retorna el mensaje de la cuota
 * @param {string} nombre - Nombre de la persona
 * @param {number} monto - Monto del préstamo
 * @param {number} meses - Número de meses
 * @param {number} interes - Tasa de interés
 * @returns {string} Mensaje con el resultado formateado
 */
function agregarPrestamo(nombre, monto, meses, interes) {
    const cuota = calcularCuotaValor(monto, meses, interes);
    
    const prestamoObj = {
        nombre: nombre,
        prestamo: monto,
        meses: meses,
        interes: interes,
        cuota: cuota
    };
    
    prestamos.push(prestamoObj);
    
    const porcentajeInteres = (interes * 100).toFixed(2);
    return `${nombre} debe pagar $ ${cuota.toFixed(2)} cada mes por el préstamo de $ ${monto} a ${meses} meses con el interés del ${porcentajeInteres}%`;
}



/**
 * Calcula la sumatoria de todas las cuotas mensuales usando map y reduce
 * @returns {string} // Mensaje con la sumatoria formateada
 */
function sumarCuotas() {
    if (prestamos.length === 0) {
        return 'No hay préstamos registrados para sumar';
    }
    
    const sumatoria = prestamos
        .map(p => p.cuota)
        .reduce((total, cuota) => total + cuota, 0);
    
    return `SUMATORIA DE CUOTAS MENSUALES:\n\nTotal: $${sumatoria.toFixed(2)}`;
}

/**
 * Filtra y retorna los préstamos cuya cuota es mayor a 300000 
 * @returns {array} Arreglo de préstamos con cuota > 300000
 */
function filtrarCuotaAlta() {
    return prestamos.filter(p => p.cuota > 300000);
}

/**
 * Filtra y retorna los préstamos que se pagan en menos de un año 
 * @returns {array} Arreglo de préstamos con meses < 12
 */
function filtrarMenosDeUnAno() {
    return prestamos.filter(p => p.meses < 12);
}

/**
 * Encuentra el primer préstamo cuyo monto es superior a $5000000 usando find
 * @returns {object|undefined} El primer préstamo encontrado 
 */
function encontrarPrestamoMasAlto() {
    return prestamos.find(p => p.prestamo > 5000000);
}

/**
 * Encuentra el primer préstamo cuyo interés es inferior a 2% usando find
 * @returns {object|undefined} El primer préstamo encontrado 
 */
function encontrarPrestamoInteresBajo() {
    return prestamos.find(p => p.interes < 0.02);
}



export {calcularCuota, agregarPrestamo, prestamos, sumarCuotas, filtrarCuotaAlta, filtrarMenosDeUnAno, encontrarPrestamoMasAlto, encontrarPrestamoInteresBajo};
