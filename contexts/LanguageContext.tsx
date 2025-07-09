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

// Minimal translations to reduce initial bundle size
const minimalTranslations: Record<Language, Record<string, string>> = {
    EN: {
        'header.features': 'Features',
        'header.whyMirianiWell': 'Why Miriani Well',
        'header.pricing': 'Pricing',
        'header.about': 'About',
        'header.contact': 'Contact',
        'header.resources': 'Resources',
        'header.support': 'Support',
        'header.login': 'Login',
        'header.startNow': 'Start Now',
        'header.continueLearning': 'Continue Learning',
        'hero.title': 'Transform your wellness journey with Miriani Well - powered by Luna AI.',
        'hero.getStarted': 'Get Started',
        'hero.alreadyHaveAccount': 'I already have an account',
        'whyMirianiWell.title': 'Why choose Miriani Well?',
        'whyMirianiWell.subtitle': 'Discover what makes our wellness platform special',
        'features.elementalHealing': 'Elemental Healing Rituals',
        'features.aiCompanion': 'Luna AI Companion',
        'features.moodTracking': 'Mood Tracking & Analytics',
        'features.guidedJournaling': 'Guided Journaling',
        'pricing.title': 'Choose your wellness plan',
        'pricing.free': 'Free',
        'pricing.plus': 'Plus',
        'pricing.family': 'Family',
        'pricing.freePrice': '$0',
        'pricing.plusPrice': '$6.99',
        'pricing.familyPrice': '$9.99',
        'pricing.forever': 'forever',
        'pricing.perMonth': 'per month',
        'about.title': 'About Miriani Well',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Have questions about Miriani Well? Need help with your wellness journey? We would love to hear from you!',
        'contact.emailUs': 'Email Us',
        'contact.liveChat': 'Live Chat',
        'contact.callUs': 'Call Us',
        'contact.visitUs': 'Visit Us',
    },
    ES: {
        'header.features': 'Características',
        'header.whyMirianiWell': 'Por qué Miriani Well',
        'header.pricing': 'Precios',
        'header.about': 'Acerca de',
        'header.contact': 'Contacto',
        'header.resources': 'Recursos',
        'header.support': 'Soporte',
        'header.login': 'Iniciar Sesión',
        'header.startNow': 'Comenzar Ahora',
        'header.continueLearning': 'Continuar Aprendiendo',
        'hero.title': 'Transforma tu viaje de bienestar con Miriani Well - impulsado por Luna AI.',
        'hero.getStarted': 'Comenzar',
        'hero.alreadyHaveAccount': 'Ya tengo una cuenta',
    },
    FR: {
        'header.features': 'Fonctionnalités',
        'header.whyMirianiWell': 'Pourquoi Miriani Well',
        'header.pricing': 'Tarifs',
        'header.about': 'À propos',
        'header.contact': 'Contact',
        'header.resources': 'Ressources',
        'header.support': 'Support',
        'header.login': 'Se connecter',
        'header.startNow': 'Commencer maintenant',
        'header.continueLearning': 'Continuer l\'apprentissage',
        'hero.title': 'Transformez votre parcours de bien-être avec Miriani Well - propulsé par Luna AI.',
        'hero.getStarted': 'Commencer',
        'hero.alreadyHaveAccount': 'J\'ai déjà un compte',
    },
    DE: {
        'header.features': 'Funktionen',
        'header.whyMirianiWell': 'Warum Miriani Well',
        'header.pricing': 'Preise',
        'header.about': 'Über uns',
        'header.contact': 'Kontakt',
        'header.resources': 'Ressourcen',
        'header.support': 'Unterstützung',
        'header.login': 'Anmelden',
        'header.startNow': 'Jetzt starten',
        'header.continueLearning': 'Weiterlernen',
        'hero.title': 'Verwandeln Sie Ihre Wellness-Reise mit Miriani Well - unterstützt von Luna AI.',
        'hero.getStarted': 'Loslegen',
        'hero.alreadyHaveAccount': 'Ich habe bereits ein Konto',
    },
    IT: {
        'header.features': 'Caratteristiche',
        'header.whyMirianiWell': 'Perché Miriani Well',
        'header.pricing': 'Prezzi',
        'header.about': 'Chi siamo',
        'header.contact': 'Contatto',
        'header.resources': 'Risorse',
        'header.support': 'Supporto',
        'header.login': 'Accedi',
        'header.startNow': 'Inizia ora',
        'header.continueLearning': 'Continua l\'apprendimento',
        'hero.title': 'Trasforma il tuo viaggio di benessere con Miriani Well - alimentato da Luna AI.',
        'hero.getStarted': 'Inizia',
        'hero.alreadyHaveAccount': 'Ho già un account',
    },
    PT: {
        'header.features': 'Recursos',
        'header.whyMirianiWell': 'Por que Miriani Well',
        'header.pricing': 'Preços',
        'header.about': 'Sobre',
        'header.contact': 'Contato',
        'header.login': 'Entrar',
        'header.startNow': 'Começar agora',
        'header.continueLearning': 'Continuar aprendendo',
        'hero.title': 'Transforme sua jornada de bem-estar com Miriani Well - alimentado por Luna AI.',
        'hero.getStarted': 'Começar',
        'hero.alreadyHaveAccount': 'Já tenho uma conta',
    },
    RU: {
        'header.features': 'Особенности',
        'header.whyMirianiWell': 'Почему Miriani Well',
        'header.pricing': 'Цены',
        'header.about': 'О нас',
        'header.contact': 'Контакт',
        'header.login': 'Войти',
        'header.startNow': 'Начать сейчас',
        'header.continueLearning': 'Продолжить обучение',
        'hero.title': 'Преобразите свой путь к здоровью с Miriani Well - на основе Luna AI.',
        'hero.getStarted': 'Начать',
        'hero.alreadyHaveAccount': 'У меня уже есть аккаунт',
    },
    JA: {
        'header.features': '機能',
        'header.whyMirianiWell': 'なぜMiriani Well',
        'header.pricing': '価格',
        'header.about': '私たちについて',
        'header.contact': 'お問い合わせ',
        'header.login': 'ログイン',
        'header.startNow': '今すぐ始める',
        'header.continueLearning': '学習を続ける',
        'hero.title': 'Luna AIを搭載したMiriani Wellでウェルネスの旅を変革しましょう。',
        'hero.getStarted': '始める',
        'hero.alreadyHaveAccount': 'すでにアカウントを持っています',
    },
    KO: {
        'header.features': '기능',
        'header.whyMirianiWell': '왜 Miriani Well인가',
        'header.pricing': '가격',
        'header.about': '소개',
        'header.contact': '연락처',
        'header.login': '로그인',
        'header.startNow': '지금 시작',
        'header.continueLearning': '계속 배우기',
        'hero.title': 'Luna AI로 구동되는 Miriani Well로 웰니스 여정을 변화시키세요.',
        'hero.getStarted': '시작하기',
        'hero.alreadyHaveAccount': '이미 계정이 있습니다',
    },
    ZH: {
        'header.features': '功能',
        'header.whyMirianiWell': '为什么选择Miriani Well',
        'header.pricing': '价格',
        'header.about': '关于',
        'header.contact': '联系',
        'header.login': '登录',
        'header.startNow': '立即开始',
        'header.continueLearning': '继续学习',
        'hero.title': '使用Luna AI驱动的Miriani Well改变您的健康之旅。',
        'hero.getStarted': '开始',
        'hero.alreadyHaveAccount': '我已经有账户了',
    },
    AR: {
        'header.features': 'الميزات',
        'header.whyMirianiWell': 'لماذا Miriani Well',
        'header.pricing': 'الأسعار',
        'header.about': 'حول',
        'header.contact': 'اتصل',
        'header.login': 'تسجيل الدخول',
        'header.startNow': 'ابدأ الآن',
        'header.continueLearning': 'متابعة التعلم',
        'hero.title': 'غيّر رحلة العافية الخاصة بك مع Miriani Well - بدعم من Luna AI.',
        'hero.getStarted': 'ابدأ',
        'hero.alreadyHaveAccount': 'لدي حساب بالفعل',
    },
    HI: {
        'header.features': 'विशेषताएं',
        'header.whyMirianiWell': 'क्यों Miriani Well',
        'header.pricing': 'मूल्य',
        'header.about': 'के बारे में',
        'header.contact': 'संपर्क',
        'header.login': 'लॉग इन',
        'header.startNow': 'अभी शुरू करें',
        'header.continueLearning': 'सीखना जारी रखें',
        'hero.title': 'Luna AI द्वारा संचालित Miriani Well के साथ अपनी स्वास्थ्य यात्रा को बदलें।',
        'hero.getStarted': 'शुरू करें',
        'hero.alreadyHaveAccount': 'मेरे पास पहले से एक खाता है',
    },
    NL: {
        'header.features': 'Functies',
        'header.whyMirianiWell': 'Waarom Miriani Well',
        'header.pricing': 'Prijzen',
        'header.about': 'Over',
        'header.contact': 'Contact',
        'header.login': 'Inloggen',
        'header.startNow': 'Nu beginnen',
        'header.continueLearning': 'Doorgaan met leren',
        'hero.title': 'Transformeer je wellness-reis met Miriani Well - aangedreven door Luna AI.',
        'hero.getStarted': 'Beginnen',
        'hero.alreadyHaveAccount': 'Ik heb al een account',
    }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('EN');

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    const setLanguage = (language: Language) => {
        setCurrentLanguage(language);
        localStorage.setItem('language', language);
    };

    const t = (key: string): string => {
        return minimalTranslations[currentLanguage]?.[key] || minimalTranslations['EN'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
