import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities = ['Managua', 'Masaya', 'Leon', 'Granada', 'Chinandega', 'Esteli'];
  name!: string;
  title = 'Dia 4 del reto';
  url =
    'https://th.bing.com/th/id/R.34f4c604cd9bfd44d39ece8f6a01363f?rik=7OIxdjJ6xOdnZA&pid=ImgRaw&r=0';
}
