let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;
let fotoCarro;

   /* Para colocar una alerta en la pantalla y poder ingresar datos también

   var nombre;

   nombre=prompt("Ingresa tu nombre")
   edad=prompt("ingresa tu edad")

   document.write("Tu, " + nombre + " tienes " + edad)*/


 //CONTROLAR LA ACTIVIDAD DEL FORMULARIO
 // 1. Controlar con JS el boton del formulario  
    let boton=document.getElementById("btnCalcular");
    let botonLimpiar=document.getElementById("botonLimpiar");
    let botonCop=document.getElementById("btnCop")

 // 2. Detectar el clic en el botón
   boton.addEventListener("click",capturarDatos);  //callBack
   botonLimpiar.addEventListener("click",limpiarCarrito);
   botonCop.addEventListener("click", conversion)

 // 3. Crear función PROPIA que se llamó en el punto 2
 
function capturarDatos(){

         // 4. Capturar los valores del formulario

         let consolaElegida=document.getElementById("producto").value;
         seleccionarConsola(consolaElegida);

         let cantidad=document.getElementById("cantidad").value;
         
         let comentario=document.getElementById("comentarios").value;

         let fotoCarro=document.getElementById("fotoCarrito");
         fotoCarro.src=fotoConsola;

         let tituloCarrito=document.getElementById("tituloCarrito");
         tituloCarrito.textContent=nombreConsola;

         let precioIndividual=document.getElementById("precioUnitarioCarrito");
         precioIndividual.textContent=`$ ${precioConsola} USD (costo unitario)`;

         let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
         pesoIndividual.textContent=`Peso unitario: ${pesoConsola} Lb`;

         let pesoTotal=document.getElementById("pesoTotalCarrito");
         pesoTotal.textContent=`Peso total del envío: ${pesoConsola*cantidad} Lb`;

         let costoCasillero=document.getElementById("costoCasillero");
         costoCasillero.textContent=`Costo casillero $${calcularCostoCasillero(pesoConsola,cantidad)}USD`;

         let costoImpuestos=document.getElementById("costoImpuestos");
         costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuesto(precioConsola,cantidad)}`;

         let costoTotal=document.getElementById("costoTotal");
         costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuesto(precioConsola,cantidad))} USD`;

         let cantidadProducto=document.getElementById("cantidadModal");
         cantidadProducto.textContent=`Cantidad: ${cantidad}`;

         let pildora=document.getElementById("pildora");
         pildora.textContent=cantidad;
         pildora.classList.remove("invisible");
         pildora.classList.add("visible"); 

         let hr1=document.getElementById("linea1");
         hr1.classList.remove("invisible");
         hr1.classList.add("visible");

         let hr2=document.getElementById("linea2");
         hr2.classList.remove("invisible");
         hr2.classList.add("visible");

         let btnCop=document.getElementById("btnCop");
         btnCop.classList.remove("invisible");
         btnCop.classList.add("visible");
         
         
}

 // 5. Seleccionar la información de la consola según la selección del usuario
 
 function seleccionarConsola(opcion){

      let consolas={
         nombres:Array("PS5","XBOX SERIE X","NINTENDO SWITCH", "TV SAMSUNG"),
         precios:Array(750,700,409,650),
         pesoLibras:Array(14.2,13.1,4.75, 16,5),
         fotos:Array("img/ps5.jpg" , "img/xbox.jpg" , "img/nintendo.png", "img/tv.png")
      }

      if (opcion==1){
         
         nombreConsola=consolas.nombres[0];
         precioConsola=consolas.precios[0];
         pesoConsola=consolas.pesoLibras[0];
         fotoConsola=consolas.fotos[0];
      }
      else if(opcion==2){

         nombreConsola=consolas.nombres[1];
         precioConsola=consolas.precios[1];
         pesoConsola=consolas.pesoLibras[1];
         fotoConsola=consolas.fotos[1];
      }
      else if(opcion==3){

         nombreConsola=consolas.nombres[2];
         precioConsola=consolas.precios[2];
         pesoConsola=consolas.pesoLibras[2];
         fotoConsola=consolas.fotos[2];  
      }
      else if(opcion==4){

         nombreConsola=consolas.nombres[3];
         precioConsola=consolas.precios[3];
         pesoConsola=consolas.pesoLibras[3];
         fotoConsola=consolas.fotos[3];  
      }
      else{

         nombreConsola=null;
         precioConsola=null;
         pesoConsola=null; 
         fotoConsola=null; 
      }
 }

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

function calcularCostoImpuesto(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoImpuestoEnvio=IMPUESTO_PAIS+ VALOR_SEGURO; 
    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra + costoImpuestoEnvio;
    return costoTotal;
}

function limpiarCarrito(){

   let fotoCarro=document.getElementById("fotoCarrito");
   fotoCarro.src="img/fotoCarrito.png";

   let tituloCarrito=document.getElementById("tituloCarrito");
   tituloCarrito.textContent="Tu carrito de Amazon está vacío";

   let precioIndividual=document.getElementById("precioUnitarioCarrito");
   precioIndividual.textContent="";

   let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
   pesoIndividual.textContent="";

   let pesoTotal=document.getElementById("pesoTotalCarrito");
   pesoTotal.textContent="";

   let costoCasillero=document.getElementById("costoCasillero");
   costoCasillero.textContent="";

   let costoImpuestos=document.getElementById("costoImpuestos");
   costoImpuestos.textContent="";

   let costoTotal=document.getElementById("costoTotal");
   costoTotal.textContent="";

   let cantidadProducto=document.getElementById("cantidadModal");
   cantidadProducto.textContent="";

   let hr1=document.getElementById("linea1");
   hr1.classList.remove("visible");
   hr1.classList.add("invisible");

   let hr2=document.getElementById("linea2");
   hr2.classList.remove("visible");
   hr2.classList.add("invisible");
   
   let btnCop=document.getElementById("btnCop");
   btnCop.classList.remove("visible");
   btnCop.classList.add("invisible");
}

function convertiraPesos(precioDolares){
    
   const TRM=3932; //3932 pesos equivalen a 1 dolar
   let precioPesos= precioDolares*TRM;

   return precioPesos;
}
function conversion(){

   let cantidad=document.getElementById("cantidad").value;

   let precioIndividual=document.getElementById("precioUnitarioCarrito");
   precioIndividual.textContent=`$ ${convertiraPesos(precioConsola)} COP (costo unitario)`;

   let costoCasillero=document.getElementById("costoCasillero");
   costoCasillero.textContent=`Costo casillero $${convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))} COP`;

   let costoImpuestos=document.getElementById("costoImpuestos");
   costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuesto(precioConsola,cantidad))} COP`;

   let costoTotal=document.getElementById("costoTotal");
   costoTotal.textContent=`Costo Total: $${convertiraPesos(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuesto(precioConsola,cantidad))} COP`;

}