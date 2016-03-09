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
    this.load.spritesheet('player','assets/player_animation.png',32,32,4);
    this.load.image('falling','assets/falling.png',32,32);

    //load audio
    this.load.audio('music', 'assets/music.mp3');

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
    this.player.animations.play('turn',10,true);
    this.player.scale.set(2);

    //falling thingy
    this.falling = this.add.sprite(90,200,'falling');
    this.falling.smoothed = false;
    this.falling.scale.set(2.5);

    //falling thingy again
    this.falling2 = this.add.sprite(90,200,'falling');
    this.falling2.smoothed = false;
    this.falling2.scale.set(2.5);

    //falling thingy again again
    this.falling3 = this.add.sprite(90,200,'falling');
    this.falling3.smoothed = false;
    this.falling3.scale.set(2.5);


    //movey key
    this.cursors = game.input.keyboard.createCursorKeys();
    //Music 
    this.music = game.add.audio('music');
  
    //loop e da loop the music
    
    this.music.play();
  },

  update: function () {
  
    //moving! yipppeeeee
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    }

    
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.x -= 5;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.x += 5;
    }
    


    this.falling.y += 14;
    this.falling2.y += 13;
    this.falling3.y += 15;

    if (this.falling.y > 568) {
      this.falling.x = game.rnd.integerInRange(5, 310);
      this.falling.y =  -13.2;
    }

    if (this.falling2.y > 568) {
      this.falling2.x = game.rnd.integerInRange(5, 310);
      this.falling2.y = -13.2;
    }

    if (this.falling3.y > 568) {
      this.falling3.x = game.rnd.integerInRange(5, 310);
      this.falling3.y = -13.2;
    }


  }


};

