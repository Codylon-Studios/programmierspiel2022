//
        //Gadjets
        //
        //Gadjetbars
        function drawgraphbar(x, y) {
            ctx.fillStyle = 'black'
            ctx.fillRect(x, y, 40, 40)
            ctx.clearRect(x + 2.5, y + 2.5, 35, 35)
            if (L2_4.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 40, y, 40, 40)
            ctx.clearRect(x + 40 + 2.5, y + 2.5, 35, 35)
            if (L2_3.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 40 + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 80, y, 40, 40)
            ctx.clearRect(x + 80 + 2.5, y + 2.5, 35, 35)
            if (L1_1.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 80 + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 120, y, 40, 40)
            ctx.clearRect(x + 120 + 2.5, y + 2.5, 35, 35)
            if (L1_3.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 120 + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 160, y, 40, 40)
            ctx.clearRect(x + 160 + 2.5, y + 2.5, 35, 35)
            if (L1_2.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 160 + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 200, y, 40, 40)
            ctx.clearRect(x + 200 + 2.5, y + 2.5, 35, 35)
            if (L1_2.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 200 + 2.5, y + 2.5, 35, 35)
            }

            ctx.fillStyle = 'black'
            ctx.fillRect(x + 240, y, 40, 40)
            ctx.clearRect(x + 240 + 2.5, y + 2.5, 35, 35)
            if (L1_2.unlocked != true) {
                ctx.fillStyle = 'Silver'
                ctx.fillRect(x + 240 + 2.5, y + 2.5, 35, 35)
            }


            const allgadjetcooldowntotal = [1500, 560, 140, 600, 0, 0, 400]

            for (let i = 0; i < gdjtcldwn.length; i++) {
                ctx.fillStyle = ('green')
                ctx.fillRect(x + 40 * i + 2.5, y + 2.5, 35, (gdjtcldwn[i] / allgadjetcooldowntotal[i]) * 35)
            }


            //
            // drawing the different gadjets into the bar
            //
            //shockwave
            ctx.beginPath();
            ctx.arc(x + 20, y + 21, 15, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#777799';
            ctx.stroke();
            ctx.arc(x + 20, y + 21, 12, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#5555CC';
            ctx.stroke();
            ctx.arc(x + 20, y + 21, 9, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#3333FF';
            ctx.stroke();

            //slowmo
            ctx.beginPath();
            ctx.arc(x + 60, y + 21, 8, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#FF0000"
            ctx.fillStyle = "#FF0000"
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x + 60, y + 21, 12, 0, 2 * Math.PI, false);
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#555555"
            ctx.stroke();

            //Double jump
            ctx.beginPath();
            ctx.moveTo(x + 100, y + 8);
            ctx.lineTo(x + 90, y + 20);
            ctx.lineTo(x + 110, y + 20);
            ctx.fillStyle = "#00AA00"
            ctx.fill();
            ctx.fillStyle = "#00AA00"
            ctx.fillRect(x + 95, y + 20, 10, 15)

            //dart
            ctx.beginPath();
            ctx.moveTo(x + 150, y + 21);
            ctx.lineTo(x + 130, y + 15);
            ctx.lineTo(x + 130, y + 25);
            ctx.fillStyle = "#000000"
            ctx.fill();

            //Drill Dash
            ctx.beginPath();
            ctx.moveTo(x + 190, y + 21);
            ctx.lineTo(x + 180, y + 13);
            ctx.lineTo(x + 180, y + 27);
            ctx.fillStyle = "#0033FF"
            ctx.fill();
            ctx.fillStyle = "#0033FF"
            ctx.fillRect(x + 165, y + 16, 18, 8)

            //Bodenschlag
            ctx.beginPath();
            ctx.moveTo(x + 220, y + 32);
            ctx.lineTo(x + 210, y + 20);
            ctx.lineTo(x + 230, y + 20);
            ctx.fillStyle = "#00AA00"
            ctx.fill();
            ctx.fillStyle = "#00AA00"
            ctx.fillRect(x + 215, y + 5, 10, 15)

            //Shield
            ctx.beginPath();
            ctx.arc(x + 260, y + 21, 12, 0, 2 * Math.PI, false);
            ctx.lineWidth = 7;
            ctx.strokeStyle = '#77777';
            ctx.stroke();
            ctx.fillStyle = "#A5492A";
            ctx.fill()
        }


        //
        //Gadjetsfuntions
        //
        //shockwave
        function shockwave(x, y, timeleft) {
            if (timeleft > 2) {
                ctx.beginPath();
                ctx.arc(x + 25, y + 25, 1200 - timeleft, 0, 2 * Math.PI, false);
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#777799';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x + 25, y + 25, 1195 - timeleft, 0, 2 * Math.PI, false);
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#7777BB';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x + 25, y + 25, 1190 - timeleft, 0, 2 * Math.PI, false);
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#7777DD';
                ctx.stroke();
                for (let a = 0; a < allmobx.length; a++) {
                    if (allmobx[a] * allmoby[a] - 1200 + timeleft < (1200 - timeleft) * (1200 - timeleft)) {
                        allmobfreeze[a] = 1
                    }
                }
            }
            if (timeleft == 3) {
                for (let b = 0; b < allmobx.length; b++) {
                    allmobfreeze[b] = 0
                }
            }
        }

        //dart
        function dart(timeleft) {
            ctx.fillStyle = "#000000"
            ctx.fillRect(playx + 800 + 50 - timeleft, playy, 40, 10)
        }


        
        //
        //MAIN FUNCTION: GADJETUPDT
        //
        function gadjetupdt() {
            drawgraphbar(10, 10)
            if (gdjtpara[0] > 0 && L2_4.unlocked == true) {
                shockwave(player.x, player.y, gdjtpara[0])
                gdjtpara[0] -= 3

            }

            if (gdjtpara[3] > 0) {
                dart(gdjtpara[3])
                gdjtpara[3] -= 4
            }

            if (gdjtpara[1] > 0) {
                gdjtpara[1] -= 2
            }
            


            for (let f = 0; f < gdjtcldwn.length; f++) {
                if (gdjtcldwn[f] > 0) {
                    gdjtcldwn[f] -= 1
                }
            }
        }
