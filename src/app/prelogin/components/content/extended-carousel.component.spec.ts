import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedCarouselComponent } from './extended-carousel.component';

describe('ExtendedCarouselComponent', () => {
  let component: ExtendedCarouselComponent;
  let fixture: ComponentFixture<ExtendedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtendedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first slide', () => {
    expect(component.currentSlide).toBe(0);
    expect(component.totalSlides).toBe(3);
  });

  it('should navigate to next slide', () => {
    component.nextSlide();
    expect(component.currentSlide).toBe(1);
  });

  it('should navigate to previous slide', () => {
    component.currentSlide = 1;
    component.previousSlide();
    expect(component.currentSlide).toBe(0);
  });

  it('should not navigate beyond last slide', () => {
    component.currentSlide = 2;
    component.nextSlide();
    expect(component.currentSlide).toBe(2);
  });

  it('should not navigate before first slide', () => {
    component.currentSlide = 0;
    component.previousSlide();
    expect(component.currentSlide).toBe(0);
  });

  it('should go to specific slide', () => {
    component.goToSlide(2);
    expect(component.currentSlide).toBe(2);
  });

  it('should have correct product data', () => {
    expect(component.products.length).toBe(5);
    expect(component.products[0].name).toBe(
      'extendedCarousel.slide3.products.indirectTax'
    );
    expect(component.products[0].icon).toBe('receipt');
  });
});
