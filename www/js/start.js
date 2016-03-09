//do the stuff thing

'use strict';

Dodge.Start = function () {};

Dodge.Start.prototype  = {
  
  preload: function () {
    this.load.image('player','assets/player.gif');
  },


  create: function () {
    this.scoreText = this.add.text(
        this.world.centerX,
        this.world.height/5,
        "",
        {
            size: "32px",
            fill: "#FFF",
            align: "center"
        }
    );

    this.scoreText.anchor.setTo(0.5, 0.5);
    this.scoreText.smoothed = false;

    this.player = this.add.sprite(160,200,'player');
    this.player.scale.set(3);
    this.player.smoothed = false;
    this.player.anchor.setTo(0.5, 0.5);

    this.game.stage.backgroundColor = 0xbada55;
  },

  update: function () {
    this.scoreText.setText("TOUCH P\nTO PLAY");

    if (this.input.keyboard.isDown(Phaser.Keyboard.P)) {
      this.game.state.start('play');
    }
  }

}
