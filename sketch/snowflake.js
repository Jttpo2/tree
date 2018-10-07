class Snowflake {
  constructor(resolution) {
    this.resolution = resolution;
    this.lines = this.setupKochSnowflake();

    for (let i=0; i<this.resolution; i++) {
     this.generate();
   }
  }

  display() {
    this.lines.forEach(line => line.display());
  }

  generate() {
		let next = [];
		this.lines.forEach(l => {
			let a = l.kochA();
			let b = l.kochB();
			let c = l.kochC();
			let d = l.kochD();
			let e = l.kochE();

			next.push(new KochLine(a, b));
			next.push(new KochLine(b, c));
			next.push(new KochLine(c, d));
			next.push(new KochLine(d, e));
		})
		this.lines = next;
	}

	setupKochSnowflake() {
		let lines = [];
		let center = createVector(width / 2, height / 2);
		let radius = 90;
		let sections = 3;
		let r = createVector(0, -radius);
		let start = p5.Vector.add(center, r);
		let end = null;
		for (let s=0; s<sections; s++) {
			r.rotate(2 * PI/sections);
			let end = p5.Vector.add(center, r);
			lines.push(new KochLine(start, end));
			start = end;
		}
		return lines;
	}
}
