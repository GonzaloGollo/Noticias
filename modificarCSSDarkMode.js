const toggle = document.getElementById('container');
const body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList .toggle('active');
    body.classList .toggle('active');
}

//////////////////
let  titulo1 = prompt(`Ingrese el titulo de la nota 1`);
let  texto1 = prompt(`Ingrese el texto de la nota 1`);

function escribirArticulo(titulo, texto) {
    const article = document.getElementById('article1');
    const miTemplate = `
      <h2>${titulo1}</h1>
      <p>${texto1}</p>
    `;
    article.innerHTML += miTemplate;
  };
  
escribirArticulo(titulo1 , texto1 );

//////////////////////////
///// Generacion elementos del html en js 

let  titulo2 = prompt(`Ingrese el titulo de la nota 2`);
let  texto2 = prompt(`Ingrese el texto de la nota 2`);

function escribirArticulo2(titulo, texto) {
    const article2 = document.querySelector(`main`);
    const miTemplate2 = `
    <article>
      <h2 class= "articuloH2">El titulo 2 ingresado es ${titulo2}</h1>
      <p class= "articuloP">El texto 2 ingresado es ${texto2}</p>
      </article>
    `;
    article2.innerHTML += miTemplate2;
  };
  
escribirArticulo2(titulo2 , texto2 );
////////////////
// Asignacion de estilos segun add class

// document.querySelectorAll(`h2`)[1].classList.add(`articuloH2`);
// document.querySelectorAll(`p`)[1].classList.add(`articuloP`);


