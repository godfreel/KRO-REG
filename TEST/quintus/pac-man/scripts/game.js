var Game = (function() {
	
	var Q = Game.Q = window.Q = Quintus({development: true})
		.include("Sprites, Scenes, Input, 2D")
		.setup({width: 640, height: 480});

	Q.input.keyboardControls();
  	Q.input.joypadControls();

  	Q.gravityY = 0;
	Q.gravityX = 0;

	Game.Consts = {
		SPRITE_PLAYER: 1,
		SPRITE_TILES: 2,
		SPRITE_ENEMY: 4,
		SPRITE_DOT: 8
	}

	// Return a x and y location from a row and column
	// in our tile map
	Q.tilePos = function(col,row) {
	  return { x: col*32 + 16, y: row*32 + 16 };
	}

	Q.TileLayer.extend("TowerManMap",{
	  init: function(p) {
	    this._super(p,{
	      type: SPRITE_TILES,
	      dataAsset: 'level.json',
	      sheet:     'tiles',
	    });

	  },

	  setup: function() {
	    // Clone the top level arriw
	    var tiles = this.p.tiles = this.p.tiles.concat();
	    var size = this.p.tileW;
	    for(var y=0;y<tiles.length;y++) {
	      var row = tiles[y] = tiles[y].concat();
	      for(var x =0;x<row.length;x++) {
	        var tile = row[x];

	        // Replace 0's with dots and 2's with Towers
	        if(tile == 0 || tile == 2) {
	          var className = tile == 0 ? 'Dot' : 'Tower'
	          this.stage.insert(new Q[className](Q.tilePos(x,y)));
	          row[x] = 0;
	        }
	      }
	    }
	  }
	});
})();