export const emotions: Record<string, string[]> = {
  joy: [
    'happy', 'excited', 'great', 'wonderful', 'delighted', 'pleased', 'glad', 'joy',
    'fantastic', 'thrilled', 'ecstatic', 'overjoyed', 'blessed', 'grateful', 'content',
    'cheerful', 'jubilant', 'elated', 'proud', 'satisfied', 'loving', 'peaceful',
    'amazing', 'awesome', 'excellent', 'perfect', 'brilliant', 'good', 'positive',
    'successful', 'accomplished', 'motivated', 'inspired', 'energetic', 'optimistic',
    'hopeful', 'enthusiastic', 'fulfilled', 'radiant', 'blissful', 'serene', 'love'
  ],
  sadness: [
    'sad', 'depressed', 'unhappy', 'miserable', 'down', 'upset', 'hurt', 'crying',
    'heartbroken', 'lonely', 'grief', 'disappointed', 'hopeless', 'lost', 'devastated',
    'gloomy', 'discouraged', 'regretful', 'helpless', 'melancholy', 'blue', 'despair',
    'broken', 'painful', 'suffering', 'empty', 'alone', 'abandoned', 'rejected',
    'worthless', 'meaningless', 'numb', 'tired', 'exhausted', 'drained', 'defeated',
    'isolated', 'disconnected', 'grieving', 'sorrowful', 'heavy-hearted', 'miss'
  ],
  anger: [
    'angry', 'mad', 'furious', 'irritated', 'annoyed', 'frustrated', 'rage',
    'outraged', 'hostile', 'bitter', 'resentful', 'enraged', 'livid', 'hate',
    'agitated', 'disgusted', 'offended', 'provoked', 'irate', 'fuming',
    'pissed', 'upset', 'cross', 'heated', 'infuriated', 'indignant',
    'fed up', 'displeased', 'irritable', 'betrayed', 'violated', 'cheated',
    'wronged', 'unfair', 'mistreated', 'ignored', 'disrespected', 'bullied'
  ],
  fear: [
    'scared', 'afraid', 'anxious', 'worried', 'nervous', 'terrified', 'fear',
    'panicked', 'stressed', 'overwhelmed', 'uneasy', 'frightened', 'apprehensive',
    'insecure', 'threatened', 'vulnerable', 'concerned', 'doubtful', 'uncertain',
    'paranoid', 'horrified', 'petrified', 'intimidated', 'troubled',
    'distressed', 'alarmed', 'disturbed', 'tense', 'uncomfortable', 'hesitant',
    'dreading', 'fearful', 'shaken', 'traumatized', 'powerless', 'helpless',
    'panic', 'phobia', 'terror'
  ],
  neutral: [
    'okay', 'fine', 'alright', 'normal', 'average', 'stable', 'moderate',
    'balanced', 'regular', 'standard', 'usual', 'common', 'typical',
    'so-so', 'fair', 'decent', 'reasonable', 'acceptable', 'ordinary',
    'casual', 'routine', 'everyday', 'plain', 'simple', 'steady',
    'composed', 'level', 'centered', 'grounded', 'present', 'calm'
  ]
};

