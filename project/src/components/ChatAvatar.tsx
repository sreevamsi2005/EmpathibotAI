import React from 'react';
import type { AvatarExpression } from '../lib/types';

interface ChatAvatarProps {
  expression: AvatarExpression;
  className?: string;
}

export function ChatAvatar({ expression, className = '' }: ChatAvatarProps) {
  const expressions = {
    neutral: 'https://api.dicebear.com/7.x/bottts/svg?seed=neutral&backgroundColor=transparent',
    happy: 'https://api.dicebear.com/7.x/bottts/svg?seed=happy&backgroundColor=transparent&mouth=smile01,smile02',
    thoughtful: 'https://api.dicebear.com/7.x/bottts/svg?seed=thoughtful&backgroundColor=transparent&mouth=kawaii',
    concerned: 'https://api.dicebear.com/7.x/bottts/svg?seed=concerned&backgroundColor=transparent&mouth=worried'
  };

  return (
    <div className={`relative group ${className}`}>
      <img
        src={expressions[expression]}
        alt={`Bot avatar - ${expression}`}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}