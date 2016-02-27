//Dodge Play State

'use strict';

var Dodge = {};

Dodge.Play = function () {};

Dodge.Play.prototype = {
  
  init: function () {
    console.log("onion-san");
  },

  
  preload: function () {
    //Load the sprites
    this.load.image('background','assets/background.png');
    this.load.spritesheet('player','assets/player.png',32,32,4);

  },


  create: function () {
    //background scrolling
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    //player thingy
    this.player = this.add.sprite(160,510,'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.smoothed = false;
    this.player.animations.add('turn');
    this.player.animations.play('turn',100,true);
    this.player.scale.set(2);

    //movey key
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    }
    if (this.cursors.up.isDown) {
      this.player.y -= 5;
    }
    if (this.cursors.down.isDown) {
      this.player.y += 5;
    }
  }

};

