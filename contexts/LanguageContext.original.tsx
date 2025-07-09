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
        return translations[currentLanguage]?.[key] || translations['EN'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Translation object
const translations: Record<Language, Record<string, string>> = {
    EN: {
        // Header
        'header.features': 'Features',
        'header.whyLingo': 'Why Lingo',
        'header.pricing': 'Pricing',
        'header.about': 'About',
        'header.contact': 'Contact',
        'header.login': 'Login',
        'header.startNow': 'Start Now',
        'header.continueLearning': 'Continue Learning',

        // Hero Section
        'hero.title': 'Learn, practice and master new languages with Lingo.',
        'hero.getStarted': 'Get Started',
        'hero.alreadyHaveAccount': 'I already have an account',

        // Why Lingo Section
        'whyLingo.title': 'Why choose Lingo?',
        'whyLingo.subtitle': 'Discover what makes our language learning platform special',

        // Pricing Section
        'pricing.title': 'Choose your learning plan',
        'pricing.free': 'Free',
        'pricing.plus': 'Plus',
        'pricing.family': 'Family',
        'pricing.freePrice': '$0',
        'pricing.plusPrice': '$6.99',
        'pricing.familyPrice': '$9.99',
        'pricing.forever': 'forever',
        'pricing.perMonth': 'per month',

        // About Section
        'about.title': 'About Lingo',

        // Contact Section
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Have questions about Lingo? Need help with your account? Want to partner with us? We would love to hear from you!',
        'contact.emailUs': 'Email Us',
        'contact.liveChat': 'Live Chat',
        'contact.callUs': 'Call Us',
        'contact.visitUs': 'Visit Us',
    },
    ES: {
        // Header
        'header.features': 'Características',
        'header.whyLingo': 'Por qué Lingo',
        'header.pricing': 'Precios',
        'header.about': 'Acerca de',
        'header.contact': 'Contacto',
        'header.login': 'Iniciar Sesión',
        'header.startNow': 'Comenzar Ahora',
        'header.continueLearning': 'Continuar Aprendiendo',

        // Hero Section
        'hero.title': 'Aprende, practica y domina nuevos idiomas con Lingo.',
        'hero.getStarted': 'Comenzar',
        'hero.alreadyHaveAccount': 'Ya tengo una cuenta',

        // Why Lingo Section
        'whyLingo.title': '¿Por qué elegir Lingo?',
        'whyLingo.subtitle': 'Descubre qué hace especial a nuestra plataforma de aprendizaje de idiomas',

        // Pricing Section
        'pricing.title': 'Elige tu plan de aprendizaje',
        'pricing.free': 'Gratis',
        'pricing.plus': 'Plus',
        'pricing.family': 'Familia',
        'pricing.freePrice': '$0',
        'pricing.plusPrice': '$6.99',
        'pricing.familyPrice': '$9.99',
        'pricing.forever': 'para siempre',
        'pricing.perMonth': 'por mes',

        // About Section
        'about.title': 'Acerca de Lingo',

        // Contact Section
        'contact.title': 'Ponte en Contacto',
        'contact.subtitle': '¿Tienes preguntas sobre Lingo? ¿Necesitas ayuda con tu cuenta? ¿Quieres asociarte con nosotros? ¡Nos encantaría saber de ti!',
        'contact.emailUs': 'Envíanos un Email',
        'contact.liveChat': 'Chat en Vivo',
        'contact.callUs': 'Llámanos',
        'contact.visitUs': 'Visítanos',
    },
    FR: {
        // Header
        'header.features': 'Fonctionnalités',
        'header.whyLingo': 'Pourquoi Lingo',
        'header.pricing': 'Tarifs',
        'header.about': 'À propos',
        'header.contact': 'Contact',
        'header.login': 'Se connecter',
        'header.startNow': 'Commencer maintenant',
        'header.continueLearning': 'Continuer l\'apprentissage',

        // Hero Section
        'hero.title': 'Apprenez, pratiquez et maîtrisez de nouvelles langues avec Lingo.',
        'hero.getStarted': 'Commencer',
        'hero.alreadyHaveAccount': 'J\'ai déjà un compte',

        // Why Lingo Section
        'whyLingo.title': 'Pourquoi choisir Lingo ?',
        'whyLingo.subtitle': 'Découvrez ce qui rend notre plateforme d\'apprentissage des langues spéciale',

        // Pricing Section
        'pricing.title': 'Choisissez votre plan d\'apprentissage',
        'pricing.free': 'Gratuit',
        'pricing.plus': 'Plus',
        'pricing.family': 'Famille',
        'pricing.freePrice': '0€',
        'pricing.plusPrice': '6,99€',
        'pricing.familyPrice': '9,99€',
        'pricing.forever': 'pour toujours',
        'pricing.perMonth': 'par mois',

        // About Section
        'about.title': 'À propos de Lingo',

        // Contact Section
        'contact.title': 'Prenez Contact',
        'contact.subtitle': 'Vous avez des questions sur Lingo ? Besoin d\'aide avec votre compte ? Envie de vous associer avec nous ? Nous serions ravis de vous entendre !',
        'contact.emailUs': 'Nous envoyer un email',
        'contact.liveChat': 'Chat en direct',
        'contact.callUs': 'Nous appeler',
        'contact.visitUs': 'Nous rendre visite',
    },
    DE: {
        // Header
        'header.features': 'Funktionen',
        'header.whyLingo': 'Warum Lingo',
        'header.pricing': 'Preise',
        'header.about': 'Über uns',
        'header.contact': 'Kontakt',
        'header.login': 'Anmelden',
        'header.startNow': 'Jetzt starten',
        'header.continueLearning': 'Weiterlernen',

        // Hero Section
        'hero.title': 'Lernen, üben und beherrschen Sie neue Sprachen mit Lingo.',
        'hero.getStarted': 'Loslegen',
        'hero.alreadyHaveAccount': 'Ich habe bereits ein Konto',

        // Why Lingo Section
        'whyLingo.title': 'Warum Lingo wählen?',
        'whyLingo.subtitle': 'Entdecken Sie, was unsere Sprachlernplattform besonders macht',

        // Pricing Section
        'pricing.title': 'Wählen Sie Ihren Lernplan',
        'pricing.free': 'Kostenlos',
        'pricing.plus': 'Plus',
        'pricing.family': 'Familie',
        'pricing.freePrice': '0€',
        'pricing.plusPrice': '6,99€',
        'pricing.familyPrice': '9,99€',
        'pricing.forever': 'für immer',
        'pricing.perMonth': 'pro Monat',

        // About Section
        'about.title': 'Über Lingo',

        // Contact Section
        'contact.title': 'Kontakt aufnehmen',
        'contact.subtitle': 'Haben Sie Fragen zu Lingo? Benötigen Sie Hilfe mit Ihrem Konto? Möchten Sie mit uns zusammenarbeiten? Wir würden gerne von Ihnen hören!',
        'contact.emailUs': 'E-Mail senden',
        'contact.liveChat': 'Live-Chat',
        'contact.callUs': 'Anrufen',
        'contact.visitUs': 'Besuchen Sie uns',
    },
    IT: {
        // Header
        'header.features': 'Caratteristiche',
        'header.whyLingo': 'Perché Lingo',
        'header.pricing': 'Prezzi',
        'header.about': 'Chi siamo',
        'header.contact': 'Contatto',
        'header.login': 'Accedi',
        'header.startNow': 'Inizia ora',
        'header.continueLearning': 'Continua ad imparare',

        // Hero Section
        'hero.title': 'Impara, pratica e padroneggia nuove lingue con Lingo.',
        'hero.getStarted': 'Inizia',
        'hero.alreadyHaveAccount': 'Ho già un account',

        // Why Lingo Section
        'whyLingo.title': 'Perché scegliere Lingo?',
        'whyLingo.subtitle': 'Scopri cosa rende speciale la nostra piattaforma di apprendimento linguistico',

        // Pricing Section
        'pricing.title': 'Scegli il tuo piano di apprendimento',
        'pricing.free': 'Gratuito',
        'pricing.plus': 'Plus',
        'pricing.family': 'Famiglia',
        'pricing.freePrice': '0€',
        'pricing.plusPrice': '6,99€',
        'pricing.familyPrice': '9,99€',
        'pricing.forever': 'per sempre',
        'pricing.perMonth': 'al mese',

        // About Section
        'about.title': 'Chi è Lingo',

        // Contact Section
        'contact.title': 'Mettiti in contatto',
        'contact.subtitle': 'Hai domande su Lingo? Hai bisogno di aiuto con il tuo account? Vuoi collaborare con noi? Ci piacerebbe sentirti!',
        'contact.emailUs': 'Inviaci un\'email',
        'contact.liveChat': 'Chat dal vivo',
        'contact.callUs': 'Chiamaci',
        'contact.visitUs': 'Vieni a trovarci',
    },
    PT: {
        // Header
        'header.features': 'Recursos',
        'header.whyLingo': 'Por que Lingo',
        'header.pricing': 'Preços',
        'header.about': 'Sobre',
        'header.contact': 'Contato',
        'header.login': 'Entrar',
        'header.startNow': 'Começar agora',
        'header.continueLearning': 'Continuar aprendendo',

        // Hero Section
        'hero.title': 'Aprenda, pratique e domine novos idiomas com Lingo.',
        'hero.getStarted': 'Começar',
        'hero.alreadyHaveAccount': 'Já tenho uma conta',

        // Why Lingo Section
        'whyLingo.title': 'Por que escolher Lingo?',
        'whyLingo.subtitle': 'Descubra o que torna nossa plataforma de aprendizado de idiomas especial',

        // Pricing Section
        'pricing.title': 'Escolha seu plano de aprendizado',
        'pricing.free': 'Grátis',
        'pricing.plus': 'Plus',
        'pricing.family': 'Família',
        'pricing.freePrice': 'R$ 0',
        'pricing.plusPrice': 'R$ 34,99',
        'pricing.familyPrice': 'R$ 49,99',
        'pricing.forever': 'para sempre',
        'pricing.perMonth': 'por mês',

        // About Section
        'about.title': 'Sobre o Lingo',

        // Contact Section
        'contact.title': 'Entre em contato',
        'contact.subtitle': 'Tem dúvidas sobre o Lingo? Precisa de ajuda com sua conta? Quer fazer uma parceria conosco? Adoraríamos ouvir você!',
        'contact.emailUs': 'Nos envie um email',
        'contact.liveChat': 'Chat ao vivo',
        'contact.callUs': 'Nos ligue',
        'contact.visitUs': 'Nos visite',
    },
    RU: {
        // Header
        'header.features': 'Возможности',
        'header.whyLingo': 'Почему Lingo',
        'header.pricing': 'Цены',
        'header.about': 'О нас',
        'header.contact': 'Контакты',
        'header.login': 'Войти',
        'header.startNow': 'Начать сейчас',
        'header.continueLearning': 'Продолжить обучение',

        // Hero Section
        'hero.title': 'Изучайте, практикуйте и осваивайте новые языки с Lingo.',
        'hero.getStarted': 'Начать',
        'hero.alreadyHaveAccount': 'У меня уже есть аккаунт',

        // Why Lingo Section
        'whyLingo.title': 'Почему выбирают Lingo?',
        'whyLingo.subtitle': 'Узнайте, что делает нашу платформу изучения языков особенной',

        // Pricing Section
        'pricing.title': 'Выберите план обучения',
        'pricing.free': 'Бесплатно',
        'pricing.plus': 'Плюс',
        'pricing.family': 'Семейный',
        'pricing.freePrice': '0 ₽',
        'pricing.plusPrice': '499 ₽',
        'pricing.familyPrice': '699 ₽',
        'pricing.forever': 'навсегда',
        'pricing.perMonth': 'в месяц',

        // About Section
        'about.title': 'О Lingo',

        // Contact Section
        'contact.title': 'Свяжитесь с нами',
        'contact.subtitle': 'Есть вопросы о Lingo? Нужна помощь с аккаунтом? Хотите стать партнером? Мы будем рады услышать вас!',
        'contact.emailUs': 'Написать email',
        'contact.liveChat': 'Онлайн-чат',
        'contact.callUs': 'Позвонить',
        'contact.visitUs': 'Посетить нас',
    },
    JA: {
        // Header
        'header.features': '機能',
        'header.whyLingo': 'Lingoを選ぶ理由',
        'header.pricing': '料金',
        'header.about': '私たちについて',
        'header.contact': 'お問い合わせ',
        'header.login': 'ログイン',
        'header.startNow': '今すぐ始める',
        'header.continueLearning': '学習を続ける',

        // Hero Section
        'hero.title': 'Lingoで新しい言語を学び、練習し、マスターしましょう。',
        'hero.getStarted': '始める',
        'hero.alreadyHaveAccount': 'すでにアカウントをお持ちです',

        // Why Lingo Section
        'whyLingo.title': 'なぜLingoを選ぶのか？',
        'whyLingo.subtitle': '私たちの言語学習プラットフォームの特別な点を発見してください',

        // Pricing Section
        'pricing.title': '学習プランを選択',
        'pricing.free': '無料',
        'pricing.plus': 'プラス',
        'pricing.family': 'ファミリー',
        'pricing.freePrice': '¥0',
        'pricing.plusPrice': '¥980',
        'pricing.familyPrice': '¥1,480',
        'pricing.forever': '永久',
        'pricing.perMonth': '月額',

        // About Section
        'about.title': 'Lingoについて',

        // Contact Section
        'contact.title': 'お問い合わせ',
        'contact.subtitle': 'Lingoについて質問がありますか？アカウントのサポートが必要ですか？パートナーシップをお考えですか？ぜひお聞かせください！',
        'contact.emailUs': 'メールを送る',
        'contact.liveChat': 'ライブチャット',
        'contact.callUs': 'お電話',
        'contact.visitUs': '訪問する',
    },
    KO: {
        // Header
        'header.features': '기능',
        'header.whyLingo': 'Lingo를 선택하는 이유',
        'header.pricing': '요금제',
        'header.about': '소개',
        'header.contact': '연락처',
        'header.login': '로그인',
        'header.startNow': '지금 시작',
        'header.continueLearning': '학습 계속하기',

        // Hero Section
        'hero.title': 'Lingo와 함께 새로운 언어를 배우고, 연습하고, 마스터하세요.',
        'hero.getStarted': '시작하기',
        'hero.alreadyHaveAccount': '이미 계정이 있습니다',

        // Why Lingo Section
        'whyLingo.title': '왜 Lingo를 선택해야 할까요?',
        'whyLingo.subtitle': '저희 언어 학습 플랫폼의 특별한 점을 알아보세요',

        // Pricing Section
        'pricing.title': '학습 플랜을 선택하세요',
        'pricing.free': '무료',
        'pricing.plus': '플러스',
        'pricing.family': '가족',
        'pricing.freePrice': '₩0',
        'pricing.plusPrice': '₩8,900',
        'pricing.familyPrice': '₩12,900',
        'pricing.forever': '영구',
        'pricing.perMonth': '월',

        // About Section
        'about.title': 'Lingo 소개',

        // Contact Section
        'contact.title': '문의하기',
        'contact.subtitle': 'Lingo에 대한 질문이 있나요? 계정 도움이 필요하신가요? 파트너십을 원하시나요? 연락주세요!',
        'contact.emailUs': '이메일 보내기',
        'contact.liveChat': '실시간 채팅',
        'contact.callUs': '전화하기',
        'contact.visitUs': '방문하기',
    },
    ZH: {
        // Header
        'header.features': '功能',
        'header.whyLingo': '为什么选择Lingo',
        'header.pricing': '价格',
        'header.about': '关于我们',
        'header.contact': '联系我们',
        'header.login': '登录',
        'header.startNow': '立即开始',
        'header.continueLearning': '继续学习',

        // Hero Section
        'hero.title': '通过Lingo学习、练习并掌握新语言。',
        'hero.getStarted': '开始',
        'hero.alreadyHaveAccount': '我已有账户',

        // Why Lingo Section
        'whyLingo.title': '为什么选择Lingo？',
        'whyLingo.subtitle': '发现我们语言学习平台的特别之处',

        // Pricing Section
        'pricing.title': '选择您的学习计划',
        'pricing.free': '免费',
        'pricing.plus': '增强版',
        'pricing.family': '家庭版',
        'pricing.freePrice': '¥0',
        'pricing.plusPrice': '¥45',
        'pricing.familyPrice': '¥65',
        'pricing.forever': '永久',
        'pricing.perMonth': '每月',

        // About Section
        'about.title': '关于Lingo',

        // Contact Section
        'contact.title': '联系我们',
        'contact.subtitle': '对Lingo有疑问吗？需要账户帮助吗？想与我们合作吗？我们很乐意听到您的声音！',
        'contact.emailUs': '发送邮件',
        'contact.liveChat': '在线聊天',
        'contact.callUs': '致电我们',
        'contact.visitUs': '拜访我们',
    },
    AR: {
        // Header
        'header.features': 'الميزات',
        'header.whyLingo': 'لماذا لينجو',
        'header.pricing': 'الأسعار',
        'header.about': 'حولنا',
        'header.contact': 'اتصل بنا',
        'header.login': 'تسجيل الدخول',
        'header.startNow': 'ابدأ الآن',
        'header.continueLearning': 'واصل التعلم',

        // Hero Section
        'hero.title': 'تعلم ومارس وأتقن لغات جديدة مع لينجو.',
        'hero.getStarted': 'ابدأ',
        'hero.alreadyHaveAccount': 'لدي حساب بالفعل',

        // Why Lingo Section
        'whyLingo.title': 'لماذا تختار لينجو؟',
        'whyLingo.subtitle': 'اكتشف ما يجعل منصة تعلم اللغات لدينا مميزة',

        // Pricing Section
        'pricing.title': 'اختر خطة التعلم الخاصة بك',
        'pricing.free': 'مجاني',
        'pricing.plus': 'بلس',
        'pricing.family': 'عائلي',
        'pricing.freePrice': '٠ ريال',
        'pricing.plusPrice': '٢٥ ريال',
        'pricing.familyPrice': '٣٥ ريال',
        'pricing.forever': 'إلى الأبد',
        'pricing.perMonth': 'شهرياً',

        // About Section
        'about.title': 'حول لينجو',

        // Contact Section
        'contact.title': 'تواصل معنا',
        'contact.subtitle': 'هل لديك أسئلة حول لينجو؟ تحتاج مساعدة مع حسابك؟ تريد الشراكة معنا؟ نحب أن نسمع منك!',
        'contact.emailUs': 'راسلنا',
        'contact.liveChat': 'الدردشة المباشرة',
        'contact.callUs': 'اتصل بنا',
        'contact.visitUs': 'زرنا',
    },
    HI: {
        // Header
        'header.features': 'विशेषताएं',
        'header.whyLingo': 'Lingo क्यों चुनें',
        'header.pricing': 'मूल्य निर्धारण',
        'header.about': 'हमारे बारे में',
        'header.contact': 'संपर्क',
        'header.login': 'लॉग इन',
        'header.startNow': 'अभी शुरू करें',
        'header.continueLearning': 'सीखना जारी रखें',

        // Hero Section
        'hero.title': 'Lingo के साथ नई भाषाएं सीखें, अभ्यास करें और महारत हासिल करें।',
        'hero.getStarted': 'शुरू करें',
        'hero.alreadyHaveAccount': 'मेरे पास पहले से खाता है',

        // Why Lingo Section
        'whyLingo.title': 'Lingo क्यों चुनें?',
        'whyLingo.subtitle': 'हमारे भाषा सीखने के प्लेटफॉर्म की खासियत जानें',

        // Pricing Section
        'pricing.title': 'अपना सीखने का प्लान चुनें',
        'pricing.free': 'मुफ्त',
        'pricing.plus': 'प्लस',
        'pricing.family': 'पारिवारिक',
        'pricing.freePrice': '₹0',
        'pricing.plusPrice': '₹499',
        'pricing.familyPrice': '₹799',
        'pricing.forever': 'हमेशा के लिए',
        'pricing.perMonth': 'प्रति माह',

        // About Section
        'about.title': 'Lingo के बारे में',

        // Contact Section
        'contact.title': 'संपर्क में रहें',
        'contact.subtitle': 'Lingo के बारे में सवाल हैं? अपने खाते में मदद चाहिए? हमारे साथ साझेदारी करना चाहते हैं? हम आपसे सुनना पसंद करेंगे!',
        'contact.emailUs': 'ईमेल भेजें',
        'contact.liveChat': 'लाइव चैट',
        'contact.callUs': 'कॉल करें',
        'contact.visitUs': 'हमसे मिलें',
    },
    NL: {
        // Header
        'header.features': 'Functies',
        'header.whyLingo': 'Waarom Lingo',
        'header.pricing': 'Prijzen',
        'header.about': 'Over ons',
        'header.contact': 'Contact',
        'header.login': 'Inloggen',
        'header.startNow': 'Nu beginnen',
        'header.continueLearning': 'Verder leren',

        // Hero Section
        'hero.title': 'Leer, oefen en beheers nieuwe talen met Lingo.',
        'hero.getStarted': 'Aan de slag',
        'hero.alreadyHaveAccount': 'Ik heb al een account',

        // Why Lingo Section
        'whyLingo.title': 'Waarom Lingo kiezen?',
        'whyLingo.subtitle': 'Ontdek wat ons taalleerplatform bijzonder maakt',

        // Pricing Section
        'pricing.title': 'Kies je leerplan',
        'pricing.free': 'Gratis',
        'pricing.plus': 'Plus',
        'pricing.family': 'Familie',
        'pricing.freePrice': '€0',
        'pricing.plusPrice': '€6,99',
        'pricing.familyPrice': '€9,99',
        'pricing.forever': 'voor altijd',
        'pricing.perMonth': 'per maand',

        // About Section
        'about.title': 'Over Lingo',

        // Contact Section
        'contact.title': 'Neem contact op',
        'contact.subtitle': 'Vragen over Lingo? Hulp nodig met je account? Wil je samenwerken? We horen graag van je!',
        'contact.emailUs': 'E-mail ons',
        'contact.liveChat': 'Live chat',
        'contact.callUs': 'Bel ons',
        'contact.visitUs': 'Bezoek ons',
    },
};
