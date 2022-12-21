import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appCalculator';
  res: any = '';

  getItem(item: any) {
    this.res += item;
  }

  equal() {
    if (this.res.includes('/')) {
      this.res = eval(this.res).toFixed(2);
    }
    this.res = eval(this.res);
  }

  reset() {
    this.res = '';
  }
}
