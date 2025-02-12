import React from 'react';
import { Settings as SettingsIcon, Volume2, Smartphone, Type, Layers, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import type { Settings, AnimationLevel } from '../lib/types';

interface SettingsPanelProps {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
  className?: string;
}

export function SettingsPanel({ settings, onSettingsChange, className = '' }: SettingsPanelProps) {
  const animationLevels: { value: AnimationLevel; label: string }[] = [
    { value: 'none', label: 'None' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'full', label: 'Full' }
  ];

  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <SettingsIcon className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <ThemeToggle
            theme={settings.theme}
            onChange={(theme) => onSettingsChange({ ...settings, theme })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4" />
            <select
              value={settings.fontSize}
              onChange={(e) => onSettingsChange({ ...settings, fontSize: e.target.value as any })}
              className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent p-2"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Animation Level</label>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <select
              value={settings.animationLevel}
              onChange={(e) => onSettingsChange({ ...settings, animationLevel: e.target.value as AnimationLevel })}
              className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent p-2"
            >
              {animationLevels.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">Sound Effects</span>
          </div>
          <button
            onClick={() => onSettingsChange({ ...settings, enableSound: !settings.enableSound })}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.enableSound ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                settings.enableSound ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Haptic Feedback</span>
          </div>
          <button
            onClick={() => onSettingsChange({ ...settings, enableHaptic: !settings.enableHaptic })}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.enableHaptic ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                settings.enableHaptic ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span className="text-sm">Glassmorphism</span>
          </div>
          <button
            onClick={() => onSettingsChange({ ...settings, useGlassmorphism: !settings.useGlassmorphism })}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.useGlassmorphism ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                settings.useGlassmorphism ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Show Avatar</span>
          <button
            onClick={() => onSettingsChange({ ...settings, avatarEnabled: !settings.avatarEnabled })}
            className={`w-11 h-6 rounded-full transition-colors ${
              settings.avatarEnabled ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                settings.avatarEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}