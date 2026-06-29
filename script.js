const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for(let i=0;i<80;i++){

petals.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*6+3,

speed:Math.random()*2+1

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

petals.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y+=p.speed;

if(p.y>canvas.height){

p.y=-10;

p.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(draw);

}

draw();

document.getElementById("startBtn").onclick=function(){

alert("Welcome Anam ❤️\\nOur journey begins...");

}