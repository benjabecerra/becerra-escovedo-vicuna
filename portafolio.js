 var trabajos = [{
     figure: "Media/Benja1.jpg",
     alt: "Descripción de la imagen",
     title: "Título de pjAJAjajAajjAJAAJrimer trabajo",
     about: "Texto simulado de descripción de primer trabajo",
     color_letra: "white",
     color_fondo: "#8100ea",
     
     

 }, {
     figure: "Media/Vicu4.jpg",
     alt: "Descripción de la imagen",
     title: "Título de segundo trabajo",
     about: "Texto simulado de descripción de segundo trabajo",
     color_letra: "white",
     color_fondo: "#2d23ea",
     
 }, {
     figure: "Media/Paula1.jpg",
     alt: "Descripción de la imagen",
     title: "Título de tercer trabajo",
     about: "Texto simulado de descripción de tercer trabajo",
     color_letra: "Black",
     color_fondo: "#f49595",
 }, {
     figure: "Media/Vicu2.jpg",
     alt: "Descripción de la imagen",
     title: "Título de cuarto trabajo",
     about: "Texto simulado de descripción de cuarto trabajo",
     color_letra: "white",
     color_fondo: "#2d23ea",
 }, {
     figure: "Media/Benja2.jpg",
     alt: "Descripción de la imagen",
     title: "Título de quinto trabajo",
     about: "Texto simulado de descripción de quinto trabajo",
     color_letra: "white",
     color_fondo: "#8100ea",
 }, {
     figure: "Media/Vicu1.jpg",
     alt: "Descripción de la imagen",
     title: "PEPS: Prepara, Emplata, Porciona",
     about: "Sistema lúdico de organización para la comida de los niños marca ILKO, con el fin de promover una alimentación porcionada y la participación de los mismos en la preparación.",
     color_letra: "white",
     color_fondo: "#2d23ea",
 }, {
     figure: "Media/Paula2.jpg",
     alt: "Descripción de la imagen",
     title: "Título de séptimo trabajo",
     about: "Texto simulado de descripción de séptimo trabajo",
     color_letra: "Black",
     color_fondo: "#f49595",
     
 },
 {
    figure: "Media/Paula3.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    color_letra: "Black",
     color_fondo: "#f49595",
},
{
    figure: "Media/Benja3.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    color_letra: "white",
     color_fondo: "#8100ea",
},{
    figure: "Media/Benja4.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    color_letra: "white",
     color_fondo: "#8100ea",
}
,{
    figure: "Media/Paula4.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    color_letra: "Black",
     color_fondo: "#f49595",
    
}

];
//   LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
 $.each(trabajos, function(i, val) {
     var uno = '<figure><img src=' + trabajos[i].figure + ' alt=' + trabajos[i].alt + '/></figure>';
     var dos = '<h4><font color= ' + trabajos[i].color_letra+'>' +  trabajos[i].title + '</font></h4>';
     var tres = '<p><font color= ' + trabajos[i].color_letra+'>' + trabajos[i].about + '</font></p>';
     $('#portafolio').append('<div class="item" style = "background-color: '+trabajos[i].color_fondo+'" >' + uno + dos + tres + '</div>')
 });

 


