var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); // context 란 뜻으로 ctx

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10, 
    y: 200, 
    width: 50, 
    height: 50, 
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50
        this.height = 50
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


var timer = 0;
var cactusLeft = [];
var jumpUP = false;
var jumpitme = 0;
var animation;

function frameAction() {
    animation = requestAnimationFrame(frameAction);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (timer % 160 === 0){
        var cactus = new Cactus();
        cactusLeft.push(cactus);
    }
    cactusLeft.forEach((a, i, o)=>{
        if (a.x < 0){
            o.splice(i, 1)
        }
        dinocrash (dino, a)

        a.x--;
        a.draw();
    })
    if (jumpUP == true){
        dino.y--;
        jumpitme++;
    }
    if (jumpUP == false) {
        if (dino.y < 200) {
            dino.y++;
        }
    }

    if (jumpitme > 100){
        jumpUP = false;
        jumpitme = 0;
    }

    dino.draw();
}

frameAction();

// 충돌**********
function dinocrash (dino, cactus){
    var xDif = cactus.x - (dino.x + dino.width);
    var yDif = cactus.y - (dino.y + dino.height);
    if (xDif < 0 && yDif <0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }

}

document.addEventListener('keydown', function(e){
    if (e.code === 'Space' && dino.y == 200){
        jumpUP = true;
    }    
});



