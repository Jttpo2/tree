new p5();

let backgroundColor;
let lines = [];

function setup() {
	let canvas = createCanvas(
		window.innerWidth,
		window.innerHeight
	);

	backgroundColor = color(200);

		lines = setupKochSnowflake();

	// lines.push(new KochLine(start, end));

	for (let i=0; i<5; i++) {
	 generate();
 }
}

function draw() {
	background(backgroundColor);

	lines.forEach(line => line.display());
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}

	function generate() {
		let next = [];
		lines.forEach(l => {
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
		lines = next;
	}

	function setupKochSnowflake() {
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
