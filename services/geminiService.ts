
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || "";

export const getAIResponse = async (history: ChatMessage[], userInput: string) => {
  if (!API_KEY) {
    return "The AI Concierge is currently resting. Please check back later.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the Virtual Concierge for "Azure Horizon Luxury Hotel". 
        Be extremely polite, sophisticated, and helpful. 
        You know about:
        - Room types: Deluxe ($350), Ocean View ($520), Grand Suite ($850), Presidential ($1500).
        - Restaurant "The Azure Table": Fine dining, wagyu, scallops, saffron risotto.
        - Amenities: Spa, Rooftop Pool, Private Beach, 24/7 Butler.
        - Local area: You can search for local weather or events if asked.
        Always provide helpful information and try to encourage a booking.`,
        tools: [{ googleSearch: {} }]
      }
    });

    // We only send the new message to keep it simple, but we could map history if needed
    const response = await chat.sendMessage({ message: userInput });
    
    // Log grounding if available
    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      console.log('Grounding metadata:', response.candidates[0].groundingMetadata.groundingChunks);
    }

    return response.text || "I apologize, I'm having trouble connecting to my knowledge base.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unavailable to assist. Please contact our front desk.";
  }
};
