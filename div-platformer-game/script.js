var FRAME_RATE = 60;
var GRAVITY = .3;
var PLAYER_RUN_SPEED = 2;
var JUMP_SPEED = 8;
var WALK_ANIMATION_SPEED = 300;

function Level(player) {
    this.player = player;
    this.$level = $("#level");
    this.$scoreUI = $("#score")
    this.score = 0;

    this.obstacles = $(".geometry").map(function() {
        var $this = $(this)
        return new Obstacle($this);
    });

    this.items = $(".item").map(function() {
        var $this = $(this)
        return new Item($this);
    })


    this.$level.keydown((function(e) {
        if (e.keyCode === 39)
            this.player.speedHorizontal = PLAYER_RUN_SPEED;
        if (e.keyCode === 37)
            this.player.speedHorizontal = -PLAYER_RUN_SPEED;

        if (e.keyCode === 38)
            this.player.speedVertical = -JUMP_SPEED;
    }).bind(this));

    this.$level.keyup((function(e) {
        if (e.keyCode === 39 || e.keyCode === 37)
            this.player.speedHorizontal = 0;
    }).bind(this));

    this._canMoveHorizontal = function(obstacles) {
        for (var i = 0; i < obstacles.length; i++) {
            if (obstacles[i].isCollideHorizontal(this.player.$player, this.player.speedHorizontal)) {
                this.player.speedHorizontal = 0;
                return false;
            }
        }
        return true;
    }

    this._getCollidedItem = function(items) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].isCollide(this.player.$player))
                return i;
        }
        return null;
    };

    this._canMoveVertical = function(obstacles) {
        for (var i = 0; i < obstacles.length; i++) {
            if (obstacles[i].isCollideVertical(this.player.$player, this.player.speedVertical)) {
                this.player.speedVertical = 0;
                return false;
            }
        }
        return true;
    }


    this.movePlayer = (function() {
        if (this._canMoveHorizontal(this.obstacles))
            this.player.moveHorizontal();
        if (this._canMoveVertical(this.obstacles))
            this.player.moveVertical();

        var collidedItem = this._getCollidedItem(this.items);
        if (collidedItem !== null) {
            this.items[collidedItem].destroy();
            this.items.splice(collidedItem, 1);
            this.$scoreUI.html(++this.score);
        }
    }).bind(this);

    setInterval((function() {
        this.movePlayer();
    }).bind(this), 1000 / FRAME_RATE);
}


function Player(top, left) {
    this.$player = $("<div id='player'></div>");
    this.$player.css("top", top);
    this.$player.css("left", left);
    this.$player.appendTo("#level");


    this.speedHorizontal = 0;
    this.speedVertical = 0;

    this._getWalkFrame = function() {
        if (Date.now() % (WALK_ANIMATION_SPEED * 2) > WALK_ANIMATION_SPEED)
            return 1;
        return 0;
    };


    this.moveHorizontal = (function() {
        this.$player.css("left", this.$player.position().left + this.speedHorizontal);

        if (this.speedHorizontal > 0) {
            this.$player.css('background-position', this._getWalkFrame() ? '33% 0' : '66% 0');
            this.$player.css('transform', 'scaleX(1)');
        } else if (this.speedHorizontal < 0) {
            this.$player.css('background-position', this._getWalkFrame() ? '33% 0' : '66% 0');
            this.$player.css('transform', 'scaleX(-1)');
        } else {
            this.$player.css('background-position', '0');
        }

    }).bind(this);

    this.moveVertical = (function() {
        if (this.speedVertical !== 0)
            this.$player.css('background-position', '100%');


        this.speedVertical += GRAVITY;
        this.$player.css("top", this.$player.position().top + this.speedVertical);
    }).bind(this);
}

function Item($obj) {
    this.$item = $obj
    this.obstacle = new Obstacle(this.$item);

    this.destroy = (function() {
        this.$item.remove();
    }).bind(this);

    this.isCollide = (function($player) {
        return this.obstacle.isCollideHorizontal($player, 0);
    }).bind(this);
}

function Obstacle($obj) {
    this.top = $obj.position().top;
    this.left = $obj.position().left;
    this.width = $obj.width();
    this.height = $obj.height();

    this.isCollideHorizontal = (function($player, speedHorizontal) {
        if (this.top < $player.position().top + $player.height() &&
            this.top + this.height > $player.position().top) {
            if (this.left < $player.position().left + $player.width() + speedHorizontal &&
                this.left + this.width > $player.position().left + speedHorizontal) {
                return true;
            }
        }
        return false;
    }).bind(this);

    this.isCollideVertical = (function($player, speedVertical) {
        if (this.left < $player.position().left + $player.width() &&
            this.left + this.width > $player.position().left) {
            if (this.top < $player.position().top + $player.height() + (speedVertical < 5 && 5) + speedVertical &&
                this.top + this.height > $player.position().top + speedVertical) {
                return true;
            }
        }
        return false;
    }).bind(this);
}

var player = new Player(50, 120);
var level = new Level(player);
