   const canvas = document.getElementById('myCanvas');
   const context = canvas.getContext('2d');
   
      context.fillStyle = '#87ceeb';
      context.fillRect(0, 0, canvas.width, canvas.height);
      const sunRadius = 50; 
      const sunColor = '#FFD700'; 
      const rayLength = 40; 
      const rayWidth = 3; 
      const rayColor = '#FFD700';
      
      function drawSun() {
         context.beginPath();
         context.arc(canvas.width / 6, canvas.height / 6, sunRadius, 0, 2 * Math.PI);
         context.fillStyle = sunColor;
         context.fill();

         context.lineWidth = rayWidth;
         context.strokeStyle = rayColor;

         for (let i = 0; i < 360; i += 30) {
            const angle = (i * Math.PI) / 180;
            const x = canvas.width / 6 + Math.cos(angle) * sunRadius;
            const y = canvas.height / 6 + Math.sin(angle) * sunRadius;
            const endX = canvas.width /6 + Math.cos(angle) * (sunRadius + rayLength);
            const endY = canvas.height / 6 + Math.sin(angle) * (sunRadius + rayLength);
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(endX, endY);
            context.stroke();
         }
      }
      drawSun();

       function drawCircle(x, y, radius, color) {
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
       }
         
      drawCircle(250, 100, 35, '#ffffff');
      drawCircle(300, 80, 35, '#ffffff'); 
      drawCircle(250, 70, 35, '#ffffff'); 

      drawCircle(410, 100, 40, '#ffffff'); 
      drawCircle(450, 100, 30, '#ffffff'); 
      drawCircle(400, 120, 40, '#ffffff');

      drawCircle(570, 100, 40, '#ffffff'); 
      drawCircle(560, 80, 30, '#ffffff'); 

   const fenceColor = '#008000'; 
   const stripeColor = '#8B4513'; 
   const fenceHeight = 150; 
   const fenceWidth = 10;
   const fenceSpacing = 20; 
   
   function drawFence() {
      context.fillStyle = fenceColor;
      context.fillRect(0, canvas.height - fenceHeight, canvas.width, fenceHeight);
      context.fillStyle = stripeColor;
      for (let x = 0; x < canvas.width; x += fenceWidth + fenceSpacing) {
          context.fillRect(x, canvas.height - fenceHeight, fenceWidth, fenceHeight);
                     }
       }
   drawFence();

   context.fillStyle = '#ffcc99';
   context.fillRect(200, 250, 300, 200);
   
   context.beginPath();
   context.moveTo(200, 250); 
   context.lineTo(500, 250);
   context.lineTo(450, 200); 
   context.lineTo(250, 200); 
   context.closePath();
   context.fillStyle = '#DC143C';
   context.fill();
       
   context.fillStyle = '#ff3';
   context.fillRect(250, 300, 60, 60); 
   context.fillStyle = '#ff3';
   context.fillRect(390, 300, 60, 60); 

   const grassColor = '#006400';

   function drawGreenBottom() {
      const bottomHeight = 50;
      context.fillStyle = grassColor;
      context.fillRect(0, canvas.height - bottomHeight, canvas.width, bottomHeight);
      }
drawGreenBottom();


   
