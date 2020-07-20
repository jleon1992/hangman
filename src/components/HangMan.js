import React, {useEffect} from 'react'


export const HangMan = props => {
    const {guessCount} = props
    useEffect(()=>{
        const canvas = document.getElementById("canvas1");
        if (canvas.getContext("2d")) { // Check HTML5 canvas support
            const context = canvas.getContext("2d"); // get Canvas Context object
            
            
        
            if(guessCount === 10){
                context.beginPath();
                context.fillStyle = "bisque"; // #ffe4c4
                context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
                // (x,y) center, radius, start angle, end angle, anticlockwise
                context.fill();
        
                
            }
            if(guessCount === 9){
                context.beginPath();
                context.strokeStyle = "red"; // color
                context.lineWidth = 3;
                context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
                context.stroke();
            }
            if(guessCount === 8){
                // eyes
                context.beginPath();
                context.fillStyle = "green"; // color
                context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
                context.fill();
                context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
                context.fill();
            }
            if(guessCount === 7){
                // body
                context.beginPath();
                context.moveTo(200, 80);
                context.lineTo(200, 180);
                context.strokeStyle = "navy";
                context.stroke();
            }
            if(guessCount === 6){
                // arms
                context.beginPath();
                context.strokeStyle = "#000000"; // blue
                context.moveTo(200, 80);
                context.lineTo(150, 130);
                context.moveTo(200, 80);
                context.lineTo(250, 130);
                context.stroke();
            }
            if(guessCount === 5){
                context.beginPath();
                context.strokeStyle = "#000000";
                context.moveTo(200, 180);
                context.lineTo(150, 280);
                context.moveTo(200, 180);
                context.lineTo(250, 280);
                context.stroke();
            }
            if(guessCount === 4){
                context.beginPath();
                context.strokeStyle = "#000000"; 
                context.moveTo(210, 260);
                context.lineTo(290, 260);
                context.stroke();
                // cross
            
            }
            if(guessCount === 3){
                context.beginPath();
                context.strokeStyle = "#000000"; 
                context.moveTo(200, 20);
                context.lineTo(200, 5);
                context.stroke();
            }
            if(guessCount === 2){
                context.beginPath();
                context.strokeStyle = "#000000"; 
                context.moveTo(200, 5);
                context.lineTo(250, 5);
                context.stroke();
            }
            if(guessCount === 1){
                context.beginPath();
                context.strokeStyle = "#000000"; 
                context.moveTo(250, 5);
                context.lineTo(250, 260);
                context.stroke();
            }
            if(guessCount === 0){
                context.beginPath();
            context.strokeStyle = "#000000"; // blue
            context.moveTo(170, 20);
            context.lineTo(230, 80);
            context.moveTo(230, 20);
            context.lineTo(170, 80);
            context.stroke();
            }
        }
    })
    
    
    return (
        <div>
            <canvas id="canvas1" width="300px" height="300px" >
                    Your browser does not support HTML5 Canvas element
                    </canvas>
        </div>
    )
}

export default HangMan