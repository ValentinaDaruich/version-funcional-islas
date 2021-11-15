class Tortugas {
  constructor() {
    this.btn_sgte = loadImage("assets/btn/btn_siguiente.png");
    this.tortuguita = loadImage("assets/aqua/Triste.png");
    this.cerrar = loadImage("assets/btn/Cerrar.png");
    this.mapa = loadImage("assets/otros/mapa 1.png");
    this.punto = loadImage("assets/otros/punto.png");
    this.flecha = loadImage("assets/otros/flecha.png");
    this.medida = loadImage("assets/otros/medida.png");

    //ESPECIES
    this.Lora = loadImage("assets/especies/Lora.png");
    this.Carey = loadImage("assets/especies/Carey.png");
    this.Verde = loadImage("assets/especies/Verde.png");
    this.Laud = loadImage("assets/especies/Laud.png");
    this.Boba = loadImage("assets/especies/Boba.png");
    this.Golfina = loadImage("assets/especies/Golfina.png");

    //PARTES
    this.pCarey = loadImage("assets/especies/partes/Garra.png");
    this.pLaud = loadImage("assets/especies/partes/puntitos.png");
    this.pVerde = loadImage("assets/especies/partes/Escamas.png");
    this.pGolfina = loadImage("assets/especies/partes/Aleta.png");

    //PERFILES
    this.perfilLora = loadImage("assets/especies/perfil/lora.png");
    this.perfilCarey = loadImage("assets/especies/perfil/carey.png");
    this.perfilVerde = loadImage("assets/especies/perfil/verde.png");
    this.perfilLaud = loadImage("assets/especies/perfil/laud.png");
    this.perfilBoba = loadImage("assets/especies/perfil/boba.png");
    this.perfilGolfina = loadImage("assets/especies/perfil/golfina.png");

    //PORCENTAJES
    this.Loraporcentaje = loadImage(
      "assets/especies/porcentajes/LoraPorcentaje.png"
    );
    this.Careyporcentaje = loadImage(
      "assets/especies/porcentajes/CareyPorcentaje.png"
    );
    this.Verdeporcentaje = loadImage(
      "assets/especies/porcentajes/VerdePorcentaje.png"
    );
    this.Bobaporcentaje = loadImage(
      "assets/especies/porcentajes/BobaPorentaje.png"
    );
    this.Golfinaporcentaje = loadImage(
      "assets/especies/porcentajes/GolfinaPorcentaje.png"
    );
    this.Laudporcentaje = loadImage(
      "assets/especies/porcentajes/LaudPorcentaje.png"
    );

    this.xLora = X(400);
    this.xCarey = X(650);
    this.xVerde = X(850);
    this.xLaud = X(1050);
    this.xBoba = X(1250);
    this.xGolfina = X(1450);
    this.tamX = X(200);
    this.tamY = Y(300);
  }
  
  //----------DIBUJAR ELEMENTOS------------

  Mostrar() {
    background(22, 85, 104);
    imageMode(CENTER);
    textAlign(CENTER);
    fill(255);
    image(this.tortuguita, X(1700), Y(200), X(150), Y(290));
    image(this.Lora, this.xLora, Y(580), X(165), Y(290));
    image(this.Carey, this.xCarey, Y(580), X(165), Y(290));
    image(this.Verde, this.xVerde, Y(580), X(165), Y(290));
    image(this.Laud, this.xLaud, Y(580), X(165), Y(290));
    image(this.Boba, this.xBoba, Y(580), X(165), Y(290));
    image(this.Golfina, this.xGolfina, Y(580), X(165), Y(290));

    image(this.btn_sgte, X(width / 2 + 121), Y(1080 - 98), X(121), Y(98)); //BOTON SIGUIENTE
    push();
    fill(255);
    text("Tortuga Lora", this.xLora, Y(780));
    text("Tortuga Carey", this.xCarey, Y(780));
    text("Tortuga Verde", this.xVerde, Y(780));
    text("Tortuga Laud", this.xLaud, Y(780));
    text("Tortuga Boba", this.xBoba, Y(780));
    text("Tortuga Golfina", this.xGolfina, Y(780));

    fill(221, 100, 84);
    text("Peligro critico", this.xLora, Y(815));
    text("Peligro critico", this.xCarey, Y(815));
    fill(221, 133, 84);
    text("En peligro", this.xVerde, Y(815));
    fill(221, 207, 84);
    text("Vulnerable", this.xLaud, Y(815));
    text("Vulnerable", this.xBoba, Y(815));
    text("Vulnerable", this.xGolfina, Y(815));
    pop();
  }
  
 //----------DIALOGO TORTUGAS------------
  DialogoTortugas() {
    fill(0);
    if (n == 2) {
      dialogo = "dialogoTortugas1";
      n = 3;
    }

    if (dialogo == "dialogoTortugas1" && contDialogo <= 200) {
      Dialogo(
        "Lamentablemente 6 de las 7 \n especies de tortugas estamos en \n peligro de extinguirnos",
        X(1450),
        Y(200),
        X(350),
        Y(200),
        X(1440),
        Y(170)
      );
      contDialogo--;
    }

    if (dialogo == "dialogoTortugas1" && contDialogo == 0) {
      dialogo = "dialogoTortugas2";
      contDialogo = 200;
    }

    if (
      (dialogo == "dialogoTortugas2" && contDialogo <= 200 && agarre < 4) ||
      (dialogo == "dialogoTortugas2" && contDialogo <= 200 && agarre > 4)
    ) {
      Dialogo(
        "Probá haciendo click en cada \n especie para ver su situacion",
        X(1450),
        Y(200),
        X(350),
        Y(200),
        X(1440),
        Y(180)
      );
    }
    if (agarre == 4) {
      Dialogo(
        "Sabias que? \n La tortuga Laud es la mas \n grande de todas las especies. \n Una de ellas llego a pesar 1000 kilos!",
        X(1450),
        Y(200),
        X(400),
        Y(260),
        X(1450),
        Y(140)
      );
    }
  }
  
  
 //----------ABRIR SLIDER------------
  
  DesplegarSlider() {
    push();
    textAlign(LEFT);
    fill(255);
    this.tamSlider = X(707);

    if (agarre == 0) {
      this.xLora = X(400);
      this.xCarey = X(650);
      this.xVerde = X(850);
      this.xLaud = X(1050);
      this.xBoba = X(1250);
      this.xGolfina = X(1450);
    }
    if (agarre == 1) {
      //TORTUGA LORA
      this.xLora = X(450);
      this.Slider(
        this.Loraporcentaje,
        "29%",
        this.xLora,
        this.perfilLora,
        "Tortuga Lora",
        "1000",
        "20 kilos"
      );

      this.Flecha(X(350), Y(620), X(100), Y(100), 0);
      text("Tienen el pecho \n amarillo-verdoso  \n o blanco", X(220), Y(580));
      this.xLora += 8;
      if (this.xLora > X(450)) {
        this.xLora = X(450);
      }
      this.xCarey += 8;
      this.xVerde += 8;
      this.xLaud += 8;
      this.xBoba += 8;
      this.xGolfina += 8;

      if (this.xGolfina > X(1250) + this.xLora + this.tamSlider) {
        this.xCarey = X(450) + this.xLora + this.tamSlider;
        this.xVerde = X(650) + this.xLora + this.tamSlider;
        this.xLaud = X(850) + this.xLora + this.tamSlider;
        this.xBoba = X(1050) + this.xLora + this.tamSlider;
        this.xGolfina = X(1250) + this.xLora + this.tamSlider;
      }
      this.Punto(this.posX + X(500), Y(550));
    }

    if (agarre == 2) {
      //TORTUGA CAREY
      this.xCarey = X(450);
      this.Slider(
        this.Careyporcentaje,
        "35%",
        this.xCarey,
        this.perfilCarey,
        "Tortuga Carey",
        "8000",
        "80 kilos"
      );
      image(this.pCarey, X(250), Y(300), 80, 80);
      this.Flecha(X(350), Y(420), X(150), Y(140), 25);
      text(
        "La tortuga Carey tiene unas \n distintivas garras en sus aletas",
        X(300),
        Y(300)
      );
      this.xLora -= 8;
      this.xVerde += 8;
      this.xLaud += 8;
      this.xBoba += 8;
      this.xGolfina += 8;

      if (this.xLora < X(200) - this.tamSlider / 6) {
        this.xLora = X(200) - this.tamSlider / 6;
      }

      if (this.xVerde > X(650) + this.tamSlider) {
        this.xVerde = X(650) + this.tamSlider;
        this.xLaud = X(850) + this.tamSlider;
        this.xBoba = X(1050) + this.tamSlider;
        this.xGolfina = X(1250) + this.tamSlider;
      }
      this.Punto(this.posX + X(500), Y(550));
      this.Punto(this.posX + X(650), Y(620));
      this.Punto(this.posX + X(770), Y(570));
    }

    if (agarre == 3) {
      //TORTUGA VERDE
      this.xVerde = X(450);
      this.Slider(
        this.Verdeporcentaje,
        "83%",
        this.xVerde,
        this.perfilVerde,
        "Tortuga Verde",
        "203.000",
        "160 kilos"
      );

      image(this.pVerde, X(250), Y(300), 80, 80);
      this.Flecha(X(360), Y(400), X(120), Y(120), 15);
      text(
        "Se caracteriza por tener \n escamas fontrales en su cabeza",
        X(300),
        Y(300)
      );

      this.xCarey -= 8;
      this.xLora -= 8;
      this.xLaud += 8;
      this.xBoba += 8;
      this.xGolfina += 8;

      if (this.xCarey < X(450) - this.tamSlider / 2) {
        this.xCarey = X(450) - this.tamSlider / 2;
        this.xLora = X(200) - this.tamSlider / 2;
      }

      if (this.xLaud > X(850) + this.tamSlider) {
        this.xLaud = X(850) + this.tamSlider;
        this.xBoba = X(1050) + this.tamSlider;
        this.xGolfina = X(1250) + this.tamSlider;
      }
      this.Punto(this.posX + X(500), Y(550));
      this.Punto(this.posX + X(650), Y(620));
      this.Punto(this.posX + X(770), Y(600));
      this.Punto(this.posX + X(450), Y(640));
    }

    if (agarre == 4) {
      //TORTUGA LAUD
      this.xLaud = X(450);
      this.Slider(
        this.Laudporcentaje,
        "33%",
        this.xLaud,
        this.perfilLaud,
        "Tortuga Laud ",

        "25.000",
        "200-700 kilos"
      );
      image(this.pLaud, X(250), Y(300), 80, 80);

      this.Flecha(X(360), Y(385), X(100), Y(100), 15);

      text(
        "Su piel es tipicamente oscura y \n esta pintada con pequeños puntitos blancos",
        X(300),
        Y(300)
      );

      this.xVerde -= 8;
      this.xCarey -= 8;
      this.xLora -= 8;
      this.xBoba += 8;
      this.xGolfina += 8;

      if (this.xVerde < X(650) - this.tamSlider / 2 - this.tamSlider / 4) {
        this.xVerde = X(650) - this.tamSlider / 2 - this.tamSlider / 4;
        this.xCarey = X(450) - this.tamSlider;
        this.xLora = X(200) - this.tamSlider;
      }

      if (this.xBoba > X(1050) + this.tamSlider / 2) {
        this.xBoba = X(1050) + this.tamSlider / 2;
        this.xGolfina = X(1250) + this.tamSlider / 2;
      }
      this.Punto(this.posX + X(500), Y(550));
    }

    if (agarre == 5) {
      //TORTUGA BOBA
      this.xBoba = X(450);
      this.Slider(
        this.Bobaporcentaje,
        "86%",
        this.xBoba,
        this.perfilBoba,
        "Tortuga Boba",
        "60.000",
        "160 kilos"
      );
      text(
        "la tortuga Boba se caracteriza por tener \n la cabeza mas grande que las otras especies",
        X(220),
        Y(280)
      );
      this.Flecha(X(340), Y(370), X(100), Y(100), 25);
      text("25 cm", X(420), Y(370));
      image(this.medida, X(438), Y(390), X(80), Y(20));

      this.xLaud -= 8;
      this.xVerde -= 8;
      this.xCarey -= 8;
      this.xLora -= 8;
      this.xGolfina += 8;

      if (this.xLaud < X(850) - this.tamSlider) {
        this.xLaud = X(850) - this.tamSlider;
        this.xVerde = X(650) - this.tamSlider;
        this.xCarey = X(450) - this.tamSlider;
        this.xLora = X(200) - this.tamSlider;
      }

      if (this.xGolfina > X(1250) + this.tamSlider / 4) {
        this.xGolfina = X(1250) + this.tamSlider / 4;
      }

      this.Punto(this.posX + X(500), Y(550));
      this.Punto(this.posX + X(650), Y(620));
      this.Punto(this.posX + X(770), Y(600));
      this.Punto(this.posX + X(450), Y(640));
      this.Punto(this.posX + X(600), Y(550));
    }

    if (agarre == 6) {
      this.xGolfina = X(450);
      this.Slider(
        this.Golfinaporcentaje,
        "29%",
        this.xGolfina,
        this.perfilGolfina,
        "Tortuga Golfina  ",

        "800.000",
        "40 kilos"
      );
      image(this.pGolfina, X(250), Y(300), 80, 80);
      this.Flecha(X(310), Y(430), X(150), Y(140), 50);
      text(
        "La tortuga Golfina suele suele ser de color gris y \n su piel esta pintada con puntitos grises oscuros",
        X(300),
        Y(300)
      );

      this.xBoba -= 8;
      this.xLaud -= 8;
      this.xVerde -= 8;
      this.xCarey -= 8;
      this.xLora -= 8;

      if (this.xBoba < X(1050) - this.tamSlider - this.tamSlider / 4) {
        this.xBoba = X(1050) - this.tamSlider - this.tamSlider / 4;
        this.xLaud = X(850) - this.tamSlider - this.tamSlider / 4;
        this.xVerde = X(650) - this.tamSlider;
        this.xCarey = X(450) - this.tamSlider;
        this.xLora = X(200) - this.tamSlider;
      }
      this.Punto(this.posX + X(650), Y(610));
      this.Punto(this.posX + X(440), Y(610));
    }

    pop();
    textSize(14);
    if (agarre == 1 || agarre == 2) {
      noStroke();
      fill(221, 100, 84);
      rect(this.posX + 170, 395, 100, 25);
      fill(0);
      text("Peligro critico", this.posX + 218, 412); //Estado
    }
    if (agarre == 3) {
      noStroke();
      fill(221, 133, 84);
      rect(this.posX + 170, 395, 100, 25);
      fill(0);
      text("En peligro", this.posX + 218, 412); //Estado
    }

    if (agarre == 6 || agarre == 5 || agarre == 4) {
      noStroke();
      fill(221, 207, 84);
      rect(this.posX + 170, 395, 100, 25);
      fill(0);
      text("Vulnerable", this.posX + 220, 412); //Estado
    }

    if (agarre == 7) {
      //BOTON SIGUIENTE
      estado = "alimentar";
      agarre = 0;
    }
  }
  
   //----------CREAR SLIDER------------

  Slider(imagen_, porcentaje_, posX_, foto_, nombre_, cantidad_, peso_) {
    //SLIDER TORTUGAS
    this.posX = posX_;
    this.Foto = foto_;
    this.nombre = nombre_;
    this.cantidad = cantidad_;
    this.peso = peso_;
    this.imagen = imagen_;
    this.porcentaje = porcentaje_;

    push();

    textAlign(CENTER);
    noStroke();
    fill(22, 85, 104);
    rect(X(450 - 115), Y(570 - 171), X(250), Y(420));
    image(this.imagen, X(450), Y(560), X(210), Y(320)); //imagenPorcentaje

    noStroke();

    fill(176, 230, 248);
    rect(this.posX + 100, 260, this.tamSlider, 320, 20); //Recuadro Slider
    image(this.Foto, this.posX + 220, 320, 70, 70); //Foto perfil

    push();
    fill(221, 100, 84);
    textSize(30);
    text(this.porcentaje, X(448), Y(770)); //Porcentaje
    text(this.porcentaje, X(450), Y(770)); //Porcentaje

    text(this.cantidad, this.posX + 218, 480); //Cantidad
    text(this.cantidad, this.posX + 220, 480); //Cantidad
    pop();

    fill(0);
    textSize(20);

    push();
    textFont(tipografia);
    textSize(24);
    text(this.nombre, this.posX + 220, 380); //Nombre
    pop();
    image(this.mapa, this.posX + X(600), Y(595), X(400), Y(370)); //Mapa

    textSize(14);
    text("Existen", this.posX + 220, 450); //Cantidad
    text("En el mundo", this.posX + 220, 500); //Cantidad
    fill(255);
    text("De probabilidad de \n consumir plasticos", X(450), Y(806));

    fill(121, 214, 244);
    rect(this.posX + 120, 520, 200, 25);

    fill(0);
    text("Peso aproximado: " + this.peso, this.posX + 220, 538); //Peso

    // rect(this.posX + this.tamSlider, 220, 20, 20); //Cerrar
    image(this.cerrar, this.posX + this.tamSlider + 50, 280, 20, 20);

    //BOTON CERRAR----------------
    if (mouseIsPressed) {
      if (
        mouseX > this.posX + this.tamSlider + 50 - 10 &&
        mouseX < this.posX + this.tamSlider + 50 + 20 &&
        mouseY > 280 - 10 &&
        mouseY < 280 + 10
      ) {
        agarre = 0;
      }
    }
    //-----------------------------

    pop();
  }

   //----------PUNTO DEL MAPA------------
  Punto(puntox_, puntoy_) {
    this.puntox = puntox_;
    this.puntoy = puntoy_;

    image(this.punto, this.puntox, this.puntoy, 50, 50);
  }
  
   //----------FLECHAS------------

  Flecha(fx_, fy_, tamfx_, tamfy_, rotacion_) {
    this.fx = fx_;
    this.fy = fy_;
    this.tamfx = tamfx_;
    this.tamfy = tamfy_;
    this.rotacion = rotacion_;
    
    push();
    translate(this.fx, this.fy);
    rotate(rotacion_);
    image(this.flecha, 0, 0, this.tamfx, this.tamfy);
    pop();
  }
}
