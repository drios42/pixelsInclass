var video; // camera
var img; // output

var cx, cy; 

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
 // video.size(320, 240);
 video.hide();
  img = createImage(640, 480);
  img.loadPixels();
}

function draw() {
  background(255);
  video.loadPixels(); //video source

  cx= map(mouseX,0,width, 0,255);
 
  cy= map(mouseY,0,width, 0,255);
  
  for (var i = 0; i < video.pixels.length; i += 4) {
    var r = video.pixels[i];
    var g = video.pixels[i + 1];
    var b = video.pixels[i + 2];
    var a = video.pixels[i + 3];
    
    r = abs(255 - r);
    g = abs(255 - g);
    b = abs(255 - b);
    
    if(r+g+b > 600){
      r = r - cx;
      g = g - cy;
      b= b - cx;
    }

    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
  }

  img.updatePixels();

  translate(img.width, 0);
  scale(-1, 1);
  image(img, 0, 0);


}