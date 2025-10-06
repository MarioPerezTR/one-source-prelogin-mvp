import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ci-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ci-login.component.html',
  styleUrl: './ci-login.component.scss',
})
export class CiLoginComponent implements OnInit {
  @Output() signInClick = new EventEmitter<string>();
  @Output() closeLogin = new EventEmitter<void>();

  email: string = 'user@acme.com'; // Credencial precargada

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email) {
      // Redirigir al dashboard externo
      window.location.href =
        'https://carlosalvareztr.github.io/OS3-Synergy-default-dashboard/';
    }
  }

  onClose() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // Función global para el footer
    (window as any).toggleFooter = () => {
      const footerNav = document.querySelector('.tr-GlobalFooter-nav');
      const button = document.querySelector('.tr-GlobalFooter-button');

      if (footerNav && button) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const newExpanded = !isExpanded;

        button.setAttribute('aria-expanded', newExpanded.toString());
        button.setAttribute(
          'title',
          newExpanded ? 'collapse menu' : 'expand menu'
        );
        button.setAttribute(
          'aria-label',
          newExpanded ? 'collapse menu' : 'expand menu'
        );

        if (newExpanded) {
          footerNav.classList.add('expanded');
        } else {
          footerNav.classList.remove('expanded');
        }
      }
    };
  }
}
