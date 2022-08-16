function setup() {
    canvas = createCapture(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

if(scoreRightWrist > 0.2) { circle(rightWristX,rightWristY,20); 
    song2.stop(); 
    if(song1_status == false) { song1.play();
         document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song" } }
          if(scoreLeftWrist > 0.2) { circle(leftWristX,leftWristY,20); 
            song1.stop(); 
            if(song2_status == false) { song2.play();
                 document.getElementById("song").innerHTML = "Playing - Peter Pan Song" 
                } } 
  
song="";
leftWristX = 0;
leftWristY = 0;

song1 = ""; 
song2 = ""; 
song1_status = "";
 song2_status = "";
rightWristX=0;
rightWristY=0;
function preload() {
    song=loadSound("music.mp3");
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log('PoseNet is Intialized ');
}

function gotPoses(results){
    if(results.length > 0 )

{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX+ "leftWristY = " + leftWristY);


    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX+ "rightWristY = " + rightWristY);
}
}