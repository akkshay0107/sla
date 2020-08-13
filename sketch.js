//all images
var bgImg,waveImg,rainImg,forestImg,mwImg,zenImg,cfImg,uwImg;
//all text images
var hImg,csImg,waveT,rainT,forestT,mwT,zenT,cfT,uwT;
//all sounds
var whitew,whiter,forestS,mwS,zenS,campfireS,uwhale;
//on page info
var header,infoImg,infotxtImg;
//sound array
var sA;
var state;
function preload(){ 
   bgImg = loadImage("pics/wbg2.jpg"); 
   hImg  = loadImage("pics/hd.png");
   csImg = loadImage("pics/cs.png");
   //waves
   whitew = loadSound('audio/whitew.mp3');
   waveT = loadImage('pics/waveT.png');
   waveImg = loadImage("pics/waveImg.jpg");
   //rain
   whiter = loadSound('audio/whiter.mp3');
   rainT = loadImage('pics/rainT.png');
   rainImg = loadImage('pics/rainImg.jpg');
   //forest
   forestS = loadSound('audio/forest_ambience.mp3');
   forestT = loadImage('pics/forestT.png');
   forestImg = loadImage("pics/forestImg.jpg");
   //mountain wind
   mwS = loadSound('audio/mountain_wind.mp3');
   mwT = loadImage('pics/mwT.png');
   mwImg = loadImage("pics/mwImg.jpg");
   //zen
   zenS = loadSound('audio/zen.mp3');
   zenT = loadImage('pics/zenT.png');
   zenImg = loadImage("pics/zenImg.jpg");
   //campfire
   campfireS = loadSound('audio/campfire.mp3');
   cfT = loadImage('pics/cfT.png');
   cfImg = loadImage("pics/cfImg.jpg");
   //underwater
   uwhale = loadSound('audio/uwhale.mp3');
   uwT = loadImage('pics/uwT.png');
   uwImg = loadImage("pics/uwImg.jpg");
   //info
   infotxtImg = loadImage("pics/infotxtImg.png");
}
function setup(){
   createCanvas(windowWidth,windowHeight);
   state = 0;
   //header
   header = createSprite(windowWidth/2,100,windowWidth,200);
   header.addImage("header",hImg);
   //choose sound
   var cs = createSprite(200,140,300,80);
   cs.addImage("choose_sound",csImg);
   cs.scale = 0.75;
   //info
   var infotxt = createSprite(750,400,450,500);
   infotxt.addImage("text",infotxtImg);
   //all sounds
   var s1 = new Sound(190.75,205,102,29,waveT);
   var s2 = new Sound(190.75,275,71,29,rainT);
   var s3 = new Sound(190.75,345,105,29,forestT);
   var s4 = new Sound(190.75,415,140,34,mwT);
   var s5 = new Sound(190.75,485,65,29,zenT);
   var s6 = new Sound(190.75,557,151,34,cfT);
   var s7 = new Sound(190.75,625,195,29,uwT);
   //sound array
   sA = [s1,s2,s3,s4,s5,s6,s7];
   mA = [whitew,whiter,forestS,mwS,zenS,campfireS,uwhale];
}

function draw(){
 background(bgImg);
 for(i in sA){
   sA[i].clicked();
  }
 drawSprites();
}

