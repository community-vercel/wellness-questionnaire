'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { fetchQuestions } from '@/lib/questions';
import { Question } from '@/data/questions';

export default function QuestionnairePage() {
  const router = useRouter();
  const params = useParams();
  const questionId = parseInt(params.id as string);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load saved answers from localStorage
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, []);

  const currentQuestion = questions.find(q => q.id === questionId);

  // Redirect immediately for special question types (only after questions are loaded)
  useEffect(() => {
    if (loading || !currentQuestion) return;

    if (currentQuestion.type === 'testimonial') {
      router.push('/questionnaire/testimonial');
      return;
    }
    if (currentQuestion.type === 'progress' && questionId === 14) {
      router.push('/questionnaire/progress');
      return;
    }
    if (currentQuestion.type === 'progress' && questionId === 34) {
      router.push('/questionnaire/progress-final');
      return;
    }
    if (currentQuestion.type === 'loading') {
      router.push('/questionnaire/loading');
      return;
    }
  }, [loading, currentQuestion, questionId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff3e5' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    router.push('/');
    return null;
  }

  // Don't render if it's a special type (will redirect)
  if (currentQuestion?.type === 'testimonial' || currentQuestion?.type === 'progress' || currentQuestion?.type === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fff3e5' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleAnswer = (answer: any) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    localStorage.setItem('answers', JSON.stringify(newAnswers));

    // Show info screen after question 7 (Keto diet is different)
    if (questionId === 7) {
      router.push('/questionnaire/8');
      return;
    }

    // Show results screen after question 11
    if (questionId === 11) {
      router.push('/results');
      return;
    }

    // Show progress screen for question 14
    if (questionId === 14) {
      router.push('/questionnaire/progress');
      return;
    }

    // Show progress screen for question 34
    if (questionId === 34) {
      router.push('/questionnaire/progress-final');
      return;
    }

    // Show loading screen for question 35
    if (questionId === 35) {
      router.push('/questionnaire/loading');
      return;
    }

    // Navigate to next question or email page after all questions
    if (questionId < questions.length) {
      router.push(`/questionnaire/${questionId + 1}`);
    } else {
      // After all questions, go to email page
      router.push('/email');
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
  
  // Check if it's a dark screen (info screens with dark background)
  const isDarkScreen = currentQuestion.type === 'info' && 
    (currentQuestion.question === 'Keto diet is different' || 
     currentQuestion.question === 'Keto is very tasty!' ||
     currentQuestion.question === 'Your personalised Keto meal plan is being built' ||
     currentQuestion.question.includes("It's not just your body"));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDarkScreen ? '#2F6657' : '#fff3e5' }}>
      {/* Logo only - no nav, no bg */}
      {!isDarkScreen && (
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
      )}
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Back button and progress - hidden on dark screens */}
          {!isDarkScreen && (
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
                <div className="text-sm font-semibold" style={{ color: '#a07e67', fontSize: '0.875rem', fontWeight: 600 }}>
                  {currentStep}/{totalSteps}
                </div>
              </div>
              <ProgressBar current={currentStep} total={totalSteps} />
            </div>
          )}

          {/* Question card */}
          <div className={isDarkScreen ? '' : 'mb-12'}>
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              initialAnswer={answers[questionId]}
            />
          </div>
        </div>
      </main>

      {!isDarkScreen && <Footer />}
    </div>
  );
}

