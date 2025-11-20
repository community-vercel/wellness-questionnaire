'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 10, 20)); // November 20, 2025

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Get user data
  const currentWeight = answers[5]?.value || '89';
  const targetWeight = answers[6]?.value || '80';
  const weightToLose = Math.abs(parseFloat(currentWeight) - parseFloat(targetWeight));

  // Format dates for navigation
  const getDateRange = () => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date(selectedDate);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDateShort = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${days[date.getDay()].substring(0, 3)} ${date.getDate()}-${months[date.getMonth()]}`;
  };

  const dates = getDateRange();
  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      {/* Top Gradient Header with Icons */}
      <div 
        className="w-full h-12 flex items-center justify-around px-4"
        style={{
          background: 'linear-gradient(to right, #2F6657 0%, #4A9B8E 25%, #6BB89E 50%, #8BC9AE 75%, #A5D4BE 100%)'
        }}
      >
        <Link href="/dashboard" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ opacity: 1 }}>
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </Link>
        <Link href="/dashboard/premium" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </Link>
        <Link href="/dashboard/chat" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
        <Link href="/dashboard/shopping" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </Link>
        <Link href="/dashboard/profile" className="flex items-center justify-center w-8 h-8">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
      </div>

      {/* Date Navigation */}
      <div className="w-full px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() - 1);
              setSelectedDate(newDate);
            }}
            className="p-2"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className="flex flex-col items-center"
              >
                <div
                  className={`px-3 py-1.5 rounded text-xs font-semibold mb-1 ${
                    isSelected(date) ? 'text-white' : 'text-gray-700'
                  }`}
                  style={isSelected(date) ? { backgroundColor: '#2F6657' } : { backgroundColor: '#F5F5F5' }}
                >
                  {formatDateShort(date)}
                </div>
                {/* Progress indicators - small green squares */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded"
                      style={{ backgroundColor: '#2F6657' }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
          <button 
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() + 1);
              setSelectedDate(newDate);
            }}
            className="p-2"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Weight Info */}
      <div className="w-full px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-900">{weightToLose}KG</span>
            <span className="text-xs text-gray-600">TO LOSE</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-gray-900">{targetWeight}KG</span>
            <span className="text-xs text-gray-600">GOAL</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-base font-bold text-gray-900">{currentWeight}KG</span>
            <span className="text-xs text-gray-600">WEIGHT</span>
          </div>
        </div>
      </div>

      {/* Main Content - Daily Plan Cards */}
      <main className="flex-1 px-4 py-6 pb-20">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Breakfast Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold"
                style={{ backgroundColor: '#2F6657', fontSize: '14px' }}
              >
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Breakfast (15min)</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>Egg Salad with Veggies</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Muscles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Heart</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.5c-2.5 0-4.5 2-4.5 4.5 0 3 4.5 7.5 4.5 7.5s4.5-4.5 4.5-7.5c0-2.5-2-4.5-4.5-4.5z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Blood composition</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 6c0 2.21-1.79 4-4 4-1.18 0-2.25-.51-3-1.32-.75.81-1.82 1.32-3 1.32-2.21 0-4-1.79-4-4s1.79-4 4-4c1.18 0 2.25.51 3 1.32.75-.81 1.82-1.32 3-1.32 2.21 0 4 1.79 4 4zm-4 6c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.18 0 2.25-.51 3-1.32.75.81 1.82 1.32 3 1.32 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.18 0-2.25.51-3 1.32-.75-.81-1.82-1.32-3-1.32z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Longer life</span>
                  </div>
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
                    alt="Egg Salad with Veggies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Workout Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#2F6657' }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="2" fill="currentColor"/>
                  <path d="M12 10v4M8 14l2-2M16 14l-2-2M10 18h4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M6 12l2 2M18 12l-2 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Workout (30min)</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>Workout of the day</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13l3 3 7-7v-2H7v6zm-4 6h2v-7H3v7z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#2563EB', fontWeight: '500' }}>Energy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Metabolism</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Muscles</span>
                  </div>
                </div>
                <div className="w-full rounded-lg overflow-hidden mb-2" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                    alt="Workout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Don't have an effective workout in mind?{' '}
                  <span className="underline" style={{ color: '#2563EB' }}>Try your personal</span>{' '}
                  <span className="underline" style={{ color: '#2563EB' }}>Home workout plan!</span>
                </p>
              </div>
            </div>
          </div>

          {/* Lunch Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold"
                style={{ backgroundColor: '#2F6657', fontSize: '14px' }}
              >
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Lunch (10min)</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>Cauliflower Salad with Bacon</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#9333EA' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#9333EA', fontWeight: '500' }}>Digestion</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#2F6657' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.88 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.29-.57-2.83-.79-4.28-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.77 0 1.55.06 2.3.2.62.11 1.2-.35 1.2-.98v11.51z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#2F6657', fontWeight: '500' }}>Wellness</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#F97316' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#F97316', fontWeight: '500' }}>Antioxidants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#EC4899' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#EC4899', fontWeight: '500' }}>Skin</span>
                  </div>
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
                    alt="Cauliflower Salad with Bacon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dinner Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-white font-bold"
                style={{ backgroundColor: '#2F6657', fontSize: '14px' }}
              >
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Dinner (20min)</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>Healthy Beef Burger</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Metabolism</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#EC4899' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#EC4899', fontWeight: '500' }}>Skin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#2F6657' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#2F6657', fontWeight: '500' }}>Satiety</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#2F6657' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.88 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.29-.57-2.83-.79-4.28-.79zM21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.77 0 1.55.06 2.3.2.62.11 1.2-.35 1.2-.98v11.51z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#2F6657', fontWeight: '500' }}>Wellness</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#DC2626' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 6c0 2.21-1.79 4-4 4-1.18 0-2.25-.51-3-1.32-.75.81-1.82 1.32-3 1.32-2.21 0-4-1.79-4-4s1.79-4 4-4c1.18 0 2.25.51 3 1.32.75-.81 1.82-1.32 3-1.32 2.21 0 4 1.79 4 4zm-4 6c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.18 0 2.25-.51 3-1.32.75.81 1.82 1.32 3 1.32 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.18 0-2.25.51-3 1.32-.75-.81-1.82-1.32-3-1.32z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#DC2626', fontWeight: '500' }}>Longer life</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13l3 3 7-7v-2H7v6zm-4 6h2v-7H3v7z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#2563EB', fontWeight: '500' }}>Energy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" style={{ color: '#9333EA' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#9333EA', fontWeight: '500' }}>Brain</span>
                  </div>
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
                    alt="Healthy Beef Burger"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Snack Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#2F6657' }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="8" cy="12" r="4" fill="currentColor"/>
                  <circle cx="16" cy="12" r="4" fill="currentColor"/>
                  <path d="M12 2L10 8h4l-2-6z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Snack (5min)</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>Nutritious chia seed pudding</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Antioxidants', 'Skin', 'Immunity', 'Bones', 'Blood composition', 'Heart'].map((benefit, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ 
                        backgroundColor: 'transparent',
                        color: '#8B4513',
                        fontWeight: '500'
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop"
                    alt="Chia seed pudding"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trick Card */}
          <div 
            className="bg-white rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}
          >
            <div className="flex items-start gap-3 p-4">
              <div 
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#2F6657' }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>Trick</h3>
                <p className="font-bold text-gray-900 mb-2.5" style={{ fontSize: '16px' }}>How to keep your skin younger as long as possible</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {['Skin', 'Heart', 'Longer life'].map((benefit, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ 
                        backgroundColor: 'transparent',
                        color: '#8B4513',
                        fontWeight: '500'
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop"
                    alt="Skin care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
