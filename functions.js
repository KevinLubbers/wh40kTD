

const canvas = document.getElementById("main_stage");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "imgs/bgs/gamebackground-city.png";
var backgroundX = 0;
var backgroundY = 0;

const character = new Image();
character.src = "imgs/chars/investigatorFemale.png";
var characterX = canvas.width / 2;
var characterY = canvas.height / 2;
let characterWidth = 10;
let characterHeight = 10;

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


	context.drawImage(background, backgroundX, backgroundY, background.width, background.height);

		if(movement.down){
			if(backgroundY > ((-1 * background.height) + (characterY + characterHeight))){

				console.log(background.height);
				backgroundY -= 1;
				console.log(backgroundX);
				console.log(backgroundY);
			}
		}
		if(movement.up){
			if(backgroundY < (0 + characterY)){
				backgroundY += 1;
				console.log(backgroundX);
				console.log(backgroundY);
			}
		}
		if(movement.right){
			if(backgroundX > ((-1 * background.width) + (characterX + characterWidth))){
				backgroundX -= 1;
				console.log(backgroundX);
				console.log(backgroundY);
			}
		}
		if(movement.left){
			if(backgroundX < (0 + characterX)){
				backgroundX += 1;
				console.log(backgroundX);
				console.log(backgroundY);
			}
		}
	
	context.drawImage(character, characterX, characterY, characterWidth, characterHeight);

	requestAnimationFrame(draw);
}


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

const slider = document.getElementById('colorSlider');
const directional = document.getElementById('directionalPad');
const buttons = document.getElementById('buttons')
    
slider.addEventListener('input', function() {
    const sliderValue = this.value;
      const hue = Math.floor((sliderValue / 360) * 360);
      const color = `hsl(${hue}, 100%, 50%)`;
      document.body.style.backgroundColor = color;
});
buttons.addEventListener('touchstart', function(event) {
      event.preventDefault();
    }, {passive:false});
buttons.addEventListener('touchend', function(event) {
      event.preventDefault();
    });
directional.addEventListener('touchstart', function(event) {
      event.preventDefault();
    }, {passive:false});
directional.addEventListener('touchend', function(event) {
      event.preventDefault();
    });

draw();
