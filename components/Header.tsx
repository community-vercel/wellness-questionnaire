import React from 'react';

interface HeaderProps {
  showProfileIcon?: boolean;
  isDark?: boolean;
}

export default function Header({ showProfileIcon = false, isDark = false }) {
  return (
    <header className="w-full px-4 sm:px-6 py-3 relative z-20" style={{ backgroundColor: 'rgba(255,243,229,0.7)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-xl">🥑</span>
          <span className="font-bold" style={{ color: '#12573d', fontSize: '18px' }}>
            KetoGo<span className="font-bold" style={{ color: '#2F6657', fontSize: '16px' }}>.app</span>
          </span>
        </div>
        {showProfileIcon && (
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#12573d' }}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </header>
  );
}