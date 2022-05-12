img = "";
Status = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function preload()
{
 
}

function draw()
{

}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
    object_detector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }

    console.log(results);
}


