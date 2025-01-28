//defines all variabels and classes

//
//CLASSES
//
//define circle class
class circle {
    constructor(x, y, R, name, exp = 500, money = 10) {
        this.x = x;
        this.y = y;
        this.R = R;
        this.name = name
        this.exp = exp;
        this.money = money;
        this.unlocked = false
        this.isClick = false
    }
    area() {
        return this.R * this.R * 2 * Math.PI;
    }
    IsClickMe() {
        if ((Math.pow((mx - this.x), 2) + Math.pow((my - this.y), 2)) < Math.pow(this.R, 2))
            return true
        else
            return false
    }
}
//define class player
class PLAYER {
    constructor(x, y, gravity, hearts, resi, skin) {
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.hearts = hearts;
        this.resi = resi;
        this.skin = skin;
    }
    is_in_hitbox(x, y) {
        if ((x > this.x - 1 && x < this.x + 51)(y > this.y - 1 && y < this.y + 51)) {
            return true
        }
        return false
    }
}
//define class mob
class MOB {
    constructor(x, y, gravity, hearts, freeze) {
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.hearts = hearts;
        this.freeze = freeze;
    }
    is_in_hitbox(x, y) {
        if ((x > this.x - 1 && x < this.x + 51)(y > this.y - 1 && y < this.y + 51)) {
            return true
        }
        return false
    }
}

//
//VARIABELS
//
//define player
var player = new PLAYER(100, 100, 1, 6, 0, 1)
mobliste = []
//circle for wrld = 2
//level 0
var L0 = new circle(350, 100, 40, "hit", 10, 10)
//level 1
var L1_1 = new circle(170, 300, 40, "double jump", 300, 10)
var L1_2 = new circle(350, 300, 40, "level1.2", 300, 10)
var L1_3 = new circle(530, 300, 40, "dart", 300, 10)
//level 2
var L2_1 = new circle(100, 500, 40, "level2.1", 500, 20)
var L2_2 = new circle(200, 500, 40, "drilldash", 500, 20)
var L2_3 = new circle(300, 500, 40, "slo mo", 500, 20)
var L2_4 = new circle(400, 500, 40, "shockwave", 500, 20)
var L2_5 = new circle(500, 500, 40, "ground strike", 500, 20)
var L2_6 = new circle(600, 500, 40, "shield", 500, 20)

//creating canvas as ctx
var ctx = document.getElementById("canvas1").getContext("2d");
ctx.font = "bold 22px Tahoma";
ctx.textAlign = "start";
//creatung the gravity variabel
var gravity = 1

//darts
var playx = 0
var playy = 0

//creating island coordinates
var ils1x = 0
var ils1y = 400
var ils2x = 500
var ils2y = 500
var allilsx = [900, 1000, 1300, 1400, 1700, 2300, 2500, 2800, 3400]
var allilsy = [400, 600, 650, 500, 300, 600, 400, 300, 650]
//descriptions
var descriptions = ["\n A Hit that deals 1 Damage \n Range: 50 pixels", "Gives you the Abbility to dobble jump", "No Idea you bitch", "Gives you the Abbility to throw a dart", "No Idea you bitch", "Let the player dash forward", "Player can contol time", "Gives a shockwave, frezzes mobs", "A ground strike", "Protects the player"]
var description_text = ""
//creating player x and y coordinate variables
//creating mx and my variables, mouse x and y
var mx = 0
var my = 0

//dmg resi
var resi = 0

//creating variable for x of all level
var allx = 0
//Max Level unlocked
var lvlunlocked = 6

//mini dashes
var minitimelleft = 0
var minitimerleft = 0

var fnshx = 3400
var fnshy = 610
//0-lobby, 1-game,  2-upgrades, 13-death, 10-upgrade screen, 5-feature not available, 6-lvl selection, 99 leveltester
var wrld = 0
//sets the money and xp at the beginning
var money = 1000
var xp = 10000
//sets the text for xp and money
var exp_text = ""
var money_text = ""
//sets required xp for ability
var unlocked_exp = 500
var unlocked_money = 10
var unlocked_exp_text = ""
var unlocked_money_text = ""

//creating all mob coordinates, the gravity and the if they are freezed
var allmobx = [1000, 1400, 1200]
var allmoby = [500, 400, 100]
var allmobgravity = [0, 20, 20]
var allmobfreeze = [0, 0, 0]
//creating level variable
var level = 1

//gadjetcooldown and para variables
var gdjtcldwn = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var gdjtpara = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//set refresh window time, hearts of player
var mult = 13
//counter for tick_speed
var helfta = 0
//sets the tick speed, 1=1/2; 2=1/3; 1/(tick_speed+1) --> refesh speed = mult * (tick_speed +1) ms
var tick_speed = 1
//set the movement variable
var hittimeleft = 0
var dashtimelleft = 0
var dashtimerleft = 0
//var for excetuting code for first time, then disable the function
var firsttime_excecute = true
//gives name
var ability_name = L1_1.name
//determiens lvl for description
var upgrade_level = 0
//images for wrld = 10
const images_wrld10 = [
    {imageSrc: 'images/hit.png' },
    {imageSrc: 'images/double_jump.png' },
    {imageSrc: 'images/level1.2.png' },
    {imageSrc: 'images/dart.png' },
    {imageSrc: 'images/level2.1.png' },
    {imageSrc: 'images/dash.png' },
    {imageSrc: 'images/slo_mo.png' },
    {imageSrc: 'images/Shockwave.png' },
    {imageSrc: 'images/ground_strike.png' },
    {imageSrc: 'images/shield.png' }
];