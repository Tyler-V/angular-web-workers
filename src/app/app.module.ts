import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FibonacciSynchronousComponent } from './fibonacci/synchronous/synchronous.component';
import { FibonacciWebWorkerComponent } from './fibonacci/web-worker/web-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciSynchronousComponent,
    FibonacciWebWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
