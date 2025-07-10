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

    const handleLanguageChange = (language: Language) => {
        setLanguage(language);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-neutral-800 hover:bg-gray-50 rounded-md transition-colors border border-gray-300"
            >
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                    {currentLanguageInfo.flag} {currentLanguageInfo.name}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown with enhanced visibility */}
            <div
                className={`absolute right-0 top-full mt-2 w-48 bg-white border-2 border-blue-500 rounded-md shadow-2xl ${isOpen ? 'block' : 'block'
                    }`}
                style={{ zIndex: 9999 }}
            >
                <div className="p-1">
                    <div className="text-xs text-blue-500 p-1 font-bold border-b mb-1">
                        Status: {isOpen ? 'OPEN' : 'CLOSED'} | Languages: {languageOptions.length}
                    </div>
                    {languageOptions.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-2 ${currentLanguage === language.code
                                    ? "bg-blue-100 text-blue-700 font-bold"
                                    : "hover:bg-gray-100 text-gray-800"
                                }`}
                        >
                            <span className="text-base">{language.flag}</span>
                            <span>{language.name}</span>
                            {currentLanguage === language.code && (
                                <span className="ml-auto text-blue-600 font-bold">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
