//do the stuff thing

'use strict';

Dodge.Start = function () {};

Dodge.Start.prototype  = {
  
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
  },

  update: function () {
    this.scoreText.setText("TOUCH P\nSTART GAME");

    if (this.input.keyboard.isDown(Phaser.Keyboard.P)) {
      this.game.state.start('play');
    }
  }

}
