const canvas = document.querySelector('#myCanvas2');
const context = canvas.getContext('2d');
const eyeWidth = 20;
const eyeHeight = 30;
const eyeOffsetX = 30; 
const eyeOffsetY = 50;
const strokeColor = '#000000';
if (canvas.getContext) {
   let smile = canvas.getContext("2d");
   smile.beginPath();
   smile.fill();
   smile.fillStyle = "yellow";
   smile.beginPath();
   smile.arc(140, 130, 100, 0, 2 * Math.PI);
   smile.fill();
   context.stroke();
   
   smile.beginPath();
   smile.moveTo(90, 160);
   smile.quadraticCurveTo(130, 230, 200, 160);
   smile.fill();
   smile.lineWidth = 3;
   smile.strokeStyle = "black";
   smile.stroke();

   const leftEyeX = canvas.width / 2 - eyeOffsetX;
   const rightEyeX = canvas.width / 2 + eyeOffsetX;
   const eyeY = canvas.height / 2 - eyeOffsetY;

   context.beginPath();
   context.ellipse(leftEyeX, eyeY, eyeWidth, eyeHeight, 0, 0, 2 * Math.PI);
   context.ellipse(rightEyeX, eyeY, eyeWidth, eyeHeight, 0, 0, 2 * Math.PI);
   context.fillStyle = strokeColor;
   context.fill();
}

