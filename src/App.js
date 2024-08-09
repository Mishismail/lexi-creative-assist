import React from 'react';
import { ChakraProvider, Box, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WritingAssistancePage from './pages/WritingAssistancePage';
import SpellCheckerPage from './pages/SpellCheckerPage';
import Dashboard from './components/Dashboard';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box flex="1" ml={{ base: 0, md: 200 }}> {/* Adjust content to prevent overlap with navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writing-assistance" element={<WritingAssistancePage />} />
              <Route path="/spell-checker" element={<SpellCheckerPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;





