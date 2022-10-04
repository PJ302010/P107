function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('',modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}
function gotresult(error, results) {
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}