//define the update game function
function gmupdt() {
    //regulates the tick speed (see variabels.js)
    if (gdjtpara[1] > 0) {
        if (helfta < tick_speed) {
            helfta += 1
        }else {
            helfta = 0
        }
        if (helfta != tick_speed) {
           //helfta = 1
            return
        }
    }
    
   //clears screen for refreshing
    ctx.clearRect(0, 0, 700, 750)
    //if player dies
    if (wrld == 13) {
        gmupdtwrld13()
    }
    //lobby
    if (wrld == 0) {
        gmupdtwrld0()
    }
    //upgrade section (tree)
    if (wrld == 2) {
        gmupdtwrld2()
    }
    //upgrade section detailed
    if (wrld == 10) {
        gmupdtwrld10()
    }
    //levelselector
    if (wrld == 6) {
        gmupdtwrld6()
    }
    if (wrld == 5){
        gmupdtwrld5()
    }
    if (wrld == 99){
        gmupdtwrld99()
    }
    //updating position of player
    if (wrld == 1) {
        gravityy()
        mobupdt()
        hitupdt()   
        heartss()
        gadjetupdt()
        
        drawplayer(player.x, player.y)
        drawsword(player.x, player.y)
        drawlvl(ils1x, ils1y)
        drawlvl(ils2x, ils2y)

        if (player.resi == 0){
            death()
        }
        if (player.resi > 0) {
            player.resi -= 1
        }

        //draws the islands (except 1st and 2nd)
        for (let a = 0; a < allilsx.length; a++) {
            drawlvl(allilsx[a], allilsy[a])
        }
        
        //drawing finishing line
        ctx.fillStyle = "#99ff00"
        ctx.fillRect(fnshx + 380, fnshy - 610, 30, 10000)
        // drawing lava
        ctx.fillStyle = '#ff6200'
        ctx.fillRect(-600, 700, 9999, 80)


        if (fnshx < -240) {
            ils1x = 0
            ils1y = 400
            ils2x = 500
            ils2y = 500
            allilsx = [900, 1000, 1300, 1400, 1700, 2300, 2500, 2800, 3400]
            allilsy = [400, 600, 650, 500, 300, 600, 400, 300, 650]
            player.x = 100
            player.y = 100
            allmobx = [1000, 1400, 1200]
            allmoby = [500, 400, 100]
            allmobgravity = [0, 20, 20]
            allmobfreeze = [0, 0, 0]
            gdjtcldwn = [0, 0, 0, 0, 0]
            gdjtpara = [0, 0, 0, 0, 0]
            dashtimelleft = 0
            dashtimerleft = 0
            fnshx = 3400
            money = money + 100
        }

        //dash
        if (dashtimelleft > 0) {
            dashtimelleft -= 1
            dashl(12)
        }
        if (dashtimerleft > 0) {
            dashtimerleft -= 1
            dashr(12)
        }
        if (minitimelleft > 0) {
            minitimelleft -= 1
            dashl(2)
        }
        if (minitimerleft > 0) {
            minitimerleft -= 1
            dashr(2)
        }
    }
    
    //key detection and response
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'a':
                if (dashtimelleft == 0) {
                    if (dashtimerleft == 0) {
                        dashtimelleft = 10
                    }
                }
                break;
            case 'd':
                if (dashtimerleft == 0) {
                    if (dashtimelleft == 0) {
                        dashtimerleft = 10
                    }
                }
                break;
            case 'q':
                if (dashtimerleft == 0) {
                    if (dashtimelleft == 0) {
                        minitimelleft = 10
                    }
                }
            case 'e':
                if (minitimerleft == 0) {
                    if (minitimelleft == 0) {
                        minitimerleft = 10
                    }
                }
            case ' ':
                if (hittimeleft == 0 && L0.unlocked == true) {
                    hittimeleft = 40
                }
                break;
            case '1':
                if (gdjtcldwn[0] == 0 && L2_4.unlocked == true) {
                    gdjtcldwn[0] = 1500
                    gdjtpara[0] = 1140

                }
                break;
            case '2':
                if (gdjtcldwn[1] == 0 && L2_3.unlocked == true) {
                    gdjtcldwn[1] = 560
                    gdjtpara[1] = 260
                }
                break;
            case 'w':
                if (gdjtcldwn[2] == 0 && L1_1.unlocked == true) {
                    gravity += 40
                    gdjtcldwn[2] = 140
                }
                break;
            case '3':
                if (gdjtcldwn[3] == 0 && L1_3.unlocked == true) {

                    playx = player.x
                    playy = player.y

                    gdjtcldwn[3] = 600
                    gdjtpara[3] = 800
                }
                break;
            case '4':
                console.log("clicked")
                if (gdjtcldwn[6] == 0 && L2_6.unlocked == true) {
                    console.log("cooldown")
                    player.resi = 120
                    gdjtcldwn[6] = 400
                }
                break;
        }
    })
}