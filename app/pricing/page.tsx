'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('6-month');
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleGetPlan = () => {
    // In real app, would process payment
    // After payment, redirect to dashboard
    router.push('/dashboard');
  };

  // Get user data from answers
  const currentWeight = answers[5]?.value || '224';
  const targetWeight = answers[6]?.value || '51';
  const currentBMI = answers[5]?.value ? (parseFloat(currentWeight) / Math.pow(1.7, 2)).toFixed(1) : '93.2';
  const targetBMI = answers[6]?.value ? (parseFloat(targetWeight) / Math.pow(1.7, 2)).toFixed(1) : '21.2';
  const targetDate = answers[37]?.value || 'July 3, 2027';

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff3e5' }}>
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Gift Icon */}
          <div className="flex justify-center mb-4">
            <div className="text-6xl">🎁</div>
          </div>

          {/* Headline */}
          <h1 className="text-center mb-2">
            <span className="text-3xl md:text-4xl font-extrabold text-gray-900">Get your </span>
            <span className="text-3xl md:text-4xl font-extrabold" style={{ color: '#2F6657' }}>80% discount!</span>
          </h1>
          <p className="text-center text-sm text-gray-600 mb-10">It's a one-time offer! Don't miss it!</p>

          {/* Before/After Comparison */}
          <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-600 mb-3">You today</p>
                <div className="w-full aspect-[3/4] rounded-lg mb-3 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #FFB6C1 0%, #DDA0DD 100%)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" 
                    alt="Before"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs font-bold text-gray-900 mb-1">Current weight {currentWeight}kg</p>
                <p className="text-xs font-bold text-gray-900 mb-1">Current BMI {currentBMI}</p>
                <p className="text-xs font-bold text-gray-900 mb-1 mt-2">Metabolic efficiency</p>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-full rounded-full" style={{ width: '30%', backgroundColor: '#F0A868' }}></div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-600 mb-3">You on {targetDate}</p>
                <div className="w-full aspect-[3/4] rounded-lg mb-3 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #ADD8E6 0%, #87CEEB 100%)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop" 
                    alt="After"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs font-bold text-gray-900 mb-1">Achieved weight {targetWeight}kg</p>
                <p className="text-xs font-bold text-gray-900 mb-1">Achieved BMI {targetBMI}</p>
                <p className="text-xs font-bold text-gray-900 mb-1 mt-2">Metabolic efficiency</p>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: '#F0A868' }}></div>
                </div>
              </div>
            </div>
            
            {/* Arrow between images */}
            <div className="flex justify-center -mt-2 mb-2">
              <svg className="w-8 h-8" style={{ color: '#2F6657' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Pricing Plans */}
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
            Claim your weight loss plan!
          </h2>

          <div className="space-y-3 mb-8">
            {/* 6 Month Plan - BEST DEAL */}
            <div 
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedPlan === '6-month' 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white border border-gray-200'
              }`}
              style={{
                borderColor: selectedPlan === '6-month' ? '#2F6657' : '#E0E0E0',
                borderWidth: selectedPlan === '6-month' ? '2px' : '1px',
                boxShadow: selectedPlan === '6-month' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
              }}
              onClick={() => setSelectedPlan('6-month')}
            >
              <div className="absolute top-0 left-0 right-0 text-white text-xs font-bold text-center py-1.5" style={{ backgroundColor: '#2F6657' }}>
                  BEST DEAL - 80% OFF
                </div>
              <div className={`p-5 pt-10 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded border-2 flex items-center justify-center"
                    style={{
                      borderColor: selectedPlan === '6-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '6-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '6-month' && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">
                      6 month plan
                    </p>
                    <p className="text-xs text-gray-600">
                      Billed every 6 months
                    </p>
                    <p className="text-xs text-gray-500 line-through mt-1">
                      $294.00
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold" style={{ color: '#2F6657' }}>
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
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
              onClick={() => setSelectedPlan('3-month')}
            >
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded border-2 flex items-center justify-center"
                    style={{
                      borderColor: selectedPlan === '3-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '3-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '3-month' && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">
                      3 month plan
                    </p>
                    <p className="text-xs text-gray-600">
                      Billed every 3 months
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-gray-900">
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
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
              onClick={() => setSelectedPlan('1-month')}
            >
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded border-2 flex items-center justify-center"
                    style={{
                      borderColor: selectedPlan === '1-month' ? '#2F6657' : '#D3D3D3',
                      backgroundColor: selectedPlan === '1-month' ? '#2F6657' : 'transparent'
                    }}
                  >
                    {selectedPlan === '1-month' && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-base text-gray-900">
                      1 month plan
                    </p>
                    <p className="text-xs text-gray-600">
                      Billed every 1 month
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-gray-900">
                    $29.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Plan Button */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg mb-4"
            style={{ backgroundColor: '#2F6657' }}
          >
            Get my plan
          </button>

          <p className="text-xs text-center text-gray-600 mb-8 leading-relaxed">
            By subscribing, I agree that my subscription will continue until I cancel it and Ketoviser will charge the selected payment method each billing period until I cancel. I can cancel anytime.
          </p>

          {/* Money Back Guarantee */}
          <div className="flex items-center justify-center gap-3 mb-10 p-4 rounded-lg" style={{ backgroundColor: '#E8DDD0' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F6657' }}>
              <span className="text-white font-bold text-sm">100%</span>
              <svg className="w-4 h-4 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-bold" style={{ color: '#2F6657' }}>30-day money back guarantee</p>
          </div>

          {/* What's Included */}
          <div className="mb-10">
            <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
              What's included?
            </h3>
            <p className="text-sm text-gray-700 text-center mb-6 leading-relaxed">
              The verified combination of health, fitness, Keto nutrition tips and accompanying tools for the fastest and lasting results
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">🥗</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">Specifically tailored weight loss plan</span> to achieve your goals the fastest and easiest way possible according to your body specifications
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">🍽️</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">900+ delicious, nutritious and healthy recipes</span> for all your new meals
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">📊</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">Track your weight loss progress daily</span>, and see the results in the mirror
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">💡</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">An abundance of weight-loss insights and tricks</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">👥</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">24/7 customer support</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-3xl flex-shrink-0">⏰</div>
                <div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-bold">Cancel any time</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Plan Button */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg mb-10"
            style={{ backgroundColor: '#2F6657' }}
          >
            Get my plan
          </button>

          {/* Testimonial Section */}
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-center mb-2">
              See real, visible changes{' '}
              <span className="text-primary">after the first week</span>
            </h3>

            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg mb-6">
              <div className="grid grid-cols-2">
                <div className="aspect-[3/4] bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-6xl">💪</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="text-3xl">▶️</div>
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 text-center text-xs font-bold">
                <div className="text-gray-700">Before</div>
                <div className="text-primary">After</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-2 text-center">
                Lost 16 kg in 2 months
              </p>
              <p className="text-xs text-gray-700 leading-relaxed text-center italic">
                "Always struggling with being overweight and wearing big life a banana. That was until my 30th birthday when the same showed that this was a 46 kg toll. After this I kept myself with this plan I am even stronger now and constantly feeling hungry. After dieting for 16 kg (around 35lbs) my coworkers started asking me how i did it. Will definitely recommended to my friends!"
              </p>
              <p className="text-xs font-bold text-gray-900 text-center mt-3">Joe R.</p>
            </div>
          </div>

          {/* Media Coverage */}
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-gray-900 text-center mb-6">
              Keto diet has been covered in
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap grayscale opacity-60">
              <div className="text-lg font-serif font-bold">The Washington Post</div>
              <div className="text-2xl font-bold">CNN</div>
              <div className="text-lg font-serif">MSN</div>
            </div>
          </div>

          {/* 500,000+ Achievement */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">💪 500,000+ 💪</div>
            <p className="text-base font-bold text-gray-900 leading-relaxed">
              First time users have achieved their weight goal with us and embraced a healthier lifestyle
            </p>
          </div>

          {/* Final CTA */}
          <button
            onClick={handleGetPlan}
            className="w-full text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg mb-8"
            style={{ backgroundColor: '#2F6657' }}
          >
            Get my plan
          </button>

          {/* Final Guarantee */}
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg mb-8" style={{ backgroundColor: '#E8DDD0' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative" style={{ backgroundColor: '#2F6657' }}>
              <span className="text-white font-bold text-sm">100%</span>
              <svg className="w-4 h-4 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold" style={{ color: '#2F6657' }}>30-day money back guarantee</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

