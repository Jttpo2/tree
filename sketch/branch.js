class Branch {
  constructor(start, dirLength, aspectRatio) {
    this.start = start;
    this.dirLength = dirLength;
    this.aspectRatio = aspectRatio;
  }

  display() {
    let end = this.getEnd();
    strokeWeight(this.dirLength.mag() * this.aspectRatio);
    line(this.start.x, this.start.y, end.x, end.y);
  }

  getEnd() {
    return p5.Vector.add(this.start, this.dirLength);
  }

  getDirlength() {
    return this.dirLength.copy();
  }
}
