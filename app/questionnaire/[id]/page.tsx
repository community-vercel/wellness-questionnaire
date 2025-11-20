'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { questions } from '@/data/questions';

export default function QuestionnairePage() {
  const router = useRouter();
  const params = useParams();
  const questionId = parseInt(params.id as string);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    // Load saved answers from localStorage
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const currentQuestion = questions.find(q => q.id === questionId);

  if (!currentQuestion) {
    router.push('/');
    return null;
  }

  const handleAnswer = (answer: any) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    localStorage.setItem('answers', JSON.stringify(newAnswers));

    // Show testimonial after question 3
    if (questionId === 3) {
      router.push('/intro/testimonial');
      return;
    }

    // Navigate to next question or results page
    if (questionId < questions.length) {
      router.push(`/questionnaire/${questionId + 1}`);
    } else {
      router.push('/results');
    }
  };

  const handleBack = () => {
    if (questionId === 4) {
      router.push('/questionnaire/3');
    } else if (questionId > 2) {
      router.push(`/questionnaire/${questionId - 1}`);
    } else if (questionId === 2) {
      router.push('/intro/1');
    } else {
      router.push('/');
    }
  };

  const totalSteps = 36; // Total steps in the flow
  const currentStep = questionId; // Question 1 is at intro/1 (step 1), so question 2 = step 2, question 4 = step 4

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
              question={currentQuestion}
              onAnswer={handleAnswer}
              initialAnswer={answers[questionId]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

