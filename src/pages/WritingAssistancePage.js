import React, { useState } from 'react';
import { Box, Textarea, Button, VStack, Heading, Text, Select, Input, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { provideWritingAssistance } from '../api/geminiApi';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function WritingAssistancePage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [messageType, setMessageType] = useState('');
  const [secondOption, setSecondOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTextGeneration = async () => {
    setIsLoading(true);
    const combinedPurpose = `${messageType}_${secondOption}`; // Combine messageType and free text secondOption
    const assistedText = await provideWritingAssistance(inputText, combinedPurpose);
    setOutputText(assistedText);
    setIsLoading(false);
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

  const handleFirstDropdownChange = (e) => {
    setMessageType(e.target.value);
    setSecondOption(''); 
  };

  return (
    <VStack
      p={5}
      spacing={5}
      minHeight="100vh"
      justifyContent="center"
      bgGradient={bgGradient}
    >
      <Heading
        as={motion.h1}
        fontSize={{ base: '2xl', md: '3xl' }}  // Responsive font size
        mb={3}
        color={headingColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        textAlign="center"
      >
        Writing Assistance
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} mb={3} textAlign="center" color={textColor}>
        Need help writing? Choose a message type or enter your text below for assistance.
      </Text>
      <Select
        placeholder="Select a message type"
        onChange={handleFirstDropdownChange}
        value={messageType}
        size="lg"
        variant="filled"
        mb={3}
        w={{ base: '90%', md: '70%', lg: '50%' }}  // Responsive width
        bg={inputBg}
        _focus={{ bg: inputFocusBg }}
        color={textColor}
      >
        <option value="thankYou">Thank You Message</option>
        <option value="birthday">Happy Birthday Paragraph</option>
        <option value="congratulations">Congratulations Message</option>
        <option value="apology">Apology Message</option>
      </Select>
      
      {messageType && (
        <Input
          placeholder="Enter a specific style or additional details"
          onChange={(e) => setSecondOption(e.target.value)}
          value={secondOption}
          size="lg"
          variant="filled"
          mb={3}
          w={{ base: '90%', md: '70%', lg: '50%' }}
          bg={inputBg}
          _focus={{ bg: inputFocusBg }}
          color={textColor}
        />
      )}

      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here or select a message type above"
        mb={3}
        size="lg"
        variant="filled"
        w={{ base: '90%', md: '70%', lg: '50%' }}  // Responsive width
        h="150px"
        bg={inputBg}
        _focus={{ bg: inputFocusBg }}
        color={textColor}
        borderRadius="md"
      />
      <MotionButton
        onClick={handleTextGeneration}
        bg={buttonBg}
        color={buttonColor}
        _hover={{ bg: buttonHoverBg }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        size="lg"
        borderRadius="full"
        transition="background-color 0.3s ease"
        isLoading={isLoading}  // Chakra UI's built-in loading state
        loadingText="Generating"
        spinnerPlacement="start"  // Place spinner before text
      >
        Get Writing Assistance
      </MotionButton>
      <MotionBox
        p={5}
        w={{ base: '90%', md: '70%', lg: '60%' }}  // Responsive width
        mt={5}
        bg={boxBg}
        borderRadius="md"
        shadow="md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} fontWeight="medium">
          {outputText || "Your generated text will appear here..."}
        </Text>
      </MotionBox>
    </VStack>
  );
}

export default WritingAssistancePage;