'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';

const testimonials = [
  {
    name: 'Helen T. (37)',
    rating: 5,
    text: 'Lost 18 kg with KetoGo! The smart meal tracking and recipe suggestions made keto feel effortless. No more guesswork - just delicious food and steady weight loss.'
  },
  {
    name: 'Mark K. (37)',
    rating: 5,
    text: 'As a busy professional, KetoGo made keto simple. No meal prep stress, just smart nutrition that helped me lose 14 kg.'
  },
  {
    name: 'Sarah M. (29)',
    rating: 5,
    text: 'I was skeptical at first, but KetoGo proved me wrong. Lost 12 kg in just 2 months with their personalized meal plans!'
  }
];

export default function TestimonialPage() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleContinue = () => {
    router.push('/questionnaire/4');
  };

  const handleBack = () => {
    router.push('/questionnaire/3');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const totalSteps = 36;
  const currentStep = 14; // After question 3

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      <main className="flex-1 px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Back button and progress */}
          <div className="mb-12">
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

          {/* Weight Loss Projection */}
          <div className="mb-12 text-center">
            <p className="text-base text-gray-700 mb-2">Based on your answers so far</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
              w, you'll reach <span style={{ color: '#2F6657' }}>51kg</span> by July 8
            </h2>
            
            {/* Graph */}
            <div className="relative w-full max-w-2xl mx-auto h-64 mb-8">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                <line x1="50" y1="20" x2="50" y2="180" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="200" y1="20" x2="200" y2="180" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="350" y1="20" x2="350" y2="180" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Weight loss curve */}
                <path
                  d="M 50 20 Q 200 100 350 180"
                  fill="none"
                  stroke="#2F6657"
                  strokeWidth="3"
                />
                
                {/* Starting point */}
                <circle cx="50" cy="20" r="6" fill="#2F6657" />
                <line x1="50" y1="20" x2="50" y2="180" stroke="#2F6657" strokeWidth="1.5" />
                
                {/* Ending point */}
                <circle cx="350" cy="180" r="6" fill="#2F6657" />
                <line x1="350" y1="180" x2="350" y2="20" stroke="#2F6657" strokeWidth="1.5" />
              </svg>
              
              {/* Labels positioned absolutely */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute" style={{ left: '12.5%', top: '2.5%' }}>
                  <div className="px-2 py-1 rounded text-xs font-semibold text-white" style={{ backgroundColor: '#2F6657' }}>224kg</div>
                </div>
                <div className="absolute" style={{ left: '12.5%', bottom: '2.5%' }}>
                  <div className="text-xs text-gray-700">Today</div>
                </div>
                <div className="absolute" style={{ right: '12.5%', bottom: '2.5%' }}>
                  <div className="px-2 py-1 rounded text-xs font-semibold text-white" style={{ backgroundColor: '#2F6657' }}>Goal 51kg</div>
                </div>
                <div className="absolute" style={{ right: '12.5%', top: '2.5%' }}>
                  <div className="text-xs text-gray-700">Jul 8, 2027</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-8" style={{ color: '#2F6657' }}>
              What people say
            </h3>
            
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm" style={{ backgroundColor: '#E8DDD0' }}>
              <div className="flex items-start justify-between mb-4">
                <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <div className="flex gap-0.5">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-900 leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={prevTestimonial}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-[#2F6657]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Continue button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handleContinue}
              className="w-full max-w-xs font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF' }}
            >
              Continue
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
