import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import type { Theme } from '../lib/types';

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => onChange('light')}
        className={`p-2 rounded-md transition-all ${
          theme === 'light'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => onChange('dark')}
        className={`p-2 rounded-md transition-all ${
          theme === 'dark'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => onChange('system')}
        className={`p-2 rounded-md transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}