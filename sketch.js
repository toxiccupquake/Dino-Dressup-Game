

let mgr;

//images
let bronti, bronti3, bronti7, bronti8;
let rexxi, rexxi3, rexxi7, rexxi8;
let brontiP, brontiP2, brontiP3, brontiP4;
let rexxiP, rexxiP2, rexxiP3, rexxiP4;
let accessory;
let glasses;
let options_box;
let title_box;
let pants;
let shirt;
let shoes;

//text
let mainf;


//BUTTONS
let startBtn;
let helpBtn;
let helpBtnT;
let volumeSlider;
let muteBtn;
let muted = false;

let rexxiBtn;
let brontiBtn;

let accessoryBtn;
let glassesBtn;
let shirtBtn;
let pantsBtn;
let shoesBtn;

let tryAgainBtn;
let returnBtn;

//sounds
let bgSong;
let sfx;
let win_sfx;
let lose_sfx;


//gameplay sprite
let currentR;
let currentB;

let tryAgainR;
let tryAgainB;

//gameplay text
let gameText = "Click on the shirt";
let gameText2 = "Click on the shirt";
let gameText3 = "Click on the shirt";
let gameText4 = "Click on the shirt";

//gameplay checks
let stage = 0;

function preload() {
  //BRONTI
    bronti = loadImage("assets/bronti.png");
    bronti3 = loadImage("assets/bronti_wrong_shirt.png");
    bronti7 = loadImage("assets/bronti_wrong_outfit.png");
    bronti8 = loadImage("assets/bronti_wrong_outfit_hat.png");

    brontiP = loadImage("assets/bronti_prof_shirt.png");
    brontiP2 = loadImage("assets/bronti_prof_outfit.png");
    brontiP3 = loadImage("assets/bronti_prof_outfit_hat.png");
    brontiP4 = loadImage("assets/bronti_prof_c.png");


  //REXXI
    rexxi = loadImage("assets/rexxi.png");
    rexxi3 = loadImage("assets/rexxi_wrong_shirt.png");
    rexxi7 = loadImage("assets/rexxi_wrong_outfit.png");
    rexxi8 = loadImage("assets/rexxi_wrong_outfit_hat.png");

    rexxiP = loadImage("assets/rexxi_prof_shirt.png");
    rexxiP2 = loadImage("assets/rexxi_prof_outfit.png");
    rexxiP3 = loadImage("assets/rexxi_prof_outfit_hat.png");
    rexxiP4 = loadImage("assets/rexxi_prof_c.png");

  //TEXT
    mainf = loadFont("assets/RETROTECH.ttf");

  //SETUPS
    options_box = loadImage("assets/options_box.png");
    title_box = loadImage("assets/title.png");
    accessory = loadImage("assets/accessory.png");
    glasses = loadImage("assets/glasses.png");
    shirt = loadImage("assets/shirt.png");
    pants = loadImage("assets/pants.png");
    shoes = loadImage("assets/shoes.png");

  //SOUNDS
    bgSong = loadSound("assets/lobby_music.mp3");
    sfx = loadSound("assets/mouse_click_sfx.mp3");
    win_sfx = loadSound("assets/win_sfx.mp3");
    lose_sfx = loadSound("assets/lose_sfx.mp3");
}//-------------------------------END OF PRELOAD-------------------------


