import { EN_US_MESSAGES } from './locales/en-US'
import { ZH_CN_MESSAGES } from './locales/zh-CN'
import { ZH_TW_MESSAGES } from './locales/zh-TW'
import type { AppLocale } from './types'

export interface WelcomeNoteTemplate {
  locale: AppLocale
  content: string
}

const WELCOME_NOTE_CONTENT: Record<AppLocale, string> = {
  'zh-CN': ZH_CN_MESSAGES['seed.welcome_note'],
  'zh-TW': ZH_TW_MESSAGES['seed.welcome_note'],
  'en-US': EN_US_MESSAGES['seed.welcome_note'],
}

export function welcomeNoteContent(locale: AppLocale): string {
  return WELCOME_NOTE_CONTENT[locale]
}

export function welcomeNoteTemplates(preferredLocale: AppLocale = 'zh-CN'): WelcomeNoteTemplate[] {
  // Pair each locale with a genuinely different language; zh-TW falls back to
  // English rather than zh-CN so the second note is not a near-duplicate.
  const secondaryLocale: AppLocale = preferredLocale === 'en-US' ? 'zh-CN' : 'en-US'
  return [preferredLocale, secondaryLocale].map((locale) => ({
    locale,
    content: welcomeNoteContent(locale),
  }))
}
