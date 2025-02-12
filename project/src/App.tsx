import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Settings as SettingsIcon, Mic, Image, Smile, VolumeX, Volume2, Maximize2, Minimize2 } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { SettingsPanel } from './components/Settings';
import { EmotionIndicator } from './components/EmotionIndicator';
import { createMessage } from './lib/utils';
import { generateGeminiResponse } from './lib/gemini';
import type { Message, Settings as SettingsType, MessageSentiment } from './lib/types';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    createMessage("Hello! I'm an AI assistant ready to help. How can I assist you today?", 'bot')
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<MessageSentiment>('neutral');
  const [settings, setSettings] = useState<SettingsType>({
    theme: 'system',
    fontSize: 'medium',
    enableSound: true,
    enableHaptic: true,
    avatarEnabled: true,
    useGlassmorphism: true,
    animationLevel: 'full'
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (settings.theme === 'dark' || (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [settings.theme]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    if (settings.enableHaptic && navigator.vibrate) {
      navigator.vibrate(50);
    }

    const userMessage = createMessage(input, 'user');
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);
    setCurrentEmotion(userMessage.sentiment || 'neutral');

    try {
      const response = await generateGeminiResponse(input, userMessage.sentiment);
      
      setIsThinking(false);
      setIsTyping(true);

      if (settings.enableSound) {
        new Audio('data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==').play();
      }

      const botMessage = createMessage(response, 'bot');
      const typingDelay = Math.min(1000 + (response.length * 25), 4000);

      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = createMessage("I apologize, but I'm having trouble responding right now. Could you please try again?", 'bot');
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsThinking(false);
    }
  };

  const emotionBasedGradient = {
    positive: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    negative: 'from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30',
    neutral: 'from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30'
  };

  return (
    <div ref={containerRef} className={`min-h-screen bg-gradient-to-br ${emotionBasedGradient[currentEmotion]} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex gap-6">
          <div className="flex-1">
            <div className={`${settings.useGlassmorphism ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-800/80' : 'bg-white dark:bg-gray-800'} rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700`}>
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold text-white">EmpathibotAI</h1>
                      <p className="text-sm text-gray-300">Emotionally Intelligent Assistant</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSettings(s => ({ ...s, enableSound: !s.enableSound }))}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title={settings.enableSound ? 'Mute sound' : 'Unmute sound'}
                    >
                      {settings.enableSound ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-white" />}
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? <Minimize2 className="w-5 h-5 text-white" /> : <Maximize2 className="w-5 h-5 text-white" />}
                    </button>
                    <button
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Settings"
                    >
                      <SettingsIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <EmotionIndicator emotion={currentEmotion} className="mt-3" />
              </div>

              {/* Chat Area */}
              <div className="h-[600px] overflow-y-auto p-4 bg-gray-50/50 dark:bg-gray-900/50">
                {messages.map(message => (
                  <ChatMessage 
                    key={message.id} 
                    message={message} 
                    useGlassmorphism={settings.useGlassmorphism}
                    animationLevel={settings.animationLevel}
                  />
                ))}
                {isThinking && (
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm ml-12 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <div className="text-sm">Processing...</div>
                  </div>
                )}
                {isTyping && (
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm ml-12 mt-2">
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="flex gap-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Voice input"
                    >
                      <Mic className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Upload image"
                    >
                      <Image className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Emoji picker"
                    >
                      <Smile className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    disabled={isTyping || isThinking}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping || isThinking}
                    className="px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Settings Panel */}
          {isSettingsOpen && (
            <div className="w-80 animate-slide-in">
              <SettingsPanel
                settings={settings}
                onSettingsChange={setSettings}
                className="sticky top-8"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;