'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PremiumPage() {
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const currentWeight = answers[5]?.value || '89';
  const targetWeight = answers[6]?.value || '80';
  const weightToLose = Math.abs(parseFloat(currentWeight) - parseFloat(targetWeight));

  const features = [
    { icon: '🏃', title: 'Secret shortcut to enter ketosis' },
    { icon: '👩', title: '7 most common keto weight loss mistakes' },
    { icon: '👨', title: 'Maintain ketosis (and keep burning fat)' },
    { icon: '🥑', title: 'Avoid Keto danger' },
    { icon: '🧀', title: 'Nutrients and calories' },
    { icon: '📱', title: 'Net carbs certified calculator' },
    { icon: '👵', title: 'Most common keto side effects' },
    { icon: '👩', title: 'What are the best times for meals?' },
    { icon: '🥤', title: 'Detox and real power drinks' },
    { icon: '✍️', title: 'A 3-step method for losing 5kg' },
    { icon: '📖', title: 'Ketogenic treats & snacks' },
    { icon: '🍓', title: 'Cheat day or a day for snacks!' },
    { icon: '👨‍⚕️', title: 'Want to start losing weight later?' },
    { icon: '⏰', title: 'Skipped breakfast?' },
    { icon: '💪', title: '7-min fitness exercises' },
    { icon: '👨‍👩‍👧', title: 'Want to lose weight with your significant other or family?' },
    { icon: '😴', title: 'Enjoy sleeping in?' },
    { icon: '🎉', title: 'Going on a holiday or a party?' },
    { icon: '🍷', title: 'Alcohol and keto' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Gradient Header with Icons */}
      <div 
        className="w-full h-12 flex items-center justify-around px-4"
        style={{
          background: 'linear-gradient(to right, #2F6657 0%, #4A9B8E 25%, #6BB89E 50%, #8BC9AE 75%, #A5D4BE 100%)'
        }}
      >
        <Link href="/dashboard" className="flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        <Link href="/dashboard/premium" className="flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </Link>
        <Link href="/dashboard/chat" className="flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
        <Link href="/dashboard/shopping" className="flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </Link>
        <Link href="/dashboard/profile" className="flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
      </div>

      <main className="flex-1 px-4 py-6 pb-20 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Introduction Section */}
          <div className="bg-white rounded-lg p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                  alt="Carla Ramirez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900 mb-1">Carla ramirez | Keto coach | 4 years experience</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
              <div className="absolute top-0 left-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-100 transform -translate-y-full"></div>
              <p className="text-sm text-gray-900">
                Hugo, with the special Premium Keto Weight Loss we'll lose your {weightToLose}kg easier and faster.
              </p>
            </div>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm mb-2" style={{ backgroundColor: '#2F6657' }}>
              UPGRADE TO THE PREMIUM KETO WEIGHT LOSS
            </button>
            <p className="text-xs text-center text-gray-600">Only 24h left for this offer!</p>
          </div>

          {/* Testimonials Headline */}
          <h2 className="text-xl font-bold text-gray-900 text-center">
            What do other users have to say about Premium Keto Weight Loss?
          </h2>

          {/* Arnie Testimonial */}
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                  alt="Arnie before"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop"
                  alt="Arnie after"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Arnie (42) lost 10kg</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              After starting the Premium Keto Weight Loss plan, Arnie saw incredible results. His blood pressure normalized, headaches disappeared, and he feels 10 years younger. The plan was easy to follow and the results came quickly.
            </p>
          </div>

          {/* Gunther Testimonial */}
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop"
                  alt="Gunther before"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop"
                  alt="Gunther after"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Gunther (39) lost 20kg</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Gunther's weight loss journey was remarkable. He lost weight daily and had to buy new clothes as his old ones no longer fit. The Premium plan made it easy and sustainable.
            </p>
          </div>

          {/* Mid-Page CTA */}
          <div className="bg-white rounded-lg p-5 border border-gray-200 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Want to lose your excess {weightToLose}kg quickly and easily and finally be happy with your appearance? Offer valid today...
            </h2>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm mb-2" style={{ backgroundColor: '#2F6657' }}>
              UPGRADE TO THE PREMIUM KETO WEIGHT LOSS
            </button>
            <p className="text-xs text-gray-600">Don't miss your chance to lose weight super fast (24h discount).</p>
          </div>

          {/* What's Included Section */}
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">What's included in Premium Keto Weight Loss:</h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <p className="text-sm text-gray-900 flex-1">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-lg p-5 border border-gray-200 text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Hurry up! This is your chance to lose weight super easily and quickly.
            </h2>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm mb-2" style={{ backgroundColor: '#2F6657' }}>
              UPGRADE TO THE PREMIUM KETO WEIGHT LOSS
            </button>
            <p className="text-xs text-gray-600 mb-6">Only 24h left for this offer!</p>

            {/* Emil Testimonial */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop"
                  alt="Emil before"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop"
                  alt="Emil after"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Emil (24) lost 18kg</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Emil's transformation was incredible. He gained more energy, became more active, and improved his overall well-being. The Premium plan changed his life.
            </p>
          </div>

          {/* Decline Option */}
          <div className="text-center">
            <button className="text-xs text-gray-500 underline">
              I DON'T WANT TO LOSE {weightToLose}KG WITH THE PREMIUM KETO WEIGHT LOSS PLAN.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

