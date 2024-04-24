let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d'); // context 란 뜻으로 ctx
let dino = {
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
    constructor() {
        // this.x = 500;
        // this.y = 200;
        // this.width = 50 + getRandomInt(-5, 6);
        // this.height = 50 + getRandomInt(-5, 6);
        this.width = 50 + getRandomInt(-5, 6);
        this.height = 50 + getRandomInt(-5, 6);
        this.x = 500;
        this.y = 250 - this.height;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
let cactus = new Cactus();

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;



function frameAction() {
    requestAnimationFrame(frameAction);

    cactus.x--;
    
    // 바닥선
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(600, 250);
    ctx.stroke();
    
    // 캐릭터,장애물
    dino.draw();
    cactus.draw();
}

