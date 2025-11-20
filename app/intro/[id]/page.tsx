'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { questions } from '@/data/questions';

const introSlides = [
  {
    id: 1,
    title: 'Keto diet is a low-carb, high-fat diet for fast weight loss',
    description: 'On Keto diet you burn fat for energy instead of carbohydrates and as a result can lose 2-5 kg per week',
    showButton: true,
    content: (
      <div className="relative w-full max-w-md mx-auto py-8">
        {/* Keto Pie Chart */}
        <div className="relative w-80 h-80 mx-auto">
          <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
            {/* Main circle segments */}
            {/* FATS 70-80% - largest segment (green) */}
            <path d="M 100 100 L 100 10 A 90 90 0 1 1 15 60 Z" fill="#3D6D5C" stroke="#fff" strokeWidth="1"/>
            
            {/* PROTEIN 25-30% - medium segment (beige) */}
            <path d="M 100 100 L 15 60 A 90 90 0 0 1 80 12 Z" fill="#E8DDD0" stroke="#fff" strokeWidth="1"/>
            
            {/* CARBS 5-10% - small segment (light beige) */}
            <path d="M 100 100 L 80 12 A 90 90 0 0 1 100 10 Z" fill="#F5EFE7" stroke="#fff" strokeWidth="1"/>
            
            {/* Center hole */}
            <circle cx="100" cy="100" r="45" fill="#F5EFE7"/>
          </svg>
          
          {/* Food illustrations around the chart */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 left-6 text-4xl">🥑</div>
            <div className="absolute top-2 left-20 text-3xl">🧈</div>
            <div className="absolute top-1 right-16 text-3xl">🥦</div>
            <div className="absolute top-4 right-4 text-4xl">🍅</div>
            <div className="absolute left-0 top-1/3 text-4xl">🥬</div>
            <div className="absolute bottom-28 left-2 text-3xl">🧀</div>
            <div className="absolute bottom-12 left-8 text-4xl">🍖</div>
            <div className="absolute bottom-4 left-24 text-3xl">🥚</div>
            <div className="absolute bottom-2 right-28 text-4xl">🥩</div>
            <div className="absolute bottom-8 right-12 text-3xl">🍗</div>
            <div className="absolute bottom-20 right-2 text-4xl">🐟</div>
            <div className="absolute right-2 top-1/2 text-3xl">🥓</div>
          </div>
          
          {/* Labels */}
          <div className="absolute left-4 top-24 text-left">
            <div className="text-sm font-bold text-gray-900">70-80%</div>
            <div className="text-xs font-semibold text-gray-700">FATS</div>
          </div>
          
          <div className="absolute top-6 right-8 text-right">
            <div className="text-sm font-bold text-gray-900">5-10%</div>
            <div className="text-xs font-semibold text-gray-700">CARBS</div>
          </div>
          
          <div className="absolute right-6 bottom-32 text-right">
            <div className="text-sm font-bold text-gray-900">25-30%</div>
            <div className="text-xs font-semibold text-gray-700">PROTEIN</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Keto diet is different',
    description: 'The majority of people who successfully lose weight gain it back within 3-6 months. KetoGo.app will help you not only lose weight and reach your ideal weight but also keep that weight off easily.',
    showButton: true,
    background: 'gradient',
    content: (
      <div className="flex justify-center items-center py-12">
        <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <circle cx="50" cy="60" r="35" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
            {/* Egg */}
            <ellipse cx="40" cy="55" rx="8" ry="10" fill="#FFD700"/>
            <circle cx="40" cy="52" r="6" fill="#FFF8DC"/>
            {/* Cheese */}
            <rect x="50" y="50" width="12" height="12" rx="2" fill="#FFA500"/>
            <line x1="53" y1="50" x2="53" y2="62" stroke="#FF8C00" strokeWidth="1"/>
            <line x1="56" y1="50" x2="56" y2="62" stroke="#FF8C00" strokeWidth="1"/>
            <line x1="59" y1="50" x2="59" y2="62" stroke="#FF8C00" strokeWidth="1"/>
            {/* Sausage */}
            <ellipse cx="65" cy="58" rx="10" ry="6" fill="#DC143C"/>
            <ellipse cx="65" cy="58" rx="8" ry="4" fill="#FF6347"/>
          </svg>
        </div>
      </div>
    ),
  },
];

export default function IntroPage() {
  const router = useRouter();
  const params = useParams();
  const slideId = parseInt(params.id as string);
  const [currentSlide] = useState(slideId);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    // Load saved answers from localStorage
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // If slideId is 1, show age selection question
  if (slideId === 1) {
    const ageQuestion = questions.find(q => q.id === 1);
    
    if (!ageQuestion) {
      router.push('/');
      return null;
    }

    const handleAnswer = (answer: any) => {
      const newAnswers = { ...answers, 1: answer };
      setAnswers(newAnswers);
      localStorage.setItem('answers', JSON.stringify(newAnswers));
      router.push('/questionnaire/2');
    };

    const handleBack = () => {
      router.push('/');
    };

    const totalSteps = 36;
    const currentStep = 1;

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
                  onClick={handleBack}
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: '#2F6657' }}
                  aria-label="Go back"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <div className="text-sm font-semibold" style={{ color: '#696969' }}>
                  {currentStep}/{totalSteps}
                </div>
              </div>
              <ProgressBar current={currentStep} total={totalSteps} />
            </div>

            {/* Question card */}
            <div className="mb-12">
              <QuestionCard
                question={ageQuestion}
                onAnswer={handleAnswer}
                initialAnswer={answers[1]}
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // For other intro slides (id 2, 3, etc.)
  const slide = introSlides.find(s => s.id === currentSlide);

  if (!slide) {
    router.push('/questionnaire/2');
    return null;
  }

  const handleNext = () => {
    if (currentSlide < introSlides.length) {
      router.push(`/intro/${currentSlide + 1}`);
    } else {
      router.push('/questionnaire/2');
    }
  };

  const handleBack = () => {
    if (currentSlide > 1) {
      router.push(`/intro/${currentSlide - 1}`);
    } else {
      router.push('/intro/1');
    }
  };

  const totalSteps = 36;
  const progress = (currentSlide / totalSteps) * 100;

  const bgStyle = slide.background === 'gradient' 
    ? { background: 'linear-gradient(135deg, #2D5F4F 0%, #1E4A3A 50%, #0F2E21 100%)' }
    : { backgroundColor: '#fff3e5' };

  return (
    <div className="min-h-screen flex flex-col" style={bgStyle}>
      {/* Logo only - no nav, no bg */}
      <div className="w-full px-4 sm:px-6 py-3 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🥑</span>
            <span className="text-base sm:text-lg font-bold" style={{ color: slide.background === 'gradient' ? '#FFFFFF' : '#12573d' }}>
              KetoGO<span className="font-normal">.app</span>
            </span>
          </div>
        </div>
      </div>
      
      <main className="flex-1 flex flex-col px-4 py-8">
        <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
          {/* Back button and progress */}
          <div className="mb-8">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 transition-colors mb-6 ${
                slide.background === 'gradient' ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Go back"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            
            {/* Progress bar */}
            <div className="relative mb-2">
              <div className={`h-2 rounded-full overflow-hidden ${slide.background === 'gradient' ? 'bg-white/20' : 'bg-secondary-dark'}`}>
                <div 
                  className={`h-full transition-all duration-300 rounded-full ${slide.background === 'gradient' ? 'bg-white' : 'bg-primary'}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className={`absolute -top-6 right-0 text-sm font-semibold ${slide.background === 'gradient' ? 'text-white' : 'text-primary'}`}>
                {currentSlide}/{totalSteps}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-12">
            <h1 className={`text-3xl md:text-4xl font-extrabold mb-6 max-w-2xl leading-tight ${
              slide.background === 'gradient' ? 'text-white' : 'text-gray-900'
            }`}>
              {slide.title}
            </h1>
            
            <p className={`text-base md:text-lg mb-8 max-w-2xl leading-relaxed ${
              slide.background === 'gradient' ? 'text-white/90' : 'text-gray-600'
            }`}>
              {slide.description}
            </p>

            {slide.content}
          </div>

          {/* Next button */}
          {slide.showButton && (
            <div className="flex justify-center pb-8">
              <button
                onClick={handleNext}
                className="w-full max-w-xs bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
