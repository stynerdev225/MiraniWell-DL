"use client";
import { useState, useEffect, useRef } from "react";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export const Header = () => {
  const pathname = usePathname();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const platformDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Spanish", flag: "🇪🇸" },
    { code: "FR", name: "French", flag: "🇫🇷" },
    { code: "DE", name: "German", flag: "🇩🇪" },
    { code: "IT", name: "Italian", flag: "🇮🇹" },
    { code: "PT", name: "Portuguese", flag: "🇵🇹" },
    { code: "RU", name: "Russian", flag: "🇷🇺" },
    { code: "JA", name: "Japanese", flag: "🇯🇵" },
    { code: "KO", name: "Korean", flag: "🇰🇷" },
    { code: "ZH", name: "Chinese", flag: "🇨🇳" },
    { code: "AR", name: "Arabic", flag: "🇸🇦" },
    { code: "HI", name: "Hindi", flag: "🇮🇳" },
    { code: "NL", name: "Dutch", flag: "🇳🇱" },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsPlatformDropdownOpen(false); // Close other dropdowns
    setIsCompanyDropdownOpen(false); // Close other dropdowns
  };

  const togglePlatformDropdown = () => {
    setIsPlatformDropdownOpen(!isPlatformDropdownOpen);
    setIsCompanyDropdownOpen(false); // Close other dropdowns
    setIsLanguageDropdownOpen(false); // Close other dropdowns
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
    setIsPlatformDropdownOpen(false); // Close other dropdowns
    setIsLanguageDropdownOpen(false); // Close other dropdowns
  };

  const selectLanguage = (langCode: string) => {
    setLanguage(langCode as Language);
    setIsLanguageDropdownOpen(false);
  };

  // Navigation structure with dropdowns
  const platformItems = [
    { href: "/features", label: t('header.features'), id: "features" },
    { href: "/resources", label: t('header.resources'), id: "resources" },
  ];

  const companyItems = [
    { href: "/about", label: t('header.about'), id: "about" },
    { href: "/contact", label: t('header.contact'), id: "contact" },
    { href: "/support", label: t('header.support'), id: "support" },
  ];

  // Close dropdown when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target as Node)) {
        setIsPlatformDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageDropdownOpen(false);
        setIsPlatformDropdownOpen(false);
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <>
      <header className="h-20 w-full border-b-2 border-slate-200 px-4 bg-white sticky top-0 z-[99999]">
        <div className="mx-auto flex h-full items-center justify-between max-w-screen-xl px-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-2 lg:pl-4 pt-8 flex-shrink-0">
            <Image
              src="/mascot.svg"
              alt="Mascot"
              height={40}
              width={40}
              priority
              className="object-contain"
            />
            <h1 className="text-xl lg:text-2xl font-extrabold tracking-wide text-green-600 whitespace-nowrap">
              Miriani Well
            </h1>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-8 flex-1 justify-center">
            {/* Home */}
            <Link
              href="/"
              className={`font-medium transition-all duration-200 relative whitespace-nowrap text-sm lg:text-base ${pathname === "/" ? "text-green-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {t('Home')}
              {pathname === "/" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"></span>
              )}
            </Link>

            {/* Platform Dropdown */}
            <div className="relative" ref={platformDropdownRef}>
              <button
                onClick={togglePlatformDropdown}
                className={`flex items-center gap-1 font-medium transition-all duration-200 relative whitespace-nowrap text-sm lg:text-base ${['/features', '/resources'].includes(pathname) ? "text-green-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Platform
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform ${isPlatformDropdownOpen ? 'rotate-180' : ''}`} />
                {['/features', '/resources'].includes(pathname) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"></span>
                )}
              </button>

              {/* Platform Dropdown Menu */}
              {isPlatformDropdownOpen && (
                <>
                  <div className="fixed inset-0 bg-transparent z-[99997]" onClick={() => setIsPlatformDropdownOpen(false)} />
                  <div className="fixed top-20 left-0 right-0 z-[99998]">
                    <div className="mx-auto max-w-screen-lg px-4">
                      <div className="relative">
                        <div className="absolute top-2 left-[160px] w-36 bg-white border border-gray-200 rounded-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
                          {platformItems.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              className={`block px-3 py-2 text-sm transition-colors duration-150 ${pathname === item.href
                                ? 'bg-green-50 text-green-700 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              onClick={() => setIsPlatformDropdownOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`font-medium transition-all duration-200 relative whitespace-nowrap text-sm lg:text-base ${pathname === "/pricing" ? "text-green-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {t('header.pricing')}
              {pathname === "/pricing" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"></span>
              )}
            </Link>

            {/* Company Dropdown */}
            <div className="relative" ref={companyDropdownRef}>
              <button
                onClick={toggleCompanyDropdown}
                className={`flex items-center gap-1 font-medium transition-all duration-200 relative whitespace-nowrap text-sm lg:text-base ${['/about', '/contact', '/support'].includes(pathname) ? "text-green-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Company
                <ChevronDown className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
                {['/about', '/contact', '/support'].includes(pathname) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"></span>
                )}
              </button>

              {/* Company Dropdown Menu */}
              {isCompanyDropdownOpen && (
                <>
                  <div className="fixed inset-0 bg-transparent z-[99997]" onClick={() => setIsCompanyDropdownOpen(false)} />
                  <div className="fixed top-20 left-0 right-0 z-[99998]">
                    <div className="mx-auto max-w-screen-lg px-4">
                      <div className="relative">
                        <div className="absolute top-2 left-[320px] w-36 bg-white border border-gray-200 rounded-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
                          {companyItems.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              className={`block px-3 py-2 text-sm transition-colors duration-150 ${pathname === item.href
                                ? 'bg-green-50 text-green-700 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              onClick={() => setIsCompanyDropdownOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-x-3 lg:gap-x-4 flex-shrink-0">
            {/* Language Toggle */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 hover:bg-gray-100 border border-gray-200"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-sm font-medium">{currentLang.code}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <>
                  <div className="fixed inset-0 bg-transparent z-[99997]" onClick={() => setIsLanguageDropdownOpen(false)} />
                  <div className="fixed top-20 left-0 right-0 z-[99998]">
                    <div className="mx-auto max-w-screen-lg px-4">
                      <div className="relative">
                        <div className="absolute top-2 right-[150px] w-48 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-64 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                          {languages.map((language) => (
                            <button
                              key={language.code}
                              onClick={() => selectLanguage(language.code)}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-150 ${currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
                                }`}
                            >
                              <span className="text-lg">{language.flag}</span>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{language.name}</span>
                                <span className="text-xs text-gray-500">{language.code}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Authentication Section */}
            <div className="flex items-center gap-x-2">
              {/* Temporary authentication bypass for marketing pages */}
              {/* TODO: Re-enable Clerk authentication when compatibility is fixed */}
              <div className="flex items-center gap-x-2">
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="hidden sm:flex bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold px-6 lg:px-8 py-2 shadow-md whitespace-nowrap text-sm lg:text-base"
                  >
                    {t('header.login')}
                  </Button>
                </Link>

                {/* Start Now Button - Primary CTA */}
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 lg:px-8 py-2 shadow-md whitespace-nowrap text-sm lg:text-base"
                  >
                    {t('header.startNow')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
