function setup() {
	var col=0;
	col=mouseX;
	// body...
	createCanvas(1280,720)
	translate(width/2, height/2)
	drawcircle(0 ,0, 200)
}

function drawcircle(xc , yc, r) {
	let p0;
	let xall = [];
	let yall = [];
	if(Number.isInteger(r))
		p0 = 1-r
	else
		p0 = 5/4 -r
	let x = 0, y = r;
	let pk = p0;
	while (x <= y) {
		if(pk<0){
			x=x+1;
			pk = pk + 2*x +1;
		} 
		else{
			x=x+1;
			y=y-1;
			pk = pk + 2*x -2*y +1;
		}
		displayCircle(x,y);
		displayCircle(x, -y);
		displayCircle(-x, y);
		displayCircle(-x, -y);
		displayCircle(y, x);
		displayCircle(y, -x);
		displayCircle(-y, x);
		displayCircle(-y, -x);
	}

	function displayCircle(x,y){
		let x2=x+xc;
		let y2=y+yc;
		console.log(x2,y2)
		point(x2,y2);
	}

		// body...
		line(xc, yc, x, y);
		line(xc, yc, -y, x);
		rotate(PI/3);
		line(xc, yc, y, x);
		rotate(-PI/3);
		rotate(PI+10)
		line(xc,yc, y, -x);
		rotate(-PI-10)
		rotate(-0.3)
		line(xc,yc, -x, -y)
		rotate(0.3)
}
