'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('6-month');
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [gender, setGender] = useState<string | null>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    const savedGender = localStorage.getItem('gender');
    setGender(savedGender);
  }, []);

  const handleGetPlan = () => {
    // In real app, would process payment
    // After payment, redirect to dashboard
    router.push('/dashboard');
  };

  // Get user data from answers
  const currentWeight = answers[10]?.value || '33';
  const targetWeight = answers[11]?.value || '32';
  const heightAnswer = answers[9];
  let heightInMeters = 1.7; // default
  if (heightAnswer) {
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
  }
  const currentWeightKg = parseFloat(currentWeight);
  const targetWeightKg = parseFloat(targetWeight);
  const currentBMI = (currentWeightKg / (heightInMeters * heightInMeters)).toFixed(1);
  const targetBMI = (targetWeightKg / (heightInMeters * heightInMeters)).toFixed(1);
  
  // Calculate target date (6 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);
  const formattedDate = targetDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  // Gender-specific images
  const isFemale = gender === 'female';
  const beforeImage = isFemale 
    ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop'
    : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop';
  const afterImage = isFemale
    ? 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop'
    : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop';
  const testimonialImage = isFemale
    ? { before: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/3FKtFGc4_Q-734.webp', after: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' }
    : { before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', after: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop' };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      {/* Header */}
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
        <div className="max-w-2xl mx-auto">
          {/* Gift Icon */}
          <div className="flex justify-center mb-4">
            <div className="text-5xl">🎁</div>
          </div>

          {/* Headline */}
          <h1 className="text-center mb-2">
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>Get your </span>
            <span className="text-2xl md:text-3xl font-extrabold" style={{ color: '#2F6657', fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>80% discount!</span>
          </h1>
          <p className="text-center text-xs text-gray-600 mb-8" style={{ fontSize: '0.75rem' }}>It's a one-time offer! Don't miss it!</p>

          {/* Before/After Comparison */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-600 mb-2" style={{ fontSize: '0.75rem' }}>You today</p>
                <div className="w-full aspect-[3/4] rounded-lg mb-2 overflow-hidden bg-gray-100">
                  <img 
                    src={beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontSize: '0.75rem' }}>Current weight {currentWeight}kg</p>
                <p className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontSize: '0.75rem' }}>Current BMI {currentBMI}</p>
                <p className="text-xs font-bold text-gray-900 mb-1 mt-1.5" style={{ fontSize: '0.75rem' }}>Metabolic efficiency</p>
                <div className="w-full h-1.5 bg-gray-200 rounded-full mt-0.5">
                  <div className="h-full rounded-full" style={{ width: '30%', backgroundColor: '#F0A868' }}></div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-600 mb-2" style={{ fontSize: '0.75rem' }}>You on {formattedDate}</p>
                <div className="w-full aspect-[3/4] rounded-lg mb-2 overflow-hidden bg-gray-100">
                  <img 
                    src={afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontSize: '0.75rem' }}>Achieved weight {targetWeight}kg</p>
                <p className="text-xs font-bold text-gray-900 mb-0.5" style={{ fontSize: '0.75rem' }}>Achieved BMI {targetBMI}</p>
                <p className="text-xs font-bold text-gray-900 mb-1 mt-1.5" style={{ fontSize: '0.75rem' }}>Metabolic efficiency</p>
                <div className="w-full h-1.5 bg-gray-200 rounded-full mt-0.5">
                  <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: '#F0A868' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 text-center mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
            Claim your weight loss plan!
          </h2>

          <div className="space-y-2 mb-6">
            {/* 6 Month Plan - BEST DEAL */}
            <div 
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all bg-white`}
              style={{
                borderColor: selectedPlan === '6-month' ? '#2F6657' : '#E0E0E0',
                borderWidth: selectedPlan === '6-month' ? '2px' : '1px',
                borderStyle: 'solid'
              }}
              onClick={() => setSelectedPlan('6-month')}
            >
              <div className="absolute top-0 left-0 right-0 text-white text-xs font-bold text-center py-1" style={{ backgroundColor: '#2F6657', fontSize: '0.75rem' }}>
                BEST DEAL - 80% OFF
              </div>
              <div className={`p-4 pt-8 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selectedPlan === '6-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '6-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '6-month' && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      6 month plan
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontSize: '0.75rem' }}>
                      Billed every 6 months
                    </p>
                    <p className="text-xs text-gray-500 line-through mt-0.5" style={{ fontSize: '0.75rem' }}>
                      $294.00
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-extrabold" style={{ color: '#2F6657', fontSize: '1.25rem', fontWeight: 800 }}>
                    $59.00
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Month Plan */}
            <div 
              className="bg-white rounded-lg cursor-pointer transition-all border"
              style={{
                borderColor: selectedPlan === '3-month' ? '#2F6657' : '#E0E0E0',
                borderWidth: selectedPlan === '3-month' ? '2px' : '1px',
                borderStyle: 'solid'
              }}
              onClick={() => setSelectedPlan('3-month')}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selectedPlan === '3-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '3-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '3-month' && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      3 month plan
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontSize: '0.75rem' }}>
                      Billed every 3 months
                    </p>
                    <p className="text-xs text-gray-500 line-through mt-0.5" style={{ fontSize: '0.75rem' }}>
                      $99.00
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-extrabold text-gray-900" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    $39.00
                  </p>
                </div>
              </div>
            </div>

            {/* 1 Month Plan */}
            <div 
              className="bg-white rounded-lg cursor-pointer transition-all border"
              style={{
                borderColor: selectedPlan === '1-month' ? '#2F6657' : '#E0E0E0',
                borderWidth: selectedPlan === '1-month' ? '2px' : '1px',
                borderStyle: 'solid'
              }}
              onClick={() => setSelectedPlan('1-month')}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: selectedPlan === '1-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '1-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '1-month' && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      1 month plan
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontSize: '0.75rem' }}>
                      Billed every month
                    </p>
                    <p className="text-xs text-gray-500 line-through mt-0.5" style={{ fontSize: '0.75rem' }}>
                      $66.00
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-extrabold text-gray-900" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    $29.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Plan Button */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mb-4"
            style={{ backgroundColor: '#2F6657', fontSize: '1rem', fontWeight: 700 }}
          >
            Get my plan
          </button>

          <p className="text-xs text-center text-gray-600 mb-6 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            By continuing, I agree that my plan will automatically renew until I unsubscribe and KetoGo will charge my payment method every 6 months and I can cancel my subscription any time.
          </p>

          {/* Money Back Guarantee */}
          <div className="flex items-center justify-center gap-2 mb-8 p-3 rounded-lg" style={{ backgroundColor: '#E8DDD0' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center relative flex-shrink-0" style={{ backgroundColor: '#2F6657' }}>
              <svg className="w-5 h-5 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-xs font-bold" style={{ color: '#2F6657', fontSize: '0.75rem' }}>30-day money back guarantee</p>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h3 className="text-xl font-extrabold text-gray-900 text-center mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
              What's included?
            </h3>
            <p className="text-xs text-gray-700 text-center mb-5 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
              The perfect combination of healthy meals. Keto nutrition tips and accompanying tools for the fastest and lasting results.
            </p>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">🍽️</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>Specifically tailored weight loss plan to achieve your goals the fastest and easiest way possible according to your weight, health and lifestyle</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">📖</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>600+ delicious, nutritious and healthy recipes for all your everyday meals</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">🪞</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>Track your weight loss progress daily and see the results in the mirror</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">💡</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>An abundance of weight-loss insights and tricks</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">🎧</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>24/7 customer support</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">❌</div>
                <div>
                  <p className="text-xs text-gray-900 leading-relaxed" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                    <span className="font-bold" style={{ fontWeight: 700 }}>Cancel any time</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Plan Button */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mb-8"
            style={{ backgroundColor: '#2F6657', fontSize: '1rem', fontWeight: 700 }}
          >
            Get my plan
          </button>

          {/* Testimonial Section */}
          <div className="mb-8">
            <h3 className="text-lg font-extrabold text-gray-900 text-center mb-4" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
              See real, visible changes after the first week.
            </h3>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
              <div className="grid grid-cols-2">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={testimonialImage.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={testimonialImage.after}
                    alt="After"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 p-3 text-center">
                <div className="text-xs font-semibold text-gray-700" style={{ fontSize: '0.75rem' }}>Before</div>
                <div className="text-xs font-semibold" style={{ color: '#2F6657', fontSize: '0.75rem' }}>After</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-xs font-bold text-gray-900 mb-2 text-center" style={{ fontSize: '0.75rem' }}>
                Lost 18 kg in 2 months
              </p>
              <p className="text-xs text-gray-700 leading-relaxed text-center italic mb-2" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                "Always struggling with being overweight was making my life a torture. That was until my birthday when my sister showed me this app. It was so easy to follow, that after first few weeks I already lost 8 kg. After my first month with this plan, I saw remarkable improvements in the mirror"
              </p>
              <p className="text-xs font-bold text-gray-900 text-center" style={{ fontSize: '0.75rem' }}>{isFemale ? 'Jane T.' : 'John T.'}</p>
            </div>
          </div>

          {/* Media Coverage */}
          <div className="mb-8">
            <h3 className="text-lg font-extrabold text-gray-900 text-center mb-4" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
              Keto diet has been covered in
            </h3>
            <div className="flex justify-center items-center gap-6 flex-wrap grayscale opacity-60 mb-6">
              <div className="text-sm font-serif font-bold" style={{ fontSize: '0.875rem' }}>The Washington Post</div>
              <div className="text-lg font-bold" style={{ fontSize: '1rem' }}>CNN</div>
              <div className="text-sm font-serif" style={{ fontSize: '0.875rem' }}>MNT Medical News Today</div>
            </div>
          </div>

          {/* 500,000+ Achievement */}
          <div className="text-center mb-6">
            <div className="text-4xl mb-2" style={{ fontSize: '2rem' }}>💪 500,000+</div>
            <p className="text-sm font-bold text-gray-900 leading-relaxed" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
              First time users have achieved their weight goal with us and embraced a healthier lifestyle
            </p>
          </div>

          {/* Final CTA */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mb-6"
            style={{ backgroundColor: '#2F6657', fontSize: '1rem', fontWeight: 700 }}
          >
            Get my plan
          </button>

          {/* Final Guarantee */}
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg mb-6" style={{ backgroundColor: '#E8DDD0' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative" style={{ backgroundColor: '#2F6657' }}>
              <svg className="w-5 h-5 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold mb-1" style={{ color: '#2F6657', fontSize: '0.75rem' }}>30-day money back guarantee</p>
              <p className="text-xs text-gray-700" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                Get 100% of your investment back if you don't see visible results after following your program!
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-center" style={{ fontSize: '0.875rem' }}>Disclaimer</h3>
            <p className="text-xs text-gray-900 leading-relaxed text-center" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
              The outcomes you achieve may differ based on factors such as your initial condition, objectives, dedication, and the accuracy of the information presented in this form. Typical users of KetoGo.app can experience a weight loss of up to 2 kg in the initial week. The content provided on this website should not be considered medical advice. It is your responsibility to prioritize your health and safety at all times. For any inquiries, please consult a medical professional.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

