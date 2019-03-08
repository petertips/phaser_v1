Phaser.Plugin.FadePlugin = function (game, parent) {
    Phaser.Plugin.call(this, game, parent);
};

Phaser.Plugin.FadePlugin.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.FadePlugin.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.FadePlugin.prototype.fadeAndPlay = function (style,time,nextState) {
    this.crossFadeBitmap = this.game.make.bitmapData(this.game.width, this.game.height);
    this.crossFadeBitmap.rect(0, 0, this.game.width, this.game.height, style);
    this.overlay = this.game.add.sprite(0,0, this.crossFadeBitmap);
    this.overlay.alpha = 0;
    var fadeTween = this.game.add.tween(this.overlay);
    fadeTween.to({alpha:1},time*1000);
    fadeTween.onComplete.add(function(){
        this.game.state.start(nextState);
    },this);
    fadeTween.start();
};

/********************************        VIBRACION       ***********************************************/
Phaser.Plugin.Shake = function (game, parent) {
    'use strict';
    Phaser.Plugin.call(this, game, parent);

    this.offsetX = 0;
    this.offsetY = 0;

    this.size = 20;
    this.amt = 0.0;

    this.cache = 0;
    this.objectToShake = this.game.camera.displayObject;
};

Phaser.Plugin.Shake.prototype = Object.create(Phaser.Plugin.prototype);

Phaser.Plugin.Shake.prototype.postUpdate = function () {
    'use strict';
    this.cache = this.amt * this.size;

    this.offsetX = ((Math.random() * 2 - 1) * this.cache) | 0;
    this.offsetY = ((Math.random() * 2 - 1) * this.cache) | 0;

    this.objectToShake.position.x += this.offsetX;
    this.objectToShake.position.y += this.offsetY;

    this.amt *= 0.95; // Todo: framerate independence!
};

Phaser.Plugin.Shake.prototype.postRender = function () {
    'use strict';
    this.objectToShake.position.x -= this.offsetX;
    this.objectToShake.position.y -= this.offsetY;
};

Phaser.Plugin.Shake.prototype.shake = function (size, objectToShake) {
    'use strict';
    this.size = size || this.size;
    this.objectToShake = objectToShake || this.objectToShake;

    this.amt = 1.0;
};