nose_x=0;
nose_y=0;
function preload(){
lipstick=loadImage('https://th.bing.com/th/id/R.1c15f03b70953e6f79f22a6fcfda36bc?rik=C%2fldfEA3DlNolw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fred-lip-png--3000.png&ehk=Q8kkBcx65Ku5nxoQfpDqzXqbYe3Rfh3cCIwM8Yi%2fOcE%3d&risl=&pid=ImgRaw&r=0')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(lipstick,nose_x,nose_y,45,45);
}
function take_snapshot(){
    save('lipstick_filter.png');
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x-23;
    nose_y=results[0].pose.nose.y+10;
    console.log("nose y= "+nose_x);
    console.log("nose x= "+nose_x)
}
}