'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



// Main Component
export default function Home() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [gender, setGender] = useState('');
const router=useRouter()
  useEffect(() => {
    const consent = sessionStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    sessionStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    setShowCookieConsent(false);
  };

    const handleStart = (gender: string) => {
    localStorage.setItem('gender', gender);
    router.push('/intro/1');
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundColor: '#0d5238'
      }}
    >
      {/* Background image overlay with blur */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/GAwet1RcCZ-2667.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          opacity: 0.15
        }}
      />

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-800 leading-relaxed flex-1">
                We value your privacy We use cookies to process your data, personalise your site experience, serve personalised ads and analyse site traffic. Because we value your privacy, we ask your permission to use such technologies. <a href="#" className="underline text-gray-900 font-medium">Find more in our Cookie policy</a> . 
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => handleCookieConsent(true)}
                  className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleCookieConsent(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-900 text-sm font-semibold rounded hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Header showProfileIcon isDark={false} />

      
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 relative z-10">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 leading-tight px-2">
            <span className="text-white">Life changing results with </span>
            <span className="text-white">KetoGo </span>
            <span style={{ color: '#d4a574' }}>once and for all!</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-6 sm:mb-10">
            What is your gender?
          </p>

          {/* Gender Selection Cards */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center items-stretch max-w-xl mx-auto mb-8 sm:mb-12 px-4">
            <button
              onClick={() => handleStart('female')}
              className="group relative flex-1 max-w-[180px] sm:max-w-[240px] bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="w-full p-3 sm:p-5 flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-3 sm:mb-4 rounded-xl overflow-hidden" style={{ backgroundColor: '#e8ddd0' }}>
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/OQ1Px6a5aW-734.webp" 
                    alt="Female" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-900">Female</span>
              </div>
            </button>

            <button
              onClick={() => handleStart('male')}
              className="group relative flex-1 max-w-[180px] sm:max-w-[240px] bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="w-full p-3 sm:p-5 flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-3 sm:mb-4 rounded-xl overflow-hidden" style={{ backgroundColor: '#6b9b8e' }}>
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/vJM_MMkFXV-734.webp" 
                    alt="Male" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-900">Male</span>
              </div>
            </button>
          </div>

          <p className="text-white text-sm sm:text-base font-normal opacity-90 px-4 mb-4">
            The service is provided by certified nutritionists and fitness trainers
          </p>
        </div>
      </main>

      <div className="mb-2 pb-5"></div>
      <Footer />
    </div>
  );
}