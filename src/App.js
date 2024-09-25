import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import nprogress from 'nprogress'; // Import nprogress
import 'nprogress/nprogress.css';  // Import nprogress CSS for the loading bar
import { AnimatePresence, motion } from 'framer-motion';  // Import Framer Motion for animations
import About from './About/About';
import Mentorship from './Mentorship/Mentorship';
import Landing from './Landing/Landing';
import FreeForex from './FreeForex/FreeForex';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const location = useLocation();  // useLocation hook to detect route changes
  const [isLoading, setIsLoading] = useState(false); // State to control loading

  useEffect(() => {
    nprogress.start();  // Start nprogress bar on route change
    setIsLoading(true); // Set loading state to true

    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading complete
      nprogress.done();  // Finish nprogress bar when the route change completes
    }, 3000); // Adjust the delay as necessary

    return () => {
      clearTimeout(timer); // Clean up the timer
      nprogress.done();  // Ensure nprogress finishes
    };
  }, [location]);  // Run the effect every time the location (route) changes

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

// PageTransition component for route animations using Framer Motion
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}  // Start with 0 opacity and translateX(100)
      animate={{ opacity: 1, x: 0 }}    // Animate to 1 opacity and translateX(0)
      exit={{ opacity: 0, x: -100 }}     // Exit with 0 opacity and translateX(-100)
      transition={{ duration: 0.5 }}     // Transition duration for the animation
    >
      {children}
    </motion.div>
  );
};

export default App;

