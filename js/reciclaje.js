class Reciclaje {
  constructor() {
    //---------------------CARGAR IMAGENES Y POSICIONES-----
    this.agarrar = false;
    this.reciclar = "nada";
    this.meter = false;
    this.tacho = "ninguno";
    this.jugar = false;
    this.contador = 0;
    this.cd = 0;

    this.tortuguita = loadImage("assets/aqua/Mirando.png");
    this.tortuguita2 = loadImage("assets/aqua/Señalando.png");
    this.tortuguita3 = loadImage("assets/aqua/Preocupada.png");
    this.tortuguita4 = loadImage("assets/aqua/Feliz.png");

    this.tachoRojo = loadImage("assets/basura/tachoRojo.png");
    this.tachoAmarillo = loadImage("assets/basura/tachoAmarillo.png");
    this.tachoVerde = loadImage("assets/basura/tachoVerde.png");
    this.botella = loadImage("assets/basura/botella.png");
    this.botellaPlastico = loadImage("assets/basura/boellaPlastico.png");
    this.lata = loadImage("assets/basura/lata.png");
    this.pila = loadImage("assets/basura/pila.png");
    this.bolsa = loadImage("assets/basura/bolsa.png");
    this.vidrios = loadImage("assets/basura/vidrios.png");

    this.btn_sgte = loadImage("assets/btn/btn_siguiente.png");
    this.btnjugar = loadImage("assets/btn/btnJugar.png");
    this.incorrecto = loadImage("assets/basura/incorrecto.png");

    this.xBotellaP = X(650);
    this.yBotellaP = Y(700);
    this.xBotella = X(800);
    this.yBotella = Y(770);
    this.xLata = X(1050);
    this.yLata = Y(700);
    this.xPila = X(1200);
    this.yPila = Y(870);
    this.xBolsa = X(1500);
    this.yBolsa = Y(800);
    this.xVidrios = X(1400);
    this.yVidrios = Y(800);
    angleMode(DEGREES);
  }

  //------------MOSTRAR EN PANTALLA--------

  Dibujar() {
    print(this.contador);
    push();
    imageMode(CENTER);
    background(55, 126, 149);
    push();
    textFont(tipografia);
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("Concientización consciente", displayWidth / 2, 100);
    text(
      "¿Como evitamos que el mar se contamine y produzca islas de basura?",
      displayWidth / 2,
      150
    );
    pop();

    textSize(14);
    if (this.agarre == 0) {
      this.xBotellaP = X(650);
      this.yBotellaP = Y(700);
      this.xBotella = X(800);
      this.yBotella = Y(770);
      this.xLata = X(1050);
      this.yLata = Y(700);
      this.xPila = X(1200);
      this.yPila = Y(870);
      this.xBolsa = X(1500);
      this.yBolsa = Y(800);
      this.xVidrios = X(1400);
      this.yVidrios = Y(800);
    }

    //------------DISTINTAS EXPRESIONES DE AQUA--------
    if (this.jugar == false) {
      image(this.tortuguita2, X(200), Y(800), X(150), Y(290)); //INICIO
    }

    if (this.reciclar == "nada" && this.contador < 6 && this.jugar == true) {
      //NORMAL
      image(this.tortuguita, X(200), Y(800), X(150), Y(290));
    } else if (
      this.reciclar == "incorrecto" &&
      this.contador < 6 &&
      this.jugar == true
    ) {
      //EQUIVOCARSE
      image(this.tortuguita3, X(200), Y(800), X(150), Y(290));
    } else if (
      this.reciclar == "nada" &&
      this.contador == 6 &&
      this.jugar == true
    ) {
      //GANAR {
      image(this.tortuguita4, X(200), Y(800), X(150), Y(290));
      Dialogo(
        "¡Bien hecho! ¡Sos un experto!",
        X(300),
        Y(600),
        X(300),
        Y(150),
        X(190),
        Y(600)
      );

      this.cd++; //CONTADOR PARA QUE NO SE BUGUEE
    }
    if (this.cd == 5) {
      agarre = 0;
      this.cd = 0;
    }
    //-------------------DIBUJAMOS TACHOS Y LA BASURA ROTADA--------------------------

    image(this.tachoRojo, X(800), Y(480), X(220), Y(380)); //TACHO ROJO
    image(this.tachoAmarillo, X(1100), Y(480), X(220), Y(380)); //TACHO AMARILLO
    image(this.tachoVerde, X(1400), Y(480), X(220), Y(380)); //TACHO VERDE

    push();
    translate(this.xBotellaP, this.yBotellaP);
    rotate(300);
    image(this.botellaPlastico, 0, 0, X(70), Y(140)); //BOTELLA PLASTICO
    pop();

    push();
    translate(this.xBotella, this.yBotella);
    rotate(25);
    image(this.botella, 0, 0, X(70), Y(140)); //BOTELLA VIDRIO
    pop();

    push();
    translate(this.xLata, this.yLata);
    rotate(45);
    image(this.lata, 0, 0, X(76), Y(155)); //LATA
    pop();

    push();
    translate(this.xPila, this.yPila);
    rotate(270);
    image(this.pila, 0, 0, X(57), Y(115)); //PILA
    pop();

    push();
    translate(this.xBolsa, this.yBolsa);
    rotate(25);
    image(this.bolsa, 0, 0, X(94), 191); //BOLSA
    pop();

    push();
    translate(this.xVidrios, this.yVidrios);
    rotate(25);
    image(this.vidrios, 0, 0, X(50), Y(50)); //VIDRIOS
    pop();

    image(this.btn_sgte, X(width / 2 + 121), Y(1080 - 98), X(121), Y(98)); //BOTON SIGUIENTE
    pop();
  }

  //-------------------------------------------------------

  //------------DIALOGO RECICLAJE-----------------

  DialogoReciclaje() {
    if (n == 1) {
      dialogo = "dialogoReciclaje1";
      n = 2;
    }
    if (dialogo == "dialogoReciclaje1" && contDialogo <= 200) {
      Dialogo(
        "Para evitar que el mar \n se contamine y no produzca \n islas de basura \n debemos tirar la basura \n en los tachos reciclables",
        X(300),
        Y(600),
        X(370),
        Y(220),
        X(200),
        Y(540)
      );
      contDialogo--;
    }

    if (dialogo == "dialogoReciclaje1" && contDialogo == 0) {
      dialogo = "dialogoReciclaje2";
      contDialogo = 200;
    }
    if (
      dialogo == "dialogoReciclaje2" &&
      contDialogo <= 200 &&
      this.jugar == false
    ) {
      Dialogo(
        "Intenta ordenar los diferentes \n tipos de residuos \n en los tachos de reciclaje! ",
        X(300),
        Y(600),
        X(370),
        Y(220),
        X(200),
        Y(550)
      );
      push();
      imageMode(CORNER);
      image(this.btnjugar, X(230), Y(615), X(140), Y(43));
      pop();
    }
  }

  //-------------------------------------------------------

  //------------------AGARRAR OBJETOS----------------------
  Agarrar() {
    if (agarre > 0) {
      this.agarrar = true;
    }

    if (agarre == 1 && this.meter == false) {
      //AGARRAR BOTELLA PLASTICO
      this.xBotellaP = mouseX;
      this.yBotellaP = mouseY;
    }
    if (agarre == 1 && this.meter == true) {
      this.xBotellaP = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 2 && this.meter == false) {
      //AGARRAR BOTELLA VIDRIO
      this.xBotella = mouseX;
      this.yBotella = mouseY;
    }
    if (agarre == 2 && this.meter == true) {
      this.xBotella = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 3 && this.meter == false) {
      //AGARRAR LATA
      this.xLata = mouseX;
      this.yLata = mouseY;
    } else if (agarre == 3 && this.meter == true) {
      this.xLata = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 4 && this.meter == false) {
      //AGARRAR PILA
      this.xPila = mouseX;
      this.yPila = mouseY;
    } else if (agarre == 4 && this.meter == true) {
      this.xPila = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 5 && this.meter == false) {
      //AGARRAR BOLSA
      this.xBolsa = mouseX;
      this.yBolsa = mouseY;
    } else if (agarre == 5 && this.meter == true) {
      this.xBolsa = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 6 && this.meter == false) {
      //AGARRAR VIDRIOS
      this.xVidrios = mouseX;
      this.yVidrios = mouseY;
    } else if (agarre == 6 && this.meter == true) {
      this.xVidrios = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 7) {
      //BOTON SIGUIENTE
      estado = "bifurcacion2";
      agarre = 0;
    }
  }
  //-------------------------------------------------------

  //------------------METER AL TACHO-----------------------
  Tacho() {
    if (
      mouseX > X(800) - X(110) &&
      mouseX < X(800) + X(110) &&
      mouseY > Y(480 - 130) &&
      mouseY < Y(480)
    ) {
      this.tacho = "Rojo";
    } else {
      this.tacho = "Ninguno";
    }

    if (this.tacho == "Rojo") {
      if (agarre == 4) {
        this.meter = true;
        this.reciclar = "nada";
        this.contador += 1;
      }
    }

    if (this.tacho == "Rojo") {
      if (
        agarre == 1 ||
        agarre == 2 ||
        agarre == 3 ||
        agarre == 5 ||
        agarre == 6
      ) {
        this.meter = false;
        Dialogo(
          "Eso no va ahi",
          X(300),
          Y(600),
          X(250),
          Y(100),
          X(250),
          Y(600)
        );
        image(this.incorrecto, X(770), Y(600), X(75), Y(75));
        this.reciclar = "incorrecto";
      }
    }

    if (
      mouseX > X(1100) - X(100) &&
      mouseX < X(1100) + X(100) &&
      mouseY > Y(480 - 130) &&
      mouseY < Y(480)
    ) {
      this.tacho = "Amarillo";
    } else {
      this.tacho = "Ninguno";
    }

    if (this.tacho == "Amarillo") {
      if (agarre == 2 || agarre == 4 || agarre == 6) {
        this.meter = false;
        Dialogo(
          "Eso no va ahi",
          X(300),
          Y(600),
          X(250),
          Y(100),
          X(250),
          Y(600)
        );
        image(this.incorrecto, X(1070), Y(600), X(75), Y(75));
        this.reciclar = "incorrecto";
      }
    }

    if (this.tacho == "Amarillo") {
      if (agarre == 1 || agarre == 3 || agarre == 5) {
        this.meter = true;
        this.reciclar = "nada";
        this.contador += 1;
      }
    }

    if (
      mouseX > X(1400) - X(100) &&
      mouseX < X(1400) + X(100) &&
      mouseY > Y(480 - 130) &&
      mouseY < Y(480)
    ) {
      this.tacho = "Verde";
    } else {
      this.tacho = "Ninguno";
    }

    if (this.tacho == "Verde") {
      if (agarre == 1 || agarre == 3 || agarre == 4 || agarre == 5) {
        this.meter = false;
        Dialogo(
          "Eso no va ahi",
          X(300),
          Y(600),
          X(250),
          Y(100),
          X(250),
          Y(600)
        );
        image(this.incorrecto, X(1370), Y(600), X(75), Y(75));
        this.reciclar = "incorrecto";
      }
    }

    if (this.tacho == "Verde") {
      if (agarre == 2 || agarre == 6) {
        this.meter = true;
        this.reciclar = "nada";
        this.contador += 1;
      }
    }
  }
  //-------------------------------------------------------

  //------------------BOTON JUGAR----------------------
  btnJugar() {
    if (
      mouseX > X(230) &&
      mouseX < X(230) + X(140) &&
      mouseY > Y(615) &&
      mouseY < Y(615) + Y(43)
    ) {
      this.jugar = true;
      text("puta", 200, 260);
    }
  }

  //-------------------------------------------------------
}
