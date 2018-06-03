/*
To make a graph using DDA ( Lab -2 )
- Prabin Acharya
*/

function setup() {
	createCanvas(1000, 900);
}

function draw() {
    background(255);
    textSize(12);
    
    drawline(100, 100, 100, 560);
    drawline(90, 110, 100, 100);
    drawline(110, 110, 100, 100);
	
	rotate(-PI/2);
	text("Distance from Banepa (in  km)", -450, 40);
	rotate(PI/2);

    drawline(100, 560, 800, 560);
	drawline(790, 550, 800, 560);
	drawline(800, 560, 790, 570);
    
    text('Temperature (in degrees)', 400, 610);
    drawline(10, 20, 15, 10);
	
	let xall = [700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150];
	let yall = [150, 300, 200, 200, 430, 478, 165, 345, 293, 522, 233, 350];
	let distance = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
	let temp = [0, 3, 6, 8, 12, 15, 18, 21, 24, 27, 30];
	
	for (var i = 0; i < xall.length; i++) {
		x1 = xall[i], y1 = yall[i];
		x2 = xall[i+1], y2 = yall[i+1];
		drawline(x1, y1, x2, y2);
		
		var p = 560-38*(i+1);
		textAlign(CENTER);
		text(distance[i], 75, p+4);
		text(temp[i], xall[11-i], 580);
		
		drawline(95, p, 105, p);
		drawline(xall[i]-50, 555, xall[i]-50, 565);
	}	
}

function drawline(x0, y0, x1, y1) {
	let dx = x1-x0, dy = y1-y0;
	if(Math.abs(dx) > Math.abs(dy))
		stepsize = Math.abs(dx);
	else
		stepsize = Math.abs(dy);
	
	let xIncrement = dx/stepsize;
	let yIncrement = dy/stepsize;
	x = x0;
	y = y0;
	
	for (var v = 0; v < stepsize; v++) {
		x = x + xIncrement;
		y = y + yIncrement;
		point(x, y);
	}
}
