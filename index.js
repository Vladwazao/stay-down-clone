(() => {

    const world_width = 480;
    const world_height = 480;

    const gravity = 1;
    const friction = 0.9;

    var document_element = document.documentElement;

    var display = document.getElementById('canvas').getContext('2d', { alpha: false });

    var player = new Player(100, 100);

    var ground = {

        top: world_height - 32

    }

    function colideTop(rectangle, top) {
        if (rectangle.getBottom() > top) {
            rectangle.setBottom(top);
            return true;
        } return false;
    }

    function update() {

        if (controller.left) player.moveLeft();
        if (controller.right) player.moveRight();

        if (controller.up) {
            
            player.jump();

        }

        player.updatePosition(gravity, friction);

        if (colideTop(player, ground.top)) {
            player.ground();
        }

    }

    function render() {

        display.fillStyle = '#303840';
        display.fillRect(0, 0, world_width, world_height);

        display.strokeStyle = '#202830';
        display.beginPath();
        display.moveTo(0, ground.top);
        display.lineTo(world_width, ground.top);
        display.lineWidth = 4;
        display.stroke();

        display.fillStyle = player.color;
        display.fillRect(player.x, player.y, player.width, player.height);

    }

    function keyDownUp(event) { event.preventDefault();

        var state = event.type == 'keydown';

        switch (event.keyCode) {
            
            case 37: controller.left  = state; break;
            case 38: controller.up    = state; break;
            case 39: controller.right = state;

        }

    }

    display.canvas.width = world_width;
    display.canvas.height = world_height;

    window.addEventListener('keydown', keyDownUp);
    window.addEventListener('keyup', keyDownUp);

    engine.setup(update, render);
    engine.start();

})();