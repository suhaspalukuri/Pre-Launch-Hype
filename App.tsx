import React, { useMemo, useCallback } from 'react';
import { CHECKLIST_DATA } from './constants';
import type { ChecklistSectionType } from './types';
import ChecklistSection from './components/ChecklistSection';
import ProgressBar from './components/ProgressBar';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
    const [checklistData, setChecklistData] = useLocalStorage<ChecklistSectionType[]>('prelaunch-checklist-progress', CHECKLIST_DATA);
    
    const handleToggleItem = useCallback((itemId: string) => {
        setChecklistData(prevData =>
            prevData.map(section => ({
                ...section,
                items: section.items.map(item =>
                    item.id === itemId ? { ...item, done: !item.done } : item
                ),
            }))
        );
    }, [setChecklistData]);
    
    const { totalItems, completedItems } = useMemo(() => {
        let total = 0;
        let completed = 0;
        checklistData.forEach(section => {
            total += section.items.length;
            completed += section.items.filter(item => item.done).length;
        });
        return { totalItems: total, completedItems: completed };
    }, [checklistData]);

    const overallProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

    return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] p-4 sm:p-6 lg:p-8 transition-colors duration-300">
            <main className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] tracking-tight">
                        Pre-Launch Hype Checklist
                    </h1>
                    <p className="mt-3 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Your comprehensive guide to a successful product launch. Never miss a critical step again.
                    </p>
                </header>

                <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-2">
                         <h2 className="text-lg font-semibold text-[var(--color-text)]">Overall Progress</h2>
                         <span className="text-sm font-medium text-[var(--color-text-secondary)]">{completedItems} / {totalItems} Tasks Completed</span>
                    </div>
                    <ProgressBar progress={overallProgress} />
                </div>
                
                <div className="space-y-6">
                    {checklistData.map(section => (
                        <ChecklistSection 
                            key={section.title}
                            section={section}
                            onToggleItem={handleToggleItem}
                        />
                    ))}
                </div>
                
                <footer className="text-center mt-12 text-sm text-[var(--color-text-secondary)]">
                    <p>Copyright © 2025 The Half Idea. All rights reserved.</p>
                    <p><a href="https://www.linkedin.com/in/suhaspalukuri/">Suhas Palukuri</a> & <a href="https://www.linkedin.com/in/kavyaarohi/">Kavya Arohi</a></p>
                </footer>
            </main>
        </div>
    );
};

export default App;