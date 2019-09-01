 var trabajos = [{
     figure: "media/Benja1.jpg",
     alt: "Lemures en dispositivo de enriquecimiento ambiental consistente en plataformas de madera que poseen aplicaciones de corteza para mejor agarre.",
     title: "ZOOM",
     about: "Dispositivo de enriquecimiento ambiental para lémures a partir del estudio de su ecología en PARQUEMET.",
     color_letra: "white",
     color_fondo: "#8100ea",



 }, {
     figure: "media/Vicu4.jpg",
     alt: "Render de un patin que asemeja una bota, color negro con aplicaciones en amarillo.",
     title: "B-ROLL",
     about: "Rollers para amputados transtibiales fabricados a partir de fibra de vidrio.",
     color_letra: "white",
     color_fondo: "#2d23ea",

 }, {
     figure: "media/Paula1.jpg",
     alt: "Banca de terciado de 3mm que forma una x en su costado y posee dobles curvaturas.",
     title: "MOBILIARIO",
     about: "Banca de terciado 3mm y amarra cables, fabricada a partir de técnica de corte láser.",
     color_letra: "Black",
     color_fondo: "#f49595",
 }, {
     figure: "media/Vicu2.jpg",
     alt: "Sobre un fondo negro aparecen lineas de colores cyan, amarillo y magenta que se entrecruzan ubicadas de manera vertical en 4 columnas.",
     title: "AFICHE MUSICAL",
     about: "Afiche fabricado en código de programación processing a partir de la visualización de la canción Andrómeda de Gorillaz en un reproductor de música que proyecta colores en CMYK.",
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
      alt: "Góndola de supermercado, en donde, al centro, se ubican PEPS, unos potes de colores amarillo, rojo, verde y azul.",
     title: "PEPS: Prepara, Emplata, Porciona",
     about: "Sistema lúdico de organización para la comida de los niños marca ILKO, con el fin de promover una alimentación porcionada y la participación de los mismos en la preparación.",
     color_letra: "white",
     color_fondo: "#2d23ea",
 }, {
     figure: "media/Paula2.jpg",
     alt: "Góndola de supermercado, en donde al centro, se ubica una caja color celeste que posee el logo de Virutex y bajo este una inscripción que se lee parches adhesivos quitamanchas.",
     title: "PARCHES QUITAMANCHAS",
     about: "Parches adhesivos quitamanchas de acción inmediata pensados para oficinistas, fabricados para la empresa VirutexIlko.",
     color_letra: "Black",
     color_fondo: "#f49595",

 },
 {
    figure: "media/Paula3.jpg",
    alt: "Apoyado contra un muro se ubica a la derecha un skate con manubrio y apoyos para las piernas.",
    title: "SLID",
    about: "Skate para parapléjicos",
    color_letra: "Black",
     color_fondo: "#f49595",
},
{
    figure: "media/Benja3.jpg",
    alt: "Maniquí con un canguro para amamantar.",
    title: "CAPULLO",
    about: "Producto textil diseñado para madres lactantes y lo que conlleva esta interacción en público.",
    color_letra: "white",
     color_fondo: "#8100ea",
},{
    figure: "media/Benja4.jpg",
    alt: "Niña sentada en una silla de ruedas eléctrica vista de lado, en la silla tiene acoplado un mecanismo, que genera un paraguas por sobre la niña y los componentes eléctricos de la silla.",
    title: "PLEGO",
    about: "Protección contra la lluvia para sillas de ruedas de auto implementación fabricado a partir de tela PVC reutilizada.",
    color_letra: "white",
     color_fondo: "#8100ea",
}
,{
    figure: "media/Paula4.jpg",
    alt: "Niña con un scooter.",
    title: "RUM",
    about: "Juguete móvil bifuncional para niños fabricado a partir de plástico reciclado Timberecco.",
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