function setup() {
  createCanvas(1920, 1080);

  //SCENE MANAGER
  mgr = new SceneManager();

  //SCENES
  mgr.addScene(TH_Start);

  mgr.addScene(TH_Game1);
  mgr.addScene(TH_Game2);
  mgr.addScene(TH_Game3);

  mgr.addScene(TH_GameOver);
  mgr.addScene(TH_GameOver2);

  mgr.addScene(TH_TryAgain);
  mgr.addScene(TH_TryAgain2);

  mgr.addScene(TH_Success);
  mgr.addScene(TH_Success2);

  mgr.addScene(TH_Help);

  //SCENE SHOWN
    mgr.showScene(TH_Start);
    // mgr.showScene(TH_Game1);


  //START
    createGui();
    startBtn = createButton("Start", 300,770, 430,190);
        startBtn.setStyle({
            fillBg: color(232, 97, 148),
            fillBgHover: color(139, 224, 149),
            fillBgActive: color(0,0),

            strokeBg: color(247, 188, 210),
            strokeBgHover: color(185, 240, 191),
            strokeBgActive: color(0,0),

            fillLabel: color(250, 247, 248),
            fillLabelHover: color(250, 247, 248),
            fillLabelActive: color(0,0),

            textSize: 48,

        });

    helpBtn = createButton("Help", 1190,770, 430,190);
        helpBtn.setStyle({
            fillBg: color(232, 97, 148),
            fillBgHover: color(227, 66, 66),
            fillBgActive: color(0,0),

            strokeBg: color(247, 188, 210),
            strokeBgHover: color(242, 114, 114),
            strokeBgActive: color(0,0),

            fillLabel: color(250, 247, 248),
            fillLabelHover: color(250, 247, 248),
            fillLabelActive: color(0,0),

            textSize: 48,
        });


  //GENERAL MENU
    volumeSlider = createSlider("Volume", 350,50, 400,50, 0, 100);
        volumeSlider.setStyle({
          fillBg: color(232, 97, 148),
          fillBgHover: color(232, 97, 148),
          fillBgActive: color(232, 97, 148),

          strokeBg: color(145, 39, 79),
          strokeBgHover: color(145, 39, 79),
          strokeBgActive: color(145, 39, 79),

          strokeHandle: color(145, 39, 79),
          strokeHandleHover: color(145, 39, 79),
          strokeHandleActive: color(145, 39, 79),

          fillHandle: color(245, 186, 208),
          fillHandleHover: color(245, 186, 208),
          fillHandleActive: color(245, 186, 208),

          fillTrack: color(245, 186, 208),
          // fillTrackBg: color(145, 39, 79),
          fillTrackHover: color(245, 186, 208),
          fillTrackActive: color(245, 186, 208),
        });
    volumeSlider.val = 50;

    muteBtn = createButton("Mute", 100,50, 220,50);
        muteBtn.setStyle({
          fillBg: color(232, 97, 148),
          fillBgHover: color(245, 147, 184),
          fillBgActive: color(232, 97, 148),

          strokeBg: color(145, 39, 79),
          strokeBgHover: color(145, 39, 79),
          strokeBgActive: color(145, 39, 79),

          fillLabel: color(250, 247, 248),
          fillLabelHover: color(250, 247, 248),
          fillLabelActive: color(250, 247, 248),

          textSize: 25
        });

    tryAgainBtn = createButton("Try Again?", 750,850, 400,120);
      tryAgainBtn.setStyle({
        fillBg: color(232, 97, 148),
        fillBgHover: color(245, 147, 184),
        fillBgActive: color(0,0),

        strokeBg: color(0,0),
        strokeBgHover: color(0,0),
        strokeBgActive: color(0,0),

        fillLabel: color(0,0,0),
        fillLabelHover: color(0,0,0),
        fillLabelActive: color(0,0),

        textSize: 45
      });

    returnBtn = createButton("Return", 800,200, 300,100);
      returnBtn.setStyle({
        fillBg: color(232, 97, 148),
        fillBgHover: color(245, 147, 184),
        fillBgActive: color(232, 97, 148),

        strokeBg: color(145, 39, 79),
        strokeBgHover: color(145, 39, 79),
        strokeBgActive: color(145, 39, 79),

        fillLabel: color(250, 247, 248),
        fillLabelHover: color(250, 247, 248),
        fillLabelActive: color(250, 247, 248),

        textSize: 35
      });

    helpBtnT = createButton("Help", 1600, 50, 220,50);
      helpBtnT.setStyle({
        fillBg: color(232, 97, 148),
        fillBgHover: color(245, 147, 184),
        fillBgActive: color(232, 97, 148),

        strokeBg: color(145, 39, 79),
        strokeBgHover: color(145, 39, 79),
        strokeBgActive: color(145, 39, 79),

        fillLabel: color(250, 247, 248),
        fillLabelHover: color(250, 247, 248),
        fillLabelActive: color(250, 247, 248),

        textSize: 25
      });


  //GAME SCREEN 1
    rexxiBtn = createButton("Rexxi", 340,920, 320,90);
        rexxiBtn.setStyle({
          fillBg: color(232, 97, 148),
          fillBgHover: color(245, 147, 184),
          fillBgActive: color(232, 97, 148),

          strokeBg: color(145, 39, 79),
          strokeBgHover: color(145, 39, 79),
          strokeBgActive: color(145, 39, 79),

          fillLabel: color(250, 247, 248),
          fillLabelHover: color(250, 247, 248),
          fillLabelActive: color(250, 247, 248),

          textSize: 40
        });
  brontiBtn = createButton("Bronti", 1240,920, 320,90);
        brontiBtn.setStyle({
          fillBg: color(232, 97, 148),
          fillBgHover: color(245, 147, 184),
          fillBgActive: color(232, 97, 148),

          strokeBg: color(145, 39, 79),
          strokeBgHover: color(145, 39, 79),
          strokeBgActive: color(145, 39, 79),

          fillLabel: color(250, 247, 248),
          fillLabelHover: color(250, 247, 248),
          fillLabelActive: color(250, 247, 248),

          textSize: 40
        });


  //GAME 2 CLOTHING BUTTONS
    accessoryBtn = createButton("", 1450,250, 250,250);
        accessoryBtn.setStyle({
          fillBg: color(0,0),
          fillBgHover: color(0,0),
          fillBgActive: color(0,0),

          strokeBg: color(0,0),
          strokeBgHover: color(0,0),
          strokeBgActive: color(0,0),

          fillLabel: color(0,0),
          fillLabelHover: color(0,0),
          fillLabelActive: color(0,0)
        });

    glassesBtn = createButton("", 230,200, 250,250);
        glassesBtn.setStyle({
          fillBg: color(0,0),
          fillBgHover: color(0,0),
          fillBgActive: color(0,0),

          strokeBg: color(0,0),
          strokeBgHover: color(0,0),
          strokeBgActive: color(0,0),

          fillLabel: color(0,0),
          fillLabelHover: color(0,0),
          fillLabelActive: color(0,0)
        });

    shirtBtn = createButton("", 240,435, 230,230);
        shirtBtn.setStyle({
          fillBg: color(0,0),
          fillBgHover: color(0,0),
          fillBgActive: color(0,0),

          strokeBg: color(0,0),
          strokeBgHover: color(0,0),
          strokeBgActive: color(0,0),

          fillLabel: color(0,0),
          fillLabelHover: color(0,0),
          fillLabelActive: color(0,0)
        });

    pantsBtn = createButton("", 240,730, 230,230);
        pantsBtn.setStyle({
          fillBg: color(0,0),
          fillBgHover: color(0,0),
          fillBgActive: color(0,0),

          strokeBg: color(0,0),
          strokeBgHover: color(0,0),
          strokeBgActive: color(0,0),

          fillLabel: color(0,0),
          fillLabelHover: color(0,0),
          fillLabelActive: color(0,0)
        });

    shoesBtn = createButton("", 1455, 560, 250,250);
        shoesBtn.setStyle({
          fillBg: color(0,0),
          fillBgHover: color(0,0),
          fillBgActive: color(0,0),

          strokeBg: color(0,0),
          strokeBgHover: color(0,0),
          strokeBgActive: color(0,0),

          fillLabel: color(0,0),
          fillLabelHover: color(0,0),
          fillLabelActive: color(0,0)
        });


  //SPRITES
    currentR = rexxi;
    currentB = bronti;

    tryAgainR = rexxi;
    tryAgainB = bronti;

}//------------------------------END OF SETUP--------------------------------

