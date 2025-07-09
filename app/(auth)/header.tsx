"use client";
import { useState, useEffect, useRef } from "react";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { Loader, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export const Header = () => {
  useAuth();
  const pathname = usePathname();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
  };

  const selectLanguage = (langCode: string) => {
    setLanguage(langCode as Language);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    const sections = ['features', 'why-lingo', 'pricing', 'about'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "/#features", label: t('header.features'), id: "features" },
    { href: "/#why-lingo", label: t('header.whyLingo'), id: "why-lingo" },
    { href: "/#pricing", label: t('header.pricing'), id: "pricing" },
    { href: "/#about", label: t('header.about'), id: "about" },
    { href: "/contact", label: t('header.contact'), id: "contact" },
  ];

  return (
    <>
      <header className="h-20 w-full border-b-2 border-slate-200 px-4 bg-white">
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
            <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
              Lingo
            </h1>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-x-6">
            {navItems.map((item) => {
              // Check if this is the contact page
              const isContactPage = pathname === '/contact' && item.id === 'contact';
              // Check if this is an active section on the current page
              const isActiveSection = activeSection === item.id && item.href.startsWith('/#');
              const isActive = isContactPage || isActiveSection;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`font-medium transition-all duration-200 relative ${isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-x-3">
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
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors ${currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
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
              )}
            </div>

            {/* Authentication Section */}
            <div className="flex items-center gap-x-2">
              <ClerkLoading>
                <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
              </ClerkLoading>

              <ClerkLoaded>
                <SignedOut>
                  <SignInButton mode="modal" fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="hidden sm:flex bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold px-6 py-2 shadow-md"
                    >
                      {t('header.login')}
                    </Button>
                  </SignInButton>

                  {/* Start Now Button - Primary CTA */}
                  <Link href="/learn">
                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 shadow-md"
                    >
                      {t('header.startNow')}
                    </Button>
                  </Link>
                </SignedOut>

                <SignedIn>
                  <Link href="/learn">
                    <Button
                      size="sm"
                      variant="primaryOutline"
                      className="hidden sm:flex border-green-500 text-green-600 hover:bg-green-50"
                    >
                      {t('header.continueLearning')}
                    </Button>
                  </Link>
                  <UserButton />
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
