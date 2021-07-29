//1.Almaceno la información general de los productos

let consolas={
    nombres:Array("PS5","XBOX SERIE X","NINTENDO SWITCH"),
    precios:Array(750,700,409),
    pesoLibras:Array(14.2,13.1,4.75)
}

//2.Calcular el costo del casillero

function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;
        
    if(pesoTotalEnvio<=20 ){

        costoCasillero=85;
    }
    else{ 
       
       let pesoExtra= pesoTotalEnvio-20;
       costoCasillero= 85 + (pesoExtra*2);
    }

    return costoCasillero;
}

//3.Calcular impuestos+envio

function calcularCostoImpuesto(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoImpuestoEnvio=IMPUESTO_PAIS+ VALOR_SEGURO; 
    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra + costoImpuestoEnvio;
    return costoTotal;
}

//4. Calcular costo en pesos

function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}

//FLUJO DE COMPRA

//1. Obtener el costo del casillero de una compra

let pesoPS5=consolas.pesoLibras[0];
let cantidad=1;

let costoCasillero=calcularCostoCasillero(pesoPS5,cantidad);
console.log(costoCasillero);

//2. Obtener el costo del producto más impuestos

let precioPS5=consolas.precios[0];
let costoProductoImpuestos=calcularCostoImpuesto(precioPS5, cantidad);
console.log(costoProductoImpuestos);

//3. Obtener el total de la compra

let totalCompra=costoProductoImpuestos+costoCasillero;
console.log(`El costo total de la compra fue de: $${totalCompra} USD`);

//4. Obtener el total de la compra total en pesos colombianos

let totalEnPesos=convertiraPesos(totalCompra);
console.log(`El costo total de la compra fue de: ${totalEnPesos} COP`);