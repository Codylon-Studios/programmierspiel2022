//draws the lobby (wrld=0)

function gmupdtwrld0() {
    //drawing lobby
    //drawing play button
    ctx.fillStyle = "#007700"
    ctx.fillRect(190, 490, 320, 120)
    ctx.fillStyle = "#009900"
    ctx.fillRect(200, 500, 300, 100)
    ctx.font = "bold 100px Tahoma"
    ctx.textAlign = "start"
    ctx.fillStyle = "#333333"
    ctx.fillText("PLAY", 222, 590)
    ctx.fillStyle = "#000000"
    ctx.fillText("PLAY", 218, 588)
    //drawing level announcment
    ctx.fillText("LEVEL " + level, 180, 88)
    //drawing player and sword 
    drawplayer(320, 430)
    drawsword(320, 430)
    //drawing upgrade button
    ctx.fillStyle = "#770000"
    ctx.fillRect(90, 620, 520, 120)
    ctx.fillStyle = "#990000"
    ctx.fillRect(100, 630, 500, 100)
    ctx.font = "bold 85px Tahoma"
    ctx.textAlign = "start"
    ctx.fillStyle = "#333333"
    ctx.fillText("UPGRADES", 116, 720)
    ctx.fillStyle = "#000000"
    ctx.fillText("UPGRADES", 112, 718)
    //drawing Lvlselect
    ctx.fillStyle = "#333388"
    ctx.fillRect(10, 10, 90, 50)
    ctx.fillStyle = "#5555AA"
    ctx.fillRect(15, 15, 80, 40)
    ctx.font = "bold 25px Tahoma"
    ctx.textAlign = "start"
    ctx.fillStyle = "#333333"
    ctx.fillText("Level", 23, 45)
    ctx.fillStyle = "#000000"
    ctx.fillText("Level", 22, 44)
}