function draw() {
  background(220);
    
  mgr.draw(); //SCENE MANAGER
  drawGui(); //P5.TOUCHGUI

  if (!muted) {
    bgSong.setVolume(volumeSlider.val / 100);
  }
}//------------------------------END OF DRAW----------------------------


function mousePressed()
{
  //Mouse Click SFX
    if(!muted) {
      sfx.play();
    }
  //Volume Bar
    if (muteBtn.isPressed) {
      muted = !muted;
      if (muted) {
        bgSong.setVolume(0);
        muteBtn.label = "Unmute";
      } else {
        bgSong.setVolume(volumeSlider.val / 100);
        muteBtn.label = "Mute";
      }
    }

  mgr.mousePressed();
}//------------------------END OF MOUSEPRESSED-----------------------------------


function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case "1":
            mgr.showScene( TH_Start );
            break;
        case "2":
            mgr.showScene( TH_Game1 );
            break;
        case "3":
            mgr.showScene( TH_Game2 );
            break;
        case "4":
            mgr.showScene( TH_Game3 );
            break;
        case "5":
            mgr.showScene( TH_GameOver );
            break;
        case "6":
            mgr.showScene( TH_GameOver2 );
            break;
        case "7":
            mgr.showScene( TH_TryAgain );
            break;
        case "8":
            mgr.showScene( TH_TryAgain2 );
            break;
        case "9":
            mgr.showScene( TH_Success );
            break;
        case "0":
            mgr.showScene( TH_Success2 );
            break;
        case "-":
            mgr.showScene( TH_Help );
            break;
        case "h":
            mgr.showScene( TH_Help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}//----------------------------END OF KEYPRESSED-------------------------------
