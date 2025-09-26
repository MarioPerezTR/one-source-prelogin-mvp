import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksNewsComponent } from './quick-links-news.component';

describe('QuickLinksNewsComponent', () => {
  let component: QuickLinksNewsComponent;
  let fixture: ComponentFixture<QuickLinksNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickLinksNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLinksNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
