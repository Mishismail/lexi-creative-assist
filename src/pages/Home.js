import React from 'react';
import { Box, Heading, Text, Button, VStack, useColorModeValue, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const floatingShapes = {
  animate: {
    y: [0, -30, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const lexiAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function Home() {
  const boxBg = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const headingColor = useColorModeValue('purple.600', 'purple.400');
  const buttonBg = useColorModeValue('purple.600', 'purple.500');
  const buttonHoverBg = useColorModeValue('purple.500', 'purple.400');
  const floatingShapeBg = useColorModeValue('rgba(100, 100, 255, 0.2)', 'rgba(255, 255, 255, 0.1)');

  return (
    <MotionBox
      p={{ base: 2, md: 5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      bg={boxBg}
    >
      {/* Floating shapes */}
      <MotionBox
        position="absolute"
        top="5%"
        left="10%"
        height={{ base: '100px', md: '200px' }}
        width={{ base: '100px', md: '200px' }}
        bg={floatingShapeBg}
        borderRadius="50%"
        zIndex={1}
        animate="animate"
        variants={floatingShapes}
      />
      <MotionBox
        position="absolute"
        top="20%"
        right="10%"
        height={{ base: '120px', md: '300px' }}
        width={{ base: '120px', md: '300px' }}
        bg={floatingShapeBg}
        borderRadius="50%"
        zIndex={1}
        animate="animate"
        variants={floatingShapes}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        left="15%"
        height={{ base: '80px', md: '200px' }}
        width={{ base: '80px', md: '200px' }}
        bg={floatingShapeBg}
        borderRadius="50%"
        zIndex={1}
        animate="animate"
        variants={floatingShapes}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        height={{ base: '60px', md: '150px' }}
        width={{ base: '60px', md: '150px' }}
        bg={floatingShapeBg}
        borderRadius="50%"
        zIndex={1}
        animate="animate"
        variants={floatingShapes}
      />

      {/* Main content container */}
      <VStack
        spacing={6}
        align="center"
        bg={useColorModeValue('white', 'gray.800')}
        p={{ base: 6, md: 10 }}
        borderRadius="lg"
        shadow="2xl"
        zIndex={2}
        maxW={{ base: '90%', md: 'lg' }}
        w="full"
      >
        <MotionHeading
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          color={headingColor}
          fontFamily="Orbitron, sans-serif"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          Welcome to Lexi AI 🚀
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'sm', md: 'lg' }}
          color={textColor}
          textAlign="center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Leverage the power of AI to assist with writing, spell checking, and more.
        </MotionText>

        <MotionImage
          src="https://media.giphy.com/media/VrWucRIfvenD4yBur4/giphy.gif"
          alt="Lexi"
          boxSize={{ base: '200px', md: '350px' }}
          borderRadius="full"
          variants={lexiAnimation}
          animate="animate"
          mt={4}
          shadow="lg"
        />

        <MotionButton
          as={Link}
          to="/writing-assistance"
          bg={buttonBg}
          color="white"
          size="lg"
          whileHover={{ scale: 1.05, backgroundColor: buttonHoverBg }}
          whileTap={{ scale: 0.95 }}
          shadow="xl"
          borderRadius="full"
          transition="background-color 0.3s ease"
        >
          Get Started
        </MotionButton>
      </VStack>
    </MotionBox>
  );
}

export default Home;











