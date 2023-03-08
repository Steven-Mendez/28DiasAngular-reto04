import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange ->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
    console.log('Destroy ->');
  }
  cities = ['Managua', 'Masaya', 'Leon', 'Granada', 'Chinandega', 'Esteli'];
  name!: string;
  title = 'Dia 8 del reto';
  url =
    'https://th.bing.com/th/id/R.34f4c604cd9bfd44d39ece8f6a01363f?rik=7OIxdjJ6xOdnZA&pid=ImgRaw&r=0';
}
