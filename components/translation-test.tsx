"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const TranslationTest = () => {
    const { t, currentLanguage, setLanguage } = useLanguage();

    return (
        <div className="p-6 bg-white border-2 border-blue-400 rounded-lg mb-4 shadow-blue-300/50 shadow-xl transform hover:scale-[1.01] transition-all duration-200">
            <h3 className="font-bold text-xl mb-3 text-blue-600">Translation Test</h3>
            <p><strong>Current Language:</strong> {currentLanguage}</p>
            <p><strong>learn.title:</strong> {t('learn.title')}</p>
            <p><strong>learn.category1.title:</strong> {t('learn.category1.title')}</p>
            <p><strong>learn.category2.title:</strong> {t('learn.category2.title')}</p>
            <p><strong>learn.pathTitle:</strong> {t('learn.pathTitle')}</p>

            <div className="mt-5 space-x-3">
                <button
                    onClick={() => setLanguage('EN')}
                    className={`px-4 py-2 ${currentLanguage === 'EN' ? 'bg-blue-600' : 'bg-blue-500'} text-white rounded-md font-medium shadow-md hover:shadow-lg hover:bg-blue-600 active:translate-y-0.5 transform transition-all duration-150`}
                >
                    EN
                </button>
                <button
                    onClick={() => setLanguage('ES')}
                    className={`px-4 py-2 ${currentLanguage === 'ES' ? 'bg-green-600' : 'bg-green-500'} text-white rounded-md font-medium shadow-md hover:shadow-lg hover:bg-green-600 active:translate-y-0.5 transform transition-all duration-150`}
                >
                    ES
                </button>
                <button
                    onClick={() => setLanguage('FR')}
                    className={`px-4 py-2 ${currentLanguage === 'FR' ? 'bg-purple-600' : 'bg-purple-500'} text-white rounded-md font-medium shadow-md hover:shadow-lg hover:bg-purple-600 active:translate-y-0.5 transform transition-all duration-150`}
                >
                    FR
                </button>
                <button
                    onClick={() => setLanguage('IT')}
                    className={`px-4 py-2 ${currentLanguage === 'IT' ? 'bg-red-600' : 'bg-red-500'} text-white rounded-md font-medium shadow-md hover:shadow-lg hover:bg-red-600 active:translate-y-0.5 transform transition-all duration-150`}
                >
                    IT
                </button>
                <button
                    onClick={() => setLanguage('DE')}
                    className={`px-4 py-2 ${currentLanguage === 'DE' ? 'bg-amber-600' : 'bg-amber-500'} text-white rounded-md font-medium shadow-md hover:shadow-lg hover:bg-amber-600 active:translate-y-0.5 transform transition-all duration-150`}
                >
                    DE
                </button>
            </div>
        </div>
    );
};
