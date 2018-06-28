function Background(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "images/fondoAzul.png";
    this.x = 0;
    this.y = 0;
    this.speedx = 5;
}

Background.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);

};
Background.prototype.moveAll = function () {
    this.x -= this.speedx;
    if (this.x < -this.game.canvas.width)
        this.x = 0;
};

