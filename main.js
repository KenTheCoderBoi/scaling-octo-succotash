function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(620,350)
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("mobilenet",modelloaded)
}
function modelloaded(){
  console.log("model has been ye-loaded")
}
function draw(){
  image(video,0,0,300,300)
  classifier.classify(video,gotResult)
}
function gotResult(error,results){
  if(error){
    console.error(error)
  }else{

    document.getElementById("object").innerHTML = results[0].label
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
  }
}
for(var i=1;i<1000;i=i+2){
  console.log(i)
}
var beanus=["kem","brian","noriko","serina","william"]
beanus.push("yer mom")
for(var i=0;i<5;i=i+1){
beanus.pop()
}
var arr_pay=[1]
for(var i=1;i<10;i=i+1){
  arr_pay.push(i)
 
  }
console.log(arr_pay)