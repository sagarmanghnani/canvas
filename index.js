
function draw(){
    let canvas = document.getElementById('canvas');
    
    // if(canvas.getContext){
    //     let ctx = canvas.getContext('2d');
    //     console.log(ctx, 'contex2d');
    //     ctx.beginPath();
    //     ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    //     // ctx.moveTo(110, 75);
    //     ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    //     // ctx.moveTo(65, 65);
    //     ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    //     // ctx.moveTo(95, 65);
    //     ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    //     ctx.stroke();
    //     // context2d.fill()
    // }
}

let xPosInitial = 0;
let yPosInitial = 0;
function getPosition(event){
    xPosInitial = event.clientX;
    yPosInitial = event.clientY;
}

function getEndPosition(event){
    let xPos = event.clientX;
    let yPos = event.clientY;

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(xPosInitial, yPosInitial)
    ctx.lineTo(xPosInitial, yPos);
    ctx.lineTo(xPos, yPos);
    ctx.closePath();
    ctx.fillStyle = randomColorGenerator();
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fill();
}


function randomColorGenerator(){
    var colorStr = '0123456789ABCDEF';
    let generatedColor = '#';
    for(let i = 0; i < 6;i++){
        generatedColor += colorStr[Math.floor(Math.random() * 16)];
    }
    return generatedColor;
}


