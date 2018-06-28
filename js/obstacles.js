function Obstacles(game) {
    this.game = game;
    this.x = this.game.canvas.width * 1.11;
    this.y0 = this.game.canvas.height * 0.85;
    this.y = this.y0;
    this.vx = 5;
    this.width = 50;
    this.height = 50;
    this.obstacles = [];

}

Obstacles.prototype.draw = function () {
    this.obstacles.forEach(function (e) {
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = "grey";
        this.game.ctx.fillRect(e.x, e.y, e.width, e.height);
        this.game.ctx.closePath();
        this.game.ctx.stroke();
    }.bind(this));
};

Obstacles.prototype.moveAll = function () {
    this.obstacles.forEach(function (e) {
        e.x -= e.vx;
    }.bind(this));
};

Obstacles.prototype.isColliding = function (box) {
    var colliding = false;
    this.obstacles.forEach(function (e) {
        if ((box.x + box.width > e.x && box.x < e.x + box.width) && (box.y + box.height > e.y && box.y < e.y + box.height)) {
            colliding = true;
        }
    });

    return colliding;
};

Obstacles.prototype.creatingObstacles = function () {
    var obstacle = {
        x: this.x,
        y: this.y,
        vx: this.vx,
        width: this.width,
        height: this.height
    };

    this.obstacles.push(obstacle);
};

Obstacles.prototype.reset = function () {
    this.obstacles = [];

};

