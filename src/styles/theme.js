import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('#1e1e2d', '#f5f3f8')(props), // Dark purple and light purple text
        transition: 'background-color 0.2s, color 0.2s',
        fontFamily: 'Orbitron, sans-serif', // Apply global font
      },
    }),
  },
  colors: {
    light: {
      text: '#1e1e2d', // Dark purple text
      primary: '#a78bfa', // Light purple primary color
      secondary: '#7c3aed', // Darker purple secondary color
      accent: '#d97706', // Accent color (orange for contrast)
      highlight: '#c084fc', // Highlight color (lighter purple)
    },
    dark: {
      text: '#f5f3f8', // Light purple text
      primary: '#6d28d9', // Darker purple primary color
      secondary: '#4c1d95', // Dark purple secondary color
      accent: '#f59e0b', // Accent color (yellow for contrast)
      highlight: '#a855f7', // Highlight color (lighter purple)
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'scale(1.05)',
        },
      },
      variants: {
        solid: (props) => ({
          bg: mode('light.primary', 'dark.primary')(props),
          color: mode('light.text', 'dark.text')(props),
          _hover: {
            bg: mode('light.highlight', 'dark.highlight')(props),
          },
        }),
      },
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('light.text', 'dark.text')(props),
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        color: mode('light.primary', 'dark.primary')(props),
      }),
    },
    Select: {
      baseStyle: (props) => ({
        color: mode('light.text', 'dark.text')(props),
        _focus: {
          // Remove background color changes on focus
        },
      }),
    },
    Textarea: {
      baseStyle: (props) => ({
        color: mode('light.text', 'dark.text')(props),
        _focus: {
          // Remove background color changes on focus
        },
      }),
    },
  },
});

export default theme;





