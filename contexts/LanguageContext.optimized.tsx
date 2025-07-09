'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'EN' | 'ES' | 'FR' | 'DE' | 'IT' | 'PT' | 'RU' | 'JA' | 'KO' | 'ZH' | 'AR' | 'HI' | 'NL';

interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

// Lazy load translations to improve initial page load performance
const loadTranslations = async (language: Language) => {
    try {
        const translations = await import(`../lib/translations/${language}.json`);
        return translations.default;
    } catch (error) {
        console.warn(`Failed to load translations for ${language}, falling back to EN`);
        const fallback = await import(`../lib/translations/EN.json`);
        return fallback.default;
    }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('EN');
    const [translations, setTranslations] = useState<Record<string, string>>({});

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    // Load translations when language changes
    useEffect(() => {
        const loadLanguageTranslations = async () => {
            const langTranslations = await loadTranslations(currentLanguage);
            setTranslations(langTranslations);
        };

        loadLanguageTranslations();
    }, [currentLanguage]);

    const setLanguage = (language: Language) => {
        setCurrentLanguage(language);
        localStorage.setItem('language', language);
    };

    const t = (key: string): string => {
        return translations[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
