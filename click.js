        //hja
        //creating click function
        function click() {
            //logs infos
            console.log(mx, "mousex")
            console.log(my, "mousey")
            console.log(wrld, "wrldlvl")
            
            if (wrld == 0) {
                //checking if play button is clicked
                if ((mx > 190 && mx < 510) && (my > 490 && my < 610)) {
                    //setting world to fight or game, updating game
                    wrld = 1
                    player.hearts = 6
                    //resetting coordinates and variables
                    if (level == 1) {
                        gravity = 0
                        ils1x = 0
                        ils1y = 400
                        ils2x = 500
                        ils2y = 500
                        allilsx = [900, 1000, 1300, 1400, 1700, 2300, 2500, 2800, 3400]
                        allilsy = [400, 600, 700, 500, 300, 600, 400, 300, 700]
                        player.y = 100
                        allmobx = [1000, 1400, 1200]
                        allmoby = [500, 400, 100]
                        allmobgravity = [0, 20, 20]
                        allmobfreeze = [0, 0, 0]
                        gdjtcldwn = [0, 0, 0, 0, 0]
                        gdjtpara = [0, 0, 0, 0, 0]
                        dashtimelleft = 0
                        dashtimerleft = 0
                        player.x = 100
                    }
                    gmupdt()
                }
            }

            //checking if upgrade button was clicked
            if (wrld == 0) {
                if ((mx > 90 && mx < 610) && (my > 620 && my < 740)) {
                    //setting world to upgrading lobby, updating game
                    wrld = 2
                    gmupdt()
                }
            }

            if (wrld == 0) {
                if ((mx > 30 && mx < 120) && (my > 30 && my < 80)) {
                    //setting for lvlselector
                    wrld = 6
                    gmupdt()
                }
            }
            //featureblock
            if (wrld == 5){
                if ((mx > 5 && mx < 285) && (my > 5 && my < 85)) {
                    wrld = 2
                    gmupdt()
                }
            }
            //tester
            if (wrld == 99){
                if ((mx > 5 && mx < 285)&& (my> 5 && my < 85)){
                    wrld = 0
                    gmupdt()

                }
            }

            if (wrld == 2) {
                //checking if return button was clicked
                if ((mx > 5 && mx < 285) && (my > 5 && my < 85)) {
                    wrld = 0
                    gmupdt()
                }

                //checking if the circels are clicked
                if (L0.IsClickMe() == true) {
                    unlocked_exp = L0.exp
                    unlocked_money = L0.money
                    ability_name = L0.name
                    upgrade_level =0
                    L0.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L1_1.IsClickMe() == true) {
                    unlocked_exp = L1_1.exp
                    unlocked_money= L1_1.money
                    ability_name = L1_1.name
                    upgrade_level =1
                    L1_1.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L1_2.IsClickMe() == true) {
                    unlocked_exp = L1_2.exp
                    unlocked_money= L1_2.money
                    ability_name = L1_2.name
                    upgrade_level =2
                    L1_2.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L1_3.IsClickMe() == true) {
                    unlocked_exp = L1_3.exp
                    unlocked_money= L1_3.money
                    ability_name = L1_3.name
                    upgrade_level =3
                    L1_3.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L2_1.IsClickMe() == true) {
                    unlocked_exp = L2_1.exp
                    unlocked_money= L2_1.money
                    ability_name = L2_1.name
                    upgrade_level =4
                    //L2_1.isClick = true
                    wrld = 5
                    gmupdt()
                }
                if (L2_2.IsClickMe() == true) {
                    unlocked_exp = L2_2.exp
                    unlocked_money= L2_2.money
                    ability_name = L2_2.name
                    upgrade_level =5
                    //L2_2.isClick = true
                    wrld = 5
                    gmupdt()
                }
                if (L2_3.IsClickMe() == true) {
                    unlocked_exp = L2_3.exp
                    unlocked_money= L2_3.money
                    ability_name = L2_3.name
                    upgrade_level =6
                    L2_3.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L2_4.IsClickMe() == true) {
                    unlocked_exp = L2_4.exp
                    unlocked_money= L2_4.money
                    ability_name = L2_4.name
                    upgrade_level =7
                    L2_4.isClick = true
                    wrld = 10
                    gmupdt()
                }
                if (L2_5.IsClickMe() == true) {
                    unlocked_exp = L2_5.exp
                    unlocked_money= L2_5.money
                    ability_name = L2_5.name
                    upgrade_level =8
                    //L2_5.isClick = true
                    wrld = 5
                    gmupdt()
                }
                if (L2_6.IsClickMe() == true) {
                    unlocked_exp = L2_6.exp
                    unlocked_money= L2_6.money
                    ability_name = L2_6.name
                    upgrade_level =9
                    //L2_6.isClick = true
                    wrld = 5
                    gmupdt()
                }
            }

            if (wrld == 10) {
                //checking if confirm button was clicked
                //drawButton(50,620,80,300,"CONFIRM","#007700","#009900")            
                if ((mx > 50 && mx < 350) && (my > 620 && my < 700)) {
                    if ((xp >= unlocked_exp) && (money >= unlocked_money)){
                        //setting the unlocked mode to true or false
                        if (L0.isClick == true) {
                            L0.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L1_1.isClick == true && L0.unlocked == true) {
                            L1_1.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L1_2.isClick == true && L0.unlocked == true) {
                            L1_2.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L1_3.isClick == true && L0.unlocked == true) {
                            L1_3.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_1.isClick == true && L1_1.unlocked == true) {
                            L2_1.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_2.isClick == true && L1_1.unlocked == true) {
                            L2_2.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_3.isClick == true && L1_2.unlocked == true) {
                            L2_3.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_4.isClick == true && L1_2.unlocked == true) {
                            L2_4.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_5.isClick == true && L1_3.unlocked == true) {
                            L2_5.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                        else if (L2_6.isClick == true && L1_3.unlocked == true) {
                            L2_6.unlocked = true
                            xp = xp - unlocked_exp
                            money = money - unlocked_money
                        }
                    }else{
                        console.log("Not enough money OR xp")
                    }
                    clear_isClick()
                    wrld = 2
                    gmupdt()
                }
                //drawButton(370,620,80,300,"CANCEL","#007700","#009900")
                if ((mx > 370 && mx < 670) && (my > 620 && my < 700)) {
                    clear_isClick()
                    wrld = 2
                    gmupdt()

                }

            }
            //setting movement for touch display
            if (wrld == 1) {
                    //FIXME SHOULOD PREVENT PLAYER MOVING FOR WARD OR BACKWARD ACCORDING TO THE PLACE WHERE PLAY IS PRESSED
                    /*if (firsttime_excecute = true){
                        mx = undefined
                        my = undefined
                        firsttime_excecute = false
                    }*/
                    if ((mx < 300) && (my > 100)) {
                        if (dashtimelleft == 0) {
                            dashtimelleft = 10
                        }
                    }
                    if ((mx > 300) && (my > 100)){
                        if (dashtimerleft == 0) {
                            dashtimerleft = 10
                        }
                    }
                    //FIXME TOUCH DOES NOT WORK PROPERLY; 
                    //touchscreen gadjet activation
                    /*if ((32<mx) && (mx<72 && L2_4.unlocked == true)){
                        if ((32<my) && (my<72)){
                        console.log("my current; ",mx,my)
                        gdjtcldwn[0] = 1500
                        gdjtpara[0] = 110
                        }
                    }
                    if ((50<mx<90) && (10<my<50 && L2_3.unlocked == true)){
                        console.log("my current2")
                        gdjtcldwn[1] = 560
                        gdjtpara[1] = 260
                    }
                    if ((90<mx<130) && (10<my<50) && (L1_1.unlocked == true)){
                        gravity += 40
                        gdjtcldwn[2] = 140
                    }
                    if ((130<mx<170) && (10<my<50) && (L1_3.unlocked == true)){
                        playx = player.x
                        playy = player.y
    
                        gdjtcldwn[3] = 600
                        gdjtpara[3] = 800

                    }
                    if ((170<mx<210) && (10<my<50)){

                    }
                    if ((210<mx<250) && (10<my<50)){

                    }
                    if ((250<mx<290) && (10<my<50)){

                    }*/
            }

            if (wrld == 13) {
                //returning to lobby
                wrld = 0
                ctx.clearRect(0, 0, 700, 750)
            }

            if (wrld == 6) {
                if ((mx > 30 && mx < 230) && (my > 170 && my < 235)) {
                    level = 1
                    wrld = 0
                }
                if ((mx > 270 && mx < 470) && (my > 170 && my < 235) && lvlunlocked > 1) {
                    //level = 2
                    wrld = 5
                }
                if ((mx > 510 && mx < 710) && (my > 170 && my < 235) && lvlunlocked > 2) {
                    //level = 3
                    wrld = 5
                }
                if ((mx > 30 && mx < 230) && (my > 275 && my < 340) && lvlunlocked > 3) {
                    //level = 4
                    wrld = 5
                }
                if ((mx > 270 && mx < 470) && (my > 275 && my < 340) && lvlunlocked > 4) {
                    //level = 5
                    wrld = 5
                }
                if ((mx > 510 && mx < 710) && (my > 275 && my < 340 && lvlunlocked > 5)) {
                    //level = 6
                    wrld = 5
                }
                if ((mx > 250 && mx < 670) && (my > 275 && my < 730)) {
                    wrld = 0
                }
            }
        }