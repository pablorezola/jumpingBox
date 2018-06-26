function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.box = new Box(this);
    this.infiniteLine = new InfiniteLine(this);
    this.fps = 60;
    this.framesCounter = 0;
    this.obstacles = [];
}

Game.prototype.start = function () {
    setInterval(function () {
        this.clear();

        this.framesCounter++;

        if (this.framesCounter > 1000) {
            this.framesCounter = 0;
        }

        if ((Math.floor(Math.random() * this.framesCounter) % 100 === 0)) {
            this.generateObstacles();
        }

        this.draw();
        this.moveAll();
        this.crash();
    }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
    this.crash();
    console.log("hoho");
    clearInterval(this.interval);

};

Game.prototype.loser = function () {
    this.stop();
    console.log("hhhhh");

};

Game.prototype.reset = function () {
    this.background = new Background(this);
    this.box = new Box(this);
    this.obstacles = [];
    this.framesCounter = 0;
};

Game.prototype.crash = function () {
  
  this.obstacles.forEach( function(e) {
    if(( this.box.x + this.box.width > e.x && e.x+e.width > this.box.x) && (e.y + e.y > this.box.y && this.box.y + this.box.y > e.y)) {
        console.log('colision');
    }
  }.bind(this));

};

Game.prototype.generateObstacles = function () {
    this.obstacles.push(new Obstacles(this));
};

Game.prototype.draw = function () {
    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
    this.obstacles.forEach(function (obstacle) { obstacle.draw(); });
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveAll = function () {
    this.background.move();
    this.box.moveAll();
    this.obstacles.forEach(function (obstacle) { obstacle.moveAll(); });

};

Game.prototype.update = function () {

};


