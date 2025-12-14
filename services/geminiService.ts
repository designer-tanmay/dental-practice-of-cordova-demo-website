import { GoogleGenAI } from "@google/genai";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithAssistant = async (
  userMessage: string, 
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // System instruction to guide the persona
    const systemInstruction = `
      You are the virtual receptionist for "Dental Practice of Cordova". 
      Your tone is warm, professional, and helpful.
      You can answer questions about:
      - Services (Preventive, Restorative, Cosmetic, Implants, Emergency)
      - Location (Cordova, TN)
      - Contact (901-757-9596)
      - Hours (Mon-Fri 8am-5pm)
      
      Do not give specific medical advice. If a user has a medical emergency, tell them to call 911 or visit the ER, 
      or call the office immediately for dental emergencies.
      Keep answers concise (under 100 words).
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please call us at (901) 757-9596.";
  }
};