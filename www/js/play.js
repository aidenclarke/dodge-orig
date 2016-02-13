//Dodge Play State

'use strict';

var Dodge = {};

Dodge.Play = function () {};

Dodge.Play.prototype = {
  
  init: function () {
    console.log("onion-san");
  },

  
  preload: function () {
    this.load.image('background','assets/background.png',320,568);
  },


  update: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,-50);
    this.background.scale.set(1);
  }

};

