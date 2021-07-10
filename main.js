canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_image="";
block_image="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_image=Img;
player_image.scaleToWidth(150);
player_image.scaleToHeight(140);
player_image.set({
top:player_y,
left:player_x
});
canvas.add(player_image);
});
};

function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top:player_y,
left:player_x
});
canvas.add(block_image);
});
};

window.addEventListener("keydown",mykeydown)
function mykeydown(e){
ASCII_value=e.keyCode;
console.log(ASCII_value);
if(e.shiftKey==true && ASCII_value==80){
    console.log("Shift and P is pressed together");
    block_width +=10;
    block_height +=10;
    document.getElementById("Current_width").innerHTML=block_width;
    document.getElementById("Current_height").innerHTML=block_height;
    }
if(e.shiftKey==true && ASCII_value==77){
    console.log("Shift and M is pressed together");
    block_width -=10;
    block_height -=10;
    document.getElementById("Current_width").innerHTML=block_width;
    document.getElementById("Current_height").innerHTML=block_height;
    }
if(ASCII_value==37){
    //left();
    console.log("left");
    }
if(ASCII_value==38){
    //up();
    console.log("up");
    }
if(ASCII_value==39){
    //right();
    console.log("right");
    }
if(ASCII_value==40){
    //down();
    console.log("down");
    }
if(ASCII_value==87){
    new_image("wall.jpg");
    console.log("W");
    }
if(ASCII_value==71){
    new_image("ground.png");
    console.log("G");
    }
if(ASCII_value==76){
    new_image("light_green.png");
    console.log("L");
    }
if(ASCII_value==84){
    new_image("trunk.jpg");
    console.log("T");
    }
if(ASCII_value==82){
    new_image("roof.jpg");
    console.log("R");
    }
if(ASCII_value==89){
    new_image("yellow_wall.png");
    console.log("Y");
    }
if(ASCII_value==68){
    new_image("dark_green.png");
    console.log("D");
    }
if(ASCII_value==85){
    new_image("unique.png");
    console.log("U");
    }
if(ASCII_value==67){
    new_image("cloud.jpg");
    console.log("C");
    }
}
