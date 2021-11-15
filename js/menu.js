class Menu {
  constructor(){
    this.px = X(60);
    this.py = Y(60);
    this.nombre = ["Origen", "Islas", "Concientización", "Tortugas", "Bioacumulación"];
  }
  Dibujar(){
    imageMode(CENTER);
    image(seccion[5] , this.px , this.py , X(110) , Y(88));
  }

  botones(){
    //------------------------CONTENEDOR----------------------------
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.px + X(450),this.py + Y(10), X(720),Y(165), 0, 0, 20);
    pop();
    //-----------------BOTONES MENÚ DESPLEGABLE----------------------
    for(let i=0; i<5 ; i++){
    //--------------------------ICONOS-------------------------------
      push();
      //filter(GRAY); //pone las img en escala de grises
      image( seccion[i] , 150 + (i*+110) , this.py , X(111) , Y(89) );
      pop();
    //---------------------------TEXTO--------------------------------
      push();
      textFont(tipografia);
      textSize(14);
      textAlign(CENTER);
      fill(0);
      text(this.nombre[i], 150 + (i*+110) , this.py + 45);
      pop();
    }
  }
  Avaza() {
    if (agarre > 0) {
      this.agarrar = true;
    }
     if (agarre == 200 ) {
       this.botones();
     }
     if (agarre == 20 ) {
       estado = "origen";
       agarre = 0;
     }
     if (agarre == 30 ) {
       estado = "mapa";
       agarre = 0;
     }
     if (agarre == 40 ) {
       estado = "reciclaje";
       r=1;
       agarre = 0;
     }
     if (agarre == 50 ) {
       estado = "tortugas";
       r=2;
       agarre = 0;
     }
     if (agarre == 60 ) {
       estado = "bioacumulacion";
       agarre = 0;
     }

  }
}
