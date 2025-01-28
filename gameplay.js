
//wrld 1 (gameplay) functions
       
       //sets the jump of the mob
        function gravityy() {
            if (gravity <= 0) {
                for (let i = 0; i < allilsx.length; i++) {
                    if (player.x + 50 > allilsx[i] && player.x < allilsx[i] + 300 && player.y + 50 > allilsy[i] && player.y + 50 < allilsy[i] + 50) {
                        gravity = 40
                    }
                }
                if (player.x + 50 > ils2x && player.x < ils2x + 300 && player.y + 50 > ils2y && player.y + 50 < ils2y + 50) {
                    gravity = 40
                }
                else {
                    if (player.x + 50 > ils1x) {
                        if (player.x < ils1x + 300) {
                            if (player.y + 50 > ils1y) {
                                if (player.y + 50 < ils1y + 50) {
                                    gravity = 40
                                }else {
                                    down()
                                }
                            }else {
                                down()
                            }
                        }else {
                            down()
                        }
                    }else {
                        down()
                    }
                }
            }else {
                //gravity is positive
                up()
            }
        }

        function mobupdt() {
            //updating postion of all mobs
            for (let c = 0; c < allmobx.length; c++) {
                if (allmobgravity[c] <= 0) {
                    for (let i = 0; i < allilsx.length; i++) {
                        if (allmobx[c] + 50 > allilsx[i] && allmobx[c] < allilsx[i] + 300 && allmoby[c] + 50 > allilsy[i] && allmoby[c] + 50 < allilsy[i] + 50) {
                            allmobgravity[c] = 40
                        }
                    }
                }
                if (allmobfreeze[c] == 0) {
                    allmobgravity[c] -= 1
                    allmoby[c] -= allmobgravity[c] * 0.3

                }
                drawmob(1, allmobx[c], allmoby[c], c)
            }


            //Mob movement on x to player
            for (let c = 0; c < allmobx.length; c++) {
                if (allmobx[c] < player.x) {
                    for (let ca = 0; ca < allilsx.length; ca++) {
                        if (allmobx[c] + 50 < allilsx[ca] + 301) {
                            if (allmobfreeze[c] == 0) {
                                allmobx[c] += 0.2
                            }
                        }
                    }
                }
                if (allmobx[c] > player.x) {
                    for (let ca = 0; ca < allilsx.length; ca++) {
                        if (allmobx[c] - 1 >= allilsx[ca]) {
                            if (allmobfreeze[c] == 0) {
                                allmobx[c] -= 0.2
                            }
                        }
                    }
                }
            }

            //making mobs jump on eachother
            for (let es = 0; es - 1 < allmobx.length; es++) {
                for (let de = 0; de < allmobx.length; de++) {
                    if (allmobx[es] - 1 < allmobx[de]) {
                        if (allmobx[es] + 51 > allmobx[de]) {
                            if (allmoby[es] + 51 > allmoby[de]) {
                                if (allmoby[es] - 24 < allmoby[de]) {
                                    if (es != de) {
                                        allmobgravity[es] = 30
                                        allmobgravity[de] = 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // draws the first island
        function drawlvl(x, y) {
            ctx.fillStyle = "#FF0000"
            ctx.fillRect(x, y, 300, 20)
        }
        //for gravity(jumping)
        function down() {
            gravity = gravity - 1
            player.y += gravity * -0.3
        }
        //for gravity(jumping)
        function up() {
            gravity = gravity - 1
            player.y -= gravity * 0.3

        }
        //let the player dash left(back)
        function dashl(intensity) {
            ils1x += intensity
            ils2x += intensity
            for (let i = 0; i < allilsx.length; i++) {
                allilsx[i] += intensity
            }
            fnshx += intensity
            for (let i = 0; i < allmobx.length; i++) {
                allmobx[i] += intensity
            }

        }
        //let the player dash right(forward)
        function dashr(intensity) {
            ils1x -= intensity
            ils2x -= intensity

            for (let i = 0; i < allilsx.length; i++) {
                allilsx[i] -= intensity
            }
            fnshx -= intensity
            for (let i = 0; i < allmobx.length; i++) {
                allmobx[i] -= intensity
            }

        }