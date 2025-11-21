'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ResultsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    // Load saved answers from localStorage
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Calculate what percentage goal weight is of current weight
  const calculatePercentage = () => {
    const currentWeightAnswer = answers[10]; // Question 10 is current weight
    const goalWeightAnswer = answers[11]; // Question 11 is goal weight
    
    if (!currentWeightAnswer || !goalWeightAnswer) return 97; // Default
    
    const currentWeight = parseFloat(currentWeightAnswer.value);
    const goalWeight = parseFloat(goalWeightAnswer.value);
    
    const currentWeightKg = currentWeightAnswer.unit === 'lb' ? currentWeight * 0.453592 : currentWeight;
    const goalWeightKg = goalWeightAnswer.unit === 'lb' ? goalWeight * 0.453592 : goalWeight;
    
    // Calculate what percentage the goal weight is of current weight
    const percentage = (goalWeightKg / currentWeightKg) * 100;
    
    return Math.round(percentage);
  };

  const percentage = calculatePercentage();

  const handleContinue = () => {
    // Continue to question 13 (name input)
    router.push('/questionnaire/13');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#2F6657' }}>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Target Icon */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Outer light green/teal ring */}
                <circle cx="100" cy="100" r="88" fill="none" stroke="#A0E0D0" strokeWidth="14"/>
                {/* White ring */}
                <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeWidth="12"/>
                {/* Inner light green/teal bullseye */}
                <circle cx="100" cy="100" r="48" fill="#A0E0D0"/>
                {/* Arrow from top-right striking bullseye - light green/teal */}
                <g transform="translate(100, 100)">
                  {/* Arrow coming from top-right, striking center */}
                  <path
                    d="M 140 20 L 100 100 L 90 90 L 130 30 Z"
                    fill="#A0E0D0"
                  />
                  {/* Arrow head at center */}
                  <path
                    d="M 100 100 L 85 85 L 90 90 Z"
                    fill="#A0E0D0"
                  />
                  <path
                    d="M 100 100 L 90 90 L 85 95 Z"
                    fill="#A0E0D0"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700 }}>
            That's {percentage} % of your current weight!
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', opacity: 0.9, lineHeight: '1.6' }}>
            You've just set a realistic and reachable goal. This is an important step and we'll help you to reach your goal 100% of the way!
          </p>

          {/* Continue Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinue}
              className="px-10 py-4 font-bold rounded-2xl transition-all duration-300 border-2 border-white hover:opacity-90"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700, minWidth: '220px' }}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
