'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChatPage() {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white">
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

      {/* Chat Window */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 120px)' }}>
          {/* Chat Header */}
          <div className="px-4 py-3" style={{ backgroundColor: '#2F6657' }}>
            <h2 className="text-white font-bold text-base">My Online Nutrition Specialist</h2>
            <p className="text-white text-xs mt-1 opacity-90">This is your first time chatting</p>
          </div>

          {/* Chat Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
            {/* Profile Picture */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                alt="Elina"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Specialist Info */}
            <h3 className="text-gray-900 font-bold text-lg mb-1">Message Elina</h3>
            <p className="text-gray-600 text-sm">Your dedicated Nutrition Specialist</p>
          </div>

          {/* Message Input Area */}
          <div className="border-t border-gray-200 p-4">
            {/* Scrollable Feature Bar */}
            <div className="flex items-center justify-between mb-2 px-2">
              <button className="p-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
              <button className="p-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Input Field */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Start typing..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#2F6657] text-sm"
              />
              <button
                className="p-2 rounded-lg flex-shrink-0"
                style={{ backgroundColor: '#2F6657' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

