class Paso01 {
  constructor() {
    //-------------------------BOTONES----------------------------------
    this.microplasticos = loadImage("assets/bioacumulacion/microplasticos.png");
    this.nadador = loadImage("assets/bioacumulacion/nadador.png");
    this.triton = loadImage("assets/bioacumulacion/triton.png");
    this.p2 = loadImage("assets/btn/btn_paso2.png");
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/tortuguitaHablando.png");

    this.xMicro = X(950);
    this.yMicro = Y(600);
    this.xNadador = X(200);
    this.yNadador = Y(250);
    this.xTriton = X(1300);
    this.yTriton = Y(950);
    this.xTortu = X(100);
    this.yTortu = Y(840);

  }

  Dibujar(){
    background(5, 49, 64);
    imageMode(CENTER);

    image(this.microplasticos, this.xMicro,this.yMicro, X(574), Y(331));
    image(this.nadador, this.xNadador,this.yNadador, X(264), Y(70));
    image(this.triton, this.xTriton,this.yTriton, X(273), Y(227));

    image(this.tortuga, this.xTortu,this.yTortu, X(200), Y(214));
    Dialogo("Usá el mouse para \ndescubrir qué ocultan \nlos objetos", X(300), Y(680), X(330), Y(200), X(200), Y(650));


    image(this.p2, X(1800), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 1 ) {
       estado = "paso02";
       agarre = 0;
     }
     if (agarre == 2 ) {
       this.datoOculto(X(200),Y(280),"MEGAPLÁSTICOS","Los megaplásticos son responsables\ntanto en personas como animales de:\nCortes\nHeridas\nEnredos\nInfecciones");

     }
     if (agarre == 3 ) {
       this.datoOculto(X(1000),Y(300),"MICROPLÁSTICOS","Son partículas de menos de 5mm.\nMirá cuantos llegan cada año al mar \nVER MÁS >");

     }
     if (agarre == 4 ) {
       this.datoOculto(X(600),Y(850),"FIVE DEEP DIVES","Encontraron una bolsa de plástico\n y papeles de caramelo en el punto \nemás profundo del océano\n a 10.935m de profundidad \nen la Fosa de las Marianas.");
     }
  }
  datoOculto(posX_, posY_, h2_, txt_) {
     this.posX = posX_;
     this.posY = posY_;
     //this.tam_= tam_;
     this.h2 = h2_;
     this.p = txt_;
     //noStroke();

     fill(255);
     textAlign(LEFT);

     push();
     textFont(tipografia);
     textSize(28);
     text(this.h2, this.posX + 120, this.posY);
     pop();

     textSize(14);
     text(this.p, this.posX + 120, this.posY+30);

     //strokeWeight(3);
 // E2D668 AMARILLO    fill(226, 214, 104);
     //stroke(226, 214, 104);

     //ellipse(this.posX, this.posY, this.tam, this.tam);
     //line(this.posX+this.tam,this.posY + this.tam,this.posX,this.posY);

      //------------------ ACÁ DESPLEGAMOS EL POPUP-------------------------------------------
       if(mouseIsPressed){
         if (mouseX > X(850) && mouseX < X(1400)&& mouseY > Y(300) && mouseY < Y(400)) {
           estado = "popup";
          }
       }
       //-----------------------------------CERRAR----------------------------------------------
       if (mouseIsPressed) {
         if (mouseX > X(1600) - 10 && mouseX < X(1600) + 10 && mouseY > Y(140)-10 && mouseY < Y(140) + 10) {
           popup.remuve();
         }
       }
   }

}

class Paso02 {
  constructor() {
    //--------------------------DECORATIVO--------------------------------
    this.cardumen = loadImage("assets/bioacumulacion/cardumen.png");
    this.pez = loadImage("assets/bioacumulacion/pescado.png");
    this.alga = loadImage("assets/bioacumulacion/algas.png");
    this.piedra = loadImage("assets/bioacumulacion/piedra.png");
    //-------------------------BOTONES------------------------------------
    this.langostinos = loadImage("assets/bioacumulacion/langostinos.png");
    this.barco = loadImage("assets/bioacumulacion/barco.png");
    this.p1 = loadImage("assets/btn/btn_paso1.png");
    this.p3 = loadImage("assets/btn/btn_paso3.png");

    this.xLan = X(250);
    this.yLan = Y(400);
    this.xBarco = X(1700);
    this.yBarco = Y(250);
    this.xPez = X(970);
    this.yPez = Y(750);
    this.xCardumen = X(1350);
    this.yCardumen= Y(440);
    this.xAlga = X(400);
    this.yAlga = Y(1080-151);
    this.xPiedra = X(650);
    this.yPiedra= Y(1080-55);

  }

