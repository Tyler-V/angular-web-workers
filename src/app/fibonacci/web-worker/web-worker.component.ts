import { Component, OnInit } from '@angular/core';
import { WebWorkerService } from '../../web-worker/web-worker.service';
import { Fibonacci } from '../fibonacci';

@Component({
    selector: 'fibonacci-web-worker',
    templateUrl: './web-worker.component.html',
    styleUrls: ['./web-worker.component.scss'],
    providers: [WebWorkerService]
})
export class FibonacciWebWorkerComponent implements OnInit {

    public start = 25;
    public end = 40;
    public results: any[] = [];
    private promises: Promise<any>[] = [];

    public startTime: number;
    public duration: number;
    public progress: number;

    constructor(private webWorkerService: WebWorkerService) { }

    ngOnInit() { }

    calculate() {
        this.stop();
        this.startTime = new Date().getTime();
        this.results = [];
        this.duration = 0;
        this.progress = 0;

        for (let number = this.start; number < this.end + 1; number++) {
            const promise = this.webWorkerService.run(Fibonacci.calculate, number);
            this.promises.push(promise);
            promise.then(result => {
                this.results.push({
                    number: number,
                    result: result
                });
                if (number < this.end) {
                    this.progress += (100 / (this.end - this.start));
                }
                this.duration = (new Date().getTime() - this.startTime) / 1000;
            });
        }
    }

    stop() {
        this.promises.forEach(promise => {
            this.webWorkerService.terminate(promise);
        });
        this.promises = [];
        this.results = [];
    }
}

export interface Result {
    number: number;
    result: number;
    loading: boolean;
}