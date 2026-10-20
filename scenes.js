


function TH_Start() {
  this.enter = function() {
    //BUTTONS
      startBtn.visible = true;
      helpBtn.visible = true;
      helpBtnT.visible = false;
      volumeSlider.visible = true;
      muteBtn.visible = true;
      returnBtn.visible = false;

      rexxiBtn.visible = false;
      brontiBtn.visible = false;

      tryAgainBtn.visible = false;

      accessoryBtn.visible = false;
      glassesBtn.visible = false;
      shirtBtn.visible = false;
      pantsBtn.visible = false;
      shoesBtn.visible = false;

    //SONG
      if (!bgSong.isPlaying()) {
        bgSong.loop();
      }
  }

  this.draw = function() {
    background(252, 204, 222);

    //image
    image(title_box, 250,100, 1430,550);

    //TEXT
    textFont(mainf);
    textSize(150);
    fill(232, 97, 148);
      text("Dino Dress-Up", 470, 425);

    //IMAGES
      image(rexxi, 1305,580, 200,200); //rexxi

      push();
      translate(600,0);
      scale(-1,1);
        image(bronti, 0,575, 200,200); //bronti
      pop();
  }
 
  //MOUSE PRESSED
  this.mousePressed = function() {
      if (startBtn.isPressed) {
          mgr.showScene(TH_Game1);
      }

      if (helpBtn.isPressed) {
        previousScene = TH_Start;
        mgr.showScene(TH_Help);
      }
  }

}//-----------------------END OF START-----------------------------


function TH_Game1() {
  this.enter = function() {
  //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = true;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = true;
    brontiBtn.visible = true;

    tryAgainBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = false;
    shirtBtn.visible = false;
    pantsBtn.visible = false;
    shoesBtn.visible = false;
  }

  this.draw = function() {
  background(252, 204, 222);

  //title box
    image(title_box, 470,100, 1000,400);

  //TEXT
  textFont(mainf);
  textSize(90);
  fill(232, 97, 148);
    text("Pick Your Dino", 670,325);

  //IMAGE
  image(rexxi, 280,530, 400,400);
  image(bronti, 1180,530, 400,400);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
      if (rexxiBtn.isPressed) {
          mgr.showScene(TH_Game2);
      } else if (brontiBtn.isPressed) {
        mgr.showScene(TH_Game3);
      } else if (helpBtnT.isPressed) {
        previousScene = TH_Game1;
        mgr.showScene(TH_Help);
    }
  }
}//-------------------------END OF CHOOSE SCREEN--------------------------------


//REXXI
function TH_Game2() {
  this.enter = function() {
    //RESET
    gameText = "Click on the shirt";
    currentR = rexxi;

    stage = 0;
    
  //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = true;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    tryAgainBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = true;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = false;
  }

  this.draw = function() {
    background(252, 204, 222);

    //SETUP
    image(options_box, 130,150, 450,900);
    image(options_box, 1350,150, 450,900);
    
    image(currentR, 620,380, 650,650);

    //TEXT
    textFont(mainf);
    textSize(60);
    fill(232, 97, 148);
      text("Get ready for work!", 670,200);
      text(gameText, 720, 300);

    //IMAGES
    image(glasses, 230,200, 250,250);
    image(shirt, 240,435, 230,230);
    image(pants, 240,730, 230,230);
    image(accessory, 1450,250, 250,250);
    image(shoes, 1455, 560, 250,250);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (shirtBtn.isPressed && stage === 0) {
      currentR = rexxi3;
      gameText = "Click on the pants";
      stage = 1;
    }

    if (pantsBtn.isPressed && stage === 1) {
      currentR = rexxi7;
      gameText = "Click on the glasses";
      stage = 2;
    }

    if (glassesBtn.isPressed && stage === 2) {
      stage = 3;
      mgr.showScene(TH_GameOver);
    }

    if (helpBtnT.isPressed) {
      previousScene = TH_Game2;
      mgr.showScene(TH_Help);
    }
  }
}//-----------------------------------END OF REXXI DRESS UP------------------------------------------


