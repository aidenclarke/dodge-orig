//Dodge Play State

'use strict';

var Dodge = {};

Dodge.Play = function () {};

Dodge.Play.prototype = {
  
  init: function () {
    console.log("onion-san");
  },

  
  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('falling','assets/falling.png',46,64,2);

  },


  update: function () {
    //background that doesnt even scroll idk why 
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);
    //falling thingy
    this.falling = this.add.tileSprite(0,0,160,510,"falling");
    this.falling.anchor.setTo(0.5, 0.5);
    this.falling.animations.add('turn');
    this.falling.animations.play('turn');

  }

};

