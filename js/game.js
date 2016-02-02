var canvas = document.getElementById("game");

var ctx = canvas.getContext && canvas.getContext("2d");

if(!ctx) {
	alert('please upgrade your browser');
} else {
	startGame();
}

var SpriteSheet = new function() {
	this.map = {};
	this.load = function(spriteData, callback) {
		this.map = spriteData;
		this.image = new Image();
		this.image.onload = callback;
		this.image.src = 'img/sprites.png';
	};
	this.draw = function(ctx, sprite, x, y, frame) {
		var s = this.map[sprite];
		if(!iframe) frame = 0;
	}
}

function startGame() {
	ctx.fillStyle = "#FFFF00";
  	ctx.fillRect(50,100,380,400);

  	// Second, semi-transparent blue rectangle
  	ctx.fillStyle = "rgba(0,0,128,0.8);";
  	ctx.fillRect(25,50,380,400);

  	var img = new Image();
  	img.onload = function() {
  		ctx.drawImage(img, 18, 0, 18, 25, 100, 100, 18, 25);
  	}
  	img.src = 'img/sprites.png';
}


