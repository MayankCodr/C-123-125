noseX = 0;
noseY = 0;
leftWristX = 0;
RightWristX = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    document.getElementById("square_side").innerHTML = "Width and height of the square will be " + difference + "px";
    background('#969A97');
    fill("red");
    stroke("yellow");
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x :" + noseX + "Nose y :" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-RightWristX);
        console.log("leftWristX" + leftWristX + "RightWristX" + RightWristX + "difference" + difference);

    }
}