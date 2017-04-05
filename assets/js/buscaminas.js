var botonesArreglo = document.getElementsByClassName('botonNum');
var botonReiniciar = document.getElementById("botonReiniciar");
console.log(botonesArreglo);

function iterarBotones(botonesArreglo){
  for(var i=0;i<botonesArreglo.length;i++){
    botonesArreglo[i].addEventListener("click", mostrarNumeros);
  }
}
iterarBotones(botonesArreglo);

function mostrarNumeros(botonesArreglo) {
  var padre=this.parentNode;
  if(this.value == 1){
    padre.innerHTML = "1";
  }
else if (this.value==2){
  padre.innerHTML="2";
  }
}

botonReiniciar.addEventListener("click", reiniciarJuego);
function reiniciarJuego(){
   window.location.reload();
}
var botonColor1= document.getElementById("vacio1");
var botonColor2= document.getElementById("vacio2");
botonColor1.addEventListener("click",cambiarColor);
botonColor2.addEventListener("click",cambiarColor);

function cambiarColor(){
var papa =this.parentNode;
papa.innerHTML= papa.style.backgroundColor = "#CC99CC";
papa.innerText="";
}
var bombas = document.getElementsByClassName('bombas');
  for(var i = 0;i< bombas.length;i++){
   bombas[i].addEventListener("click",mostrarBombitas);
  }

function mostrarBombitas(){
  for(var i = 0;i< bombas.length;i++){
    bombas[i].innerHTML = "☠";
  }
  alert("perdiste bebé :(")
  botones();
   }

  function botones(){
  var botoncitosTodos = document.getElementsByTagName('button');
    for(var i = 0;i< botoncitosTodos.length;i++){
    botoncitosTodos[i].addEventListener("click",parar);
    }
  function parar(){
  event.stopPropagation();
 }
}
// var tablita = document.getElementById('almacenTabla');
// var botoncito =document.getElementById('almacenBoton');
// tablita.addEventListener("click",ninja);
// botoncito.addEventListener("click",ninja);
//
// function ninja(e){
//   alert("¡no te salgas de la caja!")
//   e.stopPropagation();
// }
