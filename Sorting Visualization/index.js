var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;

var incrementx = -1;
var incrementy = -1;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    if(x-10<1 || x+10 > canvas.width-1){
        incrementx *= -1;
    }
    if(y-10<1 || y+10 > canvas.width-1){
        incrementy *= -1;
    }

    x += incrementx;
    y += incrementy;
}

//setInterval(draw,10);

async function drawInsertionSort(){

    var input = document.getElementById("input").value;
    var x = input.split(",");

    for(let i = 1; i < x.length; i++){
        key = x[i];
        j = i-1;
        while( i > 0 && x[j] > key){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawData(x);
            x[j+1] = x[j];
            j = j-1;
            await new Promise(r => setTimeout(r, 1000));
        }
        x[j+1] = key;

    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawData(x);
}

function drawData(x){
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";

    for(let i = 0; i < x.length; i++){
        height = 0;
        for(let j = 0; j < parseInt(x[i]); j++){
            height += 40;
        }
        ctx.beginPath();
        ctx.rect(20 + i*40, 120, 20, height);
        ctx.stroke();
        ctx.fillText(x[i], 20 + i * 40, 100);
        ctx.closePath();
    }
}