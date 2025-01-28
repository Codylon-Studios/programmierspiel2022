        //This file draws the nplayer and the sword, and is included to sourcecode.html with <script src="drawsword.js"></script>
        
        
        //draw sword
        function drawsword(x, y) {
            ctx.fillStyle = "#C0C0C0"
            ctx.fillRect(x + 12, y + 7, 5, 25)
            ctx.fillStyle = "#C0C0C0"
            ctx.fillRect(x + 13, y + 4, 3, 5)
            ctx.fillStyle = "#A0A0A0"
            ctx.fillRect(x + 13.5, y + 8, 2, 23)
            ctx.fillStyle = "#707070"
            ctx.fillRect(x + 9, y + 30, 12, 3)
        }

        //draw player
        function drawplayer(x, y) {
            if (player.resi > 0) {
                ctx.beginPath();
                ctx.arc(x + 25, y + 25, 40, 0, 2 * Math.PI, false);
                ctx.lineWidth = 7;
                ctx.strokeStyle = '#5555aa';
                ctx.stroke();
                }
                ctx.fillStyle = "#004F00"
                ctx.fillRect(x, y, 50, 50)
                ctx.fillStyle = "#FFFFFF"
                ctx.fillRect(x + 35, y + 10, 7.5, 15)
                ctx.fillStyle = "#FFFFFF"
                ctx.fillRect(x + 23, y + 10, 7.5, 15)
                ctx.fillStyle = "#333333"
                ctx.fillRect(x + 23, y + 5, 7.5, 3)
                ctx.fillStyle = "#003A00"
                ctx.fillRect(x + 23, y + 25, 7.5, 3)
                ctx.fillStyle = "#333333"
                ctx.fillRect(x + 35, y + 5, 7.5, 3)
                ctx.fillStyle = "#003A00"
                ctx.fillRect(x + 35, y + 25, 7.5, 3)
                ctx.fillStyle = "#341C02"
                ctx.fillRect(x + 7, y + 32.5, 14.5, 10)
                ctx.fillStyle = "#452D13"
                ctx.fillRect(x + 35, y + 29.5, 6, 3)
                ctx.fillStyle = "#5F0000"
                ctx.fillRect(x + 37, y + 20, 6, 5)
                ctx.fillStyle = "#5F0000"
                ctx.fillRect(x + 25, y + 20, 6, 5)
                ctx.fillStyle = "#003A00"
                ctx.fillRect(x + 34, y + 30, 7.5, 10)
                ctx.fillStyle = "#001800"
                ctx.fillRect(x + 36, y + 31, 1.5, 4)
                ctx.fillStyle = "#001800"
                ctx.fillRect(x + 39, y + 31, 1.5, 4)
                }
                
        //draw hit animation by sword
        function drawhit(x, y) {
            ctx.fillStyle = "#555555"
            ctx.fillRect(x + 60, y + 43, 6, 6)
            ctx.fillStyle = "#555555"
            ctx.fillRect(x + 66, y + 37, 6, 6)
            ctx.fillStyle = "#555555"
            ctx.fillRect(x + 72, y + 7, 6, 30)
            ctx.fillStyle = "#555555"
            ctx.fillRect(x + 66, y + 1, 6, 6)
            ctx.fillStyle = "#888888"
            ctx.fillRect(x + 60 + 6, y + 43, 6, 6)
            ctx.fillStyle = "#888888"
            ctx.fillRect(x + 66 + 6, y + 37, 6, 6)
            ctx.fillStyle = "#888888"
            ctx.fillRect(x + 72 + 6, y + 7, 6, 30)
            ctx.fillStyle = "#888888"
            ctx.fillRect(x + 66 + 6, y + 1, 6, 6)
            ctx.fillStyle = "#BBBBBB"
            ctx.fillRect(x + 60 + 6 + 6, y + 43, 6, 6)
            ctx.fillStyle = "#BBBBBB"
            ctx.fillRect(x + 66 + 6 + 6, y + 37, 6, 6)
            ctx.fillStyle = "#BBBBBB"
            ctx.fillRect(x + 72 + 6 + 6, y + 7, 6, 30)
            ctx.fillStyle = "#BBBBBB"
            ctx.fillRect(x + 66 + 6 + 6, y + 1, 6, 6)
        }