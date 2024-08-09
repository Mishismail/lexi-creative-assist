# Lexi AI Web Application

## Overview

Lexi AI is a powerful web application designed to assist users with writing tasks, spell checking, and more. The app leverages the power of Google Generative AI (Gemini) to provide high-quality writing assistance and spell correction. The UI is built with React and Chakra UI, ensuring a responsive and user-friendly experience across all devices.

## Features

- **Writing Assistance:** Generate various types of text, such as thank-you notes, birthday messages, congratulations, and apologies, with the help of AI.
- **Spell Checker:** Automatically detect and correct spelling mistakes in the provided text.
- **Responsive Design:** Fully responsive across all screen sizes, including mobile devices, tablets, and desktops.
- **Dark/Light Mode Toggle:** Users can switch between dark and light themes to suit their preferences.

## Technologies Used

- **Frontend:**
  - React
  - Chakra UI
  - Framer Motion (for animations)
- **Backend:**
  - Google Generative AI (Gemini)
- **Styling:**
  - CSS (with custom themes using Chakra UI)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mishismail/lexi-creative-assist.git
   cd lexi-ai-web-app


1.  Make sure you have Node.js installed. Then run:bashCopy codenpm install
    
2.  Create a .env file in the root directory and add your API key:bashCopy codeREACT\_APP\_GEMINI\_API\_KEY=your-google-generative-ai-key
    
3.  Start the development server:bashCopy codenpm startThe application should now be running on http://localhost:3000.
    

## Usage
-----

1.  **Writing Assistance:**
    
    *   Select the type of message you want to generate (e.g., Thank You, Birthday, etc.).
        
    *   Enter your text or let the AI generate it for you.
        
    *   Click "Get Writing Assistance" and the generated text will appear below.
        
2.  **Spell Checker:**
    
    *   Enter your text into the input field.
        
    *   Click "Check Spelling" to see corrections provided by the AI.
        
3.  **Theme Toggle:**
    
    *   Use the toggle switch in the navbar to switch between light and dark modes.
        

## Contributing
------------

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

