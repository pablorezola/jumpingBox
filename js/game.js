function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.box = new Box(this);
    this.infiniteLine = new InfiniteLine(this);
    this.framesCounter = 0;
    this.obstacles = new Obstacles(this);
    this.interval = 0;
    this.reset();
    this.attempt = 1;
    window.requestAnimationFrame(this.update.bind(this));
}


Game.prototype.update = function () {
    this.framesCounter++;
    this.clear();
    this.obstacles.creatingObstacles();
    this.crash();
    this.draw();
    this.moveAll();
    window.requestAnimationFrame(this.update.bind(this));
};

Game.prototype.stop = function () {
    clearInterval(this.interval);
    this.reset();

};

Game.prototype.reset = function () {
    this.obstacles.reset();
    this.framesCounter = 0;
    this.attempt += 1;
};

Game.prototype.crash = function () {
    if (this.obstacles.isColliding(this.box)) {
        this.stop();
    }
};

/* Game.prototype.clearObstacles = function () {

}; */

Game.prototype.draw = function () {
    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
    //.forEach(function (obstacle) { obstacle.draw(); });
    this.obstacles.draw();
    this.ctx.font = "40px sans-serif";
    this.ctx.fillStyle = "grey";
    this.ctx.fillText("Attempt " + (this.attempt), 100, 100);
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveAll = function () {
    this.background.moveAll();
    this.box.moveAll();
    //.forEach(function (obstacle) { obstacle.moveAll(); });
    this.obstacles.moveAll();

};
