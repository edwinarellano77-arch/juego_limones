let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//CONSTANTES
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;

// INICIA JUEGO
function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

//DIBUJAR SUELO
function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

// DIBUJAR PERSONAJE
function dibujarPersonaje(){
   ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,40,ALTURA_PERSONAJE);
}

// MOVER IZQUIERDA/DERECHA
function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla(); 
    detectarColicion();
}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    detectarColicion();
}

//LIMPIA CANVA TOTAL
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

// LIMONES
function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}
function bajarLimon(){
    limonY=limonY+15;
    actualizarPantalla();

}
function detectarColicion(){
    if(limonX+ANCHO_LIMON>personajeX && 
        limonX<personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON>personajeX && 
        limonX<personajeX+ALTURA_PERSONAJE
    
    
    )
        alert("ATRAPADO!!")
}