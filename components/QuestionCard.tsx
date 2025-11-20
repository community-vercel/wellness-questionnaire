'use client';

import React, { useState } from 'react';
import { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: any) => void;
  initialAnswer?: any;
}

export default function QuestionCard({ question, onAnswer, initialAnswer }: QuestionCardProps) {
  const [answer, setAnswer] = useState<any>(initialAnswer || '');
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>(initialAnswer || []);
  const [unit, setUnit] = useState<string>(() => {
    if (question.unit === 'kg' || question.unit === 'lb') {
      return question.unit;
    }
    return question.unit || 'cm';
  });

  const handleSingleSelect = (value: string) => {
    setAnswer(value);
    onAnswer(value);
  };

  const handleMultiSelect = (value: string) => {
    const newSelection = selectedMultiple.includes(value)
      ? selectedMultiple.filter(v => v !== value)
      : [...selectedMultiple, value];
    setSelectedMultiple(newSelection);
    setAnswer(newSelection);
  };

  const handleTextInput = (value: string) => {
    setAnswer(value);
  };

  const handleSubmitText = () => {
    if (answer) {
      onAnswer({ value: answer, unit });
    }
  };

  if (question.type === 'image-select') {
    // Age selection with photos - gender-specific images
    const gender = typeof window !== 'undefined' ? localStorage.getItem('gender') : null;
    
    return (
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-center mb-12 leading-tight" style={{ color: '#2F6657' }}>
          {question.question}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {question.options?.map((option) => {
            // Select image based on gender
            let imageUrl = option.icon;
            if (gender === 'female' && option.iconFemale) {
              imageUrl = option.iconFemale;
            } else if (gender === 'male' && option.iconMale) {
              imageUrl = option.iconMale;
            }
            
            const bgColor = option.bgColor || '#E8DDD0';
            
            return (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className="group relative rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: '#ffefdb',
                  border: '1px solid #f2e1cc'
                }}
              >
                <div className="w-full p-3.5">
                  <div 
                    className="w-full aspect-[3/4] rounded-md overflow-hidden mb-2.5"
                    style={{ backgroundColor: bgColor }}
                  >
                    {imageUrl?.startsWith('http') ? (
                      <img 
                        src={imageUrl} 
                        alt={option.label}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement!;
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👤</div>';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        {option.icon || '👤'}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold text-gray-900 block text-center">{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (question.type === 'info') {
    // Info/infographic question type
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 max-w-2xl mx-auto leading-tight" style={{ color: '#2F6657' }}>
          {question.question}
        </h2>
        {question.description && (
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {question.description}
          </p>
        )}
        {question.svgUrl && (
          <div className="relative w-full max-w-md mx-auto py-8 mb-8">
            <img 
              src={question.svgUrl}
              alt="Keto diet macronutrient breakdown"
              className="w-full h-auto"
            />
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => onAnswer('continue')}
            className="w-full max-w-xs font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            style={{ backgroundColor: '#2F6657', color: '#FFFFFF' }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  if (question.type === 'single-select') {
    // Check if options have images
    const hasImages = question.options?.some(opt => opt.icon?.startsWith('http'));
    
    if (hasImages) {
      // Weight loss goal with small photos
      return (
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: '#2F6657' }}>
            {question.question}
          </h2>
          <div className="flex flex-col gap-4">
            {question.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className="group relative hover:opacity-90 transition-all duration-200 overflow-hidden"
                style={{
                  backgroundColor: '#ffefdb',
                  border: '1px solid #f2e1cc',
                  borderRadius: '8px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
              >
                <div className="p-5 flex items-center gap-4">
                  <span className="text-base font-semibold text-gray-900 flex-1 text-left">
                    {option.label}
                  </span>
                  {option.icon && (
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                      <img 
                        src={option.icon} 
                        alt={option.label}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div class="text-3xl">😊</div>';
                        }}
                      />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    // Simple list selection - pixel perfect styling
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: '#2F6657' }}>
          {question.question}
        </h2>
        <div className="flex flex-col gap-4">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSingleSelect(option.value)}
              className="group relative overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: '#ffefdb',
                borderColor: answer === option.value ? '#2F6657' : '#f2e1cc',
                borderWidth: answer === option.value ? '2px' : '1px',
                borderStyle: 'solid',
                borderRadius: '8px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <div className="p-5 flex items-center gap-4">
                <div 
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all"
                  style={{ 
                    borderColor: answer === option.value ? '#2F6657' : '#D3D3D3',
                    backgroundColor: answer === option.value ? '#2F6657' : 'transparent'
                  }}
                >
                  {answer === option.value && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-base font-semibold text-gray-900 flex-1 text-left">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === 'multi-select') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12" style={{ color: '#2F6657' }}>
          {question.question}
        </h2>
        <div className="flex flex-col gap-4">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => handleMultiSelect(option.value)}
              className="group relative overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: '#ffefdb',
                borderColor: selectedMultiple.includes(option.value) ? '#2F6657' : '#f2e1cc',
                borderWidth: selectedMultiple.includes(option.value) ? '2px' : '1px',
                borderStyle: 'solid',
                borderRadius: '8px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <div className="p-5 flex items-center gap-4">
                <div 
                  className="w-6 h-6 rounded border-2 flex items-center justify-center transition-all"
                  style={{ 
                    borderColor: selectedMultiple.includes(option.value) ? '#2F6657' : '#D3D3D3',
                    backgroundColor: selectedMultiple.includes(option.value) ? '#2F6657' : 'transparent'
                  }}
                >
                  {selectedMultiple.includes(option.value) && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-base font-semibold text-gray-900 flex-1 text-left">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
        {selectedMultiple.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => onAnswer(selectedMultiple)}
              className="w-full max-w-xs font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF' }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }

  if (question.type === 'text-input') {
    const hasUnitToggle = question.unit === 'height';
    const isWeight = question.unit === 'kg' || question.unit === 'lb';
    const displayUnit = hasUnitToggle ? unit : (isWeight ? unit : question.unit);
    
    // Calculate BMI for weight questions
    const calculateBMI = () => {
      if (!isWeight || !answer) return null;
      const weight = parseFloat(answer);
      if (isNaN(weight)) return null;
      
      // Get height from answers (assuming question 8 is height)
      const savedAnswers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('answers') || '{}') : {};
      const heightAnswer = savedAnswers[8];
      if (!heightAnswer) return null;
      
      let heightInMeters = 1.7; // default
      if (heightAnswer.unit === 'cm') {
        heightInMeters = parseFloat(heightAnswer.value) / 100;
      } else if (heightAnswer.unit === 'ft/in') {
        const parts = heightAnswer.value.split("'");
        if (parts.length === 2) {
          const feet = parseFloat(parts[0]);
          const inches = parseFloat(parts[1].replace('"', ''));
          heightInMeters = (feet * 0.3048) + (inches * 0.0254);
        }
      }
      
      const weightInKg = unit === 'lb' ? weight * 0.453592 : weight;
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      
      let category = '';
      let message = '';
      if (bmi < 18.5) {
        category = 'Underweight';
        message = 'Your BMI is ' + bmi.toFixed(1) + ', which puts you into Underweight category. We will tailor your plan to gain more muscle and maintain a balanced, healthy diet so you reach a more healthier weight without gaining fat.';
      } else if (bmi < 25) {
        category = 'Normal';
        message = 'Your BMI is ' + bmi.toFixed(1) + ', which is in the Normal range. We will help you maintain this healthy weight while building muscle and improving your overall fitness.';
      } else if (bmi < 30) {
        category = 'Overweight';
        message = 'Your BMI is ' + bmi.toFixed(1) + ', which puts you into Overweight category. We will create a personalized plan to help you lose weight safely and effectively.';
      } else {
        category = 'Obese';
        message = 'Your BMI is ' + bmi.toFixed(1) + ', which puts you into Obese category. We will design a comprehensive weight loss plan tailored to your needs to help you achieve a healthier weight.';
      }
      
      return { bmi: bmi.toFixed(1), category, message };
    };
    
    const bmiInfo = isWeight && answer ? calculateBMI() : null;
    
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: '#2F6657' }}>
          {question.question}
        </h2>
        <div className="flex flex-col items-center">
          {hasUnitToggle && (
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setUnit('cm')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'cm'
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 border-2 border-gray-300'
                }`}
                style={unit === 'cm' ? { backgroundColor: '#2F6657' } : {}}
              >
                cm
              </button>
              <button
                onClick={() => setUnit('ft/in')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'ft/in'
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 border-2 border-gray-300'
                }`}
                style={unit === 'ft/in' ? { backgroundColor: '#2F6657' } : {}}
              >
                ft/in
              </button>
            </div>
          )}
          
          {isWeight && (
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setUnit('kg')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'kg'
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 border-2'
                }`}
                style={unit === 'kg' ? { backgroundColor: '#2F6657' } : { borderColor: '#E0E0E0' }}
              >
                kg
              </button>
              <button
                onClick={() => setUnit('lb')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'lb'
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 border-2'
                }`}
                style={unit === 'lb' ? { backgroundColor: '#2F6657' } : { borderColor: '#E0E0E0' }}
              >
                lb
              </button>
            </div>
          )}
          
          <div className="w-full bg-white rounded-xl shadow-sm border-2 p-8 mb-6" style={{ borderColor: '#2F6657' }}>
            <div className="flex items-center justify-center gap-4">
              <input
                type="text"
                value={answer}
                onChange={(e) => handleTextInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitText()}
                className="w-24 px-2 py-2 text-4xl font-bold text-center border-b-2 focus:outline-none bg-transparent"
                style={{ borderColor: '#2F6657' }}
                placeholder="0"
              />
              <span className="text-2xl text-gray-600 font-semibold">
                {displayUnit}
              </span>
            </div>
          </div>
          
          {bmiInfo && (
            <div className="w-full bg-white rounded-xl border-2 p-6 mb-6" style={{ borderColor: '#2F6657' }}>
              <div className="text-xs font-semibold text-gray-700 mb-2">{bmiInfo.category}</div>
              <p className="text-sm text-gray-900 leading-relaxed">{bmiInfo.message}</p>
            </div>
          )}
          
          <button
            onClick={handleSubmitText}
            disabled={!answer}
            className="w-full max-w-md text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed text-lg"
            style={{ backgroundColor: '#2F6657' }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return null;
}