//BRONTI
function TH_Game3() {
  this.enter = function() {
    //RESET
    gameText3 = "Click on the shirt";
    currentB = bronti;

    stage = 0;

    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = true;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;
    
    tryAgainBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = true;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = false;
  }

  this.draw = function() {
    background(252, 204, 222);

    //SETUP
    image(options_box, 130,150, 450,900);
    image(options_box, 1350,150, 450,900);

    image(currentB, 630,380, 650,650);

    //TEXT
    textFont(mainf);
    textSize(60);
    fill(232, 97, 148);
      text("Get ready for work!", 670,200);
      text(gameText3, 720, 300);

    //TEXT
    image(glasses, 230,200, 250,250);
    image(shirt, 240,435, 230,230);
    image(pants, 240,730, 230,230);
    image(accessory, 1450,250, 250,250);
    image(shoes, 1455, 560, 250,250);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (shirtBtn.isPressed && stage === 0) {
      currentB = bronti3;
      gameText3 = "Click on the pants";
      stage = 1;
    }

    if (pantsBtn.isPressed && stage === 1) {
      currentB = bronti7;
      gameText3 = "Click on the glasses";
      stage = 2;
    }

    if (glassesBtn.isPressed && stage === 2) {
      stage = 3;
      mgr.showScene(TH_GameOver2);
    }

    if (helpBtnT.isPressed) {
      previousScene = TH_Game3;
      mgr.showScene(TH_Help);
    }
  }
}//----------------------------------END OF BRONTI DRESS UP-------------------------------------


//REXXI GAME OVER
function TH_GameOver() {
  this.enter = function() {
    //BG MUSIC
      bgSong.stop();
    //SFX
      if (!muted) {
        lose_sfx.play();
      }
  //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = false;
    volumeSlider.visible = false;
    muteBtn.visible = false;
    tryAgainBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = false;
    shirtBtn.visible = false;
    pantsBtn.visible = false;
    shoesBtn.visible = false;

  }

  this.draw = function() {
    background(0);

    //TEXT
    textFont(mainf);
    textSize(150);
    fill(255,0,0);
      text("GAME OVER", 530,220);
    
    //IMAGE
    image(rexxi8, 640,280, 550,550);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (tryAgainBtn.isPressed) {
      mgr.showScene(TH_TryAgain);
    }
  }
}//-----------------------------------END OF REXXI GAME OVER--------------------------------------------


//BRONTI GAME OVER
function TH_GameOver2() {
  this.enter = function() {
    //BG MUSIC
      bgSong.stop();
    //SFX
      if (!muted) {
        lose_sfx.play();
      }
      
    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = false;
    volumeSlider.visible = false;
    muteBtn.visible = false;
    tryAgainBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = false;
    shirtBtn.visible = false;
    pantsBtn.visible = false;
    shoesBtn.visible = false;

  }

  this.draw = function() {
    background(0);

    //TEXT
    textFont(mainf);
    textSize(150);
    fill(255,0,0);
      text("GAME OVER", 530,220);
    
    //IMAGE
    image(bronti8, 680,280, 550,550);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (tryAgainBtn.isPressed) {
      mgr.showScene(TH_TryAgain2);
    }
  }
}//-----------------------------------END OF BRONTI GAME OVER--------------------------------------------


