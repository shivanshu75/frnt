import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundImage: "url('../image/img01.jpg')",  // Make sure path is correct
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const TextContainer = styled(Box)({
  textAlign: 'center',
  marginRight: '5rem', // Consistent spacing
});

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',  // Example, adjust as needed
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '1rem',
}));

const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem', // Example
  color: 'white',
  marginBottom: '1rem',
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: '#7e1519',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: '#7e1519',
        color: 'white',
    },
}));

// Framer Motion Variants (Good practice for organization)
const headingVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const subheadingVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
};

const buttonVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } },
};

function Welcome() { // Changed component name to Welcome
  return (
    <BackgroundContainer>
      <TextContainer>
        <motion.div variants={headingVariants} initial="initial" animate="animate">
          <Heading variant="h4">
            Welcome to आदिनाथ TV
          </Heading>
        </motion.div>
        <motion.div variants={subheadingVariants} initial="initial" animate="animate">
          <Subheading variant="subtitle1">
            {/* Add any additional text here if needed */}
          </Subheading>
        </motion.div>
        <motion.div variants={buttonVariants} initial="initial" animate="animate">
          <StyledLink to="/login">
            <StyledButton variant="contained" size="large">
              Login
            </StyledButton>
          </StyledLink>
        </motion.div>
      </TextContainer>
    </BackgroundContainer>
  );
}

export default Welcome; // Consistent naming