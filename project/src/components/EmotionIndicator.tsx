import React from 'react';
import type { MessageSentiment } from '../lib/types';
import { Heart, Frown, Meh } from 'lucide-react';

interface EmotionIndicatorProps {
  emotion: MessageSentiment;
  className?: string;
}

export function EmotionIndicator({ emotion, className = '' }: EmotionIndicatorProps) {
  const emotionConfig = {
    positive: {
      icon: Heart,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500',
      label: 'Positive'
    },
    negative: {
      icon: Frown,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500',
      label: 'Negative'
    },
    neutral: {
      icon: Meh,
      color: 'text-gray-500',
      bgColor: 'bg-gray-500',
      label: 'Neutral'
    }
  };

  const { icon: Icon, color, bgColor, label } = emotionConfig[emotion];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${bgColor} animate-pulse-slow`} />
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-300">Current Mood:</span>
        <span className={`text-xs font-medium ${color}`}>{label}</span>
      </div>
    </div>
  );
}