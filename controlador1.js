let nombreConsola;
let precioConsola;
let pesoConsola;

   /* Para colocar una alerta en la pantalla y poder ingresar datos también

   var nombre;

   nombre=prompt("Ingresa tu nombre")
   edad=prompt("ingresa tu edad")

   document.write("Tu, " + nombre + " tienes " + edad)*/


 //CONTROLAR LA ACTIVIDAD DEL FORMULARIO
 // 1. Controlar con JS el boton del formulario  
    let boton=document.getElementById("btnCalcular");
    console.log(boton);

 // 2. Detectar el clic en el botón
   boton.addEventListener("click",capturarDatos);  //callBack

 // 3. Crear función PROPIA que se llamó en el punto 2
 
   function capturarDatos(){

         // 4. Capturar los valores del formulario

         let consolaElegida=document.getElementById("producto").value;
         seleccionarConsola(consolaElegida);

         let cantidad=document.getElementById("cantidad").value;

         let pildora=document.getElementById("pildora");
         pildora.textContent=cantidad;
         
         let comentarios=document.getElementById("comentarios").value;
         console.log(comentarios);

   }

 // 5. Seleccionar la información de la consola según la selección del usuario
 
 function seleccionarConsola(opcion){

      let consolas={
         nombres:Array("PS5","XBOX SERIE X","NINTENDO SWITCH"),
         precios:Array(750,700,409),
         pesoLibras:Array(14.2,13.1,4.75)
      }

      if (opcion==1){
         
         nombreConsola=consolas.nombres[0];
         precioConsola=consolas.precios[0];
         pesoConsola=consolas.pesoLibras[0];
      }
      else if(opcion==2){

         nombreConsola=consolas.nombres[1];
         precioConsola=consolas.precios[1];
         pesoConsola=consolas.pesoLibras[1]
      }
      else if(opcion==3){

         nombreConsola=consolas.nombres[2];
         precioConsola=consolas.precios[2];
         pesoConsola=consolas.pesoLibras[2];  
      }
      else{

         nombreConsola=null;
         precioConsola=null;
         pesoConsola=null;  
      }
 }
   