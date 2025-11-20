import React from 'react';

interface HeaderProps {
  showProfileIcon?: boolean;
  isDark?: boolean;
}

export default function Header({ showProfileIcon = false, isDark = false }: HeaderProps) {
  return (
    <header className="w-full px-4 sm:px-6 py-3 relative z-20" style={{ backgroundColor: '#b5c2b0' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-xl">🥑</span>
          <span className="text-base sm:text-lg font-bold text-gray-900">
            KetoGO<span className="font-normal">.app</span>
          </span>
        </div>
        {showProfileIcon && (
          <button 
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-transparent"
            aria-label="Profile"
          >
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}

