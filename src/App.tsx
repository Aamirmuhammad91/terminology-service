import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { About, API, Collections, Help, Home, Ontologies } from './pages/index';
import { theme } from './theme/theme';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Imprint } from './pages/Imprint';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Router>
          <Header />
          <Box flexGrow={1}>
            <Routes>
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/'} element={<Home />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/collections'} element={<Collections />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/ontologies'} element={<Ontologies />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/help'} element={<Help />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/api'} element={<API />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/about'} element={<About />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/PrivacyPolicy'} element={<PrivacyPolicy />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/TermsOfUse'} element={<TermsOfUse />} />
              <Route path={process.env.REACT_APP_PROJECT_SUB_PATH + '/imprint'} element={<Imprint />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