  Dibujar(){
    background(5, 49, 64);
    imageMode(CENTER);
    //--------------------------------------------------------------------
    //-----------------------------BTN------------------------------------
    //--------------------------------------------------------------------
    image(this.langostinos, this.xLan,this.yLan, X(155), Y(168));
    image(this.barco, this.xBarco,this.yBarco, X(391), Y(235));
    //--------------------------------------------------------------------
    //--------------------------DECORATIVO--------------------------------
    //--------------------------------------------------------------------
    image(this.pez, this.xPez,this.yPez, X(266), Y(93));
    image(this.alga, this.xAlga,this.yAlga, X(222), Y(302));
    image(this.piedra, this.xPiedra,this.yPiedra, X(388), Y(115));
    image(this.cardumen, this.xCardumen,this.yCardumen, X(259), Y(195));
    //--------------------------------------------------------------------
    //--------------------------NAVEGACIÓN--------------------------------
    //--------------------------------------------------------------------
    image(this.p1, X(120), Y(1000), X(203), Y(54));
    image(this.p3, X(1800), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 1 ) {
       estado = "paso01";
       agarre = 0;
     }
    if (agarre == 2 ) {
      estado = "paso03";
      agarre = 0;
    }
    if (agarre == 3 ) {
      this.datoOculto(X(200),Y(300),"ANIMALES","Confunden los desechos \ncon alimento");
    }
    if (agarre == 4 ) {
      this.datoOculto(X(1400),Y(450),"Actividad pesquera","Pesca de animales contaminados \npara consumo");
    }

  }
  datoOculto(posX_, posY_, h2_, txt_) {
     this.posX = posX_;
     this.posY = posY_;
     //this.tam_= tam_;
     this.h2 = h2_;
     this.p = txt_;
     //noStroke();
     textAlign(LEFT);
     fill(255);
     push();
     textFont(tipografia);
     textSize(28);
     text(this.h2, this.posX + 120, this.posY);
     pop();
     textSize(16);
     text(this.p, this.posX + 120, this.posY+30);
     //strokeWeight(3);
 // E2D668 AMARILLO    fill(226, 214, 104);
     //stroke(226, 214, 104);

     //ellipse(this.posX, this.posY, this.tam, this.tam);
     //line(this.posX+this.tam,this.posY + this.tam,this.posX,this.posY);

   }
}

class Paso03 {
  constructor() {
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/Señalando.png");
    this.p2 = loadImage("assets/btn/btn_paso2D.png");

    this.py = Y(420);
  }

