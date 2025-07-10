"use client";

import { useState } from "react";

import { Globe } from "lucide-react";

import { useLanguage, Language } from "@/contexts/LanguageContext";

export const languageOptions = [
    { code: "EN" as Language, name: "English", flag: "🇺🇸" },
    { code: "ES" as Language, name: "Español", flag: "🇪🇸" },
    { code: "FR" as Language, name: "Français", flag: "🇫🇷" },
    { code: "DE" as Language, name: "Deutsch", flag: "🇩🇪" },
    { code: "IT" as Language, name: "Italiano", flag: "🇮🇹" },
];

export const LanguageToggle = () => {
    const { currentLanguage, setLanguage } = useLanguage();
    const [showAll, setShowAll] = useState(false);

    const currentLanguageInfo = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];

    const handleLanguageChange = (language: Language) => {
        setLanguage(language);
        setShowAll(false);
    };

    if (showAll) {
        // Show all languages in a row
        return (
            <div className="flex items-center gap-2 p-2 bg-white border-2 border-blue-500 rounded-lg shadow-lg">
                <Globe className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-blue-500 font-bold">Pick:</span>
                {languageOptions.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`px-2 py-1 text-sm rounded border-2 transition-all ${currentLanguage === language.code
                                ? "bg-blue-100 border-blue-500 text-blue-700 font-bold"
                                : "bg-white border-gray-300 text-gray-700 hover:border-blue-300"
                            }`}
                        title={language.name}
                    >
                        {language.flag} {language.name}
                    </button>
                ))}
                <button
                    onClick={() => setShowAll(false)}
                    className="text-xs text-red-500 hover:text-red-700 font-bold"
                >
                    ✕
                </button>
            </div>
        );
    }

    // Show just current language + click to expand
    return (
        <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-neutral-800 hover:bg-gray-50 rounded-md transition-colors border border-gray-300"
        >
            <Globe className="h-4 w-4" />
            <span className="font-medium">
                {currentLanguageInfo.flag} {currentLanguageInfo.name}
            </span>
            <span className="text-xs text-blue-500 font-bold">↗</span>
        </button>
    );
};
