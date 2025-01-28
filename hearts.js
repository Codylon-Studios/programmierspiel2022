//This file draws the hearts, and is included to sourcecode.html with <script src="hearts.js"></script>

//drawhearts
function drawhearts(x, y, color) {
    if (color == "red") {
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x, y, 4, 16)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 4, y - 4, 4, 24)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 8, y - 8, 4, 32)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 12, y - 8, 4, 36)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 16, y - 4, 4, 36)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 20, y, 4, 36)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 24, y, 4, 36)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 44, y, 4, 16)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 40, y - 4, 4, 24)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 36, y - 8, 4, 32)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 32, y - 8, 4, 36)
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(x + 28, y - 4, 4, 36)
    }
    if (color == "gold") {
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x, y, 4, 16)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 4, y - 4, 4, 24)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 8, y - 8, 4, 32)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 12, y - 8, 4, 36)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 16, y - 4, 4, 36)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 20, y, 4, 36)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 24, y, 4, 36)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 44, y, 4, 16)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 40, y - 4, 4, 24)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 36, y - 8, 4, 32)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 32, y - 8, 4, 36)
        ctx.fillStyle = "#FFd700"
        ctx.fillRect(x + 28, y - 4, 4, 36)
    }
}