  Dibujar(){
    background(5, 49, 64);
    imageMode(CENTER);
    push();
    textFont(tipografia);
    fill(255);
    textAlign(CENTER);
    textSize(36);
    text("La mesa está servida", displayWidth / 2, Y(150));
    textSize(24);
    text("Tocá los alimentos para ver cuánto plástico pueden contener", displayWidth / 2, Y(1000));
    pop();

    image(this.tortuga, X(1540), Y(1000), X(121), Y(230));
    Dialogo("La bioacumulación lleva \na consumir alimentos \ncontaminados con \nsustancias dañinas.", X(1680), Y(830), X(330), Y(220), X(1580), Y(785));

    //--------------------------------------------------------------------
    //-----------------------------BTN------------------------------------
    //--------------------------------------------------------------------

    // image(mesa[0], X(200),this.py, X(111), Y(153));
    // image(mesa[1], X(550),this.py, X(117), Y(152));
    // image(mesa[2], X(950),this.py, X(161), Y(129));
    // image(mesa[3], X(1350),this.py, X(147), Y(121));
    // image(mesa[4], X(1700),this.py, X(197), Y(91));

    for(let i = 0; i<5 ; i++){

      image( mesa[i] , 200 + (i*+250) , this.py , X(200) , Y(165) );

    }
    //--------------------------------------------------------------------
    //--------------------------NAVEGACIÓN--------------------------------
    //--------------------------------------------------------------------
    image(this.p2, X(120), Y(1000), X(203), Y(54));
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 1 ) {
       this.datoOculto(X(280),Y(570),"Riesgo alto de\ningesta","A través del agua embotellada se\npueden ingerir 90.000 partículas de\nmicroplástico adicionales al año");
     }
     if (agarre == 2 ) {
       this.datoOculto(X(600),Y(570),"Riesgo alto de\ningesta","Las partículas tan pequeñas son \ndificiles de filrar.\nBebiendo agua de la canilla se \npueden ingerir 4.000 partículas de \nmicroplástico al año.");
     }
     if (agarre == 3 ) {
       this.datoOculto(X(950),Y(570),"Riesgo moderado de\ningesta","La sal marina fina contiene entre 5 \ny 20 micropartículas de plástico por\nkilo de sal marina");
     }
     if (agarre == 4 ) {
       this.datoOculto(X(1300),Y(570),"Riesgo moderado de\ningesta","Los mariscos se consumen integros,\npor eso hay más riesgo de consumir\nmicroplásticos.\nUna porción de mejillones \npodría contener siete microgramos \nde microplásticos.");
     }
     if (agarre == 5 ) {
       this.datoOculto(X(1650),Y(570),"Riesgo bajo de\ningesta","Los plásticos quedan en el intestino,\nno migran al tejido muscular ");
     }
     if (agarre == 6 ) {
       estado = "paso02";
       agarre = 0;
     }
  }
   datoOculto(posX_, posY_, h2_, txt_) {
      this.posX = posX_;
      this.posY = posY_;
    //  this.tam_= tam_;
      this.h2 = h2_;
      this.p = txt_;
      //noStroke();
      if(agarre == 1 || agarre == 2 ){
        fill(221, 100, 84);
      } else if(agarre == 3 || agarre == 4){
        fill(226, 214, 104);
      } else{
        fill(95, 216, 165);
      }

      //strokeWeight(3);
  // E2D668 AMARILLO    fill(226, 214, 104);
      //stroke(226, 214, 104);
      noStroke();
      rectMode(CENTER);
      rect(this.posX, this.posY, X(330), Y(80));
      //line(this.posX+this.tam,this.posY + this.tam,this.posX,this.posY);
      textSize(14);
      push();
      fill(0);
      textAlign(CENTER);
      textStyle(BOLD);
      text(this.h2, this.posX, this.posY - Y(5));
      pop();
      fill(255);
      textAlign(LEFT);
      text(this.p, this.posX-X(160),  this.posY + Y(80));
    }
}

//---------------------------------------------------------------------
//---------------------POPUP PARA COMPARAR PESOS-----------------------
//---------------------------------------------------------------------
class Popup {
  constructor(){
    this.px = X(260);
    this.py = Y(90);
    this.cerrar = loadImage("assets/btn/Cerrar.png");
    this.mp = loadImage("assets/bioacumulacion/mp-montaña.png");
    this.pesos = ["45 Ton","590 Ton","30.000 Ton"];

  }
   dibujar(){
     fill(121, 214, 244);
     noStroke();
     //push();
     rectMode(CORNER);
     rect(this.px, this.py, X(1400), Y(900), 25); //contenedor
     //pop();

     image(this.cerrar, X(1600) , Y(140), 20, 20);
     fill(5,49,64);

     push();
     textAlign(CENTER);
     textFont(tipografia);
     textSize(28);
     text("¿Te animás a nivelar la balanza?", displayWidth / 2 , Y(160));
     pop();
     textSize(14);
     text("Se liberan anualmente 1.500.000 \nTONELADAS de micrplásticos", X(300) , Y(240));
     image(this.mp, X(480), Y(400), X(350), Y(216)); //img pila de microplástico

     //animación de la BALANZA
     if(agarre == 90){
       image(balanza[1], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("34 mil camiones", "45 Toneladas","", X(300),Y(800));
       //stroke(255,0,0);
     } else if(agarre == 100){
       image(balanza[2], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("2.542 Aviones", "590 Toneladas","73 m de largo", X(300),Y(800));
     } else if(agarre == 110){
       image(balanza[3], X(1100), Y(420), X(600), Y(166));
       txt_vehiculos("50 trenes", "30.000 Toneladas","250 vagones", X(300),Y(800));
     } else {
       image(balanza[0], X(1100), Y(420), X(600), Y(166));
     }

     text("¿Cuántos de cada uno harán falta \npara igualar ese peso?", X(300) , Y(700));

     //-------------------------------BOTONES-----------------------------------
     btn_vehiculos(X(630), Y(700), 150, vehiculos[0], X(730), Y(820), X(70), Y(35));//camión
     btn_vehiculos(X(930), Y(700), 150, vehiculos[1], X(1030), Y(830), X(100), Y(41));//avión
     btn_vehiculos(X(1230), Y(700), 150, vehiculos[2], X(1330), Y(825), X(108), Y(26));//tren

     if (agarre > 0) {
       this.agarrar = true;
     }
      if (agarre == 80 ) {
        estado = "paso01";
        agarre = 0;
      }

   }

 }
