function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background(this);
    this.box = new Box(this);
    this.infiniteLine = new InfiniteLine(this);
    this.obstacles = new Obstacles(this);
}

Game.prototype.start = function () {
    this.draw();
    this.moveAll();
};

Game.prototype.draw = function () {
    
    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
};

Game.prototype.moveAll = function () {
    this.background.move();
    this.box.move();
};
