class Bifurcacion2 {
  constructor() {

    //-------------------------BOTONES----------------------------------
    this.btn_tortu = loadImage("assets/btn/Btn-tortugas.png");
    this.btn_ba = loadImage("assets/btn/btn-personas.png");
    //----------------------------AQUA----------------------------------
    this.tortuga = loadImage("assets/aqua/tortuguitaParada.png");
    //------------------------decorativo--------------------------------
    this.coral1 = loadImage("assets/bioacumulacion/coral01.png");
    this.coral2 = loadImage("assets/bioacumulacion/coral02.png");

    //------DEFINIMOS LA POSICIÓN EN X E Y DE CADA IMAGEN
    this.xBtn_tortu = X(1200);// el número va entre parentesis porque es la función responsive que va a modificar LA POSICIÓN
    this.yBtn_tortu = Y(700);
    this.xBtn_ba = X(600);
    this.yBtn_ba = Y(700);
    this.xTortu = X(950);
    this.yTortu = Y(300);
    this.xCoral1 = X(200);
    this.yCoral1 = Y(970);
    this.xCoral2 = X(1700);
    this.yCoral2 = Y(940);
  }

  Dibujar(){
    background(27, 99, 123);
    imageMode(CENTER);
    //POSICIONAMOS LAS IMAGENES Y PASAMOS EL TAMAÑO CON LA FUNCION RESPONSIVE

    //PARAMETROS DEL PARENTESIS: VARIABLE DE LA IMAGEN, POSX, POS Y, TAM X, TAM Y
    image(this.btn_tortu, this.xBtn_tortu,this.yBtn_tortu, X(204), Y(245));
    image(this.btn_ba, this.xBtn_ba,this.yBtn_ba, X(204), Y(245));

    image(this.coral1, this.xCoral1,this.yCoral1, X(387), Y(223));
    image(this.coral2, this.xCoral2,this.yCoral2, X(335), Y(302));

    image(this.tortuga, this.xTortu,this.yTortu, X(195), Y(317));
    textSize(14);
    Dialogo("Los desechos en el mar \nnos perjudican a todos.\nAcá te explico cómo", X(1040), Y(100), X(330), Y(180), X(950), Y(70));


  }

  //ACÁ HACEMOS QUE CAMBIE DE ESTADO CON EL CLICKEAR
  // VER LA FUNCIÓN QUE LO HACE CLICKEABLE EN SKETCH.JS LÍNEA 69 A 73
   Avaza() {
     if (agarre > 0) {
       this.agarrar = true;
     }

      if (agarre == 1 ) {
        estado = "bioacumulacion";
        agarre = 0;
      }
     if (agarre == 2 ) {
       estado = "tortugas";
       agarre = 0;
     }
}
}
