'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'EN' | 'ES' | 'FR' | 'DE' | 'IT' | 'PT' | 'RU' | 'JA' | 'KO' | 'ZH' | 'AR' | 'HI' | 'NL';

interface LanguageContextType {
    currentLanguage: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
    translateQuizContent: (content: string) => string;
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

// Translations
const translations: Record<Language, Record<string, string>> = {
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
        // Learn page translations
        'learn.title': 'Your Wellness Journey with Luna',
        'learn.pathTitle': '🌟 Your Learning Path',
        'learn.pathDescription': 'Begin with Elemental Foundations, then explore Mind-Body-Spirit connection, apply Practical Wellness to daily life, and master Advanced Wellness techniques.',
        'learn.category1.title': '🌟 Elemental Foundations',
        'learn.category1.description': 'Master the four elements to build your wellness foundation',
        'learn.category2.title': '🧠 Mind-Body-Spirit',
        'learn.category2.description': 'Integrate your mental, physical, and spiritual wellness',
        'learn.category3.title': '🌱 Practical Wellness',
        'learn.category3.description': 'Apply wellness principles to your daily life',
        'learn.category4.title': '🔮 Advanced Wellness',
        'learn.category4.description': 'Master advanced techniques and create your ideal life',
        'learn.units': 'units',
        // Unit titles
        'learn.earth.title': 'Earth Element',
        'learn.earth.description': 'Ground yourself with earth\'s stable energy and discover manifestation',
        'learn.water.title': 'Water Element',
        'learn.water.description': 'Flow with water\'s healing properties',
        'learn.fire.title': 'Fire Element',
        'learn.fire.description': 'Ignite your inner passion and transformation',
        'learn.air.title': 'Air Element',
        'learn.air.description': 'Breathe with air\'s clarity and freedom',
        'learn.mindfulness.title': 'Mindfulness & Meditation',
        'learn.mindfulness.description': 'Develop present moment awareness and inner peace',
        'learn.mental.title': 'Mental Wellness',
        'learn.mental.description': 'Strengthen your mind and manage stress effectively',
        'learn.physical.title': 'Physical Wellness',
        'learn.physical.description': 'Connect with your body through movement and awareness',
        'learn.spiritual.title': 'Spiritual Growth',
        'learn.spiritual.description': 'Explore your inner wisdom and spiritual connection',
        'learn.sleep.title': 'Sleep & Rest',
        'learn.sleep.description': 'Master the art of restorative sleep and deep relaxation',
        'learn.emotional.title': 'Emotional Intelligence',
        'learn.emotional.description': 'Develop emotional awareness and healthy relationships',
        'learn.nature.title': 'Nature Connection',
        'learn.nature.description': 'Reconnect with nature\'s healing wisdom and rhythms',
        'learn.energy.title': 'Energy & Chakras',
        'learn.energy.description': 'Balance your energy centers and enhance your vitality',
        'learn.manifestation.title': 'Manifestation & Goals',
        'learn.manifestation.description': 'Create your ideal life through focused intention and action',
        'learn.luna.title': 'Luna AI Guidance',
        'learn.luna.description': 'Connect with your AI wellness companion Luna',
        // Quiz translations
        'quiz.selectCorrectMeaning': 'Select the correct meaning',
        'quiz.continue': 'Continue',
        'quiz.check': 'Check',
        'quiz.skip': 'Skip',
        'quiz.finish': 'Finish',
        'quiz.next': 'Next',
        'quiz.complete': 'Lesson Complete!',
        'quiz.congratulations': 'Congratulations!',
        'quiz.youEarned': 'You earned',
        'quiz.points': 'points',
        'quiz.correctAnswer': 'Correct Answer',
        'quiz.wrongAnswer': 'Wrong Answer',
        'quiz.mascot': 'Mascot',
        // Quiz content translations
        'quiz.content.earth.q1': 'What is the primary purpose of earth grounding?',
        'quiz.content.earth.q1.a1': 'To connect with the earth\'s stable energy',
        'quiz.content.earth.q1.a2': 'To lose weight quickly',
        'quiz.content.earth.q1.a3': 'To sleep better at night',
        'quiz.content.earth.q1.a4': 'To become famous',
        'quiz.content.earth.q2': 'Which element represents grounding and stability?',
        'quiz.content.earth.q2.a1': 'Earth',
        'quiz.content.earth.q2.a2': 'Fire',
        'quiz.content.earth.q2.a3': 'Water',
        'quiz.content.earth.q2.a4': 'Air',
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
        // Learn page translations - Spanish
        'learn.title': 'Tu Viaje de Bienestar con Luna',
        'learn.pathTitle': '🌟 Tu Camino de Aprendizaje',
        'learn.pathDescription': 'Comienza con Fundamentos Elementales, luego explora la conexión Mente-Cuerpo-Espíritu, aplica Bienestar Práctico a la vida diaria y domina técnicas de Bienestar Avanzado.',
        'learn.category1.title': '🌟 Fundamentos Elementales',
        'learn.category1.description': 'Domina los cuatro elementos para construir tu base de bienestar',
        'learn.category2.title': '🧠 Mente-Cuerpo-Espíritu',
        'learn.category2.description': 'Integra tu bienestar mental, físico y espiritual',
        'learn.category3.title': '🌱 Bienestar Práctico',
        'learn.category3.description': 'Aplica principios de bienestar a tu vida diaria',
        'learn.category4.title': '🔮 Bienestar Avanzado',
        'learn.category4.description': 'Domina técnicas avanzadas y crea tu vida ideal',
        'learn.units': 'unidades',
        'learn.earth.title': 'Elemento Tierra',
        'learn.earth.description': 'Conéctate con la energía estable de la tierra y descubre la manifestación',
        'learn.water.title': 'Elemento Agua',
        'learn.water.description': 'Fluye con las propiedades curativas del agua',
        'learn.fire.title': 'Elemento Fuego',
        'learn.fire.description': 'Enciende tu pasión interior y transformación',
        'learn.air.title': 'Elemento Aire',
        'learn.air.description': 'Respira con la claridad y libertad del aire',
        'learn.mindfulness.title': 'Atención Plena y Meditación',
        'learn.mindfulness.description': 'Desarrolla conciencia del momento presente y paz interior',
        'learn.mental.title': 'Bienestar Mental',
        'learn.mental.description': 'Fortalece tu mente y maneja el estrés efectivamente',
        'learn.physical.title': 'Bienestar Físico',
        'learn.physical.description': 'Conecta con tu cuerpo a través del movimiento y la conciencia',
        'learn.spiritual.title': 'Crecimiento Espiritual',
        'learn.spiritual.description': 'Explora tu sabiduría interior y conexión espiritual',
        'learn.sleep.title': 'Sueño y Descanso',
        'learn.sleep.description': 'Domina el arte del sueño reparador y relajación profunda',
        'learn.emotional.title': 'Inteligencia Emocional',
        'learn.emotional.description': 'Desarrolla conciencia emocional y relaciones saludables',
        'learn.nature.title': 'Conexión con la Naturaleza',
        'learn.nature.description': 'Reconecta con la sabiduría curativa y ritmos de la naturaleza',
        'learn.energy.title': 'Energía y Chakras',
        'learn.energy.description': 'Equilibra tus centros de energía y mejora tu vitalidad',
        'learn.manifestation.title': 'Manifestación y Metas',
        'learn.manifestation.description': 'Crea tu vida ideal a través de intención enfocada y acción',
        'learn.luna.title': 'Guía de Luna AI',
        'learn.luna.description': 'Conecta con tu compañera de bienestar AI Luna',
        // Quiz translations - Spanish
        'quiz.selectCorrectMeaning': 'Selecciona el significado correcto',
        'quiz.continue': 'Continuar',
        'quiz.check': 'Verificar',
        'quiz.skip': 'Saltar',
        'quiz.finish': 'Terminar',
        'quiz.next': 'Siguiente',
        'quiz.complete': '¡Lección Completada!',
        'quiz.congratulations': '¡Felicitaciones!',
        'quiz.youEarned': 'Has ganado',
        'quiz.points': 'puntos',
        'quiz.correctAnswer': 'Respuesta Correcta',
        'quiz.wrongAnswer': 'Respuesta Incorrecta',
        'quiz.mascot': 'Mascota',
        // Quiz content translations - Spanish
        'quiz.content.earth.q1': '¿Cuál es el propósito principal de la conexión a tierra?',
        'quiz.content.earth.q1.a1': 'Conectar con la energía estable de la tierra',
        'quiz.content.earth.q1.a2': 'Perder peso rápidamente',
        'quiz.content.earth.q1.a3': 'Dormir mejor por la noche',
        'quiz.content.earth.q1.a4': 'Hacerse famoso',
        'quiz.content.earth.q2': '¿Qué elemento representa la conexión a tierra y la estabilidad?',
        'quiz.content.earth.q2.a1': 'Tierra',
        'quiz.content.earth.q2.a2': 'Fuego',
        'quiz.content.earth.q2.a3': 'Agua',
        'quiz.content.earth.q2.a4': 'Aire',
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
        // Learn page translations - French
        'learn.title': 'Votre Voyage de Bien-etre avec Luna',
        'learn.pathTitle': '🌟 Votre Parcours d\'Apprentissage',
        'learn.pathDescription': 'Commencez par les Fondements Élémentaires, puis explorez la connexion Corps-Esprit-Âme, appliquez le Bien-être Pratique à la vie quotidienne et maîtrisez les techniques de Bien-être Avancé.',
        'learn.category1.title': '🌟 Fondements Elementaires',
        'learn.category1.description': 'Maîtrisez les quatre éléments pour construire votre fondation de bien-être',
        'learn.category2.title': '🧠 Corps-Esprit-Âme',
        'learn.category2.description': 'Intégrez votre bien-être mental, physique et spirituel',
        'learn.category3.title': '🌱 Bien-être Pratique',
        'learn.category3.description': 'Appliquez les principes de bien-être à votre vie quotidienne',
        'learn.category4.title': '🔮 Bien-être Avancé',
        'learn.category4.description': 'Maîtrisez les techniques avancées et créez votre vie idéale',
        'learn.units': 'unités',
        'learn.earth.title': 'Élément Terre',
        'learn.earth.description': 'Ancrez-vous avec l\'énergie stable de la terre et découvrez la manifestation',
        'learn.water.title': 'Élément Eau',
        'learn.water.description': 'Fluez avec les propriétés curatives de l\'eau',
        'learn.fire.title': 'Élément Feu',
        'learn.fire.description': 'Enflammez votre passion intérieure et transformation',
        'learn.air.title': 'Élément Air',
        'learn.air.description': 'Respirez avec la clarté et la liberté de l\'air',
        'learn.mindfulness.title': 'Pleine Conscience et Méditation',
        'learn.mindfulness.description': 'Développez la conscience du moment présent et la paix intérieure',
        'learn.mental.title': 'Bien-être Mental',
        'learn.mental.description': 'Renforcez votre esprit et gérez efficacement le stress',
        'learn.physical.title': 'Bien-être Physique',
        'learn.physical.description': 'Connectez-vous avec votre corps par le mouvement et la conscience',
        'learn.spiritual.title': 'Croissance Spirituelle',
        'learn.spiritual.description': 'Explorez votre sagesse intérieure et connexion spirituelle',
        'learn.sleep.title': 'Sommeil et Repos',
        'learn.sleep.description': 'Maîtrisez l\'art du sommeil réparateur et de la relaxation profonde',
        'learn.emotional.title': 'Intelligence Émotionnelle',
        'learn.emotional.description': 'Développez la conscience émotionnelle et des relations saines',
        'learn.nature.title': 'Connexion avec la Nature',
        'learn.nature.description': 'Reconnectez-vous avec la sagesse curative et les rythmes de la nature',
        'learn.energy.title': 'Énergie et Chakras',
        'learn.energy.description': 'Équilibrez vos centres d\'énergie et améliorez votre vitalité',
        'learn.manifestation.title': 'Manifestation et Objectifs',
        'learn.manifestation.description': 'Créez votre vie idéale grâce à l\'intention focalisée et à l\'action',
        'learn.luna.title': 'Guidance Luna AI',
        'learn.luna.description': 'Connectez-vous avec votre compagnon de bien-être AI Luna',
        // Quiz translations - French
        'quiz.selectCorrectMeaning': 'Sélectionnez la signification correcte',
        'quiz.continue': 'Continuer',
        'quiz.check': 'Vérifier',
        'quiz.skip': 'Passer',
        'quiz.finish': 'Terminer',
        'quiz.next': 'Suivant',
        'quiz.complete': 'Leçon Terminée!',
        'quiz.congratulations': 'Félicitations!',
        'quiz.youEarned': 'Vous avez gagné',
        'quiz.points': 'points',
        'quiz.correctAnswer': 'Réponse Correcte',
        'quiz.wrongAnswer': 'Réponse Incorrecte',
        'quiz.mascot': 'Mascotte',
        // Quiz content translations - French
        'quiz.content.earth.q1': 'Quel est l\'objectif principal de la connexion à la terre?',
        'quiz.content.earth.q1.a1': 'Se connecter à l\'énergie stable de la terre',
        'quiz.content.earth.q1.a2': 'Perdre du poids rapidement',
        'quiz.content.earth.q1.a3': 'Mieux dormir la nuit',
        'quiz.content.earth.q1.a4': 'Devenir célèbre',
        'quiz.content.earth.q2': 'Quel élément représente l\'ancrage et la stabilité?',
        'quiz.content.earth.q2.a1': 'Terre',
        'quiz.content.earth.q2.a2': 'Feu',
        'quiz.content.earth.q2.a3': 'Eau',
        'quiz.content.earth.q2.a4': 'Air',
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
        // Learn page translations - German
        'learn.title': 'Ihre Wellness-Reise mit Luna',
        'learn.pathTitle': '🌟 Ihr Lernpfad',
        'learn.pathDescription': 'Beginnen Sie mit Elementaren Grundlagen, erkunden Sie dann die Geist-Körper-Seele-Verbindung, wenden Sie Praktisches Wohlbefinden auf das tägliche Leben an und meistern Sie fortgeschrittene Wellness-Techniken.',
        'learn.category1.title': '🌟 Elementare Grundlagen',
        'learn.category1.description': 'Meistern Sie die vier Elemente, um Ihr Wellness-Fundament zu bauen',
        'learn.category2.title': '🧠 Geist-Körper-Seele',
        'learn.category2.description': 'Integrieren Sie Ihr mentales, physisches und spirituelles Wohlbefinden',
        'learn.category3.title': '🌱 Praktisches Wohlbefinden',
        'learn.category3.description': 'Wenden Sie Wellness-Prinzipien auf Ihr tägliches Leben an',
        'learn.category4.title': '🔮 Fortgeschrittenes Wohlbefinden',
        'learn.category4.description': 'Meistern Sie fortgeschrittene Techniken und erschaffen Sie Ihr ideales Leben',
        'learn.units': 'Einheiten',
        'learn.earth.title': 'Erd-Element',
        'learn.earth.description': 'Erden Sie sich mit der stabilen Energie der Erde und entdecken Sie Manifestation',
        'learn.water.title': 'Wasser-Element',
        'learn.water.description': 'Fließen Sie mit den heilenden Eigenschaften des Wassers',
        'learn.fire.title': 'Feuer-Element',
        'learn.fire.description': 'Entfachen Sie Ihre innere Leidenschaft und Transformation',
        'learn.air.title': 'Luft-Element',
        'learn.air.description': 'Atmen Sie mit der Klarheit und Freiheit der Luft',
        'learn.mindfulness.title': 'Achtsamkeit & Meditation',
        'learn.mindfulness.description': 'Entwickeln Sie Bewusstsein für den gegenwärtigen Moment und inneren Frieden',
        'learn.mental.title': 'Mentales Wohlbefinden',
        'learn.mental.description': 'Stärken Sie Ihren Geist und bewältigen Sie Stress effektiv',
        'learn.physical.title': 'Körperliches Wohlbefinden',
        'learn.physical.description': 'Verbinden Sie sich mit Ihrem Körper durch Bewegung und Bewusstsein',
        'learn.spiritual.title': 'Spirituelles Wachstum',
        'learn.spiritual.description': 'Erkunden Sie Ihre innere Weisheit und spirituelle Verbindung',
        'learn.sleep.title': 'Schlaf & Ruhe',
        'learn.sleep.description': 'Meistern Sie die Kunst des erholsamen Schlafs und tiefer Entspannung',
        'learn.emotional.title': 'Emotionale Intelligenz',
        'learn.emotional.description': 'Entwickeln Sie emotionales Bewusstsein und gesunde Beziehungen',
        'learn.nature.title': 'Naturverbindung',
        'learn.nature.description': 'Verbinden Sie sich wieder mit der heilenden Weisheit und den Rhythmen der Natur',
        'learn.energy.title': 'Energie & Chakras',
        'learn.energy.description': 'Balancieren Sie Ihre Energiezentren und steigern Sie Ihre Vitalität',
        'learn.manifestation.title': 'Manifestation & Ziele',
        'learn.manifestation.description': 'Erschaffen Sie Ihr ideales Leben durch fokussierte Absicht und Handlung',
        'learn.luna.title': 'Luna AI Führung',
        'learn.luna.description': 'Verbinden Sie sich mit Ihrer AI-Wellness-Begleiterin Luna',
        // Quiz translations - German
        'quiz.selectCorrectMeaning': 'Wählen Sie die richtige Bedeutung',
        'quiz.continue': 'Fortfahren',
        'quiz.check': 'Überprüfen',
        'quiz.skip': 'Überspringen',
        'quiz.finish': 'Beenden',
        'quiz.next': 'Weiter',
        'quiz.complete': 'Lektion abgeschlossen!',
        'quiz.congratulations': 'Herzlichen Glückwunsch!',
        'quiz.youEarned': 'Sie haben verdient',
        'quiz.points': 'Punkte',
        'quiz.correctAnswer': 'Richtige Antwort',
        'quiz.wrongAnswer': 'Falsche Antwort',
        'quiz.mascot': 'Maskottchen',
        // Quiz content translations - German
        'quiz.content.earth.q1': 'Was ist der Hauptzweck der Erdung?',
        'quiz.content.earth.q1.a1': 'Sich mit der stabilen Energie der Erde verbinden',
        'quiz.content.earth.q1.a2': 'Schnell Gewicht verlieren',
        'quiz.content.earth.q1.a3': 'Nachts besser schlafen',
        'quiz.content.earth.q1.a4': 'Berühmt werden',
        'quiz.content.earth.q2': 'Welches Element repräsentiert Erdung und Stabilität?',
        'quiz.content.earth.q2.a1': 'Erde',
        'quiz.content.earth.q2.a2': 'Feuer',
        'quiz.content.earth.q2.a3': 'Wasser',
        'quiz.content.earth.q2.a4': 'Luft',
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
        // Learn page translations - Italian
        'learn.title': 'Il Tuo Viaggio di Benessere con Luna',
        'learn.pathTitle': '🌟 Il Tuo Percorso di Apprendimento',
        'learn.pathDescription': 'Inizia con i Fondamenti Elementali, poi esplora la connessione Mente-Corpo-Spirito, applica il Benessere Pratico alla vita quotidiana e padroneggia le tecniche di Benessere Avanzato.',
        'learn.category1.title': '🌟 Fondamenti Elementali',
        'learn.category1.description': 'Padroneggia i quattro elementi per costruire la tua base di benessere',
        'learn.category2.title': '🧠 Mente-Corpo-Spirito',
        'learn.category2.description': 'Integra il tuo benessere mentale, fisico e spirituale',
        'learn.category3.title': '🌱 Benessere Pratico',
        'learn.category3.description': 'Applica i principi del benessere alla tua vita quotidiana',
        'learn.category4.title': '🔮 Benessere Avanzato',
        'learn.category4.description': 'Padroneggia le tecniche avanzate e crea la tua vita ideale',
        'learn.units': 'unità',
        'learn.earth.title': 'Elemento Terra',
        'learn.earth.description': 'Radicati con l\'energia stabile della terra e scopri la manifestazione',
        'learn.water.title': 'Elemento Acqua',
        'learn.water.description': 'Fluisci con le proprietà curative dell\'acqua',
        'learn.fire.title': 'Elemento Fuoco',
        'learn.fire.description': 'Accendi la tua passione interiore e trasformazione',
        'learn.air.title': 'Elemento Aria',
        'learn.air.description': 'Respira con la chiarezza e libertà dell\'aria',
        'learn.mindfulness.title': 'Consapevolezza e Meditazione',
        'learn.mindfulness.description': 'Sviluppa la consapevolezza del momento presente e la pace interiore',
        'learn.mental.title': 'Benessere Mentale',
        'learn.mental.description': 'Rafforza la tua mente e gestisci efficacemente lo stress',
        'learn.physical.title': 'Benessere Fisico',
        'learn.physical.description': 'Connettiti con il tuo corpo attraverso il movimento e la consapevolezza',
        'learn.spiritual.title': 'Crescita Spirituale',
        'learn.spiritual.description': 'Esplora la tua saggezza interiore e connessione spirituale',
        'learn.sleep.title': 'Sonno e Riposo',
        'learn.sleep.description': 'Padroneggia l\'arte del sonno ristoratore e del rilassamento profondo',
        'learn.emotional.title': 'Intelligenza Emotiva',
        'learn.emotional.description': 'Sviluppa la consapevolezza emotiva e relazioni sane',
        'learn.nature.title': 'Connessione con la Natura',
        'learn.nature.description': 'Riconnettiti con la saggezza curativa e i ritmi della natura',
        'learn.energy.title': 'Energia e Chakra',
        'learn.energy.description': 'Bilancia i tuoi centri energetici e migliora la tua vitalità',
        'learn.manifestation.title': 'Manifestazione e Obiettivi',
        'learn.manifestation.description': 'Crea la tua vita ideale attraverso l\'intenzione focalizzata e l\'azione',
        'learn.luna.title': 'Guida Luna AI',
        'learn.luna.description': 'Connettiti con la tua compagna di benessere AI Luna',
        // Quiz translations - Italian
        'quiz.selectCorrectMeaning': 'Seleziona il significato corretto',
        'quiz.continue': 'Continua',
        'quiz.check': 'Verifica',
        'quiz.skip': 'Salta',
        'quiz.finish': 'Termina',
        'quiz.next': 'Prossimo',
        'quiz.complete': 'Lezione Completata!',
        'quiz.congratulations': 'Congratulazioni!',
        'quiz.youEarned': 'Hai guadagnato',
        'quiz.points': 'punti',
        'quiz.correctAnswer': 'Risposta Corretta',
        'quiz.wrongAnswer': 'Risposta Sbagliata',
        'quiz.mascot': 'Mascotte',
        // Quiz content translations - Italian
        'quiz.content.earth.q1': 'Qual è lo scopo principale della connessione con la terra?',
        'quiz.content.earth.q1.a1': 'Connettersi con l\'energia stabile della terra',
        'quiz.content.earth.q1.a2': 'Perdere peso velocemente',
        'quiz.content.earth.q1.a3': 'Dormire meglio la notte',
        'quiz.content.earth.q1.a4': 'Diventare famosi',
        'quiz.content.earth.q2': 'Quale elemento rappresenta la connessione con la terra e la stabilità?',
        'quiz.content.earth.q2.a1': 'Terra',
        'quiz.content.earth.q2.a2': 'Fuoco',
        'quiz.content.earth.q2.a3': 'Acqua',
        'quiz.content.earth.q2.a4': 'Aria',
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
    const [isLoaded, setIsLoaded] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
        setIsLoaded(true);
    }, []);

    const setLanguage = (language: Language) => {
        setCurrentLanguage(language);
        localStorage.setItem('language', language);

        // Force re-render by updating a timestamp
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
    };

    const t = (key: string): string => {
        if (!isLoaded) return key; // Return key during loading to avoid hydration mismatch
        const translation = translations[currentLanguage]?.[key] || translations['EN'][key] || key;
        return translation;
    };

    // Helper function to translate quiz content
    const translateQuizContent = (content: string): string => {
        // Try to find a translation key for this content
        const keyPrefix = 'quiz.content.';
        const possibleKey = Object.keys(translations['EN']).find(key =>
            key.startsWith(keyPrefix) && translations['EN'][key] === content
        );

        if (possibleKey && translations[currentLanguage]?.[possibleKey]) {
            return translations[currentLanguage][possibleKey];
        }

        // If no translation is found, return the original content
        return content;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translateQuizContent }}>
            {children}
        </LanguageContext.Provider>
    );
};
