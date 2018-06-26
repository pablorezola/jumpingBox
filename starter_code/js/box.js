function Box(game) {
    this.game = game;
    this.x = 30;
    this.y = 500;
    this.vy = 1;
    this.keyBoard();
    this.x = this.game.canvas.width * 0.07;
    this.y0 = this.game.canvas.height * 0.85;
    this.y = this.y0;
}

Box.prototype.draw = function () {
    this.game.ctx.fillStyle = "#E88D20";
    this.game.ctx.fillRect(this.x, this.y, 50, 50);
    this.game.ctx.stroke();
};
Box.prototype.keyBoard = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === 32) {
            this.y -= 60;
            this.vy -= 4;
        } else {
            event.preventDefault();
        }
    }.bind(this);

};

Box.prototype.moveAll = function () {
    var gravity = 0.1;
    if (this.y >= this.y0) {
        this.y = this.y0;
    } else {
        this.vy += gravity;
        this.y += this.vy;
    }
};


var SPACE = 32;