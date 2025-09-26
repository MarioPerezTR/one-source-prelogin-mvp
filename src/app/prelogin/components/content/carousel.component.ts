import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  @Input() ariaLabel = 'Featured content carousel';
  current = 0;
  totalSlides = 2; // We have 2 cards based on Figma

  // Computed properties for button disabled states
  get isPrevDisabled(): boolean {
    return this.current === 0;
  }

  get isNextDisabled(): boolean {
    return this.current === this.totalSlides - 1;
  }

  goTo(index: number) {
    if (index >= 0 && index < this.totalSlides) {
      this.current = index;
    }
  }

  prev() {
    if (!this.isPrevDisabled) {
      this.current = this.current - 1;
    }
  }

  next() {
    if (!this.isNextDisabled) {
      this.current = this.current + 1;
    }
  }
}
