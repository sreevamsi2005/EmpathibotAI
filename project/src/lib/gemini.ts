import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyBlxuIz4k9LZKyP4Ob5EQ37hpk-lF6dW28');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const SYSTEM_PROMPT = `You are an empathetic AI assistant designed to provide emotionally intelligent responses.
Your responses should be:
- Emotionally aware and supportive
- Concise but meaningful
- Natural and conversational
- Appropriate to the user's emotional state
Always maintain a caring and understanding tone.`;

export async function generateGeminiResponse(userInput: string, emotion?: string): Promise<string> {
  try {
    const prompt = `${SYSTEM_PROMPT}\n\nUser's emotional state: ${emotion || 'unknown'}\nUser message: ${userInput}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating Gemini response:', error);
    return "I apologize, but I'm having trouble processing your request at the moment. Could you please try again?";
  }
}