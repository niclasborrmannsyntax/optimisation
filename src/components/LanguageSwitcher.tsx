import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selection">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            i18n.language === lang.code
              ? 'bg-indigo-500 text-white'
              : 'text-slate-500 hover:text-indigo-500 hover:bg-slate-100'
          }`}
          aria-current={i18n.language === lang.code ? 'true' : undefined}
          type="button"
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
