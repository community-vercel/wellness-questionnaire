'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Get user data
  const gender = typeof window !== 'undefined' ? localStorage.getItem('gender') : 'male';
  const email = typeof window !== 'undefined' ? localStorage.getItem('email') : 'hugodesouzax@gmail.com';
  const age = answers[1]?.value || '56';
  const initialWeight = answers[5]?.value || '80';
  const currentWeight = answers[5]?.value || '89';
  const height = answers[4]?.value || '183';
  const targetWeight = answers[6]?.value || '80';
  const phone = '+44 7663992555';
  const country = 'Pakistan';
  const name = 'Hugo Suza';

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

      <main className="flex-1 px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Your weight loss profile */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your weight loss profile:</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">NAME:</span>
                <span className="text-gray-900 font-bold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">AGE:</span>
                <span className="text-gray-900 font-bold">{age} years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">GENDER:</span>
                <span className="text-gray-900 font-bold capitalize">{gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">INITIAL WEIGHT:</span>
                <span className="text-gray-900 font-bold">{initialWeight}kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">CURRENT WEIGHT:</span>
                <span className="text-gray-900 font-bold">{currentWeight}kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">HEIGHT:</span>
                <span className="text-gray-900 font-bold">{height}cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">PHONE NUMBER:</span>
                <span className="text-gray-900 font-bold">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">COUNTRY:</span>
                <span className="text-gray-900 font-bold">{country}</span>
              </div>
            </div>
            <button className="w-full mt-4 py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              EDIT
            </button>
          </div>

          {/* Your Premium */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">Your Premium</h2>
              <svg className="w-5 h-5" style={{ color: '#F0A868' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Your premium weight loss is not activated! That's why you are now only at 25% of the maximum weight loss efficiency. Activate your Premium weight loss now and lose weight 4x faster!
            </p>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              LEARN MORE
            </button>
          </div>

          {/* Home workouts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">Home workouts</h2>
              <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: '#2F6657' }}>
                NEW
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Home workouts are not currently available. Without workouts it will be much slower to lose weight and very hard to keep the lost weight off.
            </p>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              LEARN MORE
            </button>
          </div>

          {/* Your Shopping list */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Your Shopping list</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Save time and money by using shopping list to plan your meals for a week ahead.
            </p>
            <Link href="/dashboard/shopping">
              <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
                GET MY SHOPPING LIST
              </button>
            </Link>
          </div>

          {/* Personal Nutritionist Chat */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Personal Nutritionist Chat</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Your Personal Nutritionist Chat is not activated. As a result you might have unanswered questions and struggle to be more efficient in your weight loss journey.
            </p>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              LEARN MORE
            </button>
          </div>

          {/* Your Genom+ */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">Your Genom+</h2>
              <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: '#2F6657' }}>
                NEW
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Genom+ is not activated. Without Genom+ your weight loss plan is not fully tailored to increase your longevity, focus, sleep and overall health. Learn more and take advantage of Genom-
            </p>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              LEARN MORE
            </button>
          </div>

          {/* Your weight loss goal */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your weight loss goal:</h2>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <span className="text-gray-600 font-semibold">GOAL WEIGHT:</span>
                </div>
                <span className="text-gray-900 font-bold">{targetWeight}kg</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">YOUR CURRENT BODY FAT PERCENTAGE:</span>
                </div>
                <span className="text-gray-900 font-bold">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">YOUR DESIRED BODY FAT PERCENTAGE:</span>
                </div>
                <span className="text-gray-900 font-bold">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">YOUR PROBLEM AREAS:</span>
                </div>
                <span className="text-gray-900 font-bold">Lower legs</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              EDIT
            </button>
          </div>

          {/* Your weight loss plan */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your weight loss plan:</h2>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">NUTRITION:</span>
                </div>
                <span className="text-gray-900 font-bold">Healthy and tasty, without special needs</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="text-gray-600 font-semibold">LIST OF EXCLUDED PRODUCTS:</span>
                </div>
                <span className="text-gray-900 font-bold">-</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-600 font-semibold">RECIPES:</span>
                </div>
                <span className="text-gray-900 font-bold">Economical, Simple, Quick to make</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-gray-600 font-semibold">DIVERSITY OF THE MENU:</span>
                </div>
                <span className="text-gray-900 font-bold">The same every week</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              EDIT
            </button>
          </div>

          {/* Nutrition plan update available */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Nutrition plan update available!</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              We've made some slight updates to your nutrition plan to ensure your daily nutrition keeps you in your ideal shape.
            </p>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              UPDATE MY PLAN
            </button>
          </div>

          {/* Weight loss account */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Weight loss account:</h2>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">EMAIL:</span>
                </div>
                <span className="text-gray-900 font-bold">{email}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-semibold">WEIGHT LOSS PLAN:</span>
                </div>
                <span className="text-gray-900 font-bold text-xs">Patent pending KetoGo app weight loss plan is active and everything is perfect</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              EDIT
            </button>
          </div>

          {/* Footer Elements */}
          <div className="space-y-4 pt-6">
            <button className="w-full py-3 rounded-lg bg-white border border-gray-300 text-gray-900 font-bold text-sm">
              LOGOUT
            </button>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <select className="bg-transparent border-none text-gray-600 font-semibold">
                <option>English</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 text-center text-xs text-gray-600">
              <a href="#" className="underline">SUPPORT</a>
              <a href="#" className="underline">TERMS OF SERVICE AND POLICIES</a>
              <a href="#" className="underline">SERVICE SUBSCRIPTION RULES</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

