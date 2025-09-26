import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '../../../../pipes/translate.pipe';

interface QuickLink {
  key: string;
  url: string;
  external: boolean;
}

interface NewsArticle {
  titleKey: string;
  url: string;
  date: string;
  readTime: string;
  external: boolean;
}

@Component({
  selector: 'app-quick-links-news',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './quick-links-news.component.html',
  styleUrl: './quick-links-news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuickLinksNewsComponent {
  quickLinks: QuickLink[] = [
    {
      key: 'quickLinks.links.getHelp',
      url: 'https://support.thomsonreuters.com/onesource',
      external: true,
    },
    {
      key: 'quickLinks.links.contactOnesource',
      url: 'https://contact.thomsonreuters.com/onesource',
      external: true,
    },
    {
      key: 'quickLinks.links.signInCase',
      url: 'https://cases.thomsonreuters.com/dashboard',
      external: true,
    },
    {
      key: 'quickLinks.links.checkStatus',
      url: 'https://status.thomsonreuters.com/onesource',
      external: true,
    },
  ];

  newsArticles: NewsArticle[] = [
    {
      titleKey: 'news.articles.payrollCompliance',
      url: 'https://example.com/payroll-org-compliance-chief-reacts-irs-draft-2026-forms-obbba',
      date: 'September 12, 2025',
      readTime: '5',
      external: true,
    },
    {
      titleKey: 'news.articles.key2026Figures',
      url: 'https://example.com/key-2026-figures-calculated-thomson-reuters-checkpoint-inflation-data',
      date: 'September 11, 2025',
      readTime: '6',
      external: true,
    },
    {
      titleKey: 'news.articles.senatorsGrill',
      url: 'https://example.com/senators-grill-irs-chief-counsel-nominee',
      date: 'September 11, 2025',
      readTime: '5',
      external: true,
    },
  ];
}
