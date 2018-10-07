class KochLine {
  constructor(start, end){
    this.start = start;
    this.end = end;
  }

  display() {
    stroke(20);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  kochA() {
    return this.start.copy();
  }

  kochB() {
    let b = p5.Vector.sub(this.end, this.start)
    b.div(3);
    b.add(this.start);
    return b;
  }

  kochC() {
    let a = this.kochA();

    let v = p5.Vector.sub(this.end, this.start)
    v.div(3);
    a.add(v);
    v.rotate(-radians(60));
    a.add(v);
    // c.add(this.start);
    return a;
  }

  kochD() {
    return p5.Vector.sub(this.end, this.start).mult(2 / 3).add(this.start);
  }

  kochE() {
    return this.end.copy();
  }
}
