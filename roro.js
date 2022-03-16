Status = "";
remote_image = "";

function preload(){
    remote_image = loadImage("roro.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(roro_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(remote_image,0,0,640,350);
}