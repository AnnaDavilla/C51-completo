var fundo, fundoImg;
var chaoInvisivel;
var anna, annaImg;
var score = 0;
var life = 4;

//Pré-carrega imagens, sons e animações
function preload() {
  fundoImg = loadImage("cidade.webp");
  annaImg = loadAnimation("menina1.png", "menina2.png", "menina3.png");
}

//configurar o jogo
function setup() {
  canvas = createCanvas(1200,600);

  fundo = createSprite(100, 150, 5, 5);
  fundo.addImage(fundoImg);
  fundo.scale = 1.3;
  fundo.velocityX = -9;
   
  // criando chao invisivel
  chaoInvisivel = createSprite(1000, 600, 400, 10);
  chaoInvisivel.visible = false;

  //criando personagem: anna
  anna = createSprite(179, 530, 20, 20);
  anna.addAnimation("anna", annaImg);
  anna.scale = 0.9;
}

function draw() {
  background("blue,1200,1200");

  if (fundo.x < 50) {
    fundo.x = 600;
  }
  drawSprites();
  // pular quando a tecla space for tocada
  if (keyDown("space") && anna.y >= 100) {
    anna.velocityY = -12;
  }
  anna.velocityY = anna.velocityY + 0.8;
}
function spawnObstaclesTop() {
    if (World.frameCount % 60 === 0) {
      obstacleTop = createSprite(400, 50, 40, 50);
  
      obstacleTop.addImage(obsTop1);
  
      obstacleTop.scale = 0.1;
      obstacleTop.velocityX = -4;
  
      //posições y aleatórias para os principais obstáculos
      obstacleTop.y = Math.round(random(10, 100));
  
      
       var rand = Math.round(random(1,2));
      
  
      switch (rand) {
        case 1:
          obstacleTop.addImage(obsTop1);
          break;
        case 2:
          obstacleTop.addImage(obsTop2);
          break;
        default:
          break;
      }
  
      //atribuir tempo de vida à variável
      obstacleTop.lifetime = 100;
      
    }
  }