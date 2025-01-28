        //This is the file specific for wrld = 2 and 10(update function)
        //preparations for drawing the lines which connects the circles
        //gets the x coordinate of the first/second point you want to draw in wrld==2
        function getx(x1, y1, x2, y2, R) {
            var my_x;
            var tempx1 = R * (Math.abs(x2 - x1));
            var tempx2 = Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2));
            var tempx = tempx1 / tempx2;
            my_x = (x2 > x1) ? x1 + tempx : x1 - tempx;
            return my_x;
        }
        //gets the y coordinate of the first/second point you want to draw in wrld==2
        function gety(x1, y1, x2, y2, R) {
            var my_y;
            var tempy1 = R * (Math.abs(y2 - y1));
            var tempy2 = Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2));
            var tempy = tempy1 / tempy2
            my_y = (y2 > y1) ? y1 + tempy : y1 - tempy;
            return my_y;
        }

        
        //draws the line between the lines
        function drawline_wrld2(c1, c2) {
            var x1 = c1.x;
            var y1 = c1.y;
            var x2 = c2.x;
            var y2 = c2.y;
            var R1 = c1.R
            var R2 = c2.R
            var start_x = getx(x1, y1, x2, y2, R1)
            var start_y = gety(x1, y1, x2, y2, R1)
            var end_x = getx(x2, y2, x1, y1, R2)
            var end_y = gety(x2, y2, x1, y1, R2)
            ctx.beginPath();
            ctx.moveTo(start_x, start_y)
            ctx.lineTo(end_x, end_y)
            ctx.stroke();
        }
        //draw button
        function drawButton(x, y, height, width, text, bordercolor, color) {
            ctx.fillStyle = bordercolor
            ctx.fillRect(x, y, width, height)
            ctx.fillStyle = color
            ctx.fillRect(x + 10, y + 10, width - 20, height - 20)
            ctx.font = "bold 50px Tahoma"
            ctx.textAlign = "start"
            ctx.fillStyle = "#333333"
            ctx.fillText(text, x + 35, y + 50)
            ctx.fillStyle = "#000000"
            ctx.fillText(text, x + 32, y + 50)
        }
        //text in wrld = 10
        function putText(x, y, height, width, text, bordercolor, color, font, textY, textAlign) {
            ctx.fillStyle = bordercolor
            ctx.fillRect(x, y, width, height)
            ctx.fillStyle = color
            ctx.fillRect(x + 2, y + 2, width - 4, height - 4)
            ctx.font = font
            ctx.textAlign = textAlign = "start"
            ctx.fillStyle = "#000000"
            ctx.fillText(text, x + 3, textY)
        }
        //clear isclick inside circle class
        function clear_isClick() {
            L0.isClick = false
            L1_1.isClick = false
            L1_2.isClick = false
            L1_3.isClick = false
            L2_1.isClick = false
            L2_2.isClick = false
            L2_3.isClick = false
            L2_4.isClick = false
            L2_5.isClick = false
            L2_6.isClick = false
        }
        //draws the circles (preparation for function createArc)
        function arc(c, backgroundColor = 'gray') {
            createArc(c.x, c.y, c.R, c.name, 5, 'blue', backgroundColor, 'white')
        }
        //draws the circles for wrld 2
        function createArc(x, y, radius, text, borderWidth, borderColor, backgroundColor, textColor) {
            //fill in border color
            ctx.lineWidth = borderWidth;
            ctx.lineCap = 'round';
            ctx.strokeStyle = borderColor;
            //draw circle
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.closePath();
            //fill in background color
            ctx.fillStyle = backgroundColor;
            ctx.fill();

            ctx.stroke();
            //fill in text color
            ctx.font = "15px Arial";
            ctx.fillStyle = textColor;
            ctx.textAlign = "center"
            ctx.fillText(text, x, y)
        }

        function gmupdtwrld2() {
            //draws the states of the circles
            if (L0.unlocked == true) {
                arc(L0, 'gold')
            } else if((L0.exp < xp) && (L0.money < money)) {
                arc(L0, 'green')
            } else {
                arc(L0)
            }
            if (L1_1.unlocked == true) {
                arc(L1_1, 'gold')
            } else if ((L1_1.exp < xp) && (L0.unlocked == true) && (L0.money < money)) {
                arc(L1_1, 'green')
            } else {
                arc(L1_1)
            }
            if (L1_2.unlocked == true) {
                arc(L1_2, 'gold')
            } else if ((L1_2.exp < xp) && (L0.unlocked == true) && (L0.money < money)) {
                arc(L1_2, 'green')
            } else {
                arc(L1_2)
            }
            if (L1_3.unlocked == true) {
                arc(L1_3, 'gold')
            } else if ((L1_3.exp < xp) && (L0.unlocked == true) && (L0.money < money)) {
                arc(L1_3, 'green')
            } else {
                arc(L1_3)

            }
            if (L2_1.unlocked == true) {
                arc(L2_1, 'gold')
            } else if ((L2_1.exp < xp) && (L1_1.unlocked == true) && (L1_1.money < money)) {
                arc(L2_1, 'green')
            } else {
                arc(L2_1)
            }

            if (L2_2.unlocked == true) {
                arc(L2_2, 'gold')
            } else if ((L2_2.exp < xp) && (L1_1.unlocked == true) && (L1_1.money < money)) {
                arc(L2_2, 'green')
            } else {
                arc(L2_2)
            }
            if (L2_3.unlocked == true) {
                arc(L2_3, 'gold')
            } else if ((L2_3.exp < xp) && (L1_2.unlocked == true) && (L1_2.money < money)) {
                arc(L2_3, 'green')
            } else {
                arc(L2_3)
            }
            if (L2_4.unlocked == true) {
                arc(L2_4, 'gold')
            } else if ((L2_4.exp < xp) && (L1_2.unlocked == true) && (L1_2.money < money)) {
                arc(L2_4, 'green')
            } else {
                arc(L2_4)
            }
            if (L2_5.unlocked == true) {
                arc(L2_5, 'gold')
            } else if ((L2_5.exp < xp) && (L1_3.unlocked == true) && (L1_3.money < money)) {
                arc(L2_5, 'green')
            } else {
                arc(L2_5)
            }
            if (L2_6.unlocked == true) {
                arc(L2_6, 'gold')
            } else if ((L2_6.exp < xp) && (L1_3.unlocked == true) && (L1_3.money < money)) {
                arc(L2_6, 'green')
            } else {
                arc(L2_6)
            }
            drawline_wrld2(L0, L1_1)
            drawline_wrld2(L0, L1_2)
            drawline_wrld2(L0, L1_3)
            drawline_wrld2(L1_1, L2_1)
            drawline_wrld2(L1_1, L2_2)
            drawline_wrld2(L1_2, L2_3)
            drawline_wrld2(L1_2, L2_4)
            drawline_wrld2(L1_3, L2_5)
            drawline_wrld2(L1_3, L2_6)
            //draws the return button
            drawButton(5, 5, 80, 280, "RETURN", "#007700", "#009900")
        }

        function gmupdtwrld10() {
            //draw confirm and cancel buttons
            drawButton(50, 620, 80, 300, "CONFIRM", "#007700", "#009900")
            drawButton(370, 620, 80, 300, "CANCEL", "#007700", "#009900")
            //display description
            putText(350, 10, 80, 300, ability_name, "#000000", "#ffffff", "bold 25px Tahoma", 50)
            //display xp and money
            exp_text = "XP Points: ".concat(xp.toString())
            putText(10, 10, 50, 150, exp_text, "#000000", "#ffffff", "bold 15px Tahoma", 50)
            money_text = "Coins: ".concat(money.toString())
            putText(10, 65, 50, 150, money_text, "#000000", "#ffffff", "bold 15px Tahoma", 100)
            //data for rectangle around text the amount things needed and give value needed
            unlocked_exp_text = "You need ".concat(unlocked_exp.toString())
            unlocked_exp_text = unlocked_exp_text.concat(" xp to unlock me!")
            putText(350, 200, 30, 300, unlocked_exp_text, "#000000", "#ffffff", "bold 15px Tahoma", 220)
            unlocked_money_text = "You need ".concat(unlocked_money.toString())
            unlocked_money_text = unlocked_money_text.concat(" coins to unlock me!")
            putText(350, 250, 30, 300, unlocked_money_text, "#000000", "#ffffff", "bold 15px Tahoma", 270)
            description_text = descriptions[upgrade_level]
            putText(350, 300, 50, 300, description_text, "#000000", "#ffffff", "bold 15px Tahoma", 325)
            loadAndDrawImage(images_wrld10[upgrade_level].imageSrc);
        }

        function loadAndDrawImage(imageSrc) {
            const img = new Image();
            img.src = imageSrc;
            img.onload = function () {
              ctx.drawImage(img, 10, 120, 300, 300);
            };
          }