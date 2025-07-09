"use client";

import { useState } from "react";
import { Mic, MicOff, Volume2, VolumeX, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LunaCompanion = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lunaMessage, setLunaMessage] = useState("");
  const { currentLanguage, t } = useLanguage();

  const wellnessMessages = {
    EN: "Hello! I'm Luna, your AI wellness companion. I can guide you through healing practices in any language you choose. Ready to begin?",
    ES: "¡Hola! Soy Luna, tu compañera de bienestar con IA. Puedo guiarte a través de prácticas de sanación en cualquier idioma que elijas. ¿Lista para comenzar?",
    FR: "Bonjour! Je suis Luna, votre compagnon de bien-être IA. Je peux vous guider à travers des pratiques de guérison dans la langue de votre choix. Prêt à commencer?",
    DE: "Hallo! Ich bin Luna, dein KI-Wellness-Begleiter. Ich kann dich durch Heilungspraktiken in jeder Sprache deiner Wahl führen. Bereit anzufangen?",
    IT: "Ciao! Sono Luna, la tua compagna di benessere IA. Posso guidarti attraverso pratiche di guarigione in qualsiasi lingua tu scelga. Pronta per iniziare?",
    PT: "Olá! Eu sou Luna, sua companheira de bem-estar com IA. Posso guiá-la através de práticas de cura em qualquer idioma que você escolher. Pronta para começar?",
    RU: "Привет! Я Луна, ваш ИИ-компаньон по велнесу. Я могу провести вас через практики исцеления на любом языке по вашему выбору. Готовы начать?",
    JA: "こんにちは！私はルナ、あなたのAIウェルネスコンパニオンです。お選びいただいた言語で癒しの実践をご案内できます。始める準備はできていますか？",
    KO: "안녕하세요! 저는 루나, 당신의 AI 웰니스 동반자입니다. 원하시는 언어로 치유 실습을 안내해드릴 수 있습니다. 시작할 준비가 되셨나요?",
    ZH: "你好！我是Luna，你的AI健康伴侣。我可以用你选择的任何语言指导你进行治愈练习。准备好开始了吗？",
    AR: "مرحبا! أنا لونا، رفيقك في العافية بالذكاء الاصطناعي. يمكنني إرشادك من خلال ممارسات الشفاء بأي لغة تختارها. هل أنت مستعد للبدء؟",
    HI: "नमस्ते! मैं लूना हूं, आपकी AI कल्याण साथी। मैं आपकी पसंद की किसी भी भाषा में उपचार प्रथाओं के माध्यम से आपका मार्गदर्शन कर सकती हूं। शुरू करने के लिए तैयार हैं?",
    NL: "Hallo! Ik ben Luna, je AI-wellness begeleider. Ik kan je door genezingspraktijken leiden in elke taal die je kiest. Klaar om te beginnen?"
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // TODO: Integrate with speech recognition API
  };

  const handleSpeakToggle = () => {
    setIsSpeaking(!isSpeaking);
    // TODO: Integrate with Eleven Labs API for voice synthesis
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-6 border-2 border-purple-200">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image
            src="/mascot.svg"
            alt="Luna AI Companion"
            width={80}
            height={80}
            className="rounded-full bg-white p-2 shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            Luna - Your Multilingual AI Wellness Companion
          </h3>
          <p className="text-purple-700 text-sm mb-3">
            {wellnessMessages[currentLanguage] || wellnessMessages.EN}
          </p>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={handleVoiceToggle}
              className={`${isListening ? 'bg-red-100 border-red-300' : 'bg-white'}`}
            >
              {isListening ? <MicOff className="w-4 h-4 mr-1" /> : <Mic className="w-4 h-4 mr-1" />}
              {isListening ? 'Stop' : 'Speak'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleSpeakToggle}
              className={`${isSpeaking ? 'bg-blue-100 border-blue-300' : 'bg-white'}`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4 mr-1" /> : <Volume2 className="w-4 h-4 mr-1" />}
              Luna Voice ({currentLanguage})
            </Button>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full border">
              <span className="text-xs font-medium text-gray-700">
                🌍 AI speaks {currentLanguage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};