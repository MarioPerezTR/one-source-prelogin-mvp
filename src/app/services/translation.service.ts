import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface TranslationEntry {
  [key: string]: any; // Changed to any to support nested objects
}

export interface Translations {
  [languageCode: string]: TranslationEntry;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en-US');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  private translations: Translations = {};

  constructor(private http: HttpClient) {
    this.loadTranslations();
  }

  private async loadTranslations(): Promise<void> {
    try {
      console.log(
        'Loading translations from /assets/i18n/translations.json...'
      );
      const translations = await this.http
        .get<Translations>('assets/i18n/translations.json')
        .toPromise();
      this.translations = translations || {};
      console.log('Translations loaded successfully:', this.translations);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback translations
      this.translations = {
        'en-US': {
          'welcome.title': 'Welcome to ONESOURCE',
          'login.title': 'Sign in to ONESOURCE',
          'login.email': 'Email',
          'login.password': 'Password',
          'login.forgot': 'Forgot email or password?',
          'login.button': 'Sign In',
          'carousel.synergy.title': 'SYNERGY 2025',
          'carousel.synergy.subtitle': 'November 9-12, 2025 | Orlando, Florida',
          'carousel.future.title': 'Future of Professionals Report 2025',
          'breaking.news':
            'One system under Maintenance. All other systems are operational. See',
          'breaking.link': 'systems status',
        },
        'es-ES': {
          'welcome.title': 'Bienvenido a ONESOURCE',
          'login.title': 'Iniciar sesión en ONESOURCE',
          'login.email': 'Correo electrónico',
          'login.password': 'Contraseña',
          'login.forgot': '¿Olvidaste el correo o la contraseña?',
          'login.button': 'Iniciar Sesión',
          'carousel.synergy.title': 'SYNERGY 2025',
          'carousel.synergy.subtitle':
            '9-12 de Noviembre, 2025 | Orlando, Florida',
          'carousel.future.title':
            'Informe del Futuro de los Profesionales 2025',
          'breaking.news':
            'Un sistema en mantenimiento. Todos los demás sistemas están operativos. Ver',
          'breaking.link': 'estado de sistemas',
        },
      };
    }
  }

  setLanguage(languageCode: string): void {
    this.currentLanguageSubject.next(languageCode);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  translate(key: string, languageCode?: string): string {
    const lang = languageCode || this.getCurrentLanguage();

    console.log(`Translating key: ${key}, language: ${lang}`);
    console.log('Available translations:', Object.keys(this.translations));

    // Try exact language match first
    let langTranslations = this.translations[lang];

    // If no exact match, try fallback strategies
    if (!langTranslations) {
      // Strategy 1: Try base language (e.g., 'en' from 'en-GB')
      const baseLang = lang.split('-')[0];
      const availableLanguages = Object.keys(this.translations);
      const baseMatch = availableLanguages.find((l) =>
        l.startsWith(baseLang + '-')
      );

      if (baseMatch) {
        langTranslations = this.translations[baseMatch];
        console.log(`Using fallback language: ${baseMatch} for ${lang}`);
      }
    }

    // Strategy 2: Fall back to English if still no match
    if (!langTranslations) {
      langTranslations = this.translations['en-US'] || {};
      console.log(`Using English fallback for ${lang}`);
    }

    console.log('Lang translations:', langTranslations);

    // Support nested keys like 'login.title'
    const keys = key.split('.');
    let value: any = langTranslations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    const result = value || key;
    console.log(`Translation result for ${key}: ${result}`);
    return result; // Return key if translation not found
  }

  getTranslation(key: string): Observable<string> {
    return new Observable((observer) => {
      this.currentLanguage$.subscribe((lang) => {
        observer.next(this.translate(key, lang));
      });
    });
  }

  // Method to add translations dynamically (for future API integration)
  addTranslations(languageCode: string, translations: TranslationEntry): void {
    if (!this.translations[languageCode]) {
      this.translations[languageCode] = {};
    }
    this.translations[languageCode] = {
      ...this.translations[languageCode],
      ...translations,
    };
  }

  // Method to load translations from API (placeholder for future implementation)
  async loadTranslationsFromAPI(languageCode: string): Promise<void> {
    // TODO: Implement API call to load translations
    // This would typically call a translation service or load from JSON files
    console.log(`Loading translations for ${languageCode} from API...`);
  }
}
