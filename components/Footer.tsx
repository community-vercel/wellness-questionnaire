import React from 'react';

interface FooterProps {
  isLandingPage?: boolean;
}

export default function Footer({ isLandingPage = false }: FooterProps) {
  const textColor = '#000000'; // All text is black
  const linkColor = '#2F6657'; // Links are dark green to match reference
  
  return (
    <footer className="w-full relative z-20" style={{ marginTop: isLandingPage ? '0' : '128px' }}>
      {/* Disclaimer Section */}
      <div className="w-full py-6" style={{ backgroundColor: '#fcf7f0' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="font-bold mb-2" style={{ fontSize: '14px', color: textColor, fontWeight: 700 }}>Disclaimer</h3>
          <p className="mb-2 leading-relaxed" style={{ fontSize: '12px', color: textColor, lineHeight: '1.6' }}>
            The outcomes you achieve may differ based on factors such as your initial condition, objectives, dedication, and the accuracy of the information presented in this form. Typical users of KetoGo.app can experience a weight loss of up to 3 kg in the initial week.
          </p>
          <p className="leading-relaxed" style={{ fontSize: '12px', color: textColor, lineHeight: '1.6' }}>
            The content provided on this website should not be considered medical advice. It is your responsibility to prioritize your health and safety at all times. For any inquiries, please consult a medical professional.
          </p>
        </div>
      </div>

      {/* Brand and Services Section */}
      <div className="w-full py-6" style={{ backgroundColor: '#e8ddd0' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-xl">🥑</span>
            <span className="font-bold" style={{ color: '#000000', fontSize: '18px', fontWeight: 700 }}>
              KetoGO<span className="font-normal" style={{ color: '#000000' }}>.app</span>
            </span>
          </div>
          <p className="mb-5" style={{ fontSize: '14px', color: textColor }}>
            The service is provided by certified nutrition experts and trainers.
          </p>

          {/* Support Options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <div className="flex items-start gap-2">
                <div className="flex items-center justify-center w-6 h-6 mt-0.5">
                  <svg className="w-6 h-6" style={{ color: '#000000' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-0.5" style={{ fontSize: '14px', color: textColor, fontWeight: 700 }}>Chat with us</h4>
                  <p className="leading-relaxed" style={{ fontSize: '12px', color: textColor, lineHeight: '1.6' }}>
                    Our certified Nutritionist team is available through your account chat section. We are here for you 24/7
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <div className="flex items-center justify-center w-6 h-6 mt-0.5">
                  <svg className="w-6 h-6" style={{ color: '#000000' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-0.5" style={{ fontSize: '14px', color: textColor, fontWeight: 700 }}>Get help</h4>
                  <p className="leading-relaxed" style={{ fontSize: '12px', color: textColor, lineHeight: '1.6' }}>
                    Want to learn more about Keto diet, want to manage your subscription, or have any questions? Just click on Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4" style={{ fontSize: '12px' }}>
            <a href="#" className="underline" style={{ fontSize: '12px', color: '#666666', textDecoration: 'underline', fontWeight: 'normal' }} onMouseEnter={(e) => e.currentTarget.style.color = '#666666'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>
              Edit cookie preferences
            </a>
            <span style={{ color: '#666666' }}> &gt; </span>
            <a href="#" className="underline" style={{ fontSize: '12px', color: '#666666', textDecoration: 'underline', fontWeight: 'normal' }} onMouseEnter={(e) => e.currentTarget.style.color = '#666666'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>
              Terms of Privacy policy
            </a>
            <span style={{ color: '#666666' }}> &gt; </span>
            <a href="#" className="underline" style={{ fontSize: '12px', color: '#666666', textDecoration: 'underline', fontWeight: 'normal' }} onMouseEnter={(e) => e.currentTarget.style.color = '#666666'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>
              Terms of subscription services
            </a>
          </div>

          {/* Facebook Disclaimer */}
          <p className="mb-3" style={{ fontSize: '11px', lineHeight: '1.4', color: textColor }}>
            The results differ from person to person. This site is not a part of the Facebook website of Facebook Inc. Additionally this site is NOT endorsed by Facebook in any way. Facebook is a trademark of Facebook, Inc.
          </p>
        </div>
      </div>

      {/* Copyright - Full Width, Stuck to Bottom */}
      <div className="bg-[#2F6657] w-full" style={{ 
        height: '48px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingLeft: '16px',
        paddingRight: '16px'
      }}>
        <p className="text-white text-center" style={{ fontSize: '11px' }}>KetoGo.app all rights reserved 2025</p>
      </div>
    </footer>
  );
}