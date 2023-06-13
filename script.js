function light(show)
{
var pic;
if(show==1)
{
    pic="imageon.jpeg";
}
else{
    pic="bulboff.jpeg";
}
document.getElementById('bulb').src=pic;
}