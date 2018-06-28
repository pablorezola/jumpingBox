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
    this.obstacles.forEach(function (e) {
        if ((box.x + box.width > e.x && box.x < e.x + box.width) && (box.y + box.height > e.y && box.y < e.y + box.height)) {
            return true;
        } else {
            return false;
        }
    });
};

Obstacles.prototype.creatingObstacles = function () {
    var obstacle = {
        x: this.x,
        y: this.y,
        vx: this.vx,
        width: this.width,
        height: this.height
    };

    if (this.obstacles.length == 0) {
        this.obstacles.push(obstacle);
    } else if (!(this.obstacles[this.obstacles.length - 1].x + this.obstacles[this.obstacles.length - 1].width + 350 > obstacle.x && obstacle.x > this.obstacles[this.obstacles.length - 1].x + this.obstacles[this.obstacles.length - 1].width + 350)) {
        this.obstacles.push(obstacle);

    }
};

Obstacles.prototype.reset = function () {
    this.obstacles = [];

};

