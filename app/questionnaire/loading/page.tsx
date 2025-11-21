'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function LoadingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            router.push('/email');
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [router]);

  const circumference = 2 * Math.PI * 90; // radius = 90
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#2F6657' }}>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
            Preparing your plan. Please wait to see your results!
          </h1>
          
          {/* Circular Progress Indicator */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#E8DDD0"
                strokeWidth="12"
              />
              {/* Progress circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#F0A868"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
              />
            </svg>
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-white" style={{ fontSize: '2.25rem' }}>
                {progress}%
              </span>
            </div>
          </div>

          {/* Information Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              You're in top 20% of candidates most fit for rapid weight loss
            </h2>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#F0A868' }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                  Based on your answers, you'll be able to lose 5kg within your first week with our weight loss plan
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#F0A868' }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                  89% of users with very similar profile as yours have reached their weight goals within the projected timelines
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#F0A868' }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                  Your weight and health profile is great for Keto diet
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

