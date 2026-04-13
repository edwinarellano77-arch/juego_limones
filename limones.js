let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//CONSTANTES
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2
// INICIA JUEGO
function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

//DIBUJAR SUELO
function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

// DIBUJAR PERSONAJE
function dibujarPersonaje(){
   ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),40,ALTURA_PERSONAJE);
}

// MOVER IZQUIERDA/DERECHA
function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla(); 
}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
}

//LIMPIA CANVA TOTAL
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
}