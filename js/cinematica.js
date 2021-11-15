class Cinematica {
  constructor() {
    this.cinematica = loadImage("assets/intro/cinematica.gif");
    this.pantalla1 = loadImage("assets/otros/pantalla2.png");
    this.contadorGif = 0;
    this.transicion = false;
    this.pantallay = height / 2 + 300;
  }

  Dibujar() {
    push();
    imageMode(CENTER);
    rectMode(CENTER);
    image(this.cinematica, width / 2, height / 2, displayWidth, displayHeight); //DIBUJAMOS GIF

    this.contadorGif++;
    print(this.contadorGif);

    if (this.contadorGif >= 450) {   //CUANDO EL GIF TERMINA
      background(112, 203, 223);
      image(this.pantalla1, width / 2, this.pantallay, 1620, 1510);  //APARECE LA PANTALLA DE LAS ISLAS
      this.contadorGif = 450;
      noFill();
      noStroke();
      rect(width / 2 - 20, height / 2, 250, 100); //RECT PARA EL BOTON
      fill(40, 122, 149);
      rect(width / 2, this.pantallay + 1150, displayWidth, 800); //RECT PARA LA TRANSICION DEL FONDO
    }
    pop();

    if (this.transicion == true) {
      this.pantallay -= 4;
    }
    if (this.pantallay <= -height) {
      estado = "formacion";
      this.pantallay = height / 2 + 300;
      this.transicion = false;
      frameCount = 0;
    }
  }

  btnComenzar() {
    if (
      mouseX > width / 2 - 125 &&
      mouseX < width / 2 + 125 &&
      mouseY > height / 2 - 100 &&
      mouseY < height / 2 + 100
    ) {
      this.transicion = true;
    }
  }
}
