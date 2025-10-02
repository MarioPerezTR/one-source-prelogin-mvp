import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-extended-carousel',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './extended-carousel.component.html',
  styleUrl: './extended-carousel.component.scss',
})
export class ExtendedCarouselComponent {
  currentSlide = 0;
  totalSlides = 3;

  get isSlide3Active(): boolean {
    return this.currentSlide === 2; // Slide 3 (index 2)
  }

  get slideIndicatorText(): string {
    return `Slide ${this.currentSlide + 1} of ${this.totalSlides}`;
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Reset to the first slide if at the end
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1; // Go to the last slide if at the beginning
    }
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.totalSlides) {
      this.currentSlide = index;
    }
  }
}
