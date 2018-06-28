function Box(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.vy = 2;
    this.keyBoard();
    this.x = this.game.canvas.width * 0.07;
    this.y0 = this.game.canvas.height * 0.85;
    this.y = this.y0;
}

Box.prototype.draw = function () {
    this.game.ctx.fillStyle = "#E88D20";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.stroke();

};
Box.prototype.keyBoard = function () {
    var SPACE = 32;
    var ENTER = 13;
    document.onkeydown = function (event) {
        if (event.keyCode === SPACE && this.y == this.y0) {
            this.y -= this.vy;
            this.vy -= 9;
        }else if(event.keyCode === ENTER){ 
            confirm("PAUSE." + " DO YO WANT TO CONTINUE?");
        }
    }.bind(this);
};

Box.prototype.moveAll = function () {
    var gravity = 0.2;
    if (this.y >= this.y0) {
        this.y = this.y0;
    } else {
        this.vy += gravity;
        this.y += this.vy;
    }

    if( this.y == this.y0 ) {
        this.vy = 1;
    }
};

