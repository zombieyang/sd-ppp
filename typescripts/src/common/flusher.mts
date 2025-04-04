export class Flusher {
    // the async queue
    private flushing: Promise<any> = Promise.resolve();
    private newFlushPending = false;
    constructor(doFlush: () => Promise<any>) {
        this.doFlush = doFlush;
        this.pause();
    }

    protected doFlush: () => Promise<any>;

    public runFlush() {
        if (this.newFlushPending) return;
        this.newFlushPending = true;
        this.flushing = this.flushing.then(async () => {
            await new Promise(resolve => requestAnimationFrame(resolve))
            this.newFlushPending = false;
            await this.doFlush()
        })
    }

    public pause() {
        this.flushing = this.flushing.then((resolve) => {
            return new Promise((resolve) => { 
                this.resume = resolve;
            });
        }).then(() => {
            this.resume = () => { };
        });
    }

    public resume: (p?: any) => void = () => { };
}