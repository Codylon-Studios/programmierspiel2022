//draws wrld=13(death screen) and death control

function gmupdtwrld13() {
    ctx.fillStyle = "#cccccc"
    ctx.fillRect(0, 0, 700, 750)
    drawlvl(ils1x, ils1y)
    drawlvl(ils2x, ils2y)
    for (let a = 0; a < allilsx.length; a++) {
        drawlvl(allilsx[a], allilsy[a])
    }
    player.resi = 0
    ctx.fillStyle = "#FF1111"
    ctx.font = "bold 100px Tahoma"
    ctx.textAlign = "start"
    ctx.fillText("YOU DIED", 100, 100)
    ctx.fillStyle = "#990000"
    ctx.fillText("YOU DIED", 102, 102)
    ctx.font = "bold 30px Tahoma"
    ctx.textAlign = "start"
    ctx.fillText("CLICK TO RETURN TO TITLE SCREEN", 82, 202)
    ctx.fillStyle = "#FF1111"
    ctx.fillText("CLICK TO RETURN TO TITLE SCREEN", 80, 200)
}


//heart account system
function death() {
    //death
    for (let ed = 0; ed - 1 < allmobx.length; ed++) {
        //is there a mob in the player
        if ((allmobx[ed] - 1 < player.x) && (allmobx[ed] + 51 > player.x)) {
                if ((allmoby[ed] - 1 > player.y) && (allmoby[ed] -51 < player.y)){
                        if (player.hearts == 1) {
                            if (allmobfreeze[ed] == 0) {
                                player.hearts = player.hearts - 1
                                wrld = 13
                            }
                        }else {
                            if (allmobfreeze[ed] == 0) {
                                player.hearts = player.hearts - 1
                                player.resi = 40
                                allmobx[ed] = allmobx[ed] + 200
                            }
                        }
                }
        }
        //is there a mob in the player
        if ((allmobx[ed] > player.x - 1) && (allmobx[ed] < player.x + 51)){
                if ((allmoby[ed] < player.y - 1) && (allmoby[ed] > player.y - 51)){
                        if (player.hearts == 1) {
                            if (allmobfreeze[ed] == 0) {
                                player.hearts = player.hearts - 1
                                wrld = 13
                            }
                        }else {
                            if (allmobfreeze[ed] == 0) {
                                player.hearts = player.hearts - 1
                                player.resi = 40
                                allmobx[ed] = allmobx[ed] + 200
                            }
                        }
                }
        }
    }
    //void control
    if (player.y > 700) {
        gravity = 70
        player.hearts -= 1
        player.resi = 40
        if (player.hearts == 0) {
            wrld = 13
        }
    }
}

//displays the hearts of the player
function heartss() {
    if (player.hearts > 0) {
        drawhearts(640, 20, "red")
        if (player.hearts > 1) {
            drawhearts(580, 20, "red")
            if (player.hearts > 2) {
                drawhearts(520, 20, "red")
                if (player.hearts > 3) {
                    drawhearts(640, 20, "gold")
                    if (player.hearts > 4) {
                        drawhearts(580, 20, "gold")
                        if (player.hearts > 5) {
                            drawhearts(520, 20, "gold")
                        }
                    }
                }
            }
        }
    }
}