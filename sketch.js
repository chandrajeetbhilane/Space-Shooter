var score = 0;

var diomand , enemy_1 , enemy_2 , enemy_3;

var aircraft_1 ,aircraft_2;

var aircraft_1Img ,aircraft_2Img;

var bulletImg , diomandImg , enemy_1Img , enemy_2Img , enemy_3Img;


var diomandGroup , enemy_1Group , enemy_2Group , enemy_3Group;

var bullet_1 , bullet_2 ,bullet_3 ,bullet_4 ,bullet_5 ,bullet_6; 

var bullet_1Img , bullet_2Img ,bullet_3Img ,bullet_4Img ,bullet_5Img ,bullet_6Img;

var bulletGroup1 ,bulletGroup2 ,bulletGroup3 ,bulletGroup4 ,bulletGroup5 ,bulletGroup6;

var background , bg;

var you_win , you_winImg , you_win_Sound;

var bulletSound;

var life = 10;

var gameState = 1;

var Made_by_Chandrajeet_Bhilane , CB_logo , CB_logo_Img;

function preload() {
  aircraft_1Img = loadImage("assets/aircraft_1.png");
  aircraft_2Img = loadImage("assets/aircraft_2.png");
  bullet_1Img = loadImage("assets/bullet_1.png");
  bullet_2Img = loadImage("assets/bullet_2.png");
  bullet_3Img = loadImage("assets/bullet_3.png");
  bullet_4Img = loadImage("assets/bullet_4.png");
  bullet_5Img = loadImage("assets/bullet_5.png");
  bullet_6Img = loadImage("assets/bullet_6.png");
  diomandImg = loadImage("assets/diomand.png");
  enemy_1Img = loadImage("assets/enemy_1.png");
  enemy_2Img = loadImage("assets/enemy_2.png");
  enemy_3Img = loadImage("assets/enemy_3.png");

  backgroundImg = loadImage("assets/background.jpg");

  you_winImg = loadImage("assets/you_win.jpeg");

  CB_logo_Img = loadImage("assets/CB_logo.png");

 // bgImg= loadImage("assets/background.jpg")

  bulletSound = loadSound("assets/missle_launch.mp3");

  you_win_Sound = loadSound("assets/you_win_Sound.mp3");
}

function setup() {
  createCanvas(800,1000);
 
  background.velocityY=5;


  bg = createSprite(400,800);
  bg.addImage(backgroundImg);
  bg.y=bg.width/5;
  bg.velocityY = 2;

  aircraft_1 = createSprite(250, 850, 50, 50);
  aircraft_1.addImage(aircraft_1Img);
  aircraft_1.scale=1;

  aircraft_2 = createSprite(250, 950, 50, 50);
  aircraft_2.addImage(aircraft_2Img);
  aircraft_2.scale=0.9;
  aircraft_2.visible=false;

  CB_logo = createSprite(130,140,100,100);
  CB_logo.addImage(CB_logo_Img);
  CB_logo.scale=0.3;
  
  
  bulletGroup1 = createGroup();
  bulletGroup2 = createGroup();
  bulletGroup3 = createGroup();
  bulletGroup4 = createGroup();
  bulletGroup5 = createGroup();
  bulletGroup6 = createGroup();

  diomandGroup = createGroup();

  enemy_1Group = createGroup();
  enemy_2Group = createGroup();
  enemy_3Group = createGroup();

  heading = createElement("h1");
  scoreboard = createElement("h2");
  makername=createElement("h3")

  you_win = createSprite(250,500,50,50);
  you_win.scale = 5;
}

