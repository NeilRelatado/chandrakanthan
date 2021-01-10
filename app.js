var images=new Array('images/img1.png','images/img2.png','images/img3.png','images/church.png');
var nextimage=0;

changeBack();






function next(){
  nextimage +=1
  if (nextimage >= images.length){
    nextimage=0;
  }
  console.log(nextimage)
  console.log("Hello")
}
function changeBack()
{
    $('.top-header').css("background-image", "url("+images[nextimage]+")")
    setInterval(function(){
  next();

  $('.top-header').css("background-image", "url("+images[nextimage]+")")
  }, 5000);
}
