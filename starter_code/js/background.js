function Background(game) {
    this.game = game;

    this.img = new Image();
    this.img.src = "images/fondoAzul.jpg";

    this.x = 0;
    this.y = 0;

    this.speedx = 3;
}

Background.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, 0, 0, 200, 200, 0, 0, 400, 200);

};
Background.prototype.move = function () {
    this.x -= this.speedx;

    if (this.x < -this.game.canvas.width) this.x = 0;
};
