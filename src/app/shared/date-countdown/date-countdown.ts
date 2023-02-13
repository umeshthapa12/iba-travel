import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'date-countdown',
  template: `
    <span>
      {{ message }}
    </span>
  `,
})
export class DateCountdown implements OnInit, OnDestroy {
  private future: Date;
  private futureString;
  private counter$: Observable<number>;
  private subscription: Subscription;

  // For displaying countdown date
  public message: string = '';

  // Get Input Date from parent component
  @Input() endDate:any;

  //  For storing days count
  public days: any;
  //  For storing hours count
  public hours: any;
  //  For storing minute count
  public min: any;
  //  For storing seconds count
  public seconds: any;

  constructor(elm: ElementRef) {
    this.futureString = elm.nativeElement.getAttribute(this.endDate);
  }

  // Return calculated date countdown
  dhms() {
    return [
      this.days + 'd',
      this.hours + 'h',
      this.min + 'm',
      this.seconds + 's',
    ].join(' ');
  }

  ngOnInit() {
    this.bookingEndDateTimer;
    this.future = new Date(this.futureString);
    this.counter$ = interval(1000).pipe(map(() => {
        return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      }))
    // this.counter$ = Observable.interval(1000).map(() => {
    //   return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    // });

    this.subscription = this.counter$.subscribe(
      () => (this.message = this.dhms())
    );
  }

  // Functions for Calculating date
  bookingEndDateTimer = setInterval(() => {
    let futureDate = new Date(this.endDate).getTime();
    let today = new Date().getTime();
    let distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      this.days = 0;
      this.hours = 0;
      this.min = 0;
      this.seconds = 0;
    }
  });

  // Distroy Component
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

// <date-countdown [endDate]="project?.bookingEndDate"></date-countdown>
