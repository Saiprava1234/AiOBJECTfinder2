stattus = "";

function preload(){
}
function setup(){
    canvas = createCanvas(440,320);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 440, 320);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("textinput").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    stattus = true;
}