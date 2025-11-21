'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    const savedGender = localStorage.getItem('gender');
    setGender(savedGender);
  }, []);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      localStorage.setItem('email', email);
      router.push('/pricing');
    }
  };

  // Get target weight from answers (question 11 is goal weight)
  const answers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('answers') || '{}') : {};
  const targetWeight = answers[11]?.value || '32';

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      {/* Header */}
      <div className="w-full px-4 sm:px-6 py-3 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🥑</span>
            <span className="text-base sm:text-lg font-bold" style={{ color: '#12573d' }}>
              KetoGO<span className="font-normal">.app</span>
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-4 py-8">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">
          {/* Email icon with checkmark - light brown envelope with dark green checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#D4A574' }}>
                <svg className="w-14 h-10" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  {/* Open flap */}
                  <path d="M2 4l10 6 10-6" stroke="#8B4513" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F6657' }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-extrabold text-center mb-8 max-w-lg mx-auto leading-tight" style={{ color: '#2F6657', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
            Receive your weight loss program in your email to reach your {targetWeight}kg goal
          </h1>
          
          {/* Email input */}
          <div className="w-full mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="w-full px-4 py-3 text-base border rounded-lg focus:outline-none bg-white text-gray-900 placeholder:text-gray-400"
              style={{ 
                borderColor: '#E0E0E0',
                fontSize: '0.875rem'
              }}
              placeholder="Your email"
              autoFocus
            />
            <div className="flex items-start gap-2 mt-3">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#F97316' }}>
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-700 leading-relaxed" style={{ fontSize: '0.75rem' }}>
                We take your privacy very seriously! All your data is safe with us.
              </p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!email || !email.includes('@')}
            className="w-full font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
            style={{ 
              backgroundColor: '#6B7280', 
              color: '#FFFFFF',
              fontSize: '0.875rem',
              fontWeight: 700
            }}
          >
            Continue
          </button>

          <p className="text-xs text-gray-600 text-center max-w-lg mx-auto leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            By clicking "Continue" below you acknowledge that you have read, understood and accepted the{' '}
            <a href="#" className="underline font-medium" style={{ color: '#2F6657' }}>Terms of Use</a> and{' '}
            <a href="#" className="underline font-medium" style={{ color: '#2F6657' }}>Privacy Policy</a> and you agree to receive future emails from us about our weight loss program.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
