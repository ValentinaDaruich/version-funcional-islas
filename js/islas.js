class Planisferio {
  constructor() {
    this.planisferio = loadImage("assets/islas/planisferio.png");
    this.tortuga = loadImage("assets/aqua/tortuguitaHablando.png");
    this.isla = loadImage("assets/islas/isla.png");
    this.ubi = loadImage("assets/islas/ubicación.png");
    this.flechaFria = loadImage("assets/islas/flecha fria.png");
    this.flechaCalida = loadImage("assets/islas/flecha calida.png");
    this.reloj = loadImage("assets/islas/relojito.png");
    this.peso = loadImage("assets/islas/peso.png");
     this.btnSalir = loadImage("assets/btn/btnSalir.png");

    //-------------------------BOTONES----------------------------------
    this.btn_isla = loadImage("assets/islas/isla-planisferio.png");

    this.px = X(200);
    this.py = Y(800);
    this.nombre = [
      "Isla del Atlantico Norte",
      "Isla del Atlantico Sur",
      "Isla del Indico ",
      "Isla del Pacífico Sur",
      "Isla del Pacífico Norte",
    ];

    this.xMapa = X(980);
    this.yMapa = Y(450);
    this.tamX = X(1544);
    this.tamY = Y(894);
    this.xTortu = X(150);
    this.yTortu = Y(670);
    this.caracteristicas = false;
  }
  Dibujar() {
    background(79, 149, 173);
    imageMode(CENTER);

    image(this.planisferio, this.xMapa, this.yMapa, this.tamX, this.tamY);

    if (this.caracteristicas == false) {
      push();
      textFont(tipografia);
      fill(5, 49, 64);
      textAlign(CENTER);
      text("ISLA \n ATLÁNTICO NORTE", X(750), Y(500));
      text("ISLA \n ATLÁNTICO SUR", X(880), Y(760));
      text("ISLA \n PACÍFICO SUR", X(400), Y(780));
      text("ISLA \n PACÍFICO NORTE", X(1680), Y(500));
      text("ISLA \n ÍNDICO", X(1300), Y(780));
      textSize(16);
      pop();

      //-------------------ISLA PACÍFICO SUR--------------------------
      image(this.btn_isla, X(400), Y(700), X(95), Y(97));
      //----------------ISLA ATLÁNTICO NORTE--------------------------
      image(this.btn_isla, X(750), Y(420), X(95), Y(97));
      //----------------ISLA ATLÁNTICO SUR----------------------------
      image(this.btn_isla, X(880), Y(680), X(95), Y(97));
      //--------------------ISLA ÍNDICO------------------------------
      image(this.btn_isla, X(1300), Y(700), X(95), Y(97));
      //----------------ISLA PACÍFICO NORTE--------------------------
      image(this.btn_isla, X(1680), Y(420), X(95), Y(97));

      image(this.tortuga, this.xTortu, this.yTortu, X(250), Y(214));
      fill(255);
      textSize(14);
      Dialogo(
        "Cada isla es única,\n¿Me acompañas \na recorrerlas?",
        X(300),
        Y(500),
        X(250),
        Y(190),
        X(225),
        Y(470)
      );
    }
    this.botones();
  }

  botones() {
    if (this.caracteristicas == true) {
      //------------------------CONTENEDOR----------------------------
      push();
      fill(255);
      noStroke();
      rectMode(CENTER);
      rect(displayWidth / 2, this.py + Y(200), X(1503), Y(250), 20, 20, 0);
      pop();

      push();
      textFont(tipografia);
      textSize(18);
      textAlign(LEFT);
      fill(0);
      text("¿A DÓNDE VAMOS?", X(320), this.py + 80);
      pop();
      //-----------------BOTONES MENÚ DESPLEGABLE----------------------
      for (let i = 0; i < 5; i++) {
        //--------------------------ICONOS-------------------------------
        image(menuIslas[i], 320 + i * +210, this.py + Y(180), X(68), Y(62));

        //---------------------------TEXTO--------------------------------
        push();
        textStyle(BOLD);
        textSize(14);
        textAlign(CENTER);
        fill(0);
        text(this.nombre[i], 320 + i * +210, this.py + 150);
        pop();
      }
   image(this.btnSalir,X(150),Y(100),X(140),Y(62));
    }
  }

//--------------------ISLAS------------------------
  Zoom(mousePressed) {
    var escala = 1;
    if (agarre > 0 && agarre < 6) {
      this.agarrar = true;
      this.caracteristicas = true;

      this.tamX++;
      this.tamY++;
    }

    if (agarre == 1) {
      this.xMapa++;
      this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) + 600;
        this.yMapa = Y(450) - 150;
        this.tamX = X(1544) * 1.8;
        this.tamY = Y(894) * 1.8;
        this.Islas(
          "ISLA DEL PACIFICO SUR",
          X(500),
          Y(550),
          X(270),
          Y(270),
          "2.6 Km",
          "Descubierta en 2011"
        );
      }
    }
    if (agarre == 2) {
      this.xMapa+= 0.5;
     // this.yMapa++;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) + 400;
        this.yMapa = Y(450) + 100;
        this.tamX = X(1544) * 2.5;
        this.tamY = Y(894) * 2.5;
        this.Islas(
          "ISLA DEL ATLANTICO NORTE",
          X(750),
          Y(500),
          X(270),
          Y(270),
          "Aun se desconoce \n su tamaño",
          "Descubierta en 2009"
        );
      }
    }

    if (agarre == 3) {
       this.xMapa += 0.3;
      this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) + 80;
        this.yMapa = Y(450) - 270;
        this.tamX = X(1544) * 2.5;
        this.tamY = Y(894) * 2.5;
        this.Islas(
          "ISLA DEL ATLANTICO SUR",
          X(750),
          Y(500),
          X(150),
          Y(150),
          "0,7 km",
          "Descubierta en 2017"
        );
      }
    }

    if (agarre == 4) {
      this.xMapa--;
      this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) - 450;
        this.yMapa = Y(450) - 270;
        this.tamX = X(1544) * 2.5;
        this.tamY = Y(894) * 2.5;
        this.Islas(
          "ISLA DEL INDICO",
          X(1100),
          Y(500),
          X(280),
          Y(280),
          "ENTRE \n 2 .1 y 5 km",
          "Descubierta en 2019"
        );
      }
    }
    if (agarre == 5) {
      this.xMapa--;
      //this.yMapa--;
      if (this.tamX >= X(1544) * 1.1 && this.tamY >= Y(894) * 1.1) {
        this.xMapa = X(980) - 800;
        this.yMapa = Y(450) - 20;
        this.tamX = X(1544) * 1.3;
        this.tamY = Y(894) * 1.3;
        this.Islas(
          "ISLA DEL PACIFICO NORTE",
          X(1100),
          Y(400),
          X(400),
          Y(450),
          "1.6 millones de km",
          "Tiene mas de 60 años"
        );
        push();
        fill(0);
        image(this.peso,1180,195,20,20)
        text("pesa 80 toneladas", 1200,200);
        pop();
      }
    }
    //BOTON SALIR
    if(agarre == 6){
      this.caracteristicas = false;
       this.xMapa = X(980);
        this.yMapa = Y(450);
       this.tamX = X(1544);
        this.tamY = Y(894);
    }
  }

  //-------------CARACTERISTICAS-----------------

  Islas(nombre_, islax_, islay_, tamx_, tamy_, textTam_, descubrimiento_) {
    this.nombree = nombre_;
    this.islax = islax_;
    this.islay = islay_;
    this.tamx = tamx_;
    this.tamy = tamy_;
    this.textTam = textTam_;
    this.descubrimiento = descubrimiento_;

    push();
    imageMode(CENTER);
    image(this.isla, this.islax, this.islay, this.tamx, this.tamy); //LA ISLA
    image(this.ubi, this.islax, this.islay - this.tamy+this.tamy/3, 50, 80); //ICONO UBICACION
    image(this.flechaFria, this.islax + this.tamx / 2, this.islay, 56, 200); //FLECHA AGUA FRIA
    image(this.flechaCalida, this.islax - this.tamx / 2, this.islay, 56, 200); //FLECHA AGUA CALIDA

    textFont(tipografia);
     textSize(30);
    fill(0);
    text(this.nombree, 70, 140); //NOMBRE DE LA ISLA

    textAlign(CENTER);
    textSize(20);
    text(this.textTam, this.islax, this.islay + this.tamx / 2); //TAMAÑO DE LA ISLA
    pop();

    image(this.reloj, this.islax + this.tamx - 20, this.islay - 100, 20, 20); //ICONO RELOJ
    fill(0);
    text(this.descubrimiento,this.islax + this.tamx,this.islay - 95); //DESCUBRIMIENTO

    //REFERENCIAS AGUAS CALIDAS- AGUAS FRIAS
    fill(221, 100, 84);
    noStroke();
    rect(this.islax + this.tamx - 20, this.islay, 10, 10);
    fill(176, 230, 248);
    rect(this.islax + this.tamx - 20, this.islay + 20, 10, 10);
    fill(255);
    text("Aguas calidas", this.islax + this.tamx, this.islay + 10);
    text("Aguas frias", this.islax + this.tamx, this.islay + 30);
    //
  }
}
