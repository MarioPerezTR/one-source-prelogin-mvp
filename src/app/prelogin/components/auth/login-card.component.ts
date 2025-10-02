import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  // Component logic here
}
