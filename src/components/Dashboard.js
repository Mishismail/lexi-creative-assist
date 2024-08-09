import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Container,
  GridItem,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionStat = motion(Stat);

function Dashboard() {
  const bgGradient = useColorModeValue(
    'linear(to-r, #f5f3f8, #e8dff7)', // Light mode gradient
    'linear(to-r, #1e1e2d, #3b3a4a)'  // Dark mode gradient
  );
  const bg = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');
  const shadow = useColorModeValue('md', 'lg');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const headingColor = useColorModeValue('purple.600', 'purple.400');

  const toast = useToast();

  const showToast = (title, description) => {
    toast({
      title,
      description,
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const visitCount = 10;
  const aiStats = {
    textsGenerated: 15,
    spellChecks: 5,
    aiUsagePercentage: '75%',
    avgResponseTime: '1.2s',
    aiContentGrowth: '40%',
    userSatisfaction: '85%',
    industryImpact: 'High',
    topUseCases: ['Healthcare', 'Finance', 'Education'],
  };

  return (
    <Container maxW="container.xl" minHeight="100vh" p={{ base: 4, md: 6 }} centerContent overflow="hidden">
      <MotionBox
        p={{ base: 4, md: 6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        w="full"
        bgGradient={bgGradient}
        borderRadius="lg"
        shadow={shadow}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mt={4} textAlign="center" color={headingColor}>
          Dashboard
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 4, md: 8 }}
          mb={{ base: 6, md: 10 }}
          mt={{ base: 4, md: 6 }}
        >
          <MotionStat
            whileHover={{ scale: 1.05, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            bg={bg}
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            shadow={shadow}
            color={textColor}
            cursor="pointer"
            transition={{ duration: 0.3 }}
            onClick={() => showToast('Total Visits', `Total Visits: ${visitCount}`)}
          >
            <StatLabel fontSize={{ base: 'md', md: 'lg' }}>Total Visits</StatLabel>
            <StatNumber fontSize={{ base: '2xl', md: '3xl' }}>{visitCount}</StatNumber>
            <StatHelpText>Keep track of your audience</StatHelpText>
          </MotionStat>

          <MotionStat
            whileHover={{ scale: 1.05, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            bg={bg}
            p={{ base: 4, md: 6 }}
            borderRadius="lg"
            shadow={shadow}
            color={textColor}
            cursor="pointer"
            transition={{ duration: 0.3 }}
            onClick={() => showToast('AI-Powered Texts Generated', `Texts Generated: ${aiStats.textsGenerated}`)}
          >
            <StatLabel fontSize={{ base: 'md', md: 'lg' }}>AI-Powered Texts Generated</StatLabel>
            <StatNumber fontSize={{ base: '2xl', md: '3xl' }}>{aiStats.textsGenerated}</StatNumber>
            <StatHelpText>AI-driven creativity</StatHelpText>
          </MotionStat>

          <GridItem colSpan={{ base: 1, md: 2 }} display="flex" justifyContent="center">
            <MotionStat
              whileHover={{ scale: 1.05, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              bg={bg}
              p={{ base: 4, md: 6 }}
              w={{ base: '90%', md: '50%' }}
              borderRadius="lg"
              shadow={shadow}
              color={textColor}
              cursor="pointer"
              transition={{ duration: 0.3 }}
              onClick={() => showToast('Spelling Checks Done', `Spell Checks Done: ${aiStats.spellChecks}`)}
            >
              <StatLabel fontSize={{ base: 'md', md: 'lg' }}>Spelling Checks Done</StatLabel>
              <StatNumber fontSize={{ base: '2xl', md: '3xl' }}>{aiStats.spellChecks}</StatNumber>
              <StatHelpText>Accuracy is key</StatHelpText>
            </MotionStat>
          </GridItem>
        </SimpleGrid>

        <Box mb={10} w="full">
          <Heading as="h3" size={{ base: 'md', md: 'lg' }} mb={6} textAlign="center" color={headingColor}>
            AI in 2024
          </Heading>
          <Box>
            {[
              `AI advancements have revolutionized industries with over ${aiStats.aiUsagePercentage} adoption globally.`,
              `The average response time for AI-generated content is now just ${aiStats.avgResponseTime}.`,
              `With ${aiStats.aiContentGrowth} growth in AI-generated content, the AI industry continues to thrive.`,
              `User satisfaction with AI tools has reached ${aiStats.userSatisfaction} in recent surveys.`,
              `The impact of AI across industries is classified as ${aiStats.industryImpact}.`,
              `Top use cases for AI include ${aiStats.topUseCases.join(', ')}.`,
            ].map((text, index) => (
              <MotionBox
                key={index}
                as="p"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                textAlign="center"
                color={textColor}
                mt={4}
                cursor="pointer"
                whileHover={{ scale: 1.02 }}
                fontSize={{ base: 'sm', md: 'md' }}
                px={{ base: 2, md: 4 }} // Responsive padding for text
              >
                {text}
              </MotionBox>
            ))}
          </Box>
        </Box>
      </MotionBox>
    </Container>
  );
}

export default Dashboard;

















