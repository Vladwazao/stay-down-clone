const Player = function (x, y) {

    this.color = '#ff0000';

    this.grounded = false;

    this.move_force = 1;
    this.jump_force = 32;

    this.velocity_x = 0;
    this.velocity_y = 0;

    Rectangle2D.call(this, x, y, 32, 32)
};

Player.prototype = {

    ground() {

        this.grounded = true;
        this.velocity_y = 0;
        
    },

    jump() {

        if (this.grounded) {
           this.grounded = false;
           this.velocity_y -= this.jump_force; 
        }
        
    },

    moveLeft() { this.velocity_x -= this.move_force; },
    moveRight() { this.velocity_x += this.move_force; },

    updatePosition(gravity, friction) {

        this.velocity_x *= friction;
        this.velocity_y += gravity;
        this.velocity_y *= friction;

        this.x += this.velocity_x;
        this.y += this.velocity_y;

    }

};

Object.assign(Player.prototype, Rectangle2D.prototype);