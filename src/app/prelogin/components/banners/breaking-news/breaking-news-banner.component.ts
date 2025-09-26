import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../pipes/translate.pipe';

@Component({
  selector: 'app-breaking-news-banner',
  templateUrl: './breaking-news-banner.component.html',
  styleUrls: ['./breaking-news-banner.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreakingNewsBannerComponent {
  // Static banner content as per Figma design
}
