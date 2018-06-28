function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.box = new Box(this);
    this.infiniteLine = new InfiniteLine(this);
    this.fps = 60;
    this.framesCounter = 0;
    this.obstacles = [];
    this.interval = 0;
    this.reset();
    this.attempt = 0;
}

Game.prototype.start = function () {
    this.interval = setInterval(function () {
        this.clear();

        this.framesCounter++;

        if (this.framesCounter > 1000) {
            this.framesCounter = 0;
        }

        if ((Math.floor(Math.random() * this.framesCounter) % 100 === 0)) {
            this.generateObstacles();
        }

        this.crash();
        this.draw();
        this.moveAll();
    }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
    clearInterval(this.interval);
    this.reset();

};

Game.prototype.reset = function () {
    this.obstacles = [];
    this.framesCounter = 0;
    this.start();
    this.attempt += 1;

};

Game.prototype.crash = function () {
    this.obstacles.forEach(function (e) {
        if ((this.box.x + this.box.width > e.x && this.box.x < e.x + this.box.width) && (this.box.y + this.box.height > e.y && this.box.y < e.y + this.box.height)) {
            this.stop();

        }
    }.bind(this));

};
Game.prototype.clearObstacles = function() {
    
  };

Game.prototype.generateObstacles = function () {

    var obstacle = new Obstacles(this);
    if (this.obstacles.length === 0) {
        this.obstacles.push(obstacle);
    }
    if (!(this.obstacles[this.obstacles.length-1].x + this.obstacles[this.obstacles.length-1].width + 300 > obstacle.x && obstacle.x > this.obstacles[this.obstacles.length-1].x + this.obstacles[this.obstacles.length-1].width + 300)) {
        this.obstacles.push(obstacle);
    }

};

Game.prototype.draw = function () {
    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
    this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
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
    this.obstacles.forEach(function (obstacle) { obstacle.moveAll(); });

};
