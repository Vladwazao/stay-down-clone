const engine = {

    update: undefined,
    render: undefined,

    accumulated_time: 0,
    current_time: 0,
    time_stamp: 1000 / 30,

    cycle(time_stamp) {

        window.requestAnimationFrame(this.startCycle);

        this.elapsed_time = time_stamp - this.current_time;
        this.accumulated_time += this.elapsed_time;
        this.current_time = time_stamp;

        

        this.update();
        this.render();

    },

    start() {

        window.requestAnimationFrame(this.startCycle);

    },

    stop() {



    },

    setup(update, render) {

        this.update = update;
        this.render = render;

    }

};

(function () {

    this.startCycle = (time_stamp) => { this.cycle(time_stamp); };
    
}), call(engine);