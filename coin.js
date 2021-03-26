class Coin {
  constructor() {
    //The size
    this.r = 100;
    //X starts of the edge
    this.x = width;
    //Y starts at the bottom
    this.y = height - this.r;
  }
  move() {
    //The whole screen is scrolling by 5 pixels
    this.x -= 5;
  }
  show() {
    image(cImg, this.x, this.y - 90, this.r - 50, this.r - 50);
  }
}
