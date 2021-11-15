class Bioacumulacion {
  constructor() {
    //-------------------------BOTONES----------------------------------
    this.btn_plastico = loadImage("assets/btn/Btn-Ba-plasticos.png");
    this.btn_animales = loadImage("assets/btn/Btn-Ba-animales.png");
    this.btn_alimentos = loadImage("assets/btn/Btn-Ba-Alimentos.png");
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/tortuguitaHablando.png");

    this.xBtn_p1 = X(950);
    this.yBtn_p1 = Y(400);
    this.xBtn_p2 = X(600);
    this.yBtn_p2 = Y(800);
    this.xBtn_p3 = X(1200);
    this.yBtn_p3 = Y(800);
    this.xTortu = X(200);
    this.yTortu = Y(540);

  }

  Dibujar(){
    background(5, 49, 64);
    imageMode(CENTER);
    push();
    textSize(36);
    textFont(tipografia);
    fill(255);
    textAlign(CENTER)
    text("Hablemos de la Bioacumulación", displayWidth / 2, 100);

    pop();

    image(this.btn_plastico, this.xBtn_p1,this.yBtn_p1, X(204), Y(245));
    image(this.btn_animales, this.xBtn_p2,this.yBtn_p2, X(204), Y(245));
    image(this.btn_alimentos, this.xBtn_p3,this.yBtn_p3, X(204), Y(245));

    image(this.tortuga, this.xTortu,this.yTortu, X(200), Y(214));
    textSize(14);
    Dialogo("Es el proceso de acumulación de \nsustancias químicas en seres vivos. \n¡Conozcamos cómo sucede!", X(400), Y(350), X(420), Y(240), X(254), Y(310));

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
      estado = "paso02";
      agarre = 0;
    }
    if (agarre == 3 ) {
      estado = "paso03";
      agarre = 0;
    }

}
}
