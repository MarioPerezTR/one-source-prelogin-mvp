import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  // Credenciales precargadas
  email: string = 'user@acme.com';
  password: string = 'password$';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      // Redirigir al dashboard externo
      window.location.href =
        'https://carlosalvareztr.github.io/OS3-Synergy-default-dashboard/';
    }
  }

  openCiLogin() {
    this.router.navigate(['/ci-login']);
  }
}
