class TaskScheduler {
    constructor() {
        this.tasks = [];
        this.intervalId = null;
    }

    scheduleTask(task, interval) {
        this.tasks.push({ task, interval });
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.tasks.forEach(({ task, interval }) => {
                    if (interval <= 0) {
                        task();
                    } else {
                        interval--;
                    }
                });
            }, 1000); // assuming interval is in seconds
        } else {
            console.log("Task scheduler is already running.");
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}

module.exports = TaskScheduler;