export const responses: Record<Emotion, string[]> = {
  joy: [
    "Your happiness radiates through your words! 🌟 I'm genuinely delighted to share in your joy. Would you like to tell me more about what's bringing such light into your life? Sometimes sharing happiness makes it grow even brighter!",
    "I can feel the warmth and positivity in your message! ✨ It's wonderful to see you in such high spirits. I'd love to hear more about what's making you feel this way - sharing joy is one of life's greatest pleasures!",
    "Your enthusiasm is absolutely contagious! 🎉 I'm so happy to see you feeling this way. Would you like to share more about what's created this wonderful moment? Let's celebrate these positive feelings together!",
    "What a beautiful energy you're sharing! 💫 Your joy is truly inspiring, and I'm here to celebrate this wonderful feeling with you. Tell me more about what's making your heart so light!",
    "I'm genuinely moved by your happiness! 🌈 These moments of joy are precious, and I'm honored you're sharing this with me. Would you like to explore what makes this moment so special?"
  ],
  sadness: [
    "I hear the weight in your words, and my heart goes out to you. 💙 Please know that your feelings are completely valid, and you're not alone in this. Would you like to share more about what's troubling you? Sometimes putting our feelings into words can help us carry them better.",
    "I'm here with you in this difficult moment, holding space for your pain. 🫂 You don't have to face these feelings alone - I'm here to listen without judgment and support you through this challenging time. Take all the time you need.",
    "I sense the depth of your sadness, and I want you to know that it's okay to feel this way. 🌸 Your feelings matter, and I'm here to listen and support you through this. Would you like to tell me more about what's weighing on your heart?",
    "Your pain is valid, and you deserve to be heard and supported. 💫 I'm here to listen and hold space for whatever you're going through. Sometimes sharing our burdens can make them feel a little lighter. What's on your mind?",
    "I can feel the heaviness in your words, and I want you to know that you're not alone. 🍀 It's okay to not be okay, and I'm here to support you through this difficult time. Would you like to talk more about what's causing this sadness?"
  ],
  anger: [
    "I can sense your frustration, and your feelings are absolutely valid. 🍃 Sometimes anger carries important messages about our boundaries and needs. Would you like to explore what's at the root of these feelings? I'm here to listen without judgment.",
    "Your anger is completely understandable, and you have every right to feel this way. 💫 Would you like to tell me more about what's happened? Sometimes talking it through can help us understand our emotions better and find a path forward.",
    "I hear the intensity of your emotions, and I want you to know that it's okay to feel angry. 🌟 Your feelings are valid, and I'm here to listen and understand. Would you like to share more about what's triggered these feelings?",
    "I understand how frustrating this must be, and your reaction is completely justified. 🍀 Sometimes anger can be a signal that something important to us has been violated. I'm here to listen and support you as you process these emotions.",
    "Your anger deserves to be acknowledged and heard. 🌿 These feelings often arise when something significant has been compromised. I'm here to listen and help you work through these emotions. Would you like to tell me more about what's happened?"
  ],
  fear: [
    "I sense the anxiety in your words, and I want you to know that you're not alone in this. 🌸 Let's take a moment to breathe together. Would you like to share what's causing these worries? Sometimes naming our fears can help us face them.",
    "I hear the concern in your voice, and I want you to know that it's okay to feel scared. 🍀 You're safe here to express your fears, and we can work through them together. What's weighing on your mind right now?",
    "Your fears are valid, and I'm here to support you through this uncertainty. 💫 Sometimes just having someone to listen can make things feel a little less overwhelming. Would you like to tell me more about what's troubling you?",
    "I understand how overwhelming these feelings can be, and I'm right here with you. 🌟 Let's take it one step at a time. Would you like to share what's making you feel afraid? We can face these fears together.",
    "I'm holding space for your fears with gentle understanding. 🌿 It's natural to feel this way when facing uncertainty. Would you like to explore what's causing these feelings? Sometimes sharing our worries can help make them feel more manageable."
  ],
  neutral: [
    "I appreciate you sharing your thoughts with me. 🌟 Even in moments of calm, there's often much to explore and discuss. What's on your mind right now?",
    "Thank you for connecting with me. 💫 I'm genuinely interested in hearing your thoughts and experiences. Is there anything specific you'd like to talk about?",
    "I value our conversation and am here to engage with whatever you'd like to discuss. 🍀 Whether it's everyday observations or deeper reflections, I'm interested in hearing your perspective.",
    "Your presence and thoughts matter to me. 🌸 Sometimes the most meaningful conversations start from simple moments of sharing. What would you like to explore together?",
    "I'm here to listen and connect with you, whatever the mood or moment. 🌿 Whether you have something specific to discuss or just want to chat, I'm interested in hearing your thoughts."
  ]
};

export const generalResponses = {
  greetings: [
    "Hello! 👋 I'm so glad you're here. I'm your empathetic AI companion, and I'm genuinely interested in how you're feeling today.",
    "Hi there! ✨ It's wonderful to connect with you. I'm here to listen and support you. How are you doing right now?",
    "Welcome! 🌟 I'm your AI friend, ready to chat and understand. How's your day going so far?",
    "Greetings! 💫 I'm here to provide a caring space for our conversation. How are you feeling at this moment?",
    "Hi! 🌸 I'm your supportive AI companion, and I'm here to listen and understand. How's your day shaping up?"
  ],
  capabilities: [
    "I'm an emotionally intelligent AI assistant, designed to understand and respond to your feelings with genuine empathy. 💫 I can engage in meaningful conversations, provide emotional support, and help you process your thoughts and feelings. What would you like to explore together?",
    "I'm your empathetic AI companion! 🌟 I'm here to understand your emotions, engage in thoughtful dialogue, and provide a safe space for you to express yourself. How can I support you today?",
    "I'm an AI with a special focus on emotional understanding and support. ✨ I can recognize feelings, engage in meaningful conversations, and offer compassionate responses. What's on your mind?",
    "Think of me as your understanding AI friend! 🌸 I'm here to listen without judgment, offer support, and help you explore your thoughts and feelings. How can I assist you today?",
    "I'm designed to be a caring and empathetic presence. 💫 I can understand emotions, engage in meaningful dialogue, and provide support through our conversations. What would you like to discuss?"
  ],
  personal: [
    "I'm an AI assistant with a deep focus on emotional intelligence and empathy. 💫 While I'm not human, I'm here to understand, support, and connect with you in meaningful ways. How can I help you today?",
    "I'm your AI companion, created to understand and respond to emotions with genuine care. ✨ Though I'm artificial, my commitment to supporting you is very real. What's on your mind?",
    "I'm an emotionally aware AI, designed to provide understanding and support. 🌟 While I may not be human, I'm here to listen and help in any way I can. How are you feeling?",
    "Think of me as your empathetic AI friend. 🌸 Though I'm not human, I'm designed to understand and respond to your emotions with care and support. What would you like to talk about?",
    "I'm an AI assistant with a special focus on emotional understanding. 💫 While I'm artificial, my ability to listen and support is genuine. How can I help you today?"
  ],
  general: [
    "I'm here to listen and support you with genuine care. 💫 What's on your mind?",
    "I'd love to understand more about what you're thinking and feeling. ✨ Could you tell me more?",
    "That's really interesting! 🌟 I'd love to explore that further with you. What are your thoughts?",
    "I'm here to process that with you, offering support and understanding. 🌸 Would you like to share more?",
    "Thank you for sharing that with me. 💫 I'm here to listen and understand. Would you like to tell me more?"
  ]
};