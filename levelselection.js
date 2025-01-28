//levelselection (wrld = 6)

function gmupdtwrld6() {
    ctx.font = "bold 80px Tahoma"
    ctx.textAlign = "start"
    ctx.fillStyle = "#333333"
    ctx.fillText("Levelselector", 80, 100)
    drawButton(10, 150, 65, 200, "LVL 1", "#007700", "#009900")

    if (lvlunlocked > 1) {
        drawButton(250, 150, 65, 200, "LVL 2", "#007700", "#009900")
    }
    else {
        drawButton(250, 150, 65, 200, "LVL 2", "#777777", "#999999")
    }

    if (lvlunlocked > 2) {
        drawButton(490, 150, 65, 200, "LVL 3", "#007700", "#009900")
    }
    else {
        drawButton(490, 150, 65, 200, "LVL 3", "#777777", "#999999")
    }
    if (lvlunlocked > 3) {
        drawButton(10, 255, 65, 200, "LVL 4", "#007700", "#009900")
    }
    else {
        drawButton(10, 255, 65, 200, "LVL 4", "#777777", "#999999")
    }

    if (lvlunlocked > 4) {
        drawButton(250, 255, 65, 200, "LVL 5", "#007700", "#009900")
    }
    else {
        drawButton(250, 255, 65, 200, "LVL 5", "#777777", "#999999")
    }

    if (lvlunlocked > 5) {
        drawButton(490, 255, 65, 200, "LVL 6", "#007700", "#009900")
    }
    else {
        drawButton(490, 255, 65, 200, "LVL 6", "#777777", "#999999")
    }

    drawButton(230, 650, 65, 240, "Cancel", "#007700", "#009900")
}