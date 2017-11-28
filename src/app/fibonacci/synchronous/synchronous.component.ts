import { Component, OnInit } from '@angular/core';
import { Fibonacci } from '../fibonacci';

@Component({
  selector: 'fibonacci-synchronous',
  templateUrl: './synchronous.component.html',
  styleUrls: ['./synchronous.component.scss']
})
export class FibonacciSynchronousComponent implements OnInit {

  public start = 25;
  public end = 40;
  public results: any[];

  public startTime: number;
  public duration: number;
  public progress: number;

  constructor() { }

  ngOnInit() { }

  calculate() {
    this.reset();
    this.startTime = new Date().getTime();

    for (let number = this.start; number < this.end + 1; number++) {
      setTimeout(() => {
        this.results.push({
          number: number,
          result: Fibonacci.calculate(number)
        });
        if (number < this.end) {
          this.progress += (100 / (this.end - this.start));
        }
        setTimeout(() => {
          this.duration = (new Date().getTime() - this.startTime) / 1000;
        });
      });
    }
  }

  reset() {
    this.results = [];
    this.startTime = 0;
    this.duration = 0;
    this.progress = 0;
  }
}
