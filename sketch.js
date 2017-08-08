var wormie;

function setup(){
  createCanvas(800, 800, WEBGL);

  wormie = loadModel('./assets/wormie.obj');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(wormie);
}
