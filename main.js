Webcam.attach("#camera");
camera=document.getElementById("camera");Webcam.set({
  width:350,height:300,image_format:"png",png_quality:90

});
function takeSnapshot (){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="imganscapturadas"src="'+data_uri+'">'                                                                                                                           
  });
}
console.log("ml5",ml5.version)
 classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bePApNR6O/model.json",modelLoaded);
 function modelLoaded(){
  console.log("modelocarregado")
 }
 function check(){
  img=document.getElementById("imganscapturadas");
classfier.classify(img,gotResult)
 }
 function gotResult(error,results ){
  if (error){
    console.error(error)
  }
  else{console.log(results)
    document.getElementById("resultObjectName").innerHTML = results[0].label;
     document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);}
 }