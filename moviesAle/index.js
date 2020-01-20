let articulos = [];
let peliculasAndSeries = [];
let numeroDePeliculas =   parseInt(prompt("Ingresa el número de peliculas o series que queres ver:"));
let formatoExportacion = prompt("ingresa formato de Exportación: 'HTML' o 'CSV'.")




for (let i = 1; i <= numeroDePeliculas; i++) {

  let tipo = prompt("Ingresa 'S'para serie y 'P' para pelicula:");
  let nombreDePeliculas = prompt("Ingresa el nombre de tu peliculas o series:");
  let tuValoracion = prompt("valora lo que acabas de ver:");


  let  datos = {
          
                titulo:nombreDePeliculas,
                peliculaoSerie:tipo.toUpperCase(),
                valoracion:tuValoracion
              };
  
  peliculasAndSeries.push(datos);

  
 
 
 
}



  
let html = [];
let csv = [];

html.push(`<table><tr><td>Articulo</td><td>Tipo</td><td>Valoración</td></tr>`)
csv.push(`Articulo;Tipo;Valoración`)

for(let articulo of peliculasAndSeries){


  html.push(`<tr><td>${articulo.titulo}</td><td>${articulo.peliculaoSerie}</td><td>${articulo.valoracion}</td></tr>`);
  
  csv.push(`${articulo.titulo};${articulo.peliculaoSerie};${articulo.valoracion}`)

  //csv.push(datos.i+',')

}

html.push(`</table>`);

let htmlFinal = html.join('')
let csvFinal = csv.join('')

if (formatoExportacion == 'HTML')
  document.write(htmlFinal)
else
  document.write(csvFinal)

//Series y Peliculas

document.write(`<h2>Series</h2>`);
let mejorSerie = {};
 //debugger;
for (let i = 0; i < peliculasAndSeries.length; i++  ) {

  if(peliculasAndSeries[i].peliculaoSerie === "S"){
      
    
    if( peliculasAndSeries[i].valoracion >=5){
      mejorSerie = peliculasAndSeries[i]
      

    }
    if(peliculasAndSeries[i].titulo ==="breaking bad"){

      document.write(`<h2 style="color:green">${peliculasAndSeries[i].titulo}</h2>`)
    
    }else{ 
      document.write(`<h3>${peliculasAndSeries[i].titulo} </h3>`);
    }

    document.write(`<p>"Valoración:"${peliculasAndSeries[i].valoracion} </p>`);
  }

}
document.write('MEJOR SERIE: ' + mejorSerie.titulo);
document.write(`<h2>Pelicula</h2>`);


//Peliculas

 let mejorPelicula = {};

for (let i = 0; i < peliculasAndSeries.length; i++  ) {

  if(peliculasAndSeries[i].peliculaoSerie === "P"){

   

    if( peliculasAndSeries[i].valoracion >=5){
      mejorPelicula = peliculasAndSeries[i]

    }
    if( peliculasAndSeries[i].titulo === "pulp fiction"){
      document.write(`<h2 style="color:red;">${peliculasAndSeries[i].titulo}</h2>`);

    }else{
      document.write(`<h3>${peliculasAndSeries[i].titulo} </h3>`);
    }

    
    if(peliculasAndSeries[i].valoracion >=5 ){
      document.write(`<p style="font-weight: bold;"> "Valoración:" ${peliculasAndSeries[i].valoracion}</p>` )
      
    }else{
      document.write(`<p>"Valoración:" ${peliculasAndSeries[i].valoracion} </p>`);

    }
  }

}
document.write('MEJOR PELICULA: ' + mejorPelicula.titulo);





  



 







