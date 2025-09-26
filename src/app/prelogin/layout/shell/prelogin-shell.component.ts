import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloginFooterComponent } from '../footer/prelogin-footer.component';
import { BreakingNewsBannerComponent } from '../../components/banners/breaking-news/breaking-news-banner.component';
import { LoginCardComponent } from '../../components/auth/login-card.component';
import { CarouselComponent } from '../../components/content/carousel.component';
import { LanguageBannerComponent } from '../../components/banners/language-banner/language-banner.component';
import { QuickLinksNewsComponent } from '../../components/content/quick-links-news/quick-links-news.component';
import { ExtendedCarouselComponent } from '../../components/content/extended-carousel.component';

@Component({
  selector: 'app-prelogin-shell',
  templateUrl: './prelogin-shell.component.html',
  styleUrls: ['./prelogin-shell.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PreloginFooterComponent,
    BreakingNewsBannerComponent,
    LoginCardComponent,
    CarouselComponent,
    LanguageBannerComponent,
    QuickLinksNewsComponent,
    ExtendedCarouselComponent,
  ],
})
export class PreloginShellComponent {}
