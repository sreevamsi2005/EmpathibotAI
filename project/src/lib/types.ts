export type Theme = 'light' | 'dark' | 'system';
export type MessageSentiment = 'positive' | 'neutral' | 'negative';
export type AvatarExpression = 'neutral' | 'happy' | 'thoughtful' | 'concerned';
export type AnimationLevel = 'none' | 'minimal' | 'full';

export interface Settings {
  theme: Theme;
  fontSize: 'small' | 'medium' | 'large';
  enableSound: boolean;
  enableHaptic: boolean;
  avatarEnabled: boolean;
  useGlassmorphism: boolean;
  animationLevel: AnimationLevel;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  sentiment?: MessageSentiment;
  timestamp: Date;
  confidence?: number;
  context?: string[];
  expression?: AvatarExpression;
}