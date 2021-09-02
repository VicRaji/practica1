let pedidos=[
    {

        id:1,
        nombre:"2001",
        peso:1.2,
        precio:150+ "USD",
        cantidad:2,
        fotos:"img/drDre.jpg"

    },
    {

        id:2,
        nombre:"Back in Black",
        peso:2,
        precio:168+ "USD",
        cantidad:2,
        fotos:"img/acdc.jpg"

    },
    {

        id:3,
        nombre:"Highway To Hell",
        peso:2,
        precio:98+ "USD",
        cantidad:2,
        fotos:"img/acdc2.jpg"

    },
    {

        id:4,
        nombre:"Favourite Worst Nightmare",
        peso:2,
        precio:102+ "USD",
        cantidad:2,
        fotos:"img/arc.jpg"

    },
    {

        id:5,
        nombre:"Tranquility Base Hotel & Casino",
        peso:2,
        precio:102+ "USD",
        cantidad:2,
        fotos:"img/arc2.jpg"

    },
    {

        id:6,
        nombre:"Fuerza Natural",
        peso:2,
        precio:127+ "USD",
        cantidad:2,
        fotos:"img/gustavo.jpg"

    },
    {

        id:7,
        nombre:"Audio Descriptivo",
        peso:2,
        precio:68+ "USD",
        cantidad:2,
        fotos:"img/l7l.jpg"

    },
    {

        id:8,
        nombre:"El Armador Del Sol",
        peso:2,
        precio:45+ "USD",
        cantidad:2,
        fotos:"img/l7l2.jpg"

    },
    {

        id:9,
        nombre:"Thriller",
        peso:2,
        precio:47+ "USD",
        cantidad:2,
        fotos:"img/mj.jpg"

    },
    {

        id:10,
        nombre:"Swimming",
        peso:2,
        precio:86+ "USD",
        cantidad:2,
        fotos:"img/mm.jpg"

    },
    {

        id:11,
        nombre:" Black Holes and Revelations",
        peso:2,
        precio:79+ "USD",
        cantidad:2,
        fotos:"img/muse.jpg"

    },
    {

        id:12,
        nombre:"Caress Your Soul",
        peso:2,
        precio:98+ "USD",
        cantidad:2,
        fotos:"img/sticky.jpg"

    },
    {

        id:13,
        nombre:"The College Dropout",
        peso:2,
        precio:130+ "USD",
        cantidad:2,
        fotos:"img/west.jpg"

    },
    {

        id:14,
        nombre:"GO:OD AM",
        peso:2,
        precio:104+ "USD",
        cantidad:2,
        fotos:"img/mm2.jpg"

    },
    {

        id:15,
        nombre:"The Life Of Pablo",
        peso:2,
        precio:120+ "USD",
        cantidad:2,
        fotos:"img/west2.jpg"

    }

];





let contenedorPadre=document.getElementById("padre");
pedidos.forEach(function(pedido){
    let columna=document.createElement("div")
    columna.classList.add("col")

    let cuerpo=document.createElement("div")
    cuerpo.classList.add("card")
    cuerpo.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src=pedido.fotos

    
    let cuerpito=document.createElement("div")
    cuerpito.classList.add("card-body")

    let titulo=document.createElement("h5")
    titulo.classList.add("card-title")
    titulo.textContent=` ${pedido.nombre}`

    let texto=document.createElement("p")
    texto.classList.add("card-text")
    texto.textContent=`Precio: ${pedido.precio}`

    let texto2=document.createElement("p")
    texto2.classList.add("card-text")
    texto2.textContent=`Peso: ${pedido.peso}`

    let texto3=document.createElement("p")
    texto3.classList.add("card-text")
    texto3.textContent=`Cantidad: ${pedido.cantidad}`

    let frontera=document.createElement("div")
    frontera.classList.add("card-footer")

    let footercard=document.createElement("div")
    footercard.classList.add("btn-toolbar")

    let footercardhijo=document.createElement("div")
    footercardhijo.classList.add("btn-group")
    footercardhijo.classList.add("me-2")

    let boton1=document.createElement("button")
    boton1.classList.add("btn")
    boton1.classList.add("btn-outline-success")

    let icono1=document.createElement("i")
    icono1.classList.add("fas")
    icono1.classList.add("fa-pen")

    let boton2=document.createElement("button")
    boton2.classList.add("btn")
    boton2.classList.add("btn-outline-danger")

    let icono2=document.createElement("i")
    icono2.classList.add("fas")
    icono2.classList.add("fa-trash-alt")

    contenedorPadre.appendChild(columna)
    columna.appendChild(cuerpo)
    cuerpo.appendChild(imagen)
    cuerpo.appendChild(cuerpito)
    cuerpo.appendChild(frontera)    
    cuerpito.appendChild(titulo)
    cuerpito.appendChild(texto)
    cuerpito.appendChild(texto2)
    cuerpito.appendChild(texto3)
    cuerpo.appendChild(frontera)
    frontera.appendChild(footercard)
    footercard.appendChild(footercardhijo)
    footercardhijo.appendChild(boton1)
    boton1.appendChild(icono1)
    footercardhijo.appendChild(boton2)
    boton2.appendChild(icono2)
});