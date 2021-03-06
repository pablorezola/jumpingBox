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
    this.music = new Audio('./music/Avicii - Levels.mp3');
    this.music.play();
    this.music.loop = true;

}


Game.prototype.update = function () {
    this.framesCounter++;
    this.clear();
    var numR = Math.floor(Math.random() * 100);
    if (numR < 1) // 1% de posibilidades de generar obstáculos
        this.obstacles.creatingObstacles();
    var clock = 
    this.crash();
    this.draw();
    this.moveAll();
    window.requestAnimationFrame(this.update.bind(this));
};

Game.prototype.stop = function () {
    this.reset();

};

Game.prototype.reset = function () {
    this.obstacles.reset();
    this.framesCounter = 0;
    this.attempt += 1;
};

Game.prototype.crash = function () {
    if (this.obstacles.isColliding(this.box)) {
        alert("GAME OVER. Your score is: " + this.framesCounter );
        this.stop();
    } 
};

Game.prototype.draw = function () {
    this.background.draw();
    this.box.draw();
    this.infiniteLine.draw();
    this.obstacles.draw();
    this.ctx.font = "40px sans-serif";
    this.ctx.fillStyle = "grey";
    this.ctx.fillText("Attempt " + (this.attempt), 100, 100);
    this.ctx.font = "40px sans-serif";
    this.ctx.fillStyle = "grey";
    this.ctx.fillText("Score: " + (this.framesCounter), 500, 100);
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.moveAll = function () {
    this.background.moveAll();
    this.box.moveAll();
    this.obstacles.moveAll();

};
