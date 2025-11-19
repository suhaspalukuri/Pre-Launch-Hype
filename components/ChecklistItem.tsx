import React from 'react';
import type { ChecklistItemType } from '../types';

interface ChecklistItemProps {
    item: ChecklistItemType;
    onToggle: (id: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onToggle }) => {
    return (
        <li className="p-4 hover:bg-[var(--color-hover-bg)] transition-colors duration-200">
            <label className="flex items-center cursor-pointer group">
                <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => onToggle(item.id)}
                    className="custom-checkbox shrink-0"
                />
                <span className={`ml-4 text-[var(--color-text)] transition-colors duration-300 ${
                    item.done ? 'line-through text-[var(--color-text-secondary)]' : 'group-hover:text-[var(--color-text)]'
                }`}>
                    {item.text}
                </span>
            </label>
        </li>
    );
};

export default ChecklistItem;