Game.Scenes = (function(){
	Q.scene("level1",function(stage) {
	  var map = stage.collisionLayer(new Q.TowerManMap());
	  map.setup();

	  var player = stage.insert(new Q.Player(Q.tilePos(10,7)));
	});
});