import React from 'react';
import type { Message, AnimationLevel } from '../lib/types';
import { User } from 'lucide-react';
import { ChatAvatar } from './ChatAvatar';

interface ChatMessageProps {
  message: Message;
  useGlassmorphism: boolean;
  animationLevel: AnimationLevel;
}

const sentimentStyles = {
  positive: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-200 dark:from-emerald-500/5 dark:to-teal-500/5',
  negative: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-200 dark:from-rose-500/5 dark:to-pink-500/5',
  neutral: 'bg-gradient-to-br from-slate-500/10 to-gray-500/10 border-gray-200 dark:from-slate-500/5 dark:to-gray-500/5'
};

const sentimentGradients = {
  positive: 'from-emerald-600 to-teal-600',
  negative: 'from-rose-600 to-pink-600',
  neutral: 'from-slate-600 to-gray-600'
};

export function ChatMessage({ message, useGlassmorphism, animationLevel }: ChatMessageProps) {
  const isBot = message.sender === 'bot';
  const alignmentClass = isBot ? 'justify-start' : 'justify-end';
  const gradientClass = message.sentiment 
    ? sentimentGradients[message.sentiment] 
    : 'from-violet-600 to-indigo-600';
  
  const getAnimationClass = () => {
    switch (animationLevel) {
      case 'full':
        return 'animate-fade-in hover:scale-[1.02]';
      case 'minimal':
        return 'animate-fade-in';
      default:
        return '';
    }
  };

  return (
    <div className={`flex ${alignmentClass} mb-4 items-end group ${getAnimationClass()}`}>
      <div className="flex items-start max-w-[85%] relative">
        {isBot && (
          <div className="mr-2 mb-1">
            <div className={`w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 p-0.5 ${
              animationLevel === 'full' ? 'hover:scale-110 transition-transform' : ''
            }`}>
              <div className="w-full h-full rounded-[10px] overflow-hidden bg-white dark:bg-gray-900">
                <ChatAvatar 
                  expression={message.expression || 'neutral'} 
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className={`relative rounded-2xl px-4 py-3 shadow-sm ${
          useGlassmorphism ? 'backdrop-blur-sm' : ''
        } ${
          isBot 
            ? `${message.sentiment ? sentimentStyles[message.sentiment] : 'bg-white/90 dark:bg-gray-800/90'} border` 
            : `bg-gradient-to-r ${gradientClass} text-white`
        } ${isBot ? 'rounded-bl-none' : 'rounded-br-none'} transition-all duration-200`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>

        {!isBot && (
          <div className="ml-2 mb-1">
            <div className={`p-2 rounded-xl bg-gradient-to-r ${gradientClass} text-white shadow-md ${
              animationLevel === 'full' ? 'hover:scale-110 transition-transform' : ''
            }`}>
              <User className="w-6 h-6" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}