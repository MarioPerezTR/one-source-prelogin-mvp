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

  // Product data for slide 3
  products = [
    {
      name: 'extendedCarousel.slide3.products.indirectTax',
      icon: 'receipt',
      url: 'https://tax.thomsonreuters.com/en/onesource/indirect-tax',
    },
    {
      name: 'extendedCarousel.slide3.products.directTax',
      icon: 'coins',
      url: 'https://tax.thomsonreuters.com/en/onesource/direct-tax',
    },
    {
      name: 'extendedCarousel.slide3.products.globalTrade',
      icon: 'globe',
      url: 'https://tax.thomsonreuters.com/en/onesource/global-trade-management',
    },
    {
      name: 'extendedCarousel.slide3.products.statutory',
      icon: 'calendar',
      url: 'https://tax.thomsonreuters.com/en/onesource/statutory',
    },
    {
      name: 'extendedCarousel.slide3.products.informationReporting',
      icon: 'file-certificate',
      url: 'https://tax.thomsonreuters.com/en/onesource/information-reporting-aca-compliance',
    },
  ];

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