function draw() {
 background(0);  
 //background("white");  


 if(bg.y>400){
   bg.y=300;
 }

  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(300,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:orange'); 
  scoreboard.position(500,25);

  makername.html("Made by Chandrajeet Bhilane")
  makername.style("color:white");
  makername.position(530,950)

  if(gameState===1){
    aircraft_1.x=mouseX
    aircraft_2.x=mouseX-200;

    you_win.visible = false;


    if (frameCount % 60 === 0){
      drawenemy_1();
    }
    if (frameCount % 80 === 0){
      drawenemy_2();
    }
    if (frameCount % 100 === 0){
      drawenemy_3();
    }

    if(keyDown("space")){
      shootBullet();
      bulletSound.play();
    }

    if(enemy_1Group.collide(aircraft_1)) {
      handleGameOver(enemy_1Group);
    }
    if(enemy_2Group.collide(aircraft_1)) {
      handleGameOver(enemy_2Group);
    }
    if(enemy_3Group.collide(aircraft_1)) {
      handleGameOver(enemy_3Group);
    }

    if(enemy_1Group.collide(aircraft_2)) {
      handleGameOver(enemy_1Group);
    }
    if(enemy_2Group.collide(aircraft_2)) {
      handleGameOver(enemy_2Group);
    }
    if(enemy_3Group.collide(aircraft_2)) {
      handleGameOver(enemy_3Group);
    }


    if(enemy_1Group.collide(bulletGroup1)) {
      handleEnemyCollision(enemy_1Group);
    }
    if(enemy_1Group.collide(bulletGroup2)) {
      handleEnemyCollision(enemy_1Group);
    }
    if(enemy_1Group.collide(bulletGroup3)) {
      handleEnemyCollision(enemy_1Group);
    }
    if(enemy_1Group.collide(bulletGroup4)) {
      handleEnemyCollision(enemy_1Group);
    }
    if(enemy_1Group.collide(bulletGroup5)) {
      handleEnemyCollision(enemy_1Group);
    }
    if(enemy_1Group.collide(bulletGroup6)) {
      handleEnemyCollision(enemy_1Group);
    }


    if(enemy_2Group.collide(bulletGroup1)) {
      handleEnemyCollision(enemy_2Group);
    }
    if(enemy_2Group.collide(bulletGroup2)) {
      handleEnemyCollision(enemy_2Group);
    }
    if(enemy_2Group.collide(bulletGroup3)) {
      handleEnemyCollision(enemy_2Group);
    }
    if(enemy_2Group.collide(bulletGroup4)) {
      handleEnemyCollision(enemy_2Group);
    }
    if(enemy_2Group.collide(bulletGroup5)) {
      handleEnemyCollision(enemy_2Group);
    }
    if(enemy_2Group.collide(bulletGroup6)) {
      handleEnemyCollision(enemy_2Group);
    }


    if(enemy_3Group.collide(bulletGroup1)) {
      handleEnemyCollision(enemy_3Group);
    }
    if(enemy_3Group.collide(bulletGroup2)) {
      handleEnemyCollision(enemy_3Group);
    }
    if(enemy_3Group.collide(bulletGroup3)) {
      handleEnemyCollision(enemy_3Group);
    }
    if(enemy_3Group.collide(bulletGroup4)) {
      handleEnemyCollision(enemy_3Group);
    }
    if(enemy_3Group.collide(bulletGroup5)) {
      handleEnemyCollision(enemy_3Group);
    }
    if(enemy_3Group.collide(bulletGroup6)) {
      handleEnemyCollision(enemy_3Group);
    }

  }
  if(score > 4 & score < 10){
  //if(score === 5||score === 6||score === 7||score === 8||score === 9){
    enemy_1.velocityY=11;
    enemy_2.velocityY=11;
    enemy_3.velocityY=11; 
    bullet_1.velocityY=-13;
    bullet_2.velocityY=-13;
    bullet_3.velocityY=-13;
    bullet_4.velocityY=-13;
    bullet_5.velocityY=-13;
    bullet_6.velocityY=-13;
    bullet_2.visible=true;
  } 

  if(score > 10 & score < 15){
  //if(score === 10||score === 11||score === 12||score === 13||score === 14){
    enemy_1.velocityY=14;
    enemy_2.velocityY=14;
    enemy_3.velocityY=14;
    bullet_1.velocityY=-16;
    bullet_2.velocityY=-16;
    bullet_3.velocityY=-16;
    bullet_4.velocityY=-16;
    bullet_5.velocityY=-16;
    bullet_6.velocityY=-16;
    bullet_2.visible=true;
    bullet_3.visible=true;

    //aircraft_2.visible=true;
  } 

  if(score > 15 & score < 20){
//  if(score === 15||score === 16||score === 17||score === 18||score === 19){
    enemy_1.velocityY=17;
    enemy_2.velocityY=17;
    enemy_3.velocityY=17;
    bullet_1.velocityY=-19;
    bullet_2.velocityY=-19;
    bullet_3.velocityY=-19;
    bullet_4.velocityY=-19;
    bullet_5.velocityY=-19;
    bullet_6.velocityY=-19;

    aircraft_2.visible=true;

    bullet_2.visible=true;
    bullet_3.visible=true;
    bullet_4.visible=true;
  } 

  if(score > 20 & score < 25){
    //  if(score === 15||score === 16||score === 17||score === 18||score === 19){
        enemy_1.velocityY=20;
        enemy_2.velocityY=20;
        enemy_3.velocityY=20;
        bullet_1.velocityY=-19;
        bullet_2.velocityY=-19;
        bullet_3.velocityY=-19;
        bullet_4.velocityY=-19;
        bullet_5.velocityY=-19;
        bullet_6.velocityY=-19;
        bullet_2.visible=true;
        bullet_3.visible=true;
        bullet_4.visible=true;
        bullet_5.visible=true;
      } 

      if(score > 25 & score < 30){
        //  if(score === 15||score === 16||score === 17||score === 18||score === 19){
            enemy_1.velocityY=23;
            enemy_2.velocityY=23;
            enemy_3.velocityY=23;
            bullet_1.velocityY=-25;
            bullet_2.velocityY=-25;
            bullet_3.velocityY=-25;
            bullet_4.velocityY=-25;
            bullet_5.velocityY=-25;
            bullet_6.velocityY=-25;

            bullet_2.visible=true;
            bullet_3.visible=true;
            bullet_4.visible=true;
            bullet_5.visible=true;
            bullet_6.visible=true;
          } 

          if(score > 30 & score < 40){
            //  if(score === 15||score === 16||score === 17||score === 18||score === 19){
                enemy_1.velocityY=26;
                enemy_2.velocityY=26;
                enemy_3.velocityY=26;
                bullet_1.velocityY=-28;
                bullet_2.velocityY=-28;
                bullet_3.velocityY=-28;
                bullet_4.velocityY=-28;
                bullet_5.velocityY=-28;
                bullet_6.velocityY=-28;


                bullet_2.visible=true;
                bullet_3.visible=true;
                bullet_4.visible=true;
                bullet_5.visible=true;
                bullet_6.visible=true;
              } 


  if(score === 40){
    enemy_1.velocityY=0;
    enemy_2.velocityY=0;
    enemy_3.velocityY=0; 
    enemy_1Group.destroyEach();
    enemy_2Group.destroyEach();
    enemy_3Group.destroyEach();
    bulletGroup1.destroyEach();
    bulletGroup2.destroyEach();
    bulletGroup3.destroyEach();
    bulletGroup4.destroyEach();
    bulletGroup5.destroyEach();
    bulletGroup6.destroyEach();
    aircraft_1.destroy();
    aircraft_2.destroy();
    CB_logo.destroy();

    bulletSound.stop();

    you_win=createSprite(400,500);
    you_win.addImage(you_winImg);
    you_win.scale=1;
    you_win_Sound.play();
    //you_win_Sound.stop();

    scoreboard.hide();
    heading.hide();
    makername.hide();
  }

  drawSprites();  
}

function drawenemy_1(){
  enemy_1 = createSprite(random(100,900),0,40,40);
  enemy_1.addImage(enemy_1Img);
  enemy_1.scale = 1;
  enemy_1.velocityY = 8;
  enemy_1.lifetime = 100;
  enemy_1Group.add(enemy_1);
  enemy_1.display(); 
}
function drawenemy_2(){
  enemy_2 = createSprite(random(150,800),0,40,40);
  enemy_2.addImage(enemy_2Img);
  enemy_2.scale = 1;
  enemy_2.velocityY = 8;
  enemy_2.lifetime = 100;
  enemy_2Group.add(enemy_2);
  enemy_2.display();
}
function drawenemy_3(){
  enemy_3 = createSprite(random(150,700),0,40,40);
  enemy_3.addImage(enemy_3Img);
  enemy_3.scale = 1;
  enemy_3.velocityY = 8;
  enemy_3.lifetime = 100;
  enemy_3Group.add(enemy_3);
  enemy_3.display();
}

function shootBullet() { 
  bullet_1=createSprite(150,740,50)
  bullet_1.x = aircraft_1.x-15
  bullet_1.addImage(bullet_1Img)
  bullet_1.scale = 1;
  bullet_1.velocityY = -10;
  bulletGroup1.add(bullet_1);
  //bullet_1.visible=false;

  bullet_2=createSprite(150,760,50)
  bullet_2.x = aircraft_1.x-60
  bullet_2.addImage(bullet_2Img)
  bullet_2.scale = 0.4;
  bullet_2.velocityY = -10;
  bulletGroup2.add(bullet_2);
  bullet_2.visible=false;

  bullet_3=createSprite(150,760,50)
  bullet_3.x = aircraft_1.x+15
  bullet_3.addImage(bullet_3Img)
  bullet_3.scale = 0.4;
  bullet_3.velocityY = -10;
  bulletGroup3.add(bullet_3);
  bullet_3.visible=false;

  bullet_4 = createSprite(150,850,50)
  bullet_4.x = aircraft_1.x-210
  bullet_4.addImage(bullet_4Img)
  bullet_4.scale = 1.7;
  bullet_4.velocityY = -10;
  bulletGroup4.add(bullet_4);
  bullet_4.visible=false;

  bullet_5 = createSprite(150,850,50)
  bullet_5.x = aircraft_1.x-220
  bullet_5.addImage(bullet_5Img)
  bullet_5.scale = 0.4;
  bullet_5.velocityY = -10;
  bulletGroup5.add(bullet_5);
  bullet_5.visible=false;

  bullet_6 = createSprite(150,850,50)
  bullet_6.x = aircraft_1.x-165
  bullet_6.addImage(bullet_6Img)
  bullet_6.scale = 0.4;
  bullet_6.velocityY = -10;
  bulletGroup6.add(bullet_6);
  bullet_6.visible=false;
}

function handleEnemyCollision(enemyGroup){
  if(life > 0) {
    score=score+1;
  }
  enemyGroup.destroyEach(); 
  bulletGroup1.destroyEach();
  bulletGroup2.destroyEach();
  bulletGroup3.destroyEach();
  bulletGroup4.destroyEach();
  bulletGroup5.destroyEach();
  bulletGroup6.destroyEach();
}

function handleGameOver(enemyGroup){
  life=life-1;
  enemyGroup.destroyEach();

  if(life === 0) {
    gameState=2
  }
}

