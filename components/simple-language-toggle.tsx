"use client";

import { useState } from "react";

import { ChevronDown, Globe } from "lucide-react";

export const SimpleLanguageToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "EN", name: "English", flag: "🇺🇸" },
        { code: "ES", name: "Español", flag: "🇪🇸" },
        { code: "FR", name: "Français", flag: "🇫🇷" },
        { code: "DE", name: "Deutsch", flag: "🇩🇪" },
        { code: "IT", name: "Italiano", flag: "🇮🇹" },
    ];

    const [selected, setSelected] = useState(languages[0]);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-neutral-800 hover:bg-gray-50 rounded-md transition-colors"
            >
                <Globe className="h-4 w-4" />
                <span className="font-medium">
                    {selected.flag} {selected.name}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Always show dropdown for testing */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="p-1">
                    <div className="text-xs text-green-500 p-1">Test dropdown always visible</div>
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => {
                                setSelected(language);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-2 ${selected.code === language.code
                                ? "bg-blue-50 text-blue-600"
                                : "hover:bg-gray-50 text-gray-700"
                                }`}
                        >
                            <span className="text-base">{language.flag}</span>
                            <span>{language.name}</span>
                            {selected.code === language.code && (
                                <span className="ml-auto text-blue-600">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
