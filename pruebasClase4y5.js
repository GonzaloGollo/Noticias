// https://github.com/GonzaloGollo/JSProject.git
/////////////
const tituloPrincipal = document.querySelector(`h1`);
tituloPrincipal.onclick= clickAlTitulo;
const contenidoH1 = tituloPrincipal.innerText;

function clickAlTitulo(){
    if(!tituloPrincipal.innerText.includes(`Modificado con DOM`)){
        tituloPrincipal.innerText += ` Modificado con DOM`; 
    }else{
        let CambiarH1 = prompt(`Ingrese el titulo de la pagina`);
        tituloPrincipal.innerText = CambiarH1;
    }
}
//////////////////////////

const botonTema = document.getElementsByClassName("changeTheme()");
let colorTema= "white";

function changeTheme(){
  const boddy =  document.querySelector(`body`);
  const  header1 = document.querySelector(`header`);
  const mainblack = document.querySelector(`main`);
  const articulos = document.querySelectorAll('article');
  const noticias1 = document.querySelector(`main`);
  const botonBlanco = document.querySelector('button');
  const temaButton = document.getElementsByClassName('tema');
  
  if(colorTema == "white" ){
    colorTema="black";
    alert(`Paint it Black`);
    boddy.classList.add('black');'black'
    boddy.classList.remove('white');
    botonBlanco.classList.add('black');
    botonBlanco.classList.add('tema');
    header1.classList.add('black');
    header1.classList.remove('white');
    document.querySelector('button').style.color='black';
    document.querySelector('button').style.background='white';
    mainblack.classList.add('black');
    mainblack.classList.remove('white');
    articulos.forEach(articulo => {
        articulo.classList.add('tarjetaBlack')
        articulo.classList.remove('white');;});
    noticias1.classList.add('black');
    } else {
      colorTema="white";
      alert(`Paint it White`);
      botonBlanco.classList.add('white');
      botonBlanco.classList.remove('tema');
      document.querySelector('button').style.color='white';
      document.querySelector('button').style.background='grey';

      boddy.classList.remove('black');
      boddy.classList.add('white');

      header1.classList.remove('black');

      header1.classList.add('white');

      noticias1.classList.remove('black');
      noticias1.classList.add('white');
      noticias1.classList.add('noticias')
      articulos.forEach(articulo => {
          articulo.classList.remove('tarjetaBlack');
          articulo.classList.add('white');
      });
    } 
  }

const txtNotice1 = prompt('Ingrese aqui el texto para la 1er nota');
const titleNotice1 = prompt('Ingrese aqui el titular para la 1er nota');

document.querySelectorAll('article p')[0].innerHTML= `Este es el texto modificado por el usuario: ${txtNotice1}`;
document.querySelectorAll('article h2')[0].innerHTML= `Este es el texto modificado por el usuario: ${titleNotice1}`;


const titular2 = document.querySelectorAll('article h2')[1];
titular2.innerHTML= `Este H2 mide ${titular2.clientWidth}px ancho y ${titular2.clientHeight}px de alto`;



