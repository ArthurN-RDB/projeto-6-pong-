//Parâmetros da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//Velocidade bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let colidiu = false;

//Parâmetros da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//Parâmetros da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0 ;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;
//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.play();
   trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoBorda();
  movimentaRaquete();
  //verificaColisaoBolinha();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  movimentaRaqueteOponente();
  bolinhaNaoFicaPresa();
 
}

//Mostra bolinha na tela
function mostraBolinha() {
  circle(xbolinha, ybolinha, diametro);
}

//Mostra a minha raquete
function mostraRaquete(x, y) {
  rect(x, y, RaqueteComprimento, RaqueteAltura);
}

//Movimenta a bolinha
function movimentoBolinha() {
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}

//Verifica colisão com a borda
function verificaColisaoBorda() {
  if (xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeYbolinha *= -1;
  }
}

//Movimenta minha raquete
function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

//Verifica colisão da bolinha com a raquete
function verificaColisaoBolinha() {
  if (
    xbolinha - raio < xRaquete + RaqueteComprimento &&
    ybolinha - raio < yRaquete + RaqueteAltura &&
    ybolinha + raio > yRaquete
  ) {
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

//Mostra raquete do oponente
function mostraRaqueteOponente() {
function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

  rect(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura);
}

//Verifica colisão raquete do oponente
function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, RaqueteComprimento, RaqueteAltura, xbolinha, ybolinha, raio);
  if (colidiu) {
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}
//Movimenta raquete oponente
  function movimentaRaqueteOponente(){
  velocidadeYOponente = ybolinha -yRaqueteOponente - RaqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  
}

//Incluindo placar
function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xbolinha > 590){
    meusPontos += 1;
     ponto.play();
  }
  if (xbolinha < 10){
    pontosDoOponente += 1;
     ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (xbolinha - raio < 0){
    xbolinha = 23
    }
}

