function add(){
background_imgTag= new Image(); //defining a variable with a new image
background_imgTag.onlode = uploadBackgrounnd; // setting a function, onloading this variable
background_imgTag.src = background_image;  // load image


rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onlode = uploadrover;
rover_imgTag.src = rover_image;

}
function uploadBackgrounnd( ){
    AudioContext.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}
function uploadrover(rover_imgTag, rover_x ,rover_y, rover_width,rover_height);
window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
uploadBackgrounnd();
console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '39' )
{
    right();
    console.log("right");
}

}
function up()
{
   if(rover_y >=0)
{
rover_y= rover_y - 10;
console.log("when up arrow is pressed, x = " + "[ y = " +rover_y);
uploadBackgrounnd();
uploadrover();
    }
}
function down()
{
if(rover_y <=500)
{
    rover_y =rover_y+ 10;
    console.log("when down arrow is pressed, x = " +rover_x + "[ y ="+rover_y);
    uploadBackgrounnd();
    uploadrover();
}
}
function left()
{
if(rover_x >=0)
{
    rover_x =rover_x+ 10;
    console.log("when left arrow is pressed, x = " + rover_x + "[ y ="+rover_y);
    uploadBackgrounnd();
    uploadrover();
}
}
function right()
{
if(rover_x <= 700)
{
    rover_x =rover_x+ 10;
    console.log("when right arrow is pressed, x = " + rover_x + "[ y ="+rover_y);
    uploadBackgrounnd();
    uploadrover();
}
}
