<!-- large view sizes, etc.




// code to change images


function Switch(direction)
{

if (null == direction)
{

if ((lastTime + delay) > new Date().getTime())
{
direction = 0;
}

else
{
direction = currentDirection;
}
}

else
{
currentDirection = direction;
}

if (direction != 0)
{

if (direction > 0)
{

currentSlide++;

if (currentSlide > (slides.length - 1))
{
currentSlide = 0;
}
}

else
{

currentSlide = currentSlide-1;

if (currentSlide < 0)
{
currentSlide = (slides.length - 1);
}
}

lastTime = new Date().getTime();

update(slides[currentSlide]);

setTimeout("Switch();",delay);
}
}
var currentIndex = 0;

function update(url, index) 
{
currentIndex = index;
document['LargeView'].src=url;
{

}
return;
}








//  End -->