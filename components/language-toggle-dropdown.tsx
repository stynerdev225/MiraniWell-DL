"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronDown, Globe } from "lucide-react";
import { createPortal } from "react-dom";


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
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguageInfo = languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const updateButtonPosition = () => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                setButtonPosition({
                    top: rect.bottom + window.scrollY,
                    left: rect.right - 288 + window.scrollX, // 288px = w-72
                    width: rect.width
                });
            }
        };

        if (isOpen) {
            updateButtonPosition();
            window.addEventListener('scroll', updateButtonPosition);
            window.addEventListener('resize', updateButtonPosition);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('scroll', updateButtonPosition);
            window.removeEventListener('resize', updateButtonPosition);
        };
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language: Language) => {
        setLanguage(language);
        setIsOpen(false);
    };

    return (
        <>
            {/* Clean language toggle button */}
            <button
                ref={buttonRef}
                type="button"
                onClick={handleToggle}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-neutral-800 hover:bg-gray-50 rounded-md transition-colors border border-gray-300 relative z-[9999]"
            >
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                    {currentLanguageInfo.flag} {currentLanguageInfo.name}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Portal dropdown - rendered at document body level */}
            {isOpen && typeof window !== 'undefined' && createPortal(
                <div ref={dropdownRef}>
                    {/* Backdrop for mobile */}
                    <div className="fixed inset-0 bg-black/20 z-[99998]" onClick={() => setIsOpen(false)} />

                    {/* Dropdown menu positioned absolutely */}
                    {/*
                        Note: Inline styles are required here for dynamic positioning
                        The dropdown position is calculated based on button location
                        and cannot be achieved with static CSS classes
                    */}
                    <div
                        className="fixed w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-[99999] max-h-[400px] overflow-y-auto"
                        style={{
                            top: `${buttonPosition.top + 4}px`,
                            left: `${buttonPosition.left}px`,
                        }}
                    >
                        <div className="p-4">
                            <div className="text-xs text-gray-500 font-medium mb-3 text-center border-b border-gray-100 pb-2">
                                Choose Language
                            </div>
                            {languageOptions.map((language) => (
                                <button
                                    type="button"
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
                </div>,
                document.body
            )}
        </>
    );
};
