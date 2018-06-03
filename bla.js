function setup() {
	createCanvas(1000,900);
	background(255);
	drawline(50,500,50,50);
}

function drawline(x1,y1,x2,y2){
	if(x1>x2||y1>y2){
		k=x1;
		x1=x2;
		x2=k;
		l=y1;
		y1=y2;
		y2=l;
	}
	let dy=y2-y1,dx=x2-x1;
	if(x1==x2){
		dx=dy;
	}
	else if(y1==y2){
		dy=dx;
	}
	console.log("dx",dx)
	let p=2*dy-dx;
	let x=x1,y=y1;
	for (var i = 0; i < dx; i++) {
		if (p<0) {
			x=x+1;
			y=y;
			point(x,y);
			p=p+2*dy;
		}
		else {
			x=x+1;
			y=y+1;
			point(x,y);
			p=p+2*dy-2*dx;
		}
	}
}
