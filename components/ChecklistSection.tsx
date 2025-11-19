import React, { useState, useMemo } from 'react';
import type { ChecklistSectionType } from '../types';
import ChecklistItem from './ChecklistItem';
import ProgressBar from './ProgressBar';

interface ChecklistSectionProps {
    section: ChecklistSectionType;
    onToggleItem: (id: string) => void;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
         className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const ChecklistSection: React.FC<ChecklistSectionProps> = ({ section, onToggleItem }) => {
    const [isOpen, setIsOpen] = useState(true);

    const { completed, total } = useMemo(() => {
        const totalItems = section.items.length;
        const completedItems = section.items.filter(item => item.done).length;
        return { completed: completedItems, total: totalItems };
    }, [section.items]);

    const progress = total > 0 ? (completed / total) * 100 : 0;

    return (
        <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-xl shadow-lg">
            <button
                className="w-full text-left p-6 flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div>
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{section.title}</h2>
                    <p className="text-[var(--color-text-secondary)] mt-1">{section.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] hidden sm:block">
                        {completed}/{total}
                    </span>
                    <ChevronIcon isOpen={isOpen} />
                </div>
            </button>
            
            <div className={`px-6 pb-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
                 <ProgressBar progress={progress} />
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <ul className="divide-y divide-[var(--color-border)]">
                    {section.items.map(item => (
                        <ChecklistItem key={item.id} item={item} onToggle={onToggleItem} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChecklistSection;