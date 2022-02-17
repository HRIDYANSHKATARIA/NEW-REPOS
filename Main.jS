function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);

 canvas = createCanvas(550,550);
 canvas.position(700,100);

   poseNet = ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotposes);
}

function draw()
{
   background('#ffff66');
}

function modelloaded()
{
console.log('MODEL LOADED');
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}