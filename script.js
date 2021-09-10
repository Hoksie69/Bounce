var cX = [50, 50, 1200, 1200];
var cY = [50, 50, 670, 670];
var speedX = [1, 2, 3, 5];
var speedY = [2, 3, 5, 7];

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

 

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  // stel vulkleur in
  fill(100, 100, 255);
  ellipse(cX[0], cY[0], 80, 80);

  fill(255, 0, 0);
  ellipse(cX[0], cY[1], 80, 80);

  fill(0, 255, 0);
  ellipse(cX[1], cY[1], 80, 80);

  fill(255, 255, 0);
  ellipse(cX[1], cY[0], 80, 80);

for(var e = 0; e < cY.length; e++){
for(var i = 0; i < speedY.length; i++){

  cY[e] = cY[e] + speedY[e];

  if (cY[e] >= 680){
    speedY[i] = speedY[i] * -1;
  }
  if (cY[e] <= 40){
    speedY[i] = speedY[i] * -1;
  }
}
}

for(var t = 0; t < cX.length; t++){
for(var s = 0; s < speedX.length; s++){

  cX[t] = cX[t] + speedX[t];

  if (cX[t] >= 1240){
    speedX[s] = speedX[s] * -1;
  }
  if (cX[t] <= 40){
    speedX[s] = speedX[s] * -1;
  }
}
}
}
