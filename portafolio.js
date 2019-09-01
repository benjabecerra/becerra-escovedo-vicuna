 var trabajos = [{
     figure: "media/Benja1.jpg",
     alt: "Lemures en dispositivo de enriquecimiento ambiental consistente en plataformas de madera que poseen aplicaciones de corteza para mejor agarre.",
     title: "ZOOM",
     about: "Dispositivo de enriquecimiento ambiental para lémures a partir del estudio de su ecología en PARQUEMET.",
     color_letra: "white",
     color_fondo: "#8100ea",



 }, {
     figure: "media/Vicu4.jpg",
     alt: "Descripción de la imagen",
     title: "Título de segundo trabajo",
     about: "Texto simulado de descripción de segundo trabajo",
     color_letra: "white",
     color_fondo: "#2d23ea",

 }, {
     figure: "media/Paula1.jpg",
     alt: "Descripción de la imagen",
     title: "Título de tercer trabajo",
     about: "Texto simulado de descripción de tercer trabajo",
     color_letra: "Black",
     color_fondo: "#f49595",
 }, {
     figure: "media/Vicu2.jpg",
     alt: "Descripción de la imagen",
     title: "Título de cuarto trabajo",
     about: "Texto simulado de descripción de cuarto trabajo",
     color_letra: "white",
     color_fondo: "#2d23ea",
 }, {
     figure: "media/Benja2.jpg",
     alt: "Espalda de un joven con casco y polera blanca que posee un logo que dice CANVAS.",
     title: "CANVAS",
     about: "Producto de indumentaria con textil de memoria inteligente para BMX.",
     color_letra: "white",
     color_fondo: "#8100ea",
 }, {
     figure: "media/Vicu1.jpg",
     alt: "Góndola de supermercado en dond al centro se ubican PEPS, unos potes de colores amarillo, rojo, verde y azul",
     title: "PEPS: Prepara, Emplata, Porciona",
     about: "Sistema lúdico de organización para la comida de los niños marca ILKO, con el fin de promover una alimentación porcionada y la participación de los mismos en la preparación.",
     color_letra: "white",
     color_fondo: "#2d23ea",
 }, {
     figure: "media/Paula2.jpg",
     alt: "Descripción de la imagen",
     title: "Título de séptimo trabajo",
     about: "Texto simulado de descripción de séptimo trabajo",
     color_letra: "Black",
     color_fondo: "#f49595",

 },
 {
    figure: "media/Paula3.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    color_letra: "Black",
     color_fondo: "#f49595",
},
{
    figure: "media/Benja3.jpg",
    alt: "Descripción de la imagen",
    title: "CAPULLO",
    about: "Producto textil diseñado para madres lactantes y lo que conlleva esta interacción en público.",
    color_letra: "white",
     color_fondo: "#8100ea",
},{
    figure: "media/Benja4.jpg",
    alt: "Descripción de la imagen",
    title: "PLEGO",
    about: "Protección contra la lluvia para sillas de ruedas de auto implementación fabricado a partir de tela PVC reutilizada.",
    color_letra: "white",
     color_fondo: "#8100ea",
}
,{
    figure: "media/Paula4.jpg",
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
