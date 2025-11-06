import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.warn('OpenAI API key not found. Chatbot will not work.');
}

export const openai = apiKey ? new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true // Only for client-side usage
}) : null;

export async function chatWithAI(message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []) {
  if (!openai) {
    return {
      error: 'OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.'
    };
  }

  try {
    const messages = [
      {
        role: 'system' as const,
        content: 'You are a helpful assistant for ScholarConnect, an online learning platform. Help users with course information, learning guidance, and general questions about the platform. Be friendly, professional, and encouraging.'
      },
      ...conversationHistory,
      {
        role: 'user' as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      message: completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.',
      success: true
    };
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return {
      error: error.message || 'Failed to get response from AI. Please try again.',
      success: false
    };
  }
}

