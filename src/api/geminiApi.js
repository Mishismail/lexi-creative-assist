import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the GoogleGenerativeAI instance with your API key from the .env file
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateText = async (text) => {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: 'user', // Specifies that this is user-provided content
          parts: [
            {
              text: `${text}`, // Directly use the user-provided text
            },
          ],
        },
      ],
    });
    return result.response.text();
  } catch (error) {
    console.error('Error during text generation:', error);
    return '';
  }
};

export const checkSpelling = async (text) => {
  try {
    const correctedText = await generateText(text); // Removed the extra 'spell check' argument
    return correctedText;
  } catch (error) {
    console.error('Error checking spelling:', error);
    return '';
  }
};

export const provideWritingAssistance = async (text, purpose) => {
  try {
    let prompt;

    switch (purpose.split('_')[0]) {  // Only switch on the first part (messageType)
      case 'thankYou':
        prompt = `Thank You Message (${purpose.split('_')[1]})`; 
        break;
      case 'birthday':
        prompt = `Happy Birthday Paragraph (${purpose.split('_')[1]})`; 
        break;
      case 'congratulations':
        prompt = `Congratulations Message (${purpose.split('_')[1]})`; 
        break;
      case 'apology':
        prompt = `Apology Message (${purpose.split('_')[1]})`; 
        break;
      default:
        prompt = `${text}`; // Use the provided text for all purposes
        break;
    }

    const assistedText = await generateText(prompt);
    return assistedText;
  } catch (error) {
    console.error(`Error providing ${purpose}:`, error);
    return '';
  }
};

// Example API calls or local storage fallback

export const incrementVisitCount = async () => {
  try {
    const response = await fetch('/api/increment-visit', { method: 'POST' });
    if (!response.ok) {
      throw new Error('Failed to increment visit count');
    }
  } catch (error) {
    console.error('Error incrementing visit count:', error);
  }
};

export const incrementTextGenerationCount = async () => {
  try {
    const response = await fetch('/api/increment-text-gen', { method: 'POST' });
    if (!response.ok) {
      throw new Error('Failed to increment text generation count');
    }
  } catch (error) {
    console.error('Error incrementing text generation count:', error);
  }
};

export const incrementSpellCheckCount = async () => {
  try {
    const response = await fetch('/api/increment-spell-check', { method: 'POST' });
    if (!response.ok) {
      throw new Error('Failed to increment spell check count');
    }
  } catch (error) {
    console.error('Error incrementing spell check count:', error);
  }
};

