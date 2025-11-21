'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';

export default function TestimonialPage() {
  const router = useRouter();
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    const savedGender = localStorage.getItem('gender');
    setGender(savedGender);
  }, []);

  const handleContinue = () => {
    router.push('/questionnaire/20');
  };

  const totalSteps = 36;
  const currentStep = 19;

  // Gender-specific content
  const isFemale = gender === 'female';
  const userName = isFemale ? 'Linda B. (38)' : 'Victor K. (38)';
  const beforeImage = isFemale 
    ? 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/uZZKw4Nvg1-480.webp'
    : 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/HBarpJx5-l-480.webp';
  const afterImage = isFemale
    ? 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/DP9sOiyR05-480.webp'
    : 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/WzIiKimr7k-480.webp';

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      {/* Header */}
      <div className="w-full px-4 sm:px-6 py-3 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xl">🥑</span>
              <span className="text-base sm:text-lg font-bold" style={{ color: '#12573d' }}>
                KetoGO<span className="font-normal">.app</span>
              </span>
            </div>
            <div className="text-sm font-semibold" style={{ color: '#a07e67', fontSize: '0.875rem', fontWeight: 600 }}>
              {currentStep}/{totalSteps}
            </div>
          </div>
          {/* Back arrow and progress bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => router.push('/questionnaire/18')}
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#2F6657' }}
                aria-label="Go back"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            </div>
            <ProgressBar current={currentStep} total={totalSteps} />
          </div>
        </div>
      </div>
      
      <main className="flex-1 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-lg md:text-xl font-extrabold text-center mb-6 leading-tight px-2" style={{ color: '#2F6657', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 800 }}>
            85% of KetoGo app users that stayed on their plan have reduced their clothing size at least by 1 size
          </h1>

          {/* Before/After Image Card - Narrower */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4 mx-auto" style={{ borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '400px' }}>
            <div className="grid grid-cols-2 relative">
              <div className="relative">
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img 
                    src={beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#E5E7EB';
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👤</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img 
                    src={afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#DBEAFE';
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">💪</div>';
                      }
                    }}
                  />
                </div>
              </div>
              {/* Badge overlay on bottom center of combined image - oval shaped, dark gray */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 rounded-full px-4 py-1.5" style={{ backgroundColor: '#4B5563' }}>
                <p className="text-xs font-bold text-white whitespace-nowrap" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Lost 24 kg</p>
              </div>
            </div>
          </div>

          {/* User Info - No Background */}
          <div className="mb-6">
            <p className="font-bold mb-2 text-center" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2F6657' }}>{userName}</p>
            <div className="flex gap-0.5 items-center justify-center mb-3">
              <span style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
              <span style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
              <span style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
              <span style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
              <span style={{ color: '#FFD700', fontSize: '1rem' }}>★</span>
            </div>
            <p className="text-xs text-gray-900 leading-relaxed text-center px-2" style={{ fontSize: '0.75rem', lineHeight: '1.5', color: '#374151' }}>
              "I love this app! It is so simple to follow my plan and I've learned so much about healthy nutrition that now it is easy to eat healthy and not over-eat. After losing 24 kg I had to buy a whole new wardrobe because all of my old clothes were way too big! I went from XL clothing to M clothing in 3 months!"
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button
              onClick={handleContinue}
              className="w-full max-w-md font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: '#2F6657', 
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

