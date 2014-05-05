Game.Runner = (function(){

	console.log(Q);

	Q.load("sprites.png, sprites.json, level.json, tiles.png", function() {
	  Q.sheet("tiles","tiles.png", { tileW: 32, tileH: 32 });

	  Q.compileSheets("sprites.png","sprites.json");

	  Q.stageScene("level1");
	});
});