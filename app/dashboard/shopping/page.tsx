'use client';

import Link from 'next/link';

export default function ShoppingPage() {
  const shoppingItems = [
    'Avocado 262g',
    'Green leaf lettuce 40g',
    'Tomatoes 120g',
    'Olive oil 5ml',
    'Eggs 50g',
    'Ground beef 102g',
    'Cauliflower 200g',
    'Spring onions 15g',
    'Cherry tomatoes 60g',
    'Red onion 30g',
    'Chia seeds 17g',
    'Cocoa powder 5g',
    'Raspberry 60g',
    'Milk 120ml',
    'Greek yoghurt 163g',
    'Mushrooms 50g',
    'Bacon 125g'
  ];

  const suggestedProducts = [
    'Black pepper',
    'Garlic',
    'Stevia',
    'Spring onions',
    'Garlic powder',
    'Lemon juice',
    'Rucola',
    'Greek yoghurt',
    'Mustard'
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

      <main className="flex-1 px-4 py-8 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your shopping list</h1>
          <p className="text-sm text-gray-600 mb-6">
            For a time period from 20-Nov-2025 to 20-Nov-2025
          </p>

          {/* Shopping List Items */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            {shoppingItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 last:border-b-0">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm text-gray-900 flex-1">{item}</span>
              </div>
            ))}
          </div>

          {/* Suggested Products */}
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3">
              You may consider adding these products as well
            </h2>
            <p className="text-sm text-gray-700">
              {suggestedProducts.join(', ')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: '#2F6657' }}>
              CREATE NEW
            </button>
            <Link href="/dashboard">
              <button className="w-full py-3 rounded-lg bg-white border border-gray-300 text-gray-900 font-bold text-sm">
                BACK
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

