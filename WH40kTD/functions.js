

const canvas = document.getElementById("main_stage");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "imgs/bgs/gamebackground-city.png";

const character = new Image();
character.src = "imgs/chars/investigatorFemale.png";
var characterX = 100;
var characterY = 100;
let characterWidth = 10;
let characterHeight = 10;
let backgroundScroll = 0;

context.imageSmoothingEnabled = true;

const movement = {
	up: false,
	down: false,
	left: false,
	right: false
};

function draw(){
	context.clearRect(0,0, canvas.width, canvas.height);

	context.drawImage(background, adjustedBackgroundPosition, 0, canvas.width, canvas.height);
	context.drawImage(background, adjustedBackgroundPosition - background.width, 0, canvas.width, canvas.height);


		if(movement.up){
			if(characterY >= 0){
				characterY -= 1;
			}
		}
		if(movement.down){
			if(characterY <= (canvas.height - characterHeight)){
				characterY += 1;
			}
		}
		if(movement.left){
			if(characterX >= 0){
				characterX -= 1;
			}
		}
		if(movement.right){
			if(characterX <= (canvas.width - characterWidth)){
				characterX += 1;
			}
		}
	
	context.drawImage(character, characterX, characterY, characterWidth, characterHeight);

	requestAnimationFrame(draw);
}

function updateCharacterPosition(event){

}

document.addEventListener("keydown", (event) => {
	const key = event.key;


		if (key === "w" || key === "W") {
			movement.up = true;
		}
		if (key === "s" || key === "S") {
			movement.down = true;
		}
		if (key === "a" || key === "A") {
			movement.left = true;
		}
		if (key === "d" || key === "D") {
			movement.right = true;
		}
	
});
document.addEventListener("keyup", (event) => {
	const key = event.key;
	if (key === "w" || key === "W") {
		movement.up = false;
	  }
	  if (key === "s" || key === "S") {
		movement.down = false;
	  }
	  if (key === "a" || key === "A") {
		movement.left = false;
	  }
	  if (key === "d" || key === "D") {
		movement.right = false; 
	  }

});

window.addEventListener("scroll", function(){
	backgroundScroll = window.scrollX;
});

draw();
