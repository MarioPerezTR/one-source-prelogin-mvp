import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../services/translation.service';

interface Language {
  code: string;
  name: string;
  region?: string;
}

@Component({
  selector: 'app-language-banner',
  imports: [CommonModule],
  templateUrl: './language-banner.component.html',
  styleUrl: './language-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LanguageBannerComponent implements OnInit {
  selectedLanguage: Language = {
    code: 'en-US',
    name: 'English (United States)',
  };

  constructor(private translationService: TranslationService) {}

  languages: Language[] = [
    { code: 'ar', name: 'العربية' },
    { code: 'bg', name: 'Български' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'cs', name: 'Čeština' },
    { code: 'hr', name: 'hrvatski' },
    { code: 'da', name: 'dansk' },
    { code: 'nl-BE', name: 'Nederlands (België)' },
    { code: 'nl-NL', name: 'Nederlands (Nederland)' },
    { code: 'en-AU', name: 'English (Australia)' },
    { code: 'en-IN', name: 'English (India)' },
    { code: 'en-IE', name: 'English (Ireland)' },
    { code: 'en-MT', name: 'English (Malta)' },
    { code: 'en-NZ', name: 'English (New Zealand)' },
    { code: 'en-SG', name: 'English (Singapore)' },
    { code: 'en-ZA', name: 'English (South Africa)' },
    { code: 'en-GB', name: 'English (United Kingdom)' },
    { code: 'en-US', name: 'English (United States)' },
    { code: 'et', name: 'Eesti' },
    { code: 'fi', name: 'suomi' },
    { code: 'fil', name: 'Filipino' },
    { code: 'fr-CA', name: 'Français (Canada)' },
    { code: 'fr-FR', name: 'Français (France)' },
    { code: 'fr-LU', name: 'Français (Luxembourg)' },
    { code: 'de-AT', name: 'Deutsch (Österreich)' },
    { code: 'de-DE', name: 'Deutsch (Deutschland)' },
    { code: 'de-LU', name: 'Deutsch (Luxemburg)' },
    { code: 'de-CH', name: 'Deutsch (Schweiz)' },
    { code: 'hu-HU', name: 'magyar (Magyarország)' },
    { code: 'el-CY', name: 'Ελληνικά (Κύπρος)' },
    { code: 'el-GR', name: 'Ελληνικά (Ελλάδα)' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'it', name: 'Italiano' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lt', name: 'Lietuvių' },
    { code: 'ms', name: 'Bahasa Malaysia' },
    { code: 'nb', name: 'Norsk (bokmål)' },
    { code: 'pl', name: 'polski' },
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'pt-PT', name: 'Português (Portugal)' },
    { code: 'ro', name: 'Română' },
    { code: 'sk', name: 'slovenský' },
    { code: 'sl', name: 'slovensko' },
    { code: 'es-AR', name: 'Español (Argentina)' },
    { code: 'es-CL', name: 'Español (Chile)' },
    { code: 'es-CO', name: 'Español (Colombia)' },
    { code: 'es-ES', name: 'Español (España)' },
    { code: 'es-MX', name: 'Español (México)' },
    { code: 'es-419', name: 'Español (Latinoamérica)' },
    { code: 'sv', name: 'Svenska' },
    { code: 'th', name: 'ภาษาไทย' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'vi', name: 'Tiếng Việt' },
  ];

  ngOnInit() {
    console.log('LanguageBannerComponent ngOnInit');
    console.log('Available languages:', this.languages.length);
    console.log('Selected language:', this.selectedLanguage);

    // Ensure the translation service is set to the default language
    this.translationService.setLanguage(this.selectedLanguage.code);

    // Force z-index fix after component initialization
    setTimeout(() => {
      this.fixDropdownZIndex();
    }, 100);
  }

  private fixDropdownZIndex() {
    // Find all saf-combobox elements and their dropdown parts
    const comboboxes = document.querySelectorAll('saf-combobox');
    comboboxes.forEach((combobox) => {
      // Listen for when dropdown opens
      combobox.addEventListener('open', () => {
        setTimeout(() => {
          // Force z-index on all possible dropdown elements
          const dropdowns = [
            ...document.querySelectorAll('[role="listbox"]'),
            ...document.querySelectorAll('[part="listbox"]'),
            ...document.querySelectorAll('.listbox'),
          ];

          dropdowns.forEach((dropdown: any) => {
            if (dropdown) {
              dropdown.style.zIndex = '99999';
              dropdown.style.position = 'fixed';
            }
          });
        }, 10);
      });
    });
  }

  trackByLanguageCode(index: number, language: Language): string {
    return language.code;
  }

  onInput(event: any) {
    console.log('Input event:', event);
    const inputValue = event.detail?.value || event.target?.value;
    console.log('Input value:', inputValue);

    // Only update if we have an exact match to avoid filtering issues
    if (inputValue) {
      const language = this.languages.find((lang) => lang.name === inputValue);
      if (language) {
        this.selectedLanguage = language;
        this.translationService.setLanguage(language.code);
        console.log('Language changed via input to:', language);
      }
    }
  }

  onOptionClick(language: Language) {
    console.log('Option clicked:', language);
    this.selectedLanguage = language;
    this.translationService.setLanguage(language.code);
    console.log('Language changed via click to:', language);
  }

  onLanguageChange(event: any) {
    const selectedValue = event.detail?.value || event.target?.value;
    if (selectedValue) {
      const language = this.languages.find(
        (lang) => lang.name === selectedValue
      );
      if (language) {
        this.selectedLanguage = language;
        // Set the new language in the translation service
        this.translationService.setLanguage(language.code);
        console.log('Language changed to:', language);
      }
    }
  }
}
