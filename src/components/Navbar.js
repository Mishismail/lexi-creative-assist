import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeToggle from './ColorModeToggle';

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();

  // Theme-based color values
  const bgColor = useColorModeValue('linear(to-b, #e4e9f7, #f6f5ff)', 'linear(to-b, #18191a, #3a3b3c)');
  const textColor = useColorModeValue('#707070', '#ccc'); // Normal text color
  const hoverColor = useColorModeValue('#695cfe', '#695cfe'); // Hover text color
  const activeColor = useColorModeValue('#695cfe', '#695cfe'); // Active link color
  const logoColor = useColorModeValue('#695cfe', '#695cfe'); // Logo color

  const handleLinkClick = () => {
    onClose(); // Close the navbar when a link is clicked
  };

  return (
    <MotionBox
      as="nav"
      pos="fixed"
      left={0}
      top={0}
      h="100vh"
      w={{ base: isOpen ? '200px' : '10px', md: '200px' }} // Adjusted width for mobile and desktop
      className={isOpen ? 'expanded-nav' : 'collapsed-nav'}
      bgGradient={bgColor}
      p={5}
      shadow="xl"
      zIndex={1000}
      transition="width 0.3s ease"
    >
      <Flex direction="column" h="100%" justifyContent="space-between">
        <Box>
          <Flex justifyContent="space-between" alignItems="center" mb={10}>
            {isOpen && (
              <MotionText
                fontSize={{ base: 'lg', md: '2xl' }} // Smaller font size for mobile devices
                fontWeight="bold"
                color={logoColor}
                fontFamily="Orbitron, sans-serif"
                lineHeight="shorter" // Adjust line height
                display={{ base: 'none', md: 'block' }} // Hide on mobile, show on desktop
                whileHover={{ scale: 1.1, color: hoverColor }}
                transition={{ duration: 0.3 }}
              >
                Lexi AI
              </MotionText>
            )}
            <Box display={{ base: 'block', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={3} />} // Smaller icon size
                variant="ghost"
                aria-label="Toggle Navigation"
              />
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <ColorModeToggle />
            </Box>
          </Flex>
          <Stack
            spacing={6}
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }} // Show/hide based on toggle for mobile
            onClick={handleLinkClick} // Close the menu when a link is clicked
          >
            {[
              { path: '/', label: 'Home' },
              { path: '/writing-assistance', label: 'Writing Assistance' },
              { path: '/spell-checker', label: 'Spell Checker' },
              { path: '/dashboard', label: 'Dashboard' },
            ].map((item) => (
              <MotionText
                key={item.path}
                as={Link}
                to={item.path}
                color={location.pathname === item.path ? activeColor : textColor}
                fontSize={{ base: 'sm', md: 'lg' }} // Smaller font size for links on mobile
                fontFamily="Orbitron, sans-serif"
                whileHover={{ scale: 1.1, color: hoverColor }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </MotionText>
            ))}
          </Stack>
        </Box>
        <Box mt={10} display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
          <MotionText
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize="sm"
            fontFamily="Orbitron, sans-serif"
            textAlign="center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            ©2024 Lexi AI 
            by Mish 🩶
          </MotionText>
        </Box>
      </Flex>
    </MotionBox>
  );
}

export default Navbar;





















