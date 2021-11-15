agarre = 0;
boton = false;

//-----Variables para el dialogo----
contDialogo = 200;
r = 1;
n = 0;

//--------------------

let estado = "cinematica";
let dialogo = "dialogoReciclaje1";
let mapa, reciclaje, tortugas, bifurcacion2, bioacumulacion, paso01, paso02, paso03, menu, popup,cinematica, formacion;

var tipografia;

let seccion = [];
let mesa = [];
let menuIslas = [];
let balanza = [];
let vehiculos = [];
let desechos = [];

function preload() {
  tipografia = loadFont('PatrickHand-Regular.ttf');

  //--------------------------ÍCONOS ISLAS-----------------------------
  for(let i = 0; i< 5; i++){
    menuIslas[i] = loadImage("assets/islas/menuIsla" + i + ".png");
  }
  //------------------------------ALIMENTOS----------------------------
  for(let i = 0; i< 5; i++){
    mesa[i] = loadImage("assets/bioacumulacion/mesa" + i + ".png");
  }
  //-------------------ÍCONOS MENÚ DE NAVEGACIÓN-----------------------
  for(let i = 0; i< 6; i++){
    seccion[i] = loadImage("assets/btn/menu" + i + ".png");
  }
  //---------------------------ÍCONOS BALANZA--------------------------
  for(let i = 0; i< 4; i++){
    balanza[i] = loadImage("assets/bioacumulacion/b" + i + ".gif");
  }
  //----------------------------ÍCONOS VEHÍCULOS-----------------------
  for(let i = 0; i< 3; i++){
    vehiculos[i] = loadImage("assets/bioacumulacion/v" + i + ".png");
  }
  //---------------------------BASURA---------------------------------
  for(let i = 0; i< 11; i++){
    desechos[i] = loadImage("assets/basura/d" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cinematica = new Cinematica();
  formacion = new Formacion();
  menu = new Menu();
  mapa = new Planisferio();
  reciclaje = new Reciclaje();
  bifurcacion2 = new Bifurcacion2();
  tortugas = new Tortugas();
  alimentar = new Alimentar();
  bioacumulacion = new Bioacumulacion();
  paso01 = new Paso01();
  paso02 = new Paso02();
  paso03 = new Paso03();
  popup = new Popup();

  globoDialogo = loadImage("assets/otros/globoDialogo.png");
}

function draw() {

  if (estado == "cinematica") {
    cinematica.Dibujar();
  }
  if (estado == "formacion") {
    formacion.dibujar();
    formacion.Avaza();
    menu.Dibujar();
    menu.Avaza();
  }

  if (estado == "mapa") {
    mapa.Dibujar();
    mapa.Zoom();
    menu.Dibujar();
    menu.Avaza();

  }
  if (estado == "reciclaje") {
    if (r == 1) { //ESTO ES PARA EL DIALOGO
      n = 1;
      r = 2;
    }
    reciclaje.Dibujar();
    reciclaje.DialogoReciclaje();
    reciclaje.Agarrar();
    reciclaje.Tacho();
    menu.Dibujar();
    menu.Avaza();
  }

  if (estado == "tortugas") {
    if (r == 2) { //ESTO ES PARA EL DIALOGO
      n = 2;
      r = 3;
    }
    tortugas.Mostrar();
    tortugas.DialogoTortugas();
    tortugas.DesplegarSlider();
    menu.Dibujar();
    menu.Avaza();
  }
  if (estado == "alimentar") {
    if (r == 3) {//ESTO ES PARA EL DIALOGO
      n = 3;
      r = 4;
    }
    alimentar.Grafico();
    alimentar.Dibujar();
    alimentar.Agarrar();
    alimentar.Dar();
    alimentar.DialogoAlimentar();
    menu.Dibujar();
    menu.Avaza();
  }
  if (estado == "bifurcacion2") {
    bifurcacion2.Dibujar();
    bifurcacion2.Avaza();
    menu.Dibujar();
    menu.Avaza();
  }
  if (estado == "bioacumulacion") {
    bioacumulacion.Dibujar();
    bioacumulacion.Avaza();
    menu.Dibujar();
    menu.Avaza();
  }
  if (estado == "paso01") {
    paso01.Dibujar();
    paso01.Avaza();
    menu.Dibujar();
    menu.Avaza();
  }
  if(estado == "popup"){
    popup.dibujar();
  }
  if (estado == "paso02") {
    paso02.Dibujar();
    paso02.Avaza();
    menu.Dibujar();
    menu.Avaza();
  }
  if (estado == "paso03") {
    paso03.Dibujar();
    paso03.Avaza();
    menu.Dibujar();
    menu.Avaza();
    //paso03.datoOculto();
  }

}


function Objeto(objX_, objY_, tamX_, tamY_, agarrado_) { //FUNCION REUTILIZABLE PARA CLICKEAR OBJETOS

  objX = objX_;
  objY = objY_;
  tamX = tamX_;
  tamY = tamY_;

  if (
    mouseX > objX - tamX / 2 &&
    mouseX < objX + tamX / 2 &&
    mouseY > objY - tamY / 2 &&
    mouseY < objY + tamY / 2
  ) {
    boton = true;
    agarre = agarrado_;
  }
}

function mousePresionado() {
  if (estado == "reciclaje" && reciclaje.jugar == true) {
    if (mouseIsPressed) {
      Objeto(reciclaje.xBotellaP, reciclaje.yBotellaP, X(70), Y(140), 1);
      Objeto(reciclaje.xBotella, reciclaje.yBotella, X(70), Y(140), 2);
      Objeto(reciclaje.xLata, reciclaje.yLata, X(76), Y(155), 3);
      Objeto(reciclaje.xPila, reciclaje.yPila, X(57), Y(115), 4);
      Objeto(reciclaje.xBolsa, reciclaje.yBolsa, X(94), Y(191), 5);
      Objeto(reciclaje.xVidrios, reciclaje.yVidrios, X(50), Y(50), 6);
    } else {
      agarre = 0;
    }
  }
}

function mousePressed() { //APLICAMOS LA FUNCION OBJETO EN EL MOUSEPRESSED
  if (estado == "cinematica") {
    cinematica.btnComenzar();
  }

  if (estado == "origen" || estado == "formacion" || estado == "mapa" || estado == "reciclaje" || estado == "tortugas" || estado == "alimentar" || estado == "bioacumulacion" || estado == "paso01" || estado == "paso02" || estado == "paso03") {
    Objeto(menu.px , menu.py , X(110) , Y(88), 200);
    Objeto(menu.px + X(120) , menu.py , X(110) , Y(88), 70);
    Objeto(menu.px + X(220) , menu.py , X(110) , Y(88), 20);
    Objeto(menu.px + X(320) , menu.py , X(110) , Y(88), 30);
    Objeto(menu.px + X(430) , menu.py , X(110) , Y(88), 40);
    Objeto(menu.px + X(600) , menu.py , X(110) , Y(88), 50);
    Objeto(menu.px + X(700) , menu.py , X(110) , Y(88), 60);
  }
  if (estado == "formacion") {
    Objeto(formacion.xBtn_Rec,formacion.yBtn_Rec, X(204), Y(245), 1);
    Objeto(formacion.xBtn_I,formacion.yBtn_I, X(204), Y(245), 2);
  }
  if (estado == "mapa") {
      //ISLAS
      Objeto(X(400), Y(700), X(95), Y(97), 1);
      Objeto(X(750), Y(420), X(95), Y(97), 2);
      Objeto(X(880), Y(680), X(95), Y(97), 3);
      Objeto(X(1300), Y(700), X(95), Y(97), 4);
      Objeto(X(1680), Y(420), X(95), Y(97), 5);

      //MENU DESLEGABLE----------
      Objeto(320, mapa.py + Y(180), X(68), Y(62), 2);
      Objeto(530, mapa.py + Y(180), X(68), Y(62), 3);
      Objeto(740, mapa.py + Y(180), X(68), Y(62), 4);
      Objeto(950, mapa.py + Y(180), X(68), Y(62), 1);
      Objeto(1160, mapa.py + Y(180), X(68), Y(62), 5);

      //BOTON SALIR
      Objeto(X(100),Y(100),X(120),Y(62), 6);
    }
  if (estado == "reciclaje") {
    reciclaje.btnJugar();
    Objeto(reciclaje.xBotellaP, reciclaje.yBotellaP, X(70), Y(140), 1);
    Objeto(reciclaje.xBotella, reciclaje.yBotella, X(70), Y(140), 2);
    Objeto(reciclaje.xLata, reciclaje.yLata, X(76), Y(155), 3);
    Objeto(reciclaje.xPila, reciclaje.yPila, X(57), Y(115), 4);
    Objeto(reciclaje.xBolsa, reciclaje.yBolsa, X(94), Y(191), 5);
    Objeto(reciclaje.xVidrios, reciclaje.yVidrios, X(50), Y(50), 6);
    Objeto(X(width / 2 + 121), Y(1080 - 98), X(121), Y(98), 7);
  }

  if (estado == "tortugas") {
    Objeto(tortugas.xLora, Y(500), X(200), Y(300), 1);
    Objeto(tortugas.xCarey, Y(500), X(200), Y(300), 2);
    Objeto(tortugas.xVerde, Y(500), X(200), Y(300), 3);
    Objeto(tortugas.xLaud, Y(500), X(200), Y(300), 4);
    Objeto(tortugas.xBoba, Y(500), X(200), Y(300), 5);
    Objeto(tortugas.xGolfina, Y(500), X(200), Y(300), 6);
    Objeto(X(width / 2 + 121), Y(1080 - 98), X(121), Y(98), 7);
  }
  if (estado == "alimentar") {
    Objeto(alimentar.xMedusa1, alimentar.yMedusa1, X(50), Y(50), 1);
    Objeto(alimentar.xMedusa2, alimentar.yMedusa2, X(50), Y(50), 2);
    Objeto(alimentar.xMedusa3, alimentar.yMedusa3, X(50), Y(50), 3);
    Objeto(alimentar.xMedusa4, alimentar.yMedusa4, X(50), Y(50), 4);

    Objeto(alimentar.xBolsa1, alimentar.yBolsa1, X(50), Y(50), 5);
    Objeto(alimentar.xBolsa2, alimentar.yBolsa2, X(50), Y(50), 6);
    Objeto(alimentar.xBolsa3, alimentar.yBolsa3, X(50), Y(50), 7);
    Objeto(alimentar.xBolsa4, alimentar.yBolsa4, X(50), Y(50), 8);

    Objeto(alimentar.xParticula1, alimentar.yParticula1, X(30), Y(30), 9);
    Objeto(alimentar.xParticula2, alimentar.yParticula2, X(30), Y(30), 10);
    Objeto(alimentar.xParticula3, alimentar.yParticula3, X(30), Y(30), 11);
  }
  if (estado == "bifurcacion2") {
    //parametros del parentesis: pos x, pos y , tam x, tam y , número mayor a cero que lo hace clickeable
    Objeto(bifurcacion2.xBtn_ba, bifurcacion2.yBtn_ba, X(204), Y(245), 1);
    Objeto(bifurcacion2.xBtn_tortu, bifurcacion2.yBtn_tortu, X(204), Y(245), 2);
  }
  if (estado == "bioacumulacion") {
    Objeto(bioacumulacion.xBtn_p1, bioacumulacion.yBtn_p1, X(204), Y(245), 1);
    Objeto(bioacumulacion.xBtn_p2, bioacumulacion.yBtn_p2, X(204), Y(245), 2);
    Objeto(bioacumulacion.xBtn_p3, bioacumulacion.yBtn_p3, X(204), Y(245), 3);
  }
  if (estado == "paso01") {
    Objeto(X(1800), Y(1000), X(203), Y(54), 1);
    Objeto(paso01.xNadador,paso01.yNadador, X(264), Y(70), 2);
    Objeto(paso01.xMicro,paso01.yMicro, X(574), Y(331), 3);
    Objeto(paso01.xTriton,paso01.yTriton, X(273), Y(227), 4);
  }
  if (estado == "popup") {
    Objeto(X(1600) , Y(140), X(30), Y(30), 80);
    Objeto(X(700), Y(800), X(220), Y(220), 90);
    Objeto(X(1000), Y(800), X(220), Y(220), 100);
    Objeto(X(1300), Y(800), X(220), Y(220), 110);
  }
  if (estado == "paso02") {
    Objeto(X(120), Y(1000), X(203), Y(54), 1);
    Objeto(X(1800), Y(1000), X(203), Y(54), 2);
    Objeto(paso02.xLan,paso02.yLan, X(155), Y(168), 3);
    Objeto(paso02.xBarco,paso02.yBarco, X(391), Y(235), 4);
  }
  if (estado == "paso03") {
    Objeto(X(200), Y(420), X(200) , Y(165) , 1);
    Objeto(X(550), Y(420), X(200) , Y(165) , 2);
    Objeto(X(930), Y(420), X(200) , Y(165) , 3);
    Objeto(X(1350), Y(420), X(200) , Y(165) , 4);
    Objeto(X(1550), Y(420),X(200) , Y(165) , 5);
    Objeto(X(120), Y(1000), X(203), Y(54), 6);
    // for(let i = 0 ; i<5 ; i++){
    //   agarre++;
    //   objeto(i , paso03.py , X(200) , Y(165),i);
    //   if(agrre > 6){
    //     agarre = 0;
    //   }
  }

}

function X(numX_) { //FUNCIONES RESPONSIVE
  numX = numX_;
  return round(map(numX, 0, 1920, 0, width));
}

function Y(numY_) {
  numY = numY_;
  return round(map(numY, 0, 1080, 0, height));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function Dialogo(dialogo_, posX_, posY_, tamX_, tamY_, xTexto_, yTexto_) {
  push();
  imageMode(CENTER);
  textSize(14);
  diag = dialogo_;
  posX = posX_;
  posY = posY_;
  tamX = tamX_;
  tamY = tamY_;
  xTexto = xTexto_;
  yTexto = yTexto_;

  image(globoDialogo, posX, posY, tamX, tamY);
  fill(0);
  text(diag, xTexto, yTexto);
  pop();
}
function btn_vehiculos(px_, py_, tam_, img_, pxI_, pyI_, tamxI, tamyI ){
  this.px = px_;
  this.py = py_;
  this.tam = tam_
  this.img = img_;
  this.pxI = pxI_;
  this.pyI = pyI_;
  this.tamxI = tamxI;
  this.tamyI = tamyI;
  fill(255);
  rect(this.px, this.py, this.tam, this.tam,10);
  image(this.img, this.pxI, this.pyI, this.tamxI, this.tamyI);
}

function txt_vehiculos(cant_, p_, c_, px_, py_){
  this.cant = cant_;
  this.p = p_;
  this.c = c_;
  this.px = px_;
  this.py = py_;
  push();
  fill(221,100,84);
  textStyle(BOLD);
  textSize(24);
  text(this.cant, this.px, this.py); //cantidad
  fill(5,49,64);
  textSize(20);
  text(this.p, this.px, this.py + 30);//peso
  pop();
  textSize(16);
  text(this.c, this.px, this.py + 50); //caracteristica extra


}
