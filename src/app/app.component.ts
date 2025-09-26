import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloginShellComponent } from './prelogin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [PreloginShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
