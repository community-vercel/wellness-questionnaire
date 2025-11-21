import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="relative">
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#fcf7f0' }}>
        <div
          className="h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: '#2F6657' }}
        />
      </div>
    </div>
  );
}

