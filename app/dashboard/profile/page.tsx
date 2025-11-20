import { useState } from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div 
        className="w-full h-12 flex items-center justify-around bg-gradient-to-br from-teal-800 via-teal-600 to-yellow-200"
        style={{ justifyContent: 'space-evenly' }}
      >
        <a href="/dashboard" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ opacity: 1 }}>
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </a>
        <a href="/dashboard/premium" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </a>
        <a href="/dashboard/chat" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
        <a href="/dashboard/shopping" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </a>
        <a href="/dashboard/profile" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="w-full max-w-md mx-auto px-4 py-6 space-y-6">
          
          {/* Your weight loss profile */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">Your weight loss profile</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">NAME</p>
                  <p className="text-sm text-gray-900 font-medium">Hugo Suza</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m4 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">AGE</p>
                  <p className="text-sm text-gray-900 font-medium">56 years</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">GENDER</p>
                  <p className="text-sm text-gray-900 font-medium">Male</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">INITIAL WEIGHT</p>
                  <p className="text-sm text-gray-900 font-medium">80kg</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 7h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">CURRENT WEIGHT</p>
                  <p className="text-sm text-gray-900 font-medium">89kg</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 15h10M7 11h10m2-8H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">HEIGHT</p>
                  <p className="text-sm text-gray-900 font-medium">183cm</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">PHONE NUMBER</p>
                  <p className="text-sm text-gray-900 font-medium">+44 7663992555</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">COUNTRY</p>
                  <p className="text-sm text-gray-900 font-medium">Pakistan</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              EDIT
            </button>
          </div>

          {/* Your Premium */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Premium</h2>
              <div className="w-6 h-6 rounded-full border-2 border-[#F0A868] flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#F0A868]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Your premium weight loss is not activated! Thats why you are now only at 25% of the maximum weight loss efficiency. Activate your Premium weight loss now and lose weight 4x faster!
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              LEARN MORE
            </button>
          </div>

          {/* Home workouts */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Home workouts</h2>
              <span className="px-2.5 py-1 bg-[#17A697] text-white text-xs font-bold rounded-full">NEW</span>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Home workouts are not currently available. Without workouts it will be much slower to lose weight and very hard to keep the lost weight off.
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              LEARN MORE
            </button>
          </div>

          {/* Your Shopping list */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Shopping list</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Save time and money by using shopping list to plan your meals for a week ahead.
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              GET MY SHOPPING LIST
            </button>
          </div>

          {/* Personal Nutritionist Chat */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Personal Nutritionist Chat</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Your Personal Nutritionist Chat is not activated. As a result you might have unanswered questions and struggle to be more efficient in your weight loss journey.
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              LEARN MORE
            </button>
          </div>

          {/* Your Genom+ */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Your Genom+</h2>
              <span className="px-2.5 py-1 bg-[#17A697] text-white text-xs font-bold rounded-full">NEW</span>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Genom+ is not activated. Without Genom+ your weight loss plan is not fully tailored to increase your longevity, focus, sleep and overall health. Learn more and take advantage of Genom+.
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              LEARN MORE
            </button>
          </div>

          {/* Your weight loss goal */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">Your weight loss goal</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">GOAL WEIGHT</p>
                  <p className="text-sm text-gray-900 font-medium">80kg</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <p className="text-xl font-bold text-[#2F6657]">%</p>
                <div className="flex-1 mt-0.5">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">YOUR CURRENT BODY FAT PERCENTAGE</p>
                  <p className="text-sm text-gray-900 font-medium">45%</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <p className="text-xl font-bold text-[#2F6657]">%</p>
                <div className="flex-1 mt-0.5">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">YOUR DESIRED BODY FAT PERCENTAGE</p>
                  <p className="text-sm text-gray-900 font-medium">45%</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5 5 0 0110.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">YOUR PROBLEM AREAS</p>
                  <p className="text-sm text-gray-900 font-medium">Lower legs</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              EDIT
            </button>
          </div>

          {/* Your weight loss plan */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">Your weight loss plan</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V3m10 1V3m3 6H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V10a1 1 0 00-1-1z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">NUTRITION</p>
                  <p className="text-sm text-gray-900 font-medium">Healthy and tasty, without special needs</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">LIST OF EXCLUDED PRODUCTS</p>
                  <p className="text-sm text-gray-900 font-medium">-</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">RECIPES</p>
                  <p className="text-sm text-gray-900 font-medium">Economical, Simple, Quick to make</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">DIVERSITY OF THE MENU</p>
                  <p className="text-sm text-gray-900 font-medium">The same every week</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              EDIT
            </button>
          </div>

          {/* Nutrition plan update available */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Nutrition plan update available!</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              We've made some slight updates to your nutrition plan – to ensure your daily nutrition keeps you in your ideal shape.
            </p>
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              UPDATE MY PLAN
            </button>
          </div>

          {/* Weight loss account */}
          <div className="bg-white rounded-lg p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">Weight loss account</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">EMAIL</p>
                  <p className="text-sm text-gray-900 font-medium break-all">hugodesouzax@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-[#2F6657] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">WEIGHT LOSS PLAN</p>
                  <p className="text-sm text-gray-900 font-medium">Patent pending KetoGo app weight loss plan is active and everything is perfect</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              EDIT
            </button>
          </div>

          {/* Logout Button */}
          <button className="w-full py-3 bg-white border border-gray-300 text-gray-900 font-bold text-sm rounded hover:bg-gray-50 transition">
            LOGOUT
          </button>

          {/* Language Selector */}
          <div className="flex items-center justify-center gap-2 pb-4">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <select className="bg-transparent text-gray-600 font-semibold text-sm border-none focus:outline-none cursor-pointer">
              <option>English</option>
            </select>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-3 text-center text-xs text-gray-600 pb-6 pt-2 border-t border-gray-200">
            <a href="#" className="hover:text-gray-900 transition">SUPPORT</a>
            <a href="#" className="hover:text-gray-900 transition">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-gray-900 transition">PRIVACY POLICY</a>
            <a href="#" className="hover:text-gray-900 transition">SERVICE SUBSCRIPTION RULES</a>
          </div>
        </div>
      </main>
    </div>
  );
}