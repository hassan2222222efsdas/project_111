Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    pmg_quality:90
});

camera = document.getElementById("camera");

webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"'+data_uri+'"/>';
    });
}


console.log('ml5 version:', ml5.version);
classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/3cLiOdTz8/',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" +prediction_1;
    speak_data_1 = "and the second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
} 