//REXXI RETRY
function TH_TryAgain() {
  this.enter = function() {
    //RESET
    gameText2 = "Click on the shirt";
    tryAgainR = rexxi;

    stage = 0;

    //SONG
      if (!bgSong.isPlaying()) {
        bgSong.loop();
      }
    //SFX
      lose_sfx.stop();


    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = true;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    tryAgainBtn.visible = false;

    accessoryBtn.visible = true;
    glassesBtn.visible = false;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = true;
  }

  this.draw = function() {
    background(252, 204, 222);

    //SETUP
    image(options_box, 130,150, 450,900);
    image(options_box, 1350,150, 450,900);

    image(tryAgainR, 620,380, 650,650);

    //TEXT
    textFont(mainf);
    textSize(60);
    fill(232, 97, 148);
      text("Get ready for work!", 670,200);
      text(gameText2, 720, 300);

    //IMAGE
    image(glasses, 230,200, 250,250);
    image(shirt, 240,435, 230,230);
    image(pants, 240,730, 230,230);
    image(accessory, 1450,250, 250,250);
    image(shoes, 1455, 560, 250,250);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (shirtBtn.isPressed && stage === 0) {
      tryAgainR = rexxiP;
      gameText2 = "Click on the pants";
      stage = 1;
    }

    if (pantsBtn.isPressed && stage === 1) {
      tryAgainR = rexxiP2;
      gameText2 = "Click on the tie";
      stage = 2;
    }

    if (accessoryBtn.isPressed && stage === 2) {
      tryAgainR = rexxiP3;
      gameText2 = "Click on the shoes";
      stage = 3;
    }
    if (shoesBtn.isPressed && stage === 3) {
      stage = 4;
      mgr.showScene(TH_Success);
    }

    if (helpBtnT.isPressed) {
      previousScene = TH_TryAgain;
      mgr.showScene(TH_Help);
    }
  }
}//------------------------------------END OF REXXI RETRY----------------------------


//BRONTI RETRY
function TH_TryAgain2() {
  this.enter = function() {
    //RESET
    gameText4 = "Click on the shirt";
    tryAgainB = bronti;

    stage = 0;

    //SONG
    if (!bgSong.isPlaying()) {
      bgSong.loop();
    }
  //SFX
    lose_sfx.stop();
    
    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = true;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    returnBtn.visible = false;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    tryAgainBtn.visible = false;

    accessoryBtn.visible = true;
    glassesBtn.visible = false;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = true;
  }

  this.draw = function() {
    background(252, 204, 222);

    //SETUP
    image(options_box, 130,150, 450,900);
    image(options_box, 1350,150, 450,900);

    image(tryAgainB, 630,380, 650,650);

    //TEXT
    textFont(mainf);
    textSize(60);
    fill(232, 97, 148);
      text("Get ready for work!", 670,200);
      text(gameText4, 720, 300);

    //IMAGES
    image(glasses, 230,200, 250,250);
    image(shirt, 240,435, 230,230);
    image(pants, 240,730, 230,230);
    image(accessory, 1450,250, 250,250);
    image(shoes, 1455, 560, 250,250);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (shirtBtn.isPressed && stage === 0) {
      tryAgainB = brontiP;
      gameText4 = "Click on the pants";
      stage = 1;
    }

    if (pantsBtn.isPressed && stage === 1) {
      tryAgainB = brontiP2;
      gameText4 = "Click on the tie";
      stage = 2;
    }

    if (accessoryBtn.isPressed && stage === 2) {
      tryAgainB = brontiP3;
      gameText4 = "Click on the shoes";
      stage = 3;
    }
    if (shoesBtn.isPressed && stage === 3) {
      stage = 4;
      mgr.showScene(TH_Success2);
    }

    if (helpBtnT.isPressed) {
      previousScene = TH_TryAgain2;
      mgr.showScene(TH_Help);
    }
  }
}//-----------------------------------END OF BRONTI RETRY---------------------------------


//REXXI SUCCEED
function TH_Success() {
  this.enter = function() {
    //BG MUSIC
      bgSong.stop();
    //SFX
      if (!muted) {
        win_sfx.play();
      }

    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = false;
    volumeSlider.visible = false;
    muteBtn.visible = false;
    tryAgainBtn.visible = true;
    returnBtn.visible = false;
  
    rexxiBtn.visible = false;
    brontiBtn.visible = false;
  
    accessoryBtn.visible = true;
    glassesBtn.visible = false;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = false;
  }
  
  this.draw = function() {
    background(252, 204, 222);
  
    //TEXT
    textFont(mainf);
    textSize(150);
    fill(random(255),random(255),random(255));
      text("Congratulations!", 370,220);
      
    //IMAGE
    image(rexxiP4, 640,315, 560,560);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (tryAgainBtn.isPressed) {
      mgr.showScene(TH_Start);
    }
  }
}//------------------------------------------END OF REXXI SUCCESS-----------------------------


