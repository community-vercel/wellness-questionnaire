import { useState } from 'react';

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
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
      <main className="flex-1 px-4 py-6 pb-20">
        <div className="w-full max-w-md mx-auto space-y-6">
          
          {/* Header Section */}
          <div className="pt-2">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Your shopping list</h1>
            <p className="text-xs text-gray-600">
              For a time period from 20-Nov-2025 to 20-Nov-2025
            </p>
          </div>

          {/* Shopping Items List */}
          <div className="bg-white rounded-lg border border-gray-200">
            {shoppingItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 px-4 py-3 ${index !== shoppingItems.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <svg className="w-5 h-5 text-[#2F6657] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span className="text-sm text-gray-900 flex-1 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Suggested Products Section */}
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              You may consider adding these products as well
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {suggestedProducts.join(', ')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button className="w-full py-3 bg-[#17A697] hover:bg-[#148f88] transition text-white font-bold text-sm rounded">
              CREATE NEW
            </button>
            <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 font-bold text-sm rounded hover:bg-gray-50 transition">
              BACK
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}