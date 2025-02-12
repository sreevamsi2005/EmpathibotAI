import { generalResponses } from './responses';
import type { MessageSentiment, Message, ConversationType } from './types';

function detectConversationType(text: string): ConversationType {
  const lowercaseText = text.toLowerCase();
  
  const patterns = {
    greeting: /^(hi|hello|hey|howdy|greetings|good\s*(morning|afternoon|evening)|what'?s\s*up|hola|bonjour)/i,
    capabilities: /(what|how).*(can|do|capable|work|tell).*(you|yourself)|who are you/i,
    personal: /(your|you).*(name|human|ai|real|bot|person|feel|think)/i,
    deep: /(feel|feeling|emotion|heart|soul|deep|inside|truly).*(lonely|lost|confused|overwhelmed|happy|blessed|grateful)/i
  };

  if (patterns.greeting.test(lowercaseText)) return 'greeting';
  if (patterns.capabilities.test(lowercaseText)) return 'capabilities';
  if (patterns.personal.test(lowercaseText)) return 'personal';
  if (patterns.deep.test(lowercaseText)) return 'deep';

  return 'general_query';
}

function analyzeSentiment(text: string): { 
  sentiment: MessageSentiment; 
  confidence: number;
  context: string[];
} {
  const lowercaseText = text.toLowerCase();
  
  // Positive indicators
  const positivePatterns = [
    /\b(happy|great|good|love|thank|excited|wonderful|awesome|amazing|excellent)\b/i,
    /[😊🙂😃😄😁💗💖💝💪👍⭐️✨]/gu,
    /\b(appreciate|grateful|blessed|fantastic|brilliant)\b/i
  ];

  // Negative indicators
  const negativePatterns = [
    /\b(sad|angry|upset|worried|afraid|sorry|hate|bad|wrong|terrible)\b/i,
    /[😢😭😔😕😠😡😨😰😩]/gu,
    /\b(disappointed|frustrated|annoyed|concerned|anxious)\b/i
  ];

  let positiveScore = 0;
  let negativeScore = 0;

  positivePatterns.forEach(pattern => {
    const matches = text.match(pattern) || [];
    positiveScore += matches.length;
  });

  negativePatterns.forEach(pattern => {
    const matches = text.match(pattern) || [];
    negativeScore += matches.length;
  });

  // Extract contextual factors
  const contextualFactors = [
    ...text.match(/\b(because|since|when|after|before)\b.*?[.!?]/gi) || [],
    ...text.match(/\b(feel|feeling|felt)\b.*?[.!?]/gi) || [],
    ...text.match(/\b(think|thought|believe)\b.*?[.!?]/gi) || []
  ];

  const totalScore = positiveScore + negativeScore;
  const confidence = totalScore > 0 ? Math.max(positiveScore, negativeScore) / totalScore : 0.5;

  let sentiment: MessageSentiment = 'neutral';
  if (positiveScore > negativeScore) sentiment = 'positive';
  if (negativeScore > positiveScore) sentiment = 'negative';

  return {
    sentiment,
    confidence,
    context: contextualFactors
  };
}

export function createMessage(text: string, sender: 'user' | 'bot'): Message {
  const analysis = sender === 'user' ? analyzeSentiment(text) : undefined;
  
  return {
    id: Math.random().toString(36).substring(7),
    text,
    sender,
    sentiment: analysis?.sentiment,
    confidence: analysis?.confidence,
    context: analysis?.context,
    timestamp: new Date()
  };
}