//BRONTI SUCCEED
function TH_Success2() {
  this.enter = function() {
    //BG MUSIC
    bgSong.stop();
  //SFX
    if (!muted) {
      win_sfx.play();
    }

    //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = false;
    volumeSlider.visible = false;
    muteBtn.visible = false;
    tryAgainBtn.visible = true;
    returnBtn.visible = false;
  
    rexxiBtn.visible = false;
    brontiBtn.visible = false;
  
    accessoryBtn.visible = true;
    glassesBtn.visible = false;
    shirtBtn.visible = true;
    pantsBtn.visible = true;
    shoesBtn.visible = false;
  
  }
  
  this.draw = function() {
    background(252, 204, 222);
  
    //TEXT
    textFont(mainf);
    textSize(150);
    fill(random(255),random(255),random(255));
      text("Congratulations!", 370,220);
    
    //IMAGE
    image(brontiP4, 660,310, 560,560);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (tryAgainBtn.isPressed) {
      mgr.showScene(TH_Start);
    }
  }
}//---------------------------------END OF BRONTI SUCCESS--------------------------------------


function TH_Help() {
  this.enter = function() {
  //BUTTONS
    startBtn.visible = false;
    helpBtn.visible = false;
    helpBtnT.visible = false;
    volumeSlider.visible = true;
    muteBtn.visible = true;
    tryAgainBtn.visible = false;
    returnBtn.visible = true;

    rexxiBtn.visible = false;
    brontiBtn.visible = false;

    accessoryBtn.visible = false;
    glassesBtn.visible = false;
    shirtBtn.visible = false;
    pantsBtn.visible = false;
    shoesBtn.visible = false;
  }

  this.draw = function() {
    background(252, 204, 222);

  //Text for Volume
    textFont(mainf);
    textSize(40);
    fill(0);
      text("This is the volume bar. You can adjust it how you like.", 100, 140);
      text("Or you can mute. Up to you.", 120,180);

    //Instructions text
      text("All you have to do is follow the instructions on the screen.", 100,350);
      text("Try to get your dino ready for work!", 140,400);

      text("If you need help press h or - to get back to here!", 100, 500);

  //Key Commands text
    textFont(mainf);
    textSize(30);
    fill(0);
      text("Key Commands:", 130,600);
      text("Press 1 to get to the Start Screen", 150, 635);
      text("Press 2 to get to the Pick Your Character Screen", 150, 670);
      text("Press 3 to get to Rexxi's Dress-Up", 150, 705);
      text("Press 4 to get to Bronti's Dress-Up", 150, 740);
      text("Press 5 to get to Rexxi's End Screen", 150, 775);
      text("Press 6 to get to Bronti's End Screen", 150, 810);
      text("Press 7 to get to the Rexxi's Try Again Screen", 150, 845);
      text("Press 8 to get to the Bronti's Try Again Screen", 150, 880);
      text("Press 9 to get to the Rexxi's Success Screen", 150, 915);
      text("Press 0 to get to the Bronti's Success Screen", 150, 950);
      text("Press -  to get back to the Help Screen", 150, 985);
    
  //Image stuff
    //Rexxi
      push();
      translate(600,0);
      scale(-1,1);

        image(rexxi, 0,190, 130,130);
      pop();

    //Bronti
      image(bronti, 1400,540, 500,500);
  }

  //MOUSE PRESSED
  this.mousePressed = function() {
    if (returnBtn.isPressed) {
      mgr.showScene(previousScene);
    }
  }
}//---------------------------------END OF HELP------------------------------------------