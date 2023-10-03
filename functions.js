

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
const button = {
	a: false,
	b: false
}

function draw(){
	context.clearRect(0,0, canvas.width, canvas.height);


	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	context.drawImage(background, 0, 0, canvas.width, canvas.height);


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
			else{
				characterX = 0;
				backgroundScroll += 1;
			}
		}
	
	context.drawImage(character, characterX, characterY, characterWidth, characterHeight);

	requestAnimationFrame(draw);
}

const slider = document.getElementById('colorSlider');
    
slider.addEventListener('input', function() {
    const sliderValue = this.value;
      const hue = Math.floor((sliderValue / 360) * 360);
      const color = `hsl(${hue}, 100%, 50%)`;
      document.body.style.backgroundColor = color;
});

document.addEventListener("keydown", (event) => {
	const key = event.key;


		if (key === "w" || key === "W") {
			let button = document.getElementById("up");
			button.classList.add("selected");
			movement.up = true;
		}
		if (key === "s" || key === "S") {
			let button = document.getElementById("down");
			button.classList.add("selected");
			movement.down = true;
		}
		if (key === "a" || key === "A") {
			let button = document.getElementById("left");
			button.classList.add("selected");
			movement.left = true;
		}
		if (key === "d" || key === "D") {
			let button = document.getElementById("right");
			button.classList.add("selected");
			movement.right = true;
		}
	
});
document.addEventListener("keyup", (event) => {
		const key = event.key;

		if (key === "w" || key === "W") {
			let button = document.getElementById("up");
		
			button.classList.remove("selected");
			movement.up = false;
		}
		if (key === "s" || key === "S") {

			let button = document.getElementById("down");
		
			button.classList.remove("selected");
			movement.down = false;
		}
		if (key === "a" || key === "A") {
			movement.left = false;
			let button = document.getElementById("left");
		
			button.classList.remove("selected");
		}
		if (key === "d" || key === "D") {
			movement.right = false;
			let button = document.getElementById("right");
		
			button.classList.remove("selected");
		}

});
function touchMovement(direction){
	let button = document.getElementById(direction);
	
	button.classList.toggle("selected");

		if (direction === "up") {
			movement.up = true;
		}
		if (direction === "down") {
			movement.down = true;
		}
		if (direction === "left") {
			movement.left = true;
		}
		if (direction === "right") {
			movement.right = true;
		}
		if (direction === "a") {
			button.a = true;
		}
		if (direction === "b") {
			button.b = true;
		}

		
}

function stopMovement(direction){
	let button = document.getElementById(direction);
	
	button.classList.toggle("selected");

		if (direction === "up") {
			movement.up = false;
		}
		if (direction === "down") {
			movement.down = false;
		}
		if (direction === "left") {
			movement.left = false;
		}
		if (direction === "right") {
			movement.right = false;
		}
		if (direction === "a") {
			button.a = false;
		}
		if (direction === "b") {
			button.b = false;
		}
}


draw();
