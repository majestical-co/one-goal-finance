import Polyglot from 'node-polyglot';
import { TranslateKeys } from './translate-keys';
import { exhaustiveCheck } from '../utils';

const polyglot = new Polyglot();

export type LocaleString = 'en' | 'es';
type TranslationObject = { [key in LocaleString]: string };
export const locales: LocaleString[] = [
  'en',
  // 'de',
  'es',
  // 'fr',
  // 'it',
  // 'pt',
  // 'ru',
  // 'tr',
  // 'hi',
  // 'ja',
  // 'zh',
  // 'ko'
];

function getLanguageTranslations() {
  const languages: TranslationObject = {
    en: 'English',
    es: 'Español',
  };
  return languages;
}

async function getAppTranslations(locale: LocaleString) {
  switch (locale) {
    case 'en': {
      const translationFile = await import('./locales/en');
      return translationFile.default;
    }
    case 'es': {
      const translationFile = await import('./locales/es');
      return translationFile.default;
    }
    default:
      return exhaustiveCheck(locale);
  }
}

export async function initPolyglot(locale: LocaleString) {
  const locales = await getAppTranslations(locale);
  polyglot.extend(getLanguageTranslations());
  polyglot.extend(locales);
}

export const translate = (key: TranslateKeys | LocaleString, params?: any) => {
  return polyglot.t(key, params) as string;
};

export function getEmptyTranslationObject() {
  const translations: TranslationObject = {
    en: '',
    es: '',
  };
  return translations;
}
