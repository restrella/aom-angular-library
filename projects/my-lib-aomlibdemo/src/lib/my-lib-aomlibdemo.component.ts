import { Component, Input, OnInit } from '@angular/core';
import { MyLibAomlibdemoService } from './my-lib-aomlibdemo.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'nx-my-lib-aomlibdemo',
  template: ` <img *ngIf="posterUrl$ | async as src" [src]="src" /> `,
  styles: [
    `
      :host {
        display: inline-block;
        overflow: hidden;
        line-height: 0;
      }
    `,
  ],
})
export class MyLibAomlibdemoComponent implements OnInit {
  posterUrl$: Observable<string> | undefined;
  @Input() id: number | undefined; //<[mylirary]="25"
  constructor(private service: MyLibAomlibdemoService) {}
  ngOnInit(): void {
    this.posterUrl$ = this.service
      .getShow(this.id ?? 0)
      .pipe(map((show: any) => show.image.medium));
  }
}
