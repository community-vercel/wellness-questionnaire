'use client';

import React, { useState } from 'react';
import { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: any) => void;
  initialAnswer?: any;
}

export default function QuestionCard({ question, onAnswer, initialAnswer }: QuestionCardProps) {
  // Handle initial answer - if it's an object with value property, use the value
  const getInitialAnswer = () => {
    if (!initialAnswer) return '';
    if (typeof initialAnswer === 'object' && 'value' in initialAnswer) {
      return initialAnswer.value;
    }
    return initialAnswer;
  };

  const getInitialMultiple = () => {
    if (!initialAnswer) return [];
    if (Array.isArray(initialAnswer)) return initialAnswer;
    return [];
  };

  const [answer, setAnswer] = useState<any>(getInitialAnswer());
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>(getInitialMultiple());
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
    // Check if there's a max selection limit
    const maxSelections = question.type === 'multi-select' && question.question?.includes('up to 5') ? 5 : undefined;
    
    if (selectedMultiple.includes(value)) {
      // Deselect
      const newSelection = selectedMultiple.filter(v => v !== value);
      setSelectedMultiple(newSelection);
      setAnswer(newSelection);
    } else {
      // Select (check limit)
      if (maxSelections && selectedMultiple.length >= maxSelections) {
        return; // Don't allow more selections
      }
      const newSelection = [...selectedMultiple, value];
      setSelectedMultiple(newSelection);
      setAnswer(newSelection);
    }
  };

  const handleTextInput = (value: string) => {
    setAnswer(value);
  };

  const handleSubmitText = () => {
    // Get the actual input value (either from answer or suggested weight)
    const savedAnswers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('answers') || '{}') : {};
    const heightAnswer = savedAnswers[9];
    const currentWeightAnswer = savedAnswers[10];
    
    let inputValue = answer;
    
    // If no answer but it's goal weight question and we have suggested weight, use it
    if (!inputValue && question.id === 11 && heightAnswer && currentWeightAnswer) {
      let heightInMeters = 1.7;
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
      const idealBMI = 22;
      const idealWeightKg = idealBMI * (heightInMeters * heightInMeters);
      inputValue = Math.round(idealWeightKg).toString();
    }
    
    if (inputValue) {
      const result = { value: inputValue, unit };
      // If it's a name input, also save to localStorage
      if (question.unit === 'name') {
        localStorage.setItem('name', inputValue);
      }
      onAnswer(result);
    }
  };

  if (question.type === 'image-select') {
    // Age selection with photos - gender-specific images
    const gender = typeof window !== 'undefined' ? localStorage.getItem('gender') : null;
    
    return (
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 leading-tight" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
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
            const isSelected = answer === option.value;
            
            return (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className="group relative rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-200"
                style={{
                  backgroundColor: '#ffefdb',
                  border: isSelected ? '2px solid #f9bf93' : '1px solid #f2e1cc'
                }}
              >
                <div className="w-full p-3">
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
                  <span className="text-sm font-bold block text-center" style={{ color: '#000000', fontSize: '0.875rem', fontWeight: 700 }}>
                    {option.label}
                  </span>
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
    // Check if it's the "Keto diet is different" screen (dark green background)
    const isDarkScreen = question.question === 'Keto diet is different';
    
    if (isDarkScreen) {
      return (
        <div className="w-full max-w-2xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem 1rem', minHeight: 'calc(100vh - 200px)' }}>
          {/* Food Icon */}
          <div className="mb-10">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Plate - light blue with white rim */}
                <circle cx="50" cy="60" r="36" fill="#87CEEB" stroke="white" strokeWidth="2.5"/>
                {/* Plate inner rim */}
                <circle cx="50" cy="60" r="33" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9"/>
                
                {/* Scrambled eggs - yellow pieces above/left of egg */}
                <ellipse cx="45" cy="48" rx="6" ry="5" fill="#FFD700"/>
                <ellipse cx="42" cy="46" rx="4" ry="3" fill="#FFEB3B"/>
                <ellipse cx="48" cy="50" rx="5" ry="4" fill="#FFC107"/>
                
                {/* Sunny-side-up fried egg - white albumen */}
                <ellipse cx="38" cy="55" rx="11" ry="9" fill="#FFF8DC"/>
                {/* Egg yolk */}
                <circle cx="38" cy="53" r="7" fill="#FFD700"/>
                <circle cx="36.5" cy="51.5" r="2.5" fill="#FFA500"/>
                
                {/* Sausage link - reddish-brown to the right */}
                <ellipse cx="65" cy="60" rx="13" ry="8" fill="#8B4513"/>
                <ellipse cx="65" cy="60" rx="11" ry="6" fill="#A0522D"/>
                <ellipse cx="63" cy="59" rx="2.5" ry="2" fill="#654321"/>
              </svg>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 max-w-2xl mx-auto leading-tight text-white" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {question.question}
          </h2>
          
          {/* Description */}
          {question.description && (
            <p className="text-base md:text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.95 }}>
              {question.description}
            </p>
          )}
          
          {/* Continue Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => onAnswer('continue')}
              className="px-10 py-4 font-bold rounded-2xl transition-all duration-300 border-2 border-white hover:opacity-90"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700, minWidth: '220px' }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }
    
    // Check if it's "Keto is very tasty!" screen (dark green background)
    if (question.question === 'Keto is very tasty!') {
      return (
        <div className="w-full max-w-2xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div className="mb-8 text-6xl">🍳</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 max-w-2xl mx-auto leading-tight text-white" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}>
            {question.question}
          </h2>
          {question.description && (
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
              {question.description}
            </p>
          )}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => onAnswer('continue')}
              className="px-8 py-4 font-bold rounded-2xl transition-all duration-300 border-2 border-white"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700 }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }

    // Check if it's "Your personalised Keto meal plan is being built" screen (dark green background)
    if (question.question === 'Your personalised Keto meal plan is being built') {
      return (
        <div className="w-full max-w-2xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight text-white" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}>
            {question.question}
          </h2>
          {question.description && (
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem' }}>
              {question.description}
            </p>
          )}
          {/* Food Images - 4 in first row, 1 centered in second row */}
          <div className="flex flex-col items-center gap-4 mb-8 max-w-md mx-auto">
            {/* First row - 4 images */}
            <div className="grid grid-cols-4 gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-white/10">
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/huB6MhRyno-496.webp" 
                    alt="Egg dishes"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-white text-xs font-semibold">Egg dishes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-white/10">
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/jUpBqDazC4-496.webp" 
                    alt="Beef"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-white text-xs font-semibold">Beef</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-white/10">
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/M2Rr22GmeD-496.webp" 
                    alt="Beginner"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-white text-xs font-semibold">Beginner</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-white/10">
                  <img 
                    src="https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/unOG-Nn2vj-496.webp" 
                    alt="Desserts"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-white text-xs font-semibold">Desserts</p>
              </div>
            </div>
            {/* Second row - 1 centered image */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop" 
                  alt="Soups"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-white text-xs font-semibold">Soups</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => onAnswer('continue')}
              className="px-8 py-4 font-bold rounded-xl transition-all duration-300 border-2 border-white"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700 }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }

    // Check if it's "It's not just your body!" screen (dark green background)
    if (question.question.includes("It's not just your body")) {
      // Get gender for gender-specific images
      const gender = typeof window !== 'undefined' ? localStorage.getItem('gender') : null;
      const isFemale = gender === 'female';
      
      // Gender-specific face images
      const faceImages = isFemale ? {
        heavy: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/f6TPWff8P2-734.webp',
        medium: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/f6TPWff8P2-734.webp',
        light: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/f6TPWff8P2-734.webp'
      } : {
        heavy: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/QHlWHFCU1S-734.webp',
        medium: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/QHlWHFCU1S-734.webp',
        light: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/QHlWHFCU1S-734.webp'
      };
      
      return (
        <div className="w-full max-w-4xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem 1rem', minHeight: 'calc(100vh - 200px)' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight text-white" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.2' }}>
            {question.question}
          </h2>
          {/* Face transformation images */}
          <div className="flex justify-center mb-6 max-w-2xl mx-auto w-full">
            <div className="flex items-end">
              <div className="flex flex-col items-center">
                <div className="overflow-hidden mb-3 bg-white/10 rounded-lg" style={{ width: '100px', height: '200px', marginRight: '2px' }}>
                  <img 
                    src={faceImages.heavy}
                    alt="100kg"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="px-3 py-1.5 rounded-l-lg flex items-center gap-1" style={{ backgroundColor: '#DC2626', marginRight: '-1px' }}>
                  <p className="text-white text-xs font-bold whitespace-nowrap">100 kg</p>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="overflow-hidden mb-3 bg-white/10 rounded-lg" style={{ width: '100px', height: '200px', marginLeft: '2px', marginRight: '2px' }}>
                  <img 
                    src={faceImages.medium}
                    alt="80kg"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="px-3 py-1.5 flex items-center gap-1" style={{ backgroundColor: '#F97316', marginLeft: '-1px', marginRight: '-1px' }}>
                  <p className="text-white text-xs font-bold whitespace-nowrap">80 kg</p>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="overflow-hidden mb-3 bg-white/10 rounded-lg" style={{ width: '100px', height: '200px', marginLeft: '2px' }}>
                  <img 
                    src={faceImages.light}
                    alt="65kg"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="px-3 py-1.5 rounded-r-lg flex items-center gap-1" style={{ backgroundColor: '#10B981', marginLeft: '-1px' }}>
                  <p className="text-white text-xs font-bold whitespace-nowrap">65 kg</p>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
            </div>
          </div>
          {question.description && (
            <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: '1.6' }}>
              {question.description}
            </p>
          )}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => onAnswer('continue')}
              className="px-8 py-3 font-bold rounded-2xl transition-all duration-300 border-2 border-white"
              style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, minWidth: '180px' }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }
    
    // Regular info screen (light background)
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 max-w-2xl mx-auto leading-tight" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
          {question.question}
        </h2>
        {question.description && (
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.125rem', color: '#000000' }}>
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
            style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontWeight: 700 }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  if (question.type === 'progress') {
    // Progress screen with graph and testimonial - redirect to special page
    return null; // Will be handled by routing
  }

  if (question.type === 'testimonial') {
    // Testimonial screen - redirect to special page
    return null; // Will be handled by routing
  }

  if (question.type === 'loading') {
    // Loading screen - redirect to special page
    return null; // Will be handled by routing
  }

  if (question.type === 'single-select') {
    // Check if options have images
    const hasImages = question.options?.some(opt => opt.icon?.startsWith('http'));
    
    if (hasImages) {
      // Weight loss goal with small photos - gender-specific images
      const gender = typeof window !== 'undefined' ? localStorage.getItem('gender') : null;
      
      return (
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 leading-tight max-w-3xl mx-auto" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
            {question.question}
          </h2>
          <div className="flex flex-col gap-3 max-w-xl mx-auto">
            {question.options?.map((option) => {
              // Select image based on gender
              let imageUrl = option.icon;
              if (gender === 'female' && option.iconFemale) {
                imageUrl = option.iconFemale;
              } else if (gender === 'male' && option.iconMale) {
                imageUrl = option.iconMale;
              }
              
              return (
                <button
                  key={option.value}
                  onClick={() => handleSingleSelect(option.value)}
                  className="group relative hover:opacity-90 transition-all duration-200 overflow-hidden w-full"
                  style={{
                    backgroundColor: '#ffefdb',
                    borderColor: answer === option.value ? '#f9bf93' : '#f2e1cc',
                    borderWidth: answer === option.value ? '2px' : '1px',
                    borderStyle: 'solid',
                    borderRadius: '8px',
                    minHeight: '72px'
                  }}
                >
                  <div className="p-4 flex items-center gap-3">
                    <span className="text-base font-semibold flex-1 text-left" style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#000000' }}>
                      {option.label}
                    </span>
                    {imageUrl && (
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                        <img 
                          src={imageUrl} 
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
              );
            })}
          </div>
        </div>
      );
    }
    
    // Simple list selection - pixel perfect styling
    return (
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 leading-tight max-w-3xl mx-auto" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
          {question.question}
        </h2>
        <div className="flex flex-col gap-3 max-w-xl mx-auto">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSingleSelect(option.value)}
              className="group relative overflow-hidden transition-all duration-200 w-full"
              style={{
                backgroundColor: '#ffefdb',
                borderColor: answer === option.value ? '#f9bf93' : '#f2e1cc',
                borderWidth: answer === option.value ? '2px' : '1px',
                borderStyle: 'solid',
                borderRadius: '8px',
                minHeight: '72px'
              }}
            >
              <div className="p-4 flex items-center gap-3">
                <div 
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0"
                  style={{ 
                    borderColor: answer === option.value ? '#2F6657' : '#D3D3D3',
                    backgroundColor: answer === option.value ? '#2F6657' : 'transparent'
                  }}
                >
                  {answer === option.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-base font-semibold flex-1 text-left" style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#000000' }}>
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
    const maxSelections = question.question.includes('up to 5') ? 5 : undefined;
    const canSelectMore = maxSelections ? selectedMultiple.length < maxSelections : true;
    
    return (
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 leading-tight max-w-3xl mx-auto" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
          {question.question}
        </h2>
        {question.description && (
          <p className="text-base text-center mb-8 max-w-3xl mx-auto" style={{ fontSize: '1rem', color: '#000000' }}>
            {question.description}
          </p>
        )}
        <div className="flex flex-col gap-3 max-w-xl mx-auto">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => handleMultiSelect(option.value)}
              className="group relative overflow-hidden transition-all duration-200 w-full"
              style={{
                backgroundColor: '#ffefdb',
                borderColor: selectedMultiple.includes(option.value) ? '#f9bf93' : '#f2e1cc',
                borderWidth: selectedMultiple.includes(option.value) ? '2px' : '1px',
                borderStyle: 'solid',
                borderRadius: '8px',
                minHeight: '72px'
              }}
            >
              <div className="p-4 flex items-center gap-3">
                <div 
                  className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                  style={{ 
                    borderColor: selectedMultiple.includes(option.value) ? '#2F6657' : '#D3D3D3',
                    backgroundColor: selectedMultiple.includes(option.value) ? '#2F6657' : 'transparent',
                    borderRadius: '4px'
                  }}
                >
                  {selectedMultiple.includes(option.value) && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-base font-semibold flex-1 text-left" style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#000000' }}>
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onAnswer(selectedMultiple)}
            disabled={selectedMultiple.length === 0}
            className="w-full max-w-xs font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed text-lg"
            style={{ backgroundColor: '#2F6657', color: '#FFFFFF', fontWeight: 700 }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  if (question.type === 'text-input') {
    // Check if it's a name input (question 13)
    const isNameInput = question.unit === 'name';
    
    if (isNameInput) {
      return (
        <div className="w-full max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 leading-tight" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800 }}>
            {question.question}
          </h2>
          {question.description && (
            <p className="text-xl md:text-2xl font-semibold text-center mb-10" style={{ color: '#000000', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600 }}>
              {question.description}
            </p>
          )}
          <div className="w-full max-w-md mx-auto bg-white rounded-xl border mb-10" style={{ borderColor: '#E0E0E0', padding: '1.25rem 1.5rem' }}>
            <input
              type="text"
              value={answer || ''}
              onChange={(e) => handleTextInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmitText()}
              className="w-full focus:outline-none bg-transparent text-lg"
              style={{ color: '#000000' }}
              placeholder=""
              autoFocus
            />
          </div>
          <button
            onClick={handleSubmitText}
            disabled={!answer}
            className="w-full max-w-md text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-lg"
            style={{ backgroundColor: '#2F6657' }}
          >
            Next
          </button>
        </div>
      );
    }
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
    
    // Calculate suggested ideal weight for goal weight question
    const calculateSuggestedWeight = () => {
      if (question.id !== 11) return null; // Only for goal weight question
      const savedAnswers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('answers') || '{}') : {};
      const heightAnswer = savedAnswers[9]; // Question 9 is height
      const currentWeightAnswer = savedAnswers[10]; // Question 10 is current weight
      
      if (!heightAnswer || !currentWeightAnswer) return null;
      
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
      
      // Calculate ideal BMI (22 is considered ideal)
      const idealBMI = 22;
      const idealWeightKg = idealBMI * (heightInMeters * heightInMeters);
      
      // Get current weight
      const currentWeight = parseFloat(currentWeightAnswer.value);
      const currentWeightKg = currentWeightAnswer.unit === 'lb' ? currentWeight * 0.453592 : currentWeight;
      
      // Calculate percentage of current weight
      const percentage = ((currentWeightKg - idealWeightKg) / currentWeightKg) * 100;
      
      return {
        idealWeight: Math.round(idealWeightKg),
        minWeight: Math.round(idealWeightKg * 0.875), // 12.5% below ideal
        maxWeight: Math.round(idealWeightKg * 1.125), // 12.5% above ideal
        percentage: Math.round(Math.abs(percentage))
      };
    };
    
    const suggestedWeight = calculateSuggestedWeight();
    const isGoalWeight = question.id === 11;
    
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 leading-tight" style={{ color: '#000000', fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 800 }}>
          {question.question}
        </h2>
        <div className="flex flex-col items-center">
          {hasUnitToggle && (
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setUnit('cm')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'cm'
                    ? 'text-white'
                    : ''
                }`}
                style={
                  unit === 'cm'
                    ? { backgroundColor: '#2F6657', border: '1px solid #2F6657' }
                    : { backgroundColor: '#fcf7f0', color: '#000000', border: '1px solid #E0E0E0' }
                }
              >
                cm
              </button>
              <button
                onClick={() => setUnit('ft/in')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'ft/in'
                    ? 'text-white'
                    : ''
                }`}
                style={
                  unit === 'ft/in'
                    ? { backgroundColor: '#2F6657', border: '1px solid #2F6657' }
                    : { backgroundColor: '#fcf7f0', color: '#000000', border: '1px solid #E0E0E0' }
                }
              >
                ft/in
              </button>
            </div>
          )}
          
          {isWeight && (
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setUnit('kg')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'kg'
                    ? 'text-white'
                    : ''
                }`}
                style={
                  unit === 'kg'
                    ? { backgroundColor: '#2F6657', border: '1px solid #2F6657' }
                    : { backgroundColor: '#fcf7f0', color: '#000000', border: '1px solid #E0E0E0' }
                }
              >
                kg
              </button>
              <button
                onClick={() => setUnit('lb')}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  unit === 'lb'
                    ? 'text-white'
                    : ''
                }`}
                style={
                  unit === 'lb'
                    ? { backgroundColor: '#2F6657', border: '1px solid #2F6657' }
                    : { backgroundColor: '#fcf7f0', color: '#000000', border: '1px solid #E0E0E0' }
                }
              >
                lb
              </button>
            </div>
          )}
          
          {isGoalWeight && suggestedWeight && (
            <div className="mb-6 text-center">
              <p className="text-base font-bold text-gray-700 mb-2" style={{ fontSize: '1rem' }}>
                Suggested ideal weight: <span style={{ color: '#000000' }}>{suggestedWeight.idealWeight} {unit}</span>
              </p>
              <p className="text-sm text-gray-600" style={{ fontSize: '0.875rem' }}>
                Consider your goal weight somewhere within a healthy range of {suggestedWeight.minWeight} {unit} to {suggestedWeight.maxWeight} {unit}
              </p>
            </div>
          )}
          
          <div className="w-full max-w-md bg-white rounded-xl border mb-8" style={{ borderColor: '#E0E0E0', padding: '1.25rem 1.5rem' }}>
            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                value={answer || (isGoalWeight && suggestedWeight ? suggestedWeight.idealWeight.toString() : '')}
                onChange={(e) => handleTextInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitText()}
                className="flex-1 focus:outline-none bg-transparent text-3xl font-bold"
                style={{ color: '#000000', padding: '0.5rem 0', minWidth: '0' }}
                placeholder="0"
                autoFocus={hasUnitToggle}
              />
              <span className="text-base font-medium flex-shrink-0 ml-3" style={{ color: '#9CA3AF' }}>
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
            disabled={!answer && !(isGoalWeight && suggestedWeight)}
            className="w-full max-w-md text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-lg"
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

