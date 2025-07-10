import Image from "next/image";
import Link from "next/link";

import { Features } from "@/components/landing/Features";
import { Fluency } from "@/components/landing/Fluency";
import { Reasons } from "@/components/landing/Reasons";
import { WhyLingo } from "@/components/landing/WhyLingo";
import { Languages } from "@/components/Languages";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 pt-16 lg:flex-row">
        <div className="relative mb-8 h-[320px] w-[320px] lg:mb-0 lg:h-[500px] lg:w-[500px]">
          <Image src="/hero.svg" alt="Hero" fill />
        </div>

        <div className="flex flex-col items-center gap-y-12">
          <h1 className="max-w-[680px] text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            Transform your <span className="text-green-600 dark:text-green-400">wellness journey</span> with Luna AI - your personal healing companion.
          </h1>

          <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
            {/* Direct access button - bypass login */}
            <Link href="/learn">
              <Button size="lg" variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                🚀 Direct Access - Try Now!
              </Button>
            </Link>

            {/* Temporary authentication bypass for marketing pages */}
            <Link href="/sign-up">
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </Link>

            <Link href="/sign-in">
              <Button size="lg" variant="primaryOutline" className="w-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium">
                I already have an account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Languages />
      <WhyLingo />

      {/* Lingo by the numbers title section */}
      <section className="pb-8 pt-16 md:py-20 overflow-hidden">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          <span className="text-green-600 dark:text-green-400">Miriani Well</span> by the{' '}
          <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy underline-offset-4 md:underline-offset-8">
            numbers
          </span>
        </h2>
      </section>

      <Fluency />
      <Features />

      {/* Learn Anytime, Anywhere Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-blue-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
        {/* 3D effect layers */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100/20 to-purple-100/20 transform -rotate-1"></div>
        <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent transform -translate-y-1"></div>

        <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
              learn anytime, <span className="text-green-500 dark:text-green-400">anywhere</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto relative">
            {/* Enhanced Decorative icons with more variety */}
            <div className="absolute -left-16 top-1/4 transform hover:scale-110 transition-transform animate-float">
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-16 top-1/2 transform hover:scale-110 transition-transform animate-float-slow">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-1/4 -top-16 transform hover:scale-110 transition-transform animate-float-medium">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-4 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
            </div>
            <div className="absolute right-1/4 -bottom-16 transform hover:scale-110 transition-transform animate-float">
              <div className="bg-gradient-to-br from-red-400 to-red-600 text-white p-4 rounded-2xl shadow-2xl transform -rotate-12 hover:-rotate-6 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            {/* Additional floating icons */}
            <div className="absolute -left-8 top-3/4 transform hover:scale-110 transition-transform animate-float-slow">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-xl shadow-xl transform rotate-45 hover:rotate-90 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="absolute -right-8 top-1/4 transform hover:scale-110 transition-transform animate-float-medium">
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white p-3 rounded-xl shadow-xl transform -rotate-45 hover:-rotate-90 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-1/3 -top-8 transform hover:scale-110 transition-transform animate-float">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-3 rounded-xl shadow-xl transform rotate-30 hover:rotate-60 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <div className="absolute right-1/3 -bottom-8 transform hover:scale-110 transition-transform animate-float-slow">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white p-3 rounded-xl shadow-xl transform -rotate-30 hover:-rotate-60 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            {/* Phone Card with enhanced 3D */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-2xl border border-white/20 transform group-hover:scale-[1.02] transition-transform"></div>
              <div className="p-6 text-white text-center relative z-10">
                <div className="flex justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">On Your Phone</h3>
                <p className="mb-4 text-blue-100 text-base">
                  Learn during commutes, breaks, or whenever you have a few minutes
                </p>
                <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-xl font-medium flex items-center justify-center hover:bg-blue-50 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  MOBILE APP
                </button>
              </div>
            </div>

            {/* Tablet Card with enhanced 3D */}
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-2xl border border-white/20 transform group-hover:scale-[1.02] transition-transform"></div>
              <div className="p-6 text-white text-center relative z-10">
                <div className="flex justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">On Your Tablet</h3>
                <p className="mb-4 text-green-100 text-base">
                  Perfect for interactive lessons and reading practice at home
                </p>
                <button className="w-full bg-white text-green-600 py-3 px-4 rounded-xl font-medium flex items-center justify-center hover:bg-green-50 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  TABLET EXPERIENCE
                </button>
              </div>
            </div>

            {/* Computer Card with enhanced 3D */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-2xl border border-white/20 transform group-hover:scale-[1.02] transition-transform"></div>
              <div className="p-6 text-white text-center relative z-10">
                <div className="flex justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">On Your Computer</h3>
                <p className="mb-4 text-purple-100 text-base">
                  Full-featured lessons with typing practice and detailed progress
                </p>
                <button className="w-full bg-white text-purple-600 py-3 px-4 rounded-xl font-medium flex items-center justify-center hover:bg-purple-50 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  WEB PLATFORM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced background floating elements with meaningful icons */}
        <div className="absolute top-1/4 left-20 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 animate-float shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-30 animate-float-slow shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-30 animate-float-medium shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-30 animate-float-medium shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>

        {/* Additional floating background elements */}
        <div className="absolute top-1/6 right-1/4 w-14 h-14 bg-gradient-to-br from-red-300 to-red-500 rounded-full opacity-25 animate-float shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="absolute bottom-1/6 left-1/4 w-18 h-18 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-full opacity-25 animate-float-slow shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div className="absolute top-3/4 left-1/6 w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-25 animate-float-medium shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-25 animate-float shadow-2xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </section>

      {/* Choose your learning plan section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
              Choose your <span className="text-green-600 dark:text-green-400">learning plan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 min-h-[500px] flex flex-col justify-between">
              <div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Free</h3>
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-500 text-lg ml-2">forever</span>
                  </div>
                  <p className="text-gray-600 text-sm">Perfect for getting started with language learning</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    5 lessons per day
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Basic exercises
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Limited hearts system
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Mobile app access
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Community support
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-50 text-green-700 font-semibold py-4 px-6 rounded-xl hover:bg-green-100 transition-colors text-base">
                GET STARTED
              </button>
            </div>

            {/* Plus Plan - Most Popular */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative border-2 border-green-500 transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 min-h-[500px] flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  Most Popular
                </span>
              </div>

              <div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plus</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-gray-900">$6.99</span>
                    <span className="text-gray-500 text-sm ml-1">per month</span>
                  </div>
                  <p className="text-gray-600 text-sm">Unlock your full learning potential</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Unlimited lessons
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    No ads
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Unlimited hearts
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Offline lessons
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Progress tracking
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Personalized practice
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Mistake review
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-600 transition-colors text-sm">
                START FREE TRIAL
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 min-h-[500px] flex flex-col justify-between">
              <div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Family</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$9.99</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">per month</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Perfect for families learning together</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Everything in Plus
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Up to 6 accounts
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Family progress tracking
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Parental controls
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Family challenges
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Priority support
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                START FAMILY PLAN
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              14-day free trial • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-20 lg:py-24">
        <Reasons />
      </div>

      {/* About Lingo Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
              About <span className="text-green-600">Miriani Well</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our mission is to make wellness accessible, personalized, and transformative for everyone. We believe that your healing journey should be supported by compassionate AI guidance. That&apos;s why we&apos;ve created Luna - your 24/7 wellness companion with elemental healing practices.
            </p>
          </div>

          {/* Statistics Grid - Horizontally Stretched Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-full mx-auto">
            {/* 500M+ Learners */}
            <div className="bg-white rounded-2xl px-24 py-14 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[240px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-blue-100">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">500M+</div>
                <div className="text-lg text-gray-600 font-medium">Learners worldwide</div>
              </div>
            </div>

            {/* 40+ Languages */}
            <div className="bg-white rounded-2xl px-24 py-14 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[240px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-green-100">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">40+</div>
                <div className="text-lg text-gray-600 font-medium">Languages available</div>
              </div>
            </div>

            {/* #1 Education App */}
            <div className="bg-white rounded-2xl px-24 py-14 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[240px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-yellow-100">
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">#1</div>
                <div className="text-lg text-gray-600 font-medium">Education app</div>
              </div>
            </div>

            {/* 15min Daily Lessons */}
            <div className="bg-white rounded-2xl px-24 py-14 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[240px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-red-100">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">15min</div>
                <div className="text-lg text-gray-600 font-medium">Daily lessons</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
              Our <span className="text-green-600">Story</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize wellness, Miriani Well started with a simple idea: make healing accessible to everyone, everywhere. What began as a passion for combining ancient wisdom with modern AI has grown into a transformative wellness platform.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to help people discover their path to emotional balance and spiritual growth. Our elemental healing practices and Luna AI companion make it easy to build daily wellness habits that truly transform lives.
              </p>
            </div>

            {/* Character Illustrations Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Top Row */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center transform rotate-12">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🦉</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center transform -rotate-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐸</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center transform rotate-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🦋</span>
                  </div>
                </div>
              </div>

              {/* Middle Row */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center transform -rotate-12">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐻</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🐲</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center transform rotate-12">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🦄</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-2xl flex items-center justify-center transform rotate-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐧</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center transform -rotate-6">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐼</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl flex items-center justify-center transform rotate-12">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🦊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
              Meet Our <span className="text-teal-600">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Luis von Ahn */}
            <div className="bg-white rounded-2xl px-8 py-12 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[320px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-green-100">
                  <Image src="/learn.svg" alt="Learn" width={48} height={48} />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">Luis von Ahn</div>
                <div className="text-base text-green-600 font-medium mb-4">CEO & Co-founder</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Computer scientist and entrepreneur passionate about education.
                </div>
              </div>
            </div>

            {/* Severin Hacker */}
            <div className="bg-white rounded-2xl px-8 py-12 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[320px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-blue-100">
                  <Image src="/hero.svg" alt="Hero" width={48} height={48} />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">Severin Hacker</div>
                <div className="text-base text-green-600 font-medium mb-4">CTO & Co-founder</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Software engineer focused on making learning accessible to everyone.
                </div>
              </div>
            </div>

            {/* Duo */}
            <div className="bg-white rounded-2xl px-8 py-12 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-h-[320px] flex flex-col justify-center relative w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/30 to-white opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-orange-100">
                  <Image src="/mascot.svg" alt="Mascot" width={48} height={48} />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">Duo</div>
                <div className="text-base text-green-600 font-medium mb-4">Chief Owl Officer</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Our beloved mascot who keeps millions motivated every day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="pb-16 md:pb-20 lg:pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Single unified rectangular card with three columns */}
          <div className="max-w-full mx-auto">
            <div className="rounded-2xl px-24 py-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-2 border border-teal-200/50 relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
              {/* Strong 3D shadow and gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"></div>

              {/* Section title within the card */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-teal-800 mb-2">Our Values</h3>
              </div>

              {/* Three columns inside the single rectangular card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
                {/* Accessibility */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-800 mb-4">Accessibility</div>
                  <div className="text-base text-gray-700 leading-relaxed">
                    Education should be free and available to everyone, regardless of background.
                  </div>
                </div>

                {/* Fun Learning */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-800 mb-4">Fun Learning</div>
                  <div className="text-base text-gray-700 leading-relaxed">
                    Learning is most effective when it&apos;s enjoyable and engaging.
                  </div>
                </div>

                {/* Scientific Approach */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-800 mb-4">Scientific Approach</div>
                  <div className="text-base text-gray-700 leading-relaxed">
                    Our methods are backed by research and continuously improved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
