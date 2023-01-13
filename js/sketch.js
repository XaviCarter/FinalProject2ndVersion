//variables
var fillValue = '#F9F108';
var fillValve = '#B44440';
var fillBarrel = '#151E1B';
var fillSign = '#FFFFFF'

var circleX, circleY, circleRad;
var moonX, moonY, moonRad;
var sunX, sunY, sunRad;
var valveX, valveY, valveRad;
var barrelX, barrelY, barrelRad;
var signX, signY, signRad;

var openDoor = false;
var setDay = false;
var valveON = false;
var barrelOPEN = false;
var signDOWN = false;

var door1Y = 0;
var door2Y = 337.5;
var bolt1Y = 50
var bolt2Y= 625


var bg;
var bgDay;

var splatX = 232
var splatY = 293
var hue = random(90, 150)

var alarm;

//function preload(){
    //loads in 3 different background and alarm sound
   // bg = loadImage('Assets/BackgroundImg.jpg');
   // bgDay = loadImage('Assets/BackgroundImgDay.jpg');
    //bgSkull = loadImage('Assets/BackgroundImgDay copy.jpg');
    //alarm = loadSound('Assets/alarmSound.mp3.mp3');

//}

function setup() {
    frameRate(30);
    var canvas = createCanvas(1200, 675);
    canvas.parent("p5container")


//calls in functions for buttons
    initCircle();
    initValve();
    initMoon();
    initBarrel()  
    initSign();

    //parameters for the bubbles
    bubbleX = 250
    bubbleY = height
    bubbleSize = 1;

    g = 200;
    b = 255;

   
}

function draw() {

    //if (setDay == false) {
       // background(bg)
   // }
    
//chnages background image to day
    //if (setDay==true) {
        //background(bgDay)
    //}

    //makes toxic waste come out of pipe
    if (valveON==true) {
        
        splatY--;
        
        fill('#1EE524')
        noStroke()
        rect(splatX, splatY, 40, 150, random(10,30))

    }

    if (valveON == false) {
        splatY = 293
    }


    //changes colur of circle when hovered over to create 'highlight effect'
    if(mouseX > (circleX - circleRad/2)
      && mouseX < (circleX + circleRad/2)
      && mouseY > (circleY - circleRad/2)
      && mouseY < (circleY + circleRad/2)
    ) {
        fillValue = '#BCC004';
    } else {
        fillValue = '#F9F108';
    }
// creates bubbles when barrel button is clicked
     if (barrelOPEN == true) {
        fill('#1EE524');

        if(bubbleSize > 100) {
            bubbleSize = 100;
        }

        circle(bubbleX, bubbleY, bubbleSize);

        bubbleSize += random(1);

        bubbleX = random(width)

        bubbleY -= random(6);
}
//sets background to skull bersion
     if (signDOWN == true) {
        background(bgSkull)

     }

//opens door when symbol button is clicked
    if(openDoor==true) {

       //alarm.play()

       door1Y--;

       door2Y++

       bolt1Y--;
       bolt2Y++;


       if(mouseX > (valveX - valveRad/2)
       && mouseX < (valveX + valveRad/2) 
       && mouseY > (valveY - valveRad/2) 
       && mouseY < (valveY + valveRad/2)
       ) {
        fillValve = '#6F2E2b'; 
     } else {
        fillValve = '#B44440'
    }
    
       fill(fillValve)
       stroke('#79282E')
       strokeWeight(3)
       ellipse(valveX, valveY, valveRad)

       //barrel button
       if(mouseX > (barrelX - barrelRad/2)
       && mouseX < (barrelX + barrelRad/2) 
       && mouseY > (barrelY - barrelRad/2) 
       && mouseY < (barrelY + barrelRad/2)
       ) {
        fillBarrel = '#151E1B'; 
     } else {
        fillBarrel = '#585858'
    }
    
       fill(fillBarrel)
       stroke('#000000')
       strokeWeight(1)
       ellipse(barrelX, barrelY, barrelRad) 
       
       //sign button
       if(mouseX > (signX - signRad/2)
       && mouseX < (signX + signRad/2) 
       && mouseY > (signY - signRad/2) 
       && mouseY < (signY + signRad/2)
       ) {
        fillSign = '#595A58'; 
     } else {
        fillSign = '#FFFFFF'
    }
    
       fill(fillSign)
       stroke('#000000')
       strokeWeight(1)
       ellipse(signX, signY, signRad)
    }

        //doors
    fill('#26292E')
    stroke(0)
    strokeWeight(2)
    rect(0, door1Y, 1200, 337.5)

    fill('#26292E')
    stroke(0)
    strokeWeight(2)
    rect(0, door2Y, 1200, 337.5)

    //bolts
    fill('#404348')
    stroke(0)
    strokeWeight(1)
    ellipse(100, bolt1Y, 50)

    fill('#404348')
    stroke(0)
    strokeWeight(1)
    ellipse(1050, bolt1Y, 50)

    fill('#404348')
    stroke(0)
    strokeWeight(1)
    ellipse(100, bolt2Y, 50)

    fill('#404348')
    stroke(0)
    strokeWeight(1)
    ellipse(1050, bolt2Y, 50)

    if(openDoor==false) {
        //radiation symbol
    fill(0);
    noStroke()
    ellipse(width/2, height/2, 250);
    
    fill('#F9F108');
    noStroke()
    ellipse(width/2, height/2, 200);

    //triangles around middle
    fill(0);
    triangle(600, 337.5, 540, 445, 660, 445)

    fill(0);
    triangle(600, 337.5, 475, 337.5, 550, 225)

    fill(0);
    triangle(600, 337.5, 650, 225, 725, 337.5)

    //outline of button circle    
    fill(0, 0, 0);
    noStroke()
    ellipse(width/2, height/2, 60);
  
    //button circle
    fill(fillValue);
    stroke(0);
    strokeWeight(6);
    ellipse(width/2,height/2,50);

    }


}


