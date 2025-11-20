'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function EmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      localStorage.setItem('email', email);
      router.push('/pricing');
    }
  };

  // Get target weight from answers (default to 51kg if not available)
  const answers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('answers') || '{}') : {};
  const targetWeight = answers[6]?.value || '51';

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      <main className="flex-1 flex flex-col px-4 py-12">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">
          {/* Email icon with checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-28 h-20 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E8DDD0' }}>
                <svg className="w-16 h-12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F6657' }}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-8 max-w-lg mx-auto leading-tight" style={{ color: '#2F6657' }}>
            Receive your weight loss program in your email to reach your {targetWeight}kg goal
          </h1>
          
          {/* Email input */}
          <div className="w-full mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="w-full px-5 py-4 text-base border-2 rounded-xl focus:outline-none bg-white text-gray-900 placeholder:text-gray-400"
              style={{ 
                borderColor: '#E0E0E0',
                borderRadius: '12px'
              }}
              placeholder="Your email"
              autoFocus
            />
            <div className="flex items-start gap-2 mt-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#F0A868' }}>
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-700 leading-relaxed">
                We take your privacy very seriously! All your data is safe with us.
              </p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!email || !email.includes('@')}
            className="w-full font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg text-base disabled:opacity-50 disabled:cursor-not-allowed mb-8"
            style={{ 
              backgroundColor: '#2F6657', 
              color: '#FFFFFF'
            }}
          >
            Continue
          </button>

          <p className="text-xs text-gray-700 text-center max-w-lg mx-auto leading-relaxed">
            By clicking "Continue" below you acknowledge that you have read, understood and accepted the{' '}
            <a href="#" className="underline font-medium" style={{ color: '#2F6657' }}>Terms of Use</a> and{' '}
            <a href="#" className="underline font-medium" style={{ color: '#2F6657' }}>Privacy Policy</a>, and you agree to receive future emails from us about our weight loss program.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
