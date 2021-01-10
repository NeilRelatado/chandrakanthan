var images=new Array('images/img1.png','images/img2.png','images/img3.png');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(2000,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
    $('.top-header').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(1000,function(){setTimeout(doSlideshow,1000);}));
    if(nextimage>=images.length)
        nextimage=0;
}
