"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronDown, Globe } from "lucide-react";

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
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguageInfo = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language: Language) => {
        setLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Clean language toggle button */}
            <button
                onClick={handleToggle}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-neutral-800 hover:bg-gray-50 rounded-md transition-colors border border-gray-300"
            >
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                    {currentLanguageInfo.flag} {currentLanguageInfo.name}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Professional dropdown - only visible when open */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-[99999]">
                    <div className="p-4">
                        <div className="text-xs text-gray-500 font-medium mb-3 text-center border-b border-gray-100 pb-2">
                            Choose Language
                        </div>
                        {languageOptions.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`w-full text-left px-5 py-3 text-sm rounded-md transition-colors flex items-center gap-4 mb-1 ${currentLanguage === language.code
                                    ? "bg-blue-50 text-blue-700 font-medium"
                                    : "hover:bg-gray-50 text-gray-700"
                                    }`}
                            >
                                <span className="text-lg min-w-[28px] flex-shrink-0">{language.flag}</span>
                                <span className="flex-1 whitespace-nowrap overflow-hidden">{language.name}</span>
                                {currentLanguage === language.code && (
                                    <span className="text-blue-600 font-bold min-w-[20px] flex-shrink-0">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
