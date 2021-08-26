let nombreAlbum;
let precioAlbum;
let pesoAlbum;
let fotoAlbum;
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
         fotoCarro.src=fotoAlbum;

         let tituloCarrito=document.getElementById("tituloCarrito");
         tituloCarrito.textContent=nombreAlbum;

         let autor=document.getElementById("nombreAutor");
         autor.textContent=`Autor: ${nombreAutor}`;
         autor.classList.remove("invisible");
         autor.classList.add("visible");

         let precioIndividual=document.getElementById("precioUnitarioCarrito");
         precioIndividual.textContent=`$ ${precioAlbum} USD (costo unitario)`;

         let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
         pesoIndividual.textContent=`Peso unitario: ${pesoAlbum} Lb`;

         let pesoTotal=document.getElementById("pesoTotalCarrito");
         pesoTotal.textContent=`Peso total del envío: ${pesoAlbum*cantidad} Lb`;

         let costoCasillero=document.getElementById("costoCasillero");
         costoCasillero.textContent=`Costo casillero $${calcularCostoCasillero(pesoAlbum,cantidad)}USD`;

         let costoImpuestos=document.getElementById("costoImpuestos");
         costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuesto(precioAlbum,cantidad)}`;

         let costoTotal=document.getElementById("costoTotal");
         costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoAlbum,cantidad))+(calcularCostoImpuesto(precioAlbum,cantidad))} USD`;

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

      let albumes={
         nombres:Array("2001","Thriller","Swimming", "Fuerza Natural", "Back In Black","Highway To Hell","Caress Your Soul","Audio Descriptivo","El Armador Del Sol","Favourite Worst Nightmare","Tranquility Base Hotel & Casino"," Black Holes and Revelations","Song Machine","The Getaway","The New Abnormal"),
         precios:Array(150,168,98,102,153,127,68,45,47,86,79,98,84,117,110),
         pesoLibras:Array(1.2,0.9,1.0,0.8,1.1,1.0,1.3,1.0,1.0,0.9,0.7,1.2,1.4),
         fotos:Array("img/drDre.jpg" , "img/mj.jpg" , "img/mm.jpg", "img/gustavo.jpg","img/acdc.jpg","img/acdc2.jpg", "img/sticky.jpg", "img/l7l.jpg","img/l7l2.jpg","img/arc.jpg","img/arc2.jpg","img/muse.jpg","img/machine.jpg","img/rh.jpg","img/strok.jpg"),
         nombreA:Array("DR.DRE","MICHAEL JACKSON", "MAC MILLER", "GUSTAVO CERATI","AC/DC","STICKY FINGERS","LUIS7LUNES","ARCTIC MONKEYS","MUSE","GORILLAZ","RED HOT CHILLI PEPPERS","THE STROKES")

      }

      if (opcion==1){
         
         nombreAlbum=albumes.nombres[0];
         precioAlbum=albumes.precios[0];
         pesoAlbum=albumes.pesoLibras[0];
         fotoAlbum=albumes.fotos[0];
         nombreAutor=albumes.nombreA[0];
      }
      else if(opcion==2){

         nombreAlbum=albumes.nombres[1];
         precioAlbum=albumes.precios[1];
         pesoAlbum=albumes.pesoLibras[1];
         fotoAlbum=albumes.fotos[1];
         nombreAutor=albumes.nombreA[1];
      }
      else if(opcion==3){

         nombreAlbum=albumes.nombres[2];
         precioAlbum=albumes.precios[2];
         pesoAlbum=albumes.pesoLibras[2];
         fotoAlbum=albumes.fotos[2]; 
         nombreAutor=albumes.nombreA[2]; 
      }
      else if(opcion==4){

         nombreAlbum=albumes.nombres[3];
         precioAlbum=albumes.precios[3];
         pesoAlbum=albumes.pesoLibras[3];
         fotoAlbum=albumes.fotos[3];
         nombreAutor=albumes.nombreA[3];  
      }
      else if(opcion==5){

         nombreAlbum=albumes.nombres[4];
         precioAlbum=albumes.precios[4];
         pesoAlbum=albumes.pesoLibras[4];
         fotoAlbum=albumes.fotos[4];
         nombreAutor=albumes.nombreA[4];  
      }
      else if(opcion==6){

         nombreAlbum=albumes.nombres[5];
         precioAlbum=albumes.precios[5];
         pesoAlbum=albumes.pesoLibras[5];
         fotoAlbum=albumes.fotos[5]; 
         nombreAutor=albumes.nombreA[4];  
      }
      else if(opcion==7){

         nombreAlbum=albumes.nombres[6];
         precioAlbum=albumes.precios[6];
         pesoAlbum=albumes.pesoLibras[6];
         fotoAlbum=albumes.fotos[6];
         nombreAutor=albumes.nombreA[5];   
      }
      else if(opcion==8){

         nombreAlbum=albumes.nombres[7];
         precioAlbum=albumes.precios[7];
         pesoAlbum=albumes.pesoLibras[7];
         fotoAlbum=albumes.fotos[7];
         nombreAutor=albumes.nombreA[6];   
      }
      else if(opcion==9){

         nombreAlbum=albumes.nombres[8];
         precioAlbum=albumes.precios[8];
         pesoAlbum=albumes.pesoLibras[8];
         fotoAlbum=albumes.fotos[8];
         nombreAutor=albumes.nombreA[6];   
      }
      else if(opcion==10){

         nombreAlbum=albumes.nombres[9];
         precioAlbum=albumes.precios[9];
         pesoAlbum=albumes.pesoLibras[9];
         fotoAlbum=albumes.fotos[9]; 
         nombreAutor=albumes.nombreA[7];  
      }
      else if(opcion==11){

         nombreAlbum=albumes.nombres[10];
         precioAlbum=albumes.precios[10];
         pesoAlbum=albumes.pesoLibras[10];
         fotoAlbum=albumes.fotos[10]; 
         nombreAutor=albumes.nombreA[7];  
      }
      else if(opcion==12){

         nombreAlbum=albumes.nombres[11];
         precioAlbum=albumes.precios[11];
         pesoAlbum=albumes.pesoLibras[11];
         fotoAlbum=albumes.fotos[11];
         nombreAutor=albumes.nombreA[8];   
      }
      else if(opcion==13){

         nombreAlbum=albumes.nombres[12];
         precioAlbum=albumes.precios[12];
         pesoAlbum=albumes.pesoLibras[12];
         fotoAlbum=albumes.fotos[12];
         nombreAutor=albumes.nombreA[9];   
      }
      else if(opcion==14){

         nombreAlbum=albumes.nombres[13];
         precioAlbum=albumes.precios[13];
         pesoAlbum=albumes.pesoLibras[13];
         fotoAlbum=albumes.fotos[13];
         nombreAutor=albumes.nombreA[10];   
      }
      else if(opcion==15){

         nombreAlbum=albumes.nombres[14];
         precioAlbum=albumes.precios[14];
         pesoAlbum=albumes.pesoLibras[14];
         fotoAlbum=albumes.fotos[14];  
         nombreAutor=albumes.nombreA[11]; 
      }
      else{

         nombreAlbum=null;
         precioAlbum=null;
         pesoAlbum=null; 
         fotoAlbum=null; 
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

   let pildora=document.getElementById("pildora");
   pildora.classList.remove("visible");
   pildora.classList.add("invisible"); 

   let hr1=document.getElementById("linea1");
   hr1.classList.remove("visible");
   hr1.classList.add("invisible");

   let hr2=document.getElementById("linea2");
   hr2.classList.remove("visible");
   hr2.classList.add("invisible");
   
   let btnCop=document.getElementById("btnCop");
   btnCop.classList.remove("visible");
   btnCop.classList.add("invisible");
   let autor=document.getElementById("nombreAutor");
   autor.classList.remove("visible");
   autor.classList.add("invisible");
}

function convertiraPesos(precioDolares){
    
   const TRM=3865; //3932 pesos equivalen a 1 dolar
   let precioPesos= precioDolares*TRM;

   return precioPesos;
}
function conversion(){

   let cantidad=document.getElementById("cantidad").value;

   let precioIndividual=document.getElementById("precioUnitarioCarrito");
   precioIndividual.textContent=`$ ${convertiraPesos(precioAlbum)} COP (costo unitario)`;

   let costoCasillero=document.getElementById("costoCasillero");
   costoCasillero.textContent=`Costo casillero $${convertiraPesos(calcularCostoCasillero(pesoAlbum,cantidad))} COP`;

   let costoImpuestos=document.getElementById("costoImpuestos");
   costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuesto(precioAlbum,cantidad))} COP`;

   let costoTotal=document.getElementById("costoTotal");
   costoTotal.textContent=`Costo Total: $${convertiraPesos(calcularCostoCasillero(pesoAlbum,cantidad))+(calcularCostoImpuesto(precioAlbum,cantidad))} COP`;

}