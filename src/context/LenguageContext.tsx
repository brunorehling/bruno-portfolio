import { createContext, useContext, useState } from 'react'
import { translations, type Lang, type Translations } from '../utils/translation'

type LanguageContextType = {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  const toggle = () => setLang(prev => prev === 'pt' ? 'en' : 'pt')

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)