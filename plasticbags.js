class Bag {
  constructor() {
    //the size of the plastic bag
    this.r = 100;
    //X starts of the edge
    this.x = width;
    //Y starts at the bottom
    this.y = height - this.r;
    this.value = -1;
  }
  move() {
    //The whole screen is scrolling by 4 pixels
    this.x -= 4;
  }
  show() {
    image(pImg, this.x, this.y - 85, this.r, this.r);
  }
}
