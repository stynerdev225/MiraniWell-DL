"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const FrenchTest = () => {
    const { currentLanguage, setLanguage, t } = useLanguage();
    
    return (
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg mb-4">
            <h3 className="font-bold mb-2">French Language Test</h3>
            <p>Current Language: <strong>{currentLanguage}</strong></p>
            <p>Test Translation (learn.title): <strong>{t('learn.title')}</strong></p>
            <p>Test Translation (learn.category1.title): <strong>{t('learn.category1.title')}</strong></p>
            
            <div className="mt-2 space-x-2">
                <button 
                    onClick={() => setLanguage('EN')} 
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                    English
                </button>
                <button 
                    onClick={() => setLanguage('FR')} 
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    Français
                </button>
                <button 
                    onClick={() => setLanguage('ES')} 
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    Español
                </button>
            </div>
        </div>
    );
};
