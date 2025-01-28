    //This js file draws the mobs and dmg from player
    
    //draw mob
    function drawmob(lvl, x, y, index) {
        ctx.fillStyle = "#000000"
        ctx.fillRect(x, y, 50, 50)
        if (allmobfreeze[index] == 1) {
            ctx.fillStyle = "#0000FF"
            ctx.fillRect(x, y, 50, 50)
        }
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(x + 2.5, y + 10, 7.5, 15)
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(x + 12.5, y + 10, 7.5, 15)
        ctx.fillStyle = "#999999"
        ctx.fillRect(x + 12.5, y + 5, 7.5, 3)
        ctx.fillStyle = "#999999"
        ctx.fillRect(x + 2.5, y + 5, 7.5, 3)
        ctx.fillStyle = "#555555"
        ctx.fillRect(x + 27.5, y + 32.5, 15, 10)
        ctx.fillStyle = "#555555"
        ctx.fillRect(x + 35, y + 30, 6, 3)
        ctx.fillStyle = "#666666"
        ctx.fillRect(x + 2.5, y + 20, 6, 5)
        ctx.fillStyle = "#666666"
        ctx.fillRect(x + 12.5, y + 20, 6, 5)
    }

    //player making dmg to mobs
    function hitupdt() {
        //making hit
        if (hittimeleft > 0) {
            hittimeleft -= 1
            drawhit(player.x, player.y)
            //making mobs infront of player die
                for (let ef = 0; ef - 1 < allmobx.length; ef++) {
                    if ((allmobx[ef] > player.x + 49) && (allmobx[ef] < player.x +99)){
                        if ((allmoby[ef] < player.y - 1) && (allmoby[ef] > player.y - 51)){
                            allmobx[ef] = -9999999
                        }
                    }
                }
        }
    }