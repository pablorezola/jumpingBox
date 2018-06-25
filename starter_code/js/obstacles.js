function Obstacles(game) {
    this.ctx = this.canvas.getContext("2d");
    this.game = game;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#00F";
    this.ctx.moveTo(0, 0); // pick up "pen," reposition at 500 (horiz), 0 (vert)
    this.ctx.lineTo(500, 200); // draw straight down by 200px (200 + 200)
    this.ctx.lineTo(700, 200); // draw up toward left (100 less than 300, so left)
    this.ctx.closePath(); // connect end to start
    this.ctx.stroke(); // outline the shape that's been described

}

Obstacles.prototype.draw = function () {

};

Obstacles.prototype.move = function () {

};