//sets circle button parameters
function initCircle() {
    circleX = width/2;
    circleY = height/2;
    circleRad = 50;
}

function initMoon() {
    moonX = 102;
    moonY = 102;
    moonRad = 170;
}

//parameters for sun button
function initSun() {
    sunX = 102;
    sunY = 102;
    sunRad = 130;

}

//parameters for valve button
function initValve() {
    valveX = 147
    valveY = 543
    valveRad = 25;
}

//parameters for barrel button
function initBarrel() {
    barrelX = 1021
    barrelY= 522.5
    barrelRad = 10

}

//parameters for sign button
function initSign() {
    signX = 554.5
    signY = 328
    signRad = 15
}

//sets open door variable to true when clicked
function mousePressed() {
    if(mouseX > (circleX - circleRad/2)
    && mouseX < (circleX + circleRad/2) 
    && mouseY > (circleY - circleRad/2) 
    && mouseY < (circleY + circleRad/2) 


    ) {
   openDoor = true; 
  }  

  //changes from night to day
  if(setDay == false) {
    if(mouseX > (moonX - moonRad/2)
    && mouseX < (moonX + moonRad/2) 
    && mouseY > (moonY - moonRad/2) 
    && mouseY < (moonY + moonRad/2)
    ) {
        setDay = true; 
    }        
}
//change from day to night
  if (setDay == true) {
    if(mouseX > (sunX - sunRad/2)
    && mouseX < (sunX + sunRad/2) 
    && mouseY > (sunY - sunRad/2) 
    && mouseY < (sunY + sunRad/2)
    ) {
        setDay = false;

    }
}

//starts valve on function which releases waste from pipe, when valve is clicked
    if(mouseX > (valveX - valveRad/2)
    && mouseX < (valveX + valveRad/2) 
    && mouseY > (valveY - valveRad/2) 
    && mouseY < (valveY + valveRad/2)
    ) {
        valveON = true; 
    }
    else {
        valveON = false;
    }

    //starts barrel open function which releases bubbles when barrel is clicked
    if(mouseX > (barrelX - barrelRad/2)
    && mouseX < (barrelX + barrelRad/2) 
    && mouseY > (barrelY - barrelRad/2) 
    && mouseY < (barrelY + barrelRad/2)
    ) {
        barrelOPEN = true; 
    }
    else {
        barrelOPEN = false;
    }

       //sign button
    if(mouseX > (signX - signRad/2)
    && mouseX < (signX + signRad/2) 
    && mouseY > (signY - signRad/2) 
    && mouseY < (signY + signRad/2)
    ) {
    signDOWN = true; 
     } else {
    signDOWN = false;
    }   


}
