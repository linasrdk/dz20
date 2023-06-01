const canvas = document.getElementById('myCanvas3');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(50, 250); 
context.lineTo(350, 250); 
context.lineTo(290, 310); 
context.lineTo(110, 310); 
context.closePath();

context.fillStyle = '#008000'; 
context.fill();

context.lineWidth = 3;
context.strokeStyle = '#000000';
context.stroke();
    

context.beginPath();
context.moveTo(200, 120); 
context.lineTo(300, 250); 
context.lineTo(100, 250); 
context.closePath();

context.fillStyle = '#FF0000'; 
context.fill();

context.lineWidth = 3;
context.strokeStyle = '#000000';
context.stroke();
      

context.beginPath();
context.moveTo(200, 80);
context.lineTo(230, 80);
context.lineTo(215, 90);
context.lineTo(230, 100);
context.lineTo(200, 100);
context.closePath();

context.fillStyle = 'blue';
context.fill();
context.strokeStyle = 'black';
context.lineWidth = 1;
context.stroke();



