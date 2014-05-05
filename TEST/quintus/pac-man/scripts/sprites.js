Game.Sprites = (function() {
	
	// Create the Player	
	Game.Q.Sprite.extend("Player", {
		
		init: function(p) {
			this._super(p, {
				sheet: "player"
			});

			this.add("2d");
		}
	});

	// Create the Dot sprite
	Game.Q.Sprite.extend("Dot", {
	  init: function(p) {
	    this._super(p,{
	      sheet: 'dot',
	      type: Game.Consts.SPRITE_DOT,
	      // Set sensor to true so that it gets notified when it's
	      // hit, but doesn't trigger collisions itself that cause
	      // the player to stop or change direction
	      sensor: true
	    });

	    this.on("sensor");
	    this.on("inserted");
	  },

	  // When a dot is hit..
	  sensor: function() {
	    // Destroy it and keep track of how many dots are left
	    this.destroy();
	    this.stage.dotCount--;
	    // If there are no more dots left, just restart the game
	    if(this.stage.dotCount == 0) {
	      Q.stageScene("level1");
	    }
	  },

	  // When a dot is inserted, use it's parent (the stage)
	  // to keep track of the total number of dots on the stage
	  inserted: function() {
	    this.stage.dotCount = this.stage.dotCount || 0;
	    this.stage.dotCount++;
	  }
	});

	// Tower is just a dot with a different sheet - use the same
	// sensor and counting functionality
	Game.Q.Dot.extend("Tower", {
	  init: function(p) {
	    this._super(Q._defaults(p,{
	      sheet: 'tower'
	    }));
	  }
	});

})();