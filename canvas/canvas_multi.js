var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(100,100,100,300);
// //c.fillRect(x,y,width,height)


console.log(canvas);


//Line
// c.beginPath();
// //c.moveTo(x,y);
// c.moveTo(50,300);
// //c.lineTo(x,y);
// c.lineTo(300,100);
// c.lineTo(400,300);

// c.strokeStyle = "#fa34a3";
// c.stroke();

//Arc for circle

// c.beginPath();
// c.arc(300,300,30,0,Math.PI *2,false);
// c.strokeStyle = 'blue'
// c.stroke();

// for (var i=0;i<400;i++) {
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI *2,false);
//     c.strokeStyle = 'blue'
//     c.stroke();
// }






function Circle(x,y,dx,dy,radius,color,w,h){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.w = w;
    this.h = h;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
        c.strokeStyle = this.color;
        c.stroke();
        //c.fill();
    }
    this.update = function(w2 = w,h2 = h){
        if(this.x+this.radius>w2 || this.x-this.radius < 0){
            this.dx= -this.dx;
        }
    
        if (this.y+this.radius>h2 || this.y-this.radius <0){
            this.dy = -this.dy;
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

        this.draw();
    }
}







function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i=0;i< circleArray.length/2;i++) {
        circleArray[i].update();
        circleArray[i+circleArray.length/2].update(circleArray[i].x+circleArray[i].radius,circleArray[i].h)+circleArray[i].radius;
    }

    

}


var circleArray=[];

for(var i=0;i<100;i++) {
    var radius = 30;
    var x = Math.random()*(window.innerWidth - radius*2)+radius;
    var y = Math.random()*(window.innerHeight - radius*2)+radius;
    var dx = (Math.random()-0.5) * 5;
    var dy = (Math.random()-0.5) * 5;
    var color1 = 'blue'
    var color2 = 'red'
    
    circleArray.push(new Circle(x,y,dx,dy,radius,color1,innerHeight,innerWidth));
    circleArray.push(new Circle(x,y,dx,dy,radius/2,color2,innerHeight,innerWidth));
    
}

animate();