'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
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
        backgroundColor: '#12573d'
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
          filter: 'blur(2px)',
          opacity: 0.1
        }}
      />

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="w-full bg-white border-b border-gray-200 shadow-md relative z-50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                We value your privacy We use cookies to process your data, personalise your site experience, serve personalised ads and analyse site traffic. Because we value your privacy, we ask your permission to use such technologies. <a href="#" className="underline text-gray-900">Find more in our Cookie policy</a>.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCookieConsent(true)}
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleCookieConsent(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-300 transition-colors whitespace-nowrap"
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
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 leading-[1.15]">
            <span className="text-white">Life changing results with </span>
            <span className="text-white">KetoGo </span>
            <span style={{ color: '#C4A082' }}>once and for all!</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white font-bold mb-8 sm:mb-10 mt-8">
            What is your gender?
          </p>

          {/* Gender Selection Cards - directly on dark green background */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center max-w-md mx-auto mb-10 sm:mb-12">
            <button
              onClick={() => handleStart('female')}
              className="group relative w-[170px] sm:w-[180px] bg-white rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-200 overflow-hidden"
            >
              <div className="w-full p-3.5 flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-2.5 rounded-md overflow-hidden" style={{ backgroundColor: '#E8DDD0' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=533&fit=crop&crop=faces,top" 
                    alt="Female" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-sm font-bold text-black">Female</span>
              </div>
            </button>

            <button
              onClick={() => handleStart('male')}
              className="group relative w-[170px] sm:w-[180px] bg-white rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-200 overflow-hidden"
            >
              <div className="w-full p-3.5 flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-2.5 rounded-md overflow-hidden" style={{ backgroundColor: '#6B9B8E' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=faces,top" 
                    alt="Male" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-sm font-bold text-black">Male</span>
              </div>
            </button>
          </div>

          <p className="text-white text-xs sm:text-sm font-normal">
            The service is provided by certified nutritionists and fitness trainers
          </p>
        </div>
      </main>

      {/* Mid-page Disclaimer Section */}
      <div className="relative z-10 px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5 pb-5 ">
           
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

