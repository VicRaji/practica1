let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;
let fotoCarro;
let nombreAutor;

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

         let autor=document.getElementById("nombreAutor");
         autor.textContent=`Autor: ${nombreAutor}`;

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
         nombres:Array("2001","Thriller","Swimming", "Fuerza Natural", "Back In Black","Highway To Hell","Caress Your Soul","Audio Descriptivo","El Armador Del Sol","Favourite Worst Nightmare","Tranquility Base Hotel & Casino"," Black Holes and Revelations","The College Dropout","GO:OD AM","The Life Of Pablo"),
         precios:Array(150,168,98,102,153,127,68,45,47,86,79,98,130,104,120),
         pesoLibras:Array(1.2,0.9,1.0,0.8,1.1,1.0,1.3,1.0,1.0,0.9,0.7,1.2,0.8,0.7,0.7),
         fotos:Array("img/drDre.jpg" , "img/mj.jpg" , "img/mm.jpg", "img/gustavo.jpg","img/acdc.jpg","img/acdc2.jpg", "img/sticky.jpg", "img/l7l.jpg","img/l7l2.jpg","img/arc.jpg","img/arc2.jpg","img/muse.jpg","img/west.jpg","img/mm2.jpg","img/west2.jpg"),
         nombreA:Array("DR.DRE","MICHAEL JACKSON", "MAC MILLER", "GUSTAVO CERATI","AC/DC","STICKY FINGERS","LUIS7LUNES","ARCTIC MONKEYS","MUSE",)

      }

      if (opcion==1){
         
         nombreConsola=consolas.nombres[0];
         precioConsola=consolas.precios[0];
         pesoConsola=consolas.pesoLibras[0];
         fotoConsola=consolas.fotos[0];
         nombreAutor=consolas.nombreA[0];
      }
      else if(opcion==2){

         nombreConsola=consolas.nombres[1];
         precioConsola=consolas.precios[1];
         pesoConsola=consolas.pesoLibras[1];
         fotoConsola=consolas.fotos[1];
         nombreAutor=consolas.nombreA[1];
      }
      else if(opcion==3){

         nombreConsola=consolas.nombres[2];
         precioConsola=consolas.precios[2];
         pesoConsola=consolas.pesoLibras[2];
         fotoConsola=consolas.fotos[2]; 
         nombreAutor=consolas.nombreA[2]; 
      }
      else if(opcion==4){

         nombreConsola=consolas.nombres[3];
         precioConsola=consolas.precios[3];
         pesoConsola=consolas.pesoLibras[3];
         fotoConsola=consolas.fotos[3];
         nombreAutor=consolas.nombreA[3];  
      }
      else if(opcion==5){

         nombreConsola=consolas.nombres[4];
         precioConsola=consolas.precios[4];
         pesoConsola=consolas.pesoLibras[4];
         fotoConsola=consolas.fotos[4];
         nombreAutor=consolas.nombreA[4];  
      }
      else if(opcion==6){

         nombreConsola=consolas.nombres[5];
         precioConsola=consolas.precios[5];
         pesoConsola=consolas.pesoLibras[5];
         fotoConsola=consolas.fotos[5]; 
         nombreAutor=consolas.nombreA[4];  
      }
      else if(opcion==7){

         nombreConsola=consolas.nombres[6];
         precioConsola=consolas.precios[6];
         pesoConsola=consolas.pesoLibras[6];
         fotoConsola=consolas.fotos[6];
         nombreAutor=consolas.nombreA[5];   
      }
      else if(opcion==8){

         nombreConsola=consolas.nombres[7];
         precioConsola=consolas.precios[7];
         pesoConsola=consolas.pesoLibras[7];
         fotoConsola=consolas.fotos[7];
         nombreAutor=consolas.nombreA[6];   
      }
      else if(opcion==9){

         nombreConsola=consolas.nombres[8];
         precioConsola=consolas.precios[8];
         pesoConsola=consolas.pesoLibras[8];
         fotoConsola=consolas.fotos[8];
         nombreAutor=consolas.nombreA[6];   
      }
      else if(opcion==10){

         nombreConsola=consolas.nombres[9];
         precioConsola=consolas.precios[9];
         pesoConsola=consolas.pesoLibras[9];
         fotoConsola=consolas.fotos[9]; 
         nombreAutor=consolas.nombreA[7];  
      }
      else if(opcion==11){

         nombreConsola=consolas.nombres[10];
         precioConsola=consolas.precios[10];
         pesoConsola=consolas.pesoLibras[10];
         fotoConsola=consolas.fotos[10]; 
         nombreAutor=consolas.nombreA[7];  
      }
      else if(opcion==12){

         nombreConsola=consolas.nombres[11];
         precioConsola=consolas.precios[11];
         pesoConsola=consolas.pesoLibras[11];
         fotoConsola=consolas.fotos[11];
         nombreAutor=consolas.nombreA[8];   
      }
      else if(opcion==13){

         nombreConsola=consolas.nombres[12];
         precioConsola=consolas.precios[12];
         pesoConsola=consolas.pesoLibras[12];
         fotoConsola=consolas.fotos[12];
         nombreAutor=consolas.nombreA[12];   
      }
      else if(opcion==14){

         nombreConsola=consolas.nombres[13];
         precioConsola=consolas.precios[13];
         pesoConsola=consolas.pesoLibras[13];
         fotoConsola=consolas.fotos[13];
         nombreAutor=consolas.nombreA[13];   
      }
      else if(opcion==15){

         nombreConsola=consolas.nombres[14];
         precioConsola=consolas.precios[14];
         pesoConsola=consolas.pesoLibras[14];
         fotoConsola=consolas.fotos[14];  
         nombreAutor=consolas.nombreA[14]; 
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