class Branch {
  constructor(start, dirLength) {
    this.start = start;
    this.dirLength = dirLength;
  }

  display() {
    let end = this.getEnd();
    line(this.start.x, this.start.y, end.x, end.y);
  }

  getEnd() {
    return p5.Vector.add(this.start, this.dirLength);
  }

  getDirlength() {
    return this.dirLength.copy();
  }
}
