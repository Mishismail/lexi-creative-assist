import React, { useState } from 'react';
import { Box, Textarea, Button, VStack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { checkSpelling } from '../api/geminiApi';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function SpellCheckerPage() {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSpellCheck = async () => {
    setIsLoading(true);
    setError('');
    try {
      const corrected = await checkSpelling(inputText);
      setCorrectedText(corrected);
    } catch (err) {
      setError('Error correcting text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const bgGradient = useColorModeValue(
    'linear(to-r, #f5f3f8, #e8dff7)', // Light mode gradient with light purple shades
    'linear(to-r, #1e1e2d, #3b3a4a)'  // Dark mode gradient with dark purple shades
  );
  const boxBg = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const headingColor = useColorModeValue('purple.600', 'purple.400');
  const inputBg = useColorModeValue('whiteAlpha.700', 'blackAlpha.700');
  const inputFocusBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.800');

  const buttonBg = useColorModeValue('purple.500', 'purple.300');
  const buttonColor = useColorModeValue('white', 'black');
  const buttonHoverBg = useColorModeValue('purple.600', 'purple.400');

  return (
    <VStack
      p={5}
      spacing={5}
      minHeight="100vh"
      justifyContent="center"
      bgGradient={bgGradient}
    >
      <MotionHeading
        as={Heading}
        fontSize={{ base: '2xl', md: '3xl' }} // Adjust font size for responsiveness
        mb={3}
        color={headingColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        textAlign="center"
      >
        Spell Checker
      </MotionHeading>
      <MotionText
        fontSize={{ base: 'sm', md: 'md' }} // Adjust font size for responsiveness
        mb={3}
        textAlign="center"
        color={textColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Enter your text below, and we’ll help you correct any spelling mistakes.
      </MotionText>
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text for spell checking"
        mb={3}
        size="lg"
        variant="filled"
        w={{ base: '90%', md: '70%', lg: '50%' }} // Adjust width for responsiveness
        h="150px"
        bg={inputBg}
        _focus={{ bg: inputFocusBg }}
        color={textColor}
        borderRadius="md"
      />
      <MotionButton
        onClick={handleSpellCheck}
        bg={buttonBg}
        color={buttonColor}
        _hover={{ bg: buttonHoverBg }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        size="lg"
        borderRadius="full"
        transition="background-color 0.3s ease"
        isLoading={isLoading}  // Add loading state to the button
        loadingText="Checking"  // Text displayed during loading
        spinnerPlacement="start"  // Place spinner before text
      >
        Check Spelling
      </MotionButton>
      {error && (
        <Text color="red.500" fontSize="md">
          {error}
        </Text>
      )}
      <MotionBox
        p={5}
        w={{ base: '90%', md: '70%', lg: '60%' }} // Adjust width for responsiveness
        mt={5}
        bg={boxBg}
        borderRadius="md"
        shadow="md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight="medium">
          {correctedText || "Your corrected text will appear here..."}
        </Text>
      </MotionBox>
    </VStack>
  );
}

export default SpellCheckerPage;









