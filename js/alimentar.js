class Alimentar {
  constructor() {
    //VARIABLES
    this.meter = false;
    this.agarrar = false;
    this.jugar = false;
    this.primero = false;
    this.cont = 0;
    this.cual = 0;
    this.vida = 100;
    this.restador = 0;
    this.comer = false;
    this.fx = displayWidth + 50;
    this.x = -90;
    this.cantidad = 0;

    //IMAGENES
    this.fondoComer = loadImage("assets/otros/fondoComer.png");
    this.tortuguita1 = loadImage("assets/aqua/ComiendoFeliz.png");
    this.tortuguita2 = loadImage("assets/aqua/ComindoTriste.png");
    this.tortuguita3 = loadImage("assets/aqua/ComiendoAsustada.png");
    this.tortuguita4 = loadImage("assets/aqua/Muerta.png");
    this.fantasma = loadImage("assets/aqua/Fantasma.png");
    this.particulas = loadImage("assets/basura/vidrios.png");
    this.medusa = loadImage("assets/alimentar/medusa.png");
    this.bolsa = loadImage("assets/alimentar/bolsaJuego.png");

    //POSICIONES INICIALES
    this.xMedusa1 = X(1400);
    this.yMedusa1 = Y(147);
    this.xMedusa2 = X(1500);
    this.yMedusa2 = Y(820);
    this.xMedusa3 = X(420);
    this.yMedusa3 = Y(420);
    this.xMedusa4 = X(430);
    this.yMedusa4 = Y(860);

    this.xBolsa1 = X(510);
    this.yBolsa1 = Y(266);
    this.xBolsa2 = X(586);
    this.yBolsa2 = Y(625);
    this.xBolsa3 = X(1343);
    this.yBolsa3 = Y(535);
    this.xBolsa4 = X(1159);
    this.yBolsa4 = Y(900);

    this.xParticula1 = X(397);
    this.yParticula1 = Y(635);
    this.xParticula2 = X(1344);
    this.yParticula2 = Y(330);
    this.xParticula3 = X(1450);
    this.yParticula3 = Y(680);

    background(226, 214, 104);
    angleMode(DEGREES);
  }

  //---------------------DIBUJAMOS ELEMENTOS-----------------------
  Dibujar() {
    push();

    //DISTINTAS EXPRESIONES DE AQUA
    imageMode(CENTER);
    if (this.vida <= 100 && this.vida > 80) {
      //AQUA FELIZ
      image(
        this.tortuguita1,
        displayWidth / 2,
        displayHeight / 2,
        X(200),
        Y(320)
      );
    }
    if (this.vida <= 80 && this.vida > 50) {
      //AQUA PREOCUPADA
      image(
        this.tortuguita2,
        displayWidth / 2,
        displayHeight / 2,
        X(200),
        Y(320)
      );
    }
    if (
      (this.vida <= 50 && this.vida > 1) ||
      (this.vida == 0 && this.cont > 0)
    ) {
      //AQUA CON MIEDO
      image(
        this.tortuguita3,
        displayWidth / 2,
        displayHeight / 2,
        X(200),
        Y(320)
      );
    }
    if (this.vida == 0 && this.cont == 0) {
      //AQUA RIP
      image(
        this.tortuguita4,
        displayWidth / 2,
        displayHeight / 2,
        X(200),
        Y(320)
      );
    }

    //PLASTICOS Y MEDUSAS

    this.Bolsa(this.xBolsa1, this.yBolsa1, 1);
    this.Bolsa(this.xBolsa2, this.yBolsa2, 2);
    this.Bolsa(this.xBolsa3, this.yBolsa3, 3);
    this.Bolsa(this.xBolsa4, this.yBolsa4, 4);

    this.Medusa(this.xMedusa1, this.yMedusa1);
    this.Medusa(this.xMedusa2, this.yMedusa2);
    this.Medusa(this.xMedusa3, this.yMedusa3);
    this.Medusa(this.xMedusa4, this.yMedusa4);

    this.Particulas(this.xParticula1, this.yParticula1);
    this.Particulas(this.xParticula2, this.yParticula2);
    this.Particulas(this.xParticula3, this.yParticula3);

    print(agarre);
    print("meter =" + this.meter);
    pop();
  }

  //---------------------FUNCION AGARRAR-----------------------

  Agarrar() {
    if (agarre > 0) {
      this.agarrar = true; //AL CLICKEAR UN ELEMENTO COMIENZA EL JUEGO
      this.jugar = true;
    } else {
      this.agarrar = false;
    }

    if (this.jugar == true) {
      push();
      textSize(30);
      textAlign(CENTER);
      textFont(tipografia);
      fill(255);
      text("Alimenta a Aqua", displayWidth / 2, 100);
      pop();
    }

    //MEDUSAS----------------------------------------
    if (agarre == 1 && this.meter == false) {
      this.xMedusa1 = mouseX;
      this.yMedusa1 = mouseY;
    }
    if (agarre == 1 && this.meter == true && this.comer == false) {
      this.xMedusa1 = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 2 && this.meter == false) {
      this.xMedusa2 = mouseX;
      this.yMedusa2 = mouseY;
    }
    if (agarre == 2 && this.meter == true && this.comer == false) {
      this.xMedusa2 = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 3 && this.meter == false) {
      this.xMedusa3 = mouseX;
      this.yMedusa3 = mouseY;
    } else if (agarre == 3 && this.meter == true && this.comer == false) {
      this.xMedusa3 = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 4 && this.meter == false) {
      this.xMedusa4 = mouseX;
      this.yMedusa4 = mouseY;
    } else if (agarre == 4 && this.meter == true && this.comer == false) {
      this.xMedusa4 = -100;
      agarre = 0;
      this.meter = false;
    }

    //BOLSAS----------------------------------------

    if (agarre == 5 && this.meter == false) {
      this.xBolsa1 = mouseX;
      this.yBolsa1 = mouseY;
    } else if (agarre == 5 && this.meter == true && this.comer == false) {
      this.xBolsa1 = -100;
      agarre = 0;
      this.meter = false;
    }
    if (agarre == 6 && this.meter == false) {
      this.xBolsa2 = mouseX;
      this.yBolsa2 = mouseY;
    } else if (agarre == 6 && this.meter == true && this.comer == false) {
      this.xBolsa2 = -100;
      agarre = 0;
      this.meter = false;
    }
    if (agarre == 7 && this.meter == false) {
      this.xBolsa3 = mouseX;
      this.yBolsa3 = mouseY;
    } else if (agarre == 7 && this.meter == true && this.comer == false) {
      this.xBolsa3 = -100;
      agarre = 0;
      this.meter = false;
    }
    if (agarre == 8 && this.meter == false) {
      this.xBolsa4 = mouseX;
      this.yBolsa4 = mouseY;
    } else if (agarre == 8 && this.meter == true && this.comer == false) {
      this.xBolsa4 = -100;
      agarre = 0;
      this.meter = false;
    }

    //PARTICULAS---------------------

    if (agarre == 9 && this.meter == false) {
      this.xParticula1 = mouseX;
      this.yParticula1 = mouseY;
    } else if (agarre == 9 && this.meter == true && this.comer == false) {
      this.xParticula1 = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 10 && this.meter == false) {
      this.xParticula2 = mouseX;
      this.yParticula2 = mouseY;
    } else if (agarre == 10 && this.meter == true && this.comer == false) {
      this.xParticula2 = -100;
      agarre = 0;
      this.meter = false;
    }

    if (agarre == 11 && this.meter == false) {
      this.xParticula3 = mouseX;
      this.yParticula3 = mouseY;
    } else if (agarre == 11 && this.meter == true && this.comer == false) {
      this.xParticula3 = -100;
      agarre = 0;
      this.meter = false;
    }
  }

  //---------------------FUNCION DAR COMIDA A AQUA-----------------------

  Dar() {
    if (
      mouseX > displayWidth / 2 - X(150) &&
      mouseX < displayWidth / 2 + X(150) &&
      mouseY > displayHeight / 2 - Y(210) &&
      mouseY < displayHeight / 2 + Y(210)
    ) {
      if (this.agarrar == true) {
        this.meter = true;
        this.contador += 1;
      } else {
        this.meter = false;
      }
    }
  }

  //---------------------CONFIGURACION GRAFICO DE VIDA-----------------------

  Grafico() {
    push();

    background(226, 214, 104);
    fill(221, 100, 84);
    noStroke();

    arc(displayWidth / 2, displayHeight / 2, 500, 500, -90, this.x);
    this.x += this.cantidad;

    push();
    imageMode(CORNER);
    image(this.fondoComer, 0, 0, displayWidth, displayHeight);
    pop();
    strokeWeight(20);
    line(0, displayHeight / 2, displayWidth, displayHeight / 2);

    if (this.cont > 0) {
      this.cantidad = 0.5;
      this.cont--;
      this.comer = true;
    }
    if (this.cont < 0) {
      this.cantidad = -0.5;
      this.cont++;
      this.comer = true;
      push();
      fill(255);
      textSize(20);
      textFont(tipografia);
      textAlign(CENTER);
      text("+5% ", displayWidth / 2, 680);
      pop();
    }

    if (this.x == 270) {
      this.cont += 0;
      this.cantidad = 0;
    }

    if (this.cont == 0 || this.x == 270) {
      this.cantidad = 0;
      this.comer = false;
      this.cont = 0;
    }

    //EL PRIMER PEDAZO DE PLASTICO

    if (
      agarre > 5 &&
      this.vida > 80 &&
      this.meter == true &&
      this.comer == false &&
      this.primero == false
    ) {
      this.cont = 133;
      this.restador = 20; //RESTA 20%
      this.vida -= this.restador;
    }
    if (this.vida == 80 && this.cont == 0 && this.primero == false) {
      this.primero = true;
    }

    //SI LE DAS BOLSAS
    if (
      agarre >= 5 &&
      agarre < 9 &&
      this.vida > 0 &&
      this.meter == true &&
      this.comer == false &&
      this.primero == true
    ) {
      this.cont = 181;
      this.restador = 25; //RESTA 25%
      this.vida -= this.restador;
    }

    //SI LE DAS PARTICULAS
    if (
      agarre >= 9 &&
      this.vida > 0 &&
      this.meter == true &&
      this.comer == false &&
      this.primero == true
    ) {
      this.cont = 118;
      this.restador = 15; //RESTA 15%
      this.vida -= this.restador;
    }

    //SI LE DAS MEDUSAS
    if (
      agarre < 5 &&
      agarre > 0 &&
      this.meter == true &&
      this.comer == false &&
      this.primero == true
    ) {
      if (this.vida < 100 && this.vida > 0) {
        this.cont = -40;
        this.restador = -5; //SUMA 5%
        this.vida -= this.restador;
      }
    }

    //VIDA 0
    if (this.vida < 0) {
      this.vida = 0;
    }

    //ESTO ES PARA QUE NO SE INVIERTA EL GRAFICO CUANDO LA VIDA ES +100
    if (this.vida == 100 && this.x == -89) {
      this.cont = 0;
    }

    //APARECE AQUA FANTASMA
    if (this.vida == 0 && this.cont == 0) {
      this.AquaFantasma();
    }

    //IMPRIMIMOS PORCENTAJE DE VIDA
    push();
    fill(255);
    textSize(20);
    textFont(tipografia);
    textAlign(CENTER);
    text("Vida " + this.vida + "%", displayWidth / 2, 640);
    pop();
    pop();
  }

  //---------------------AQUA FANTASMA-----------------------

  AquaFantasma() {
    image(this.fantasma, this.fx, Y(350), X(200), Y(300));
    this.fx -= 3;
    if (this.fx <= X(displayWidth + 40)) {
      this.fx = X(displayWidth + 40);
       push();
      fill(176,230,248);
      ellipse(this.fx - 200, 150, 200, 100);
      
      fill(0);
       textAlign(CENTER);
      text(
        "Oh no! Mi cuerpo no \n resistio tantos plasticos",
        this.fx - 200,
        150
      );
      pop();
    }
  }

  //---------------------BOLSA-----------------------
  Bolsa(bolsax_, bolsay_, cual_) {
    this.bolsax = bolsax_;
    this.bolsay = bolsay_;
    this.cual = cual_;

    push();
    imageMode(CENTER);
    image(this.bolsa, this.bolsax, this.bolsay, 50, 50);

    pop();
  }

  //---------------------MEDUSA-----------------------
  Medusa(medusax_, medusay_) {
    this.medusax = medusax_;
    this.medusay = medusay_;

    push();
    imageMode(CENTER);
    image(this.medusa, this.medusax, this.medusay, 50, 50);

    pop();
  }

  //---------------------PARTICULAS-----------------------
  Particulas(particulasx_, particulasy_) {
    this.particulasx = particulasx_;
    this.particulasy = particulasy_;

    push();
    imageMode(CENTER);
    image(this.particulas, this.particulasx, this.particulasy, 30, 30);

    pop();
  }

  //---------------------DIALOGO ALIMENTAR-----------------------
  DialogoAlimentar() {
    push();
    textSize(14);
    textAlign(CENTER);
    
    if (n == 3) {
      dialogo = "dialogoAlimentar1";
      n = 4;
    }

    if (dialogo == "dialogoAlimentar1" && contDialogo <= 200) {
      Dialogo(
        "A las tortugas marinas nos encanta \n comer medusas, pero muchas veces \n estas son muy parecidas a \n plasticos que nos hacen mal",
        X(displayWidth / 2 + X(400)),
        Y(350),
        X(400),
        Y(220),
        X(displayWidth / 2 + X(380)),
        Y(310)
      );
      contDialogo--;
    }

    if (dialogo == "dialogoAlimentar1" && contDialogo == 0) {
      dialogo = "dialogoAlimentar2";
      contDialogo = 200;
    }
    if (
      dialogo == "dialogoAlimentar2" &&
      contDialogo <= 200 &&
      this.jugar == false
    ) {
      Dialogo(
        "Los plasticos blandos como bolsas,\n papel film o globos, son muy \n peligrosos para nosotras, ya que \n obstruyen nuestro intestino",
        X(displayWidth / 2 + X(400)),
        Y(350),
        X(400),
        Y(220),
        X(displayWidth / 2 + X(380)),
        Y(310)
      );
    }

    if (this.vida == 80 && this.cont == 0 && this.primero == true) {
      Dialogo(
        "¿Sabias que? \n El primer pedazo de plastico \n nos resta un 20% de vida",
        X(displayWidth / 2 + X(380)),
        Y(380),
        X(300),
        Y(180),
        X(displayWidth / 2 + X(380)),
        Y(350)
      );
    }
    pop();
  }
}
