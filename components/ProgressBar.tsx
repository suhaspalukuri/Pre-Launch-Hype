import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const safeProgress = Math.max(0, Math.min(100, progress));

    return (
        <div className="w-full bg-[var(--color-progress-bg)] rounded-full h-4 relative overflow-hidden">
            <div
                className="bg-[var(--color-progress-fill)] h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${safeProgress}%` }}
            >
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                {Math.round(safeProgress)}%
            </span>
        </div>
    );
};

export default ProgressBar;