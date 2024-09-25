import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'; 
import { AnimatePresence, motion } from 'framer-motion';
import About from './About/About';
import Mentorship from './Mentorship/Mentorship';
import Landing from './Landing/Landing';
import FreeForex from './FreeForex/FreeForex';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    nprogress.start();
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false); 
      nprogress.done(); 
    }, 3000);

    return () => {
      clearTimeout(timer);
      nprogress.done();
    };
  }, [location]);

  return (
    <div>
      {/* Show loading indicator if loading state is true */}
      {isLoading ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/mentorship" element={<PageTransition><Mentorship /></PageTransition>} />
            <Route path="/freeforex" element={<PageTransition><FreeForex /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}  
      animate={{ opacity: 1, x: 0 }}    
      exit={{ opacity: 0, x: -100 }}   
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;

