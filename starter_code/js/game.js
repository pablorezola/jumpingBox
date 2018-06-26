function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.box = new Box(this);
    this.infiniteLine = new InfiniteLine(this);
    this.obstacles = new Obstacles(this);
    this.fps = 60;
    this.reset();
}

Game.prototype.start = function () {
    setInterval(function () {
        this.clear();
        this.draw();
        this.moveAll();

    }.bind(this), 16);
}; 

Game.prototype.reset = function() {
    this.background = new Background(this);
    this.box = new Box(this);
    this.obstacles = new Obstacles(this);
  };

Game.prototype.draw = function () {

    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
    this.obstacles.draw();
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveAll = function () {
    this.background.move();
    this.box.moveAll();
    this.obstacles.moveAll();

};

Game.prototype.update = function () {

};


