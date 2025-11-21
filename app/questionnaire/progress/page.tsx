'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';

export default function ProgressPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [curvePath, setCurvePath] = useState('M 30 50 Q 133.33 100, 236.66 150 Q 303.33 175, 368 200');
  const startNodeRef = useRef<HTMLDivElement>(null);
  const endNodeRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    // Calculate exact node positions for the curve
    if (startNodeRef.current && endNodeRef.current && graphRef.current) {
      const graphRect = graphRef.current.getBoundingClientRect();
      const startRect = startNodeRef.current.getBoundingClientRect();
      const endRect = endNodeRef.current.getBoundingClientRect();
      
      // Get SVG viewBox dimensions (400x250)
      const svgWidth = 400;
      const svgHeight = 250;
      const padding = 24; // 1.5rem = 24px
      
      // Calculate relative positions
      const startX = ((startRect.left - graphRect.left - padding) / (graphRect.width - padding * 2)) * svgWidth;
      const startY = ((startRect.top - graphRect.top - 16) / (graphRect.height - 32)) * svgHeight; // 1rem = 16px top padding
      const endX = ((endRect.left - graphRect.left - padding) / (graphRect.width - padding * 2)) * svgWidth;
      const endY = ((endRect.top - graphRect.top - 16) / (graphRect.height - 32)) * svgHeight;
      
      // Create smooth curve with control points
      const midX1 = startX + (endX - startX) * 0.33;
      const midY1 = startY + (endY - startY) * 0.4;
      const midX2 = startX + (endX - startX) * 0.66;
      const midY2 = startY + (endY - startY) * 0.7;
      
      setCurvePath(`M ${startX} ${startY} Q ${midX1} ${midY1}, ${midX2} ${midY2} Q ${midX2 + (endX - midX2) * 0.5} ${midY2 + (endY - midY2) * 0.5}, ${endX} ${endY}`);
    }
  }, [answers]);

  // Get name from question 13 answer
  const name = answers[13]?.value || 'You';

  // Calculate target date and weight
  const currentWeight = answers[10]?.value || '222';
  const goalWeight = answers[11]?.value || '104';
  const currentWeightKg = answers[10]?.unit === 'lb' ? parseFloat(currentWeight) * 0.453592 : parseFloat(currentWeight);
  const goalWeightKg = answers[11]?.unit === 'lb' ? parseFloat(goalWeight) * 0.453592 : parseFloat(goalWeight);
  
  // Calculate target date (approximately 6 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);
  const formattedDateShort = targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }); // "March 30"
  const formattedDateFull = targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); // "Mar 30, 2026"

  const handleContinue = () => {
    router.push('/questionnaire/15');
  };

  const totalSteps = 36;
  const currentStep = 14;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      {/* Logo only - no nav, no bg */}
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
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Back button and progress */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => router.push('/questionnaire/13')}
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#2F6657' }}
                aria-label="Go back"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <div className="text-sm font-semibold" style={{ color: '#a07e67', fontSize: '0.875rem', fontWeight: 600 }}>
                {currentStep}/{totalSteps}
              </div>
            </div>
            <ProgressBar current={currentStep} total={totalSteps} />
          </div>

          {/* Main Content */}
          <div className="text-center mb-6 max-w-xs mx-auto">
            <p className="text-sm font-semibold mb-2" style={{ color: '#a07e67', fontSize: '0.875rem' }}>
              Based on your answers so far
            </p>
            <h1 className="text-xl md:text-2xl font-extrabold mb-6 leading-tight" style={{ color: '#2F6657', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
              {name || 'You'}, you'll reach <strong>{goalWeight}kg</strong> by {formattedDateShort}
            </h1>
          </div>

          {/* Weight Loss Graph */}
          <div className="rounded-2xl p-4 mb-6 max-w-xl mx-auto" style={{ backgroundColor: '#fff3e5' }} ref={graphRef}>
            <div className="relative h-64" style={{ padding: '1rem 1.5rem 2rem 1.5rem' }}>
              {/* Grid lines - 4 equal segments (2 grid lines at 33.33% and 66.66%) */}
              <div className="absolute inset-0" style={{ padding: '1rem 1.5rem 2rem 1.5rem' }}>
                <div className="w-full h-full relative">
                  <div className="absolute w-px h-full" style={{ backgroundColor: '#2F6657', left: '33.33%', opacity: 0.3 }}></div>
                  <div className="absolute w-px h-full" style={{ backgroundColor: '#2F6657', left: '66.66%', opacity: 0.3 }}></div>
                </div>
              </div>
              
              {/* Starting point - Today (node at top) */}
              <div className="absolute" style={{ left: '1.5rem', top: '1rem' }}>
                <div className="flex flex-col items-center">
                  {/* Light green rounded rectangular label */}
                  <div className="px-3 py-1.5 rounded mb-2" style={{ backgroundColor: '#A0E0D0' }}>
                    <p className="text-xs font-bold whitespace-nowrap" style={{ fontSize: '0.75rem', color: '#2F6657' }}>{currentWeight}kg</p>
                  </div>
                  {/* Dark green circular node with white dot in center - THIS IS THE START POINT */}
                  <div ref={startNodeRef} className="relative w-4 h-4 rounded-full mb-2 z-10" style={{ backgroundColor: '#2F6657' }}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  {/* Vertical line extending downwards */}
                  <div className="w-0.5 h-32" style={{ backgroundColor: '#2F6657' }}></div>
                  <p className="text-xs font-semibold text-gray-600 mt-2 whitespace-nowrap" style={{ fontSize: '0.75rem' }}>Today</p>
                </div>
              </div>
              
              {/* Goal point (node at bottom) */}
              <div className="absolute" style={{ right: '1.5rem', bottom: '2rem' }}>
                <div className="flex flex-col items-center">
                  {/* Vertical line extending upwards */}
                  <div className="w-0.5 h-32 mb-2" style={{ backgroundColor: '#2F6657' }}></div>
                  {/* Dark green circular node with white dot in center - THIS IS THE END POINT */}
                  <div ref={endNodeRef} className="relative w-4 h-4 rounded-full mb-2 z-10" style={{ backgroundColor: '#2F6657' }}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  {/* Dark green rounded rectangular label with white text */}
                  <div className="px-3 py-1.5 rounded mb-2 text-center" style={{ backgroundColor: '#2F6657' }}>
                    <p className="text-xs font-bold leading-tight text-white" style={{ fontSize: '0.75rem' }}>Goal {goalWeight}kg</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-600 mt-2 whitespace-nowrap" style={{ fontSize: '0.75rem' }}>{formattedDateFull}</p>
                </div>
              </div>
              
              {/* Smooth curve - dynamically calculated to start at Today node and end at Goal node */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="none" style={{ padding: '1rem 1.5rem 2rem 1.5rem' }}>
                <path
                  d={curvePath}
                  fill="none"
                  stroke="#2F6657"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mb-6 max-w-lg mx-auto">
            <h2 className="text-lg font-extrabold text-center mb-4" style={{ color: '#2F6657', fontSize: '1rem' }}>
              What people say
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-sm" style={{ backgroundColor: '#ffefdb' }}>
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1F2937' }}>Jenna M. (42)</p>
                <div className="flex gap-0.5">
                  <span className="text-sm" style={{ color: '#FFD700' }}>★</span>
                  <span className="text-sm" style={{ color: '#FFD700' }}>★</span>
                  <span className="text-sm" style={{ color: '#FFD700' }}>★</span>
                  <span className="text-sm" style={{ color: '#FFD700' }}>★</span>
                  <span className="text-sm" style={{ color: '#FFD700' }}>★</span>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5', color: '#1F2937' }}>
                I've tried multiple diets and weight loss app but nothing really stuck as it was either confusing or too hard. With KetoGo app I've lost 8 kg in my first month.
              </p>
            </div>
            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <button className="transition-colors" style={{ color: '#2F6657' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#E8DDD0' }}></div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2F6657' }}></div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#E8DDD0' }}></div>
              </div>
              <button className="transition-colors" style={{ color: '#2F6657' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button
              onClick={handleContinue}
              className="w-full max-w-md font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:opacity-90 text-base"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF' }}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

