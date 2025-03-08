// // src/styles/GlobalStyles.jsx
// import { createGlobalStyle } from 'styled-components';
// import { CssBaseline } from '@mui/material'; //for reseting to default mui styles
// import { theme } from './theme'; // Import the theme

// export const GlobalStyles = createGlobalStyle`
//   :root {
//     --logo-hover-color: #646cffaa;
//     --react-logo-hover-color: #61dafbaa;
//     /* Add any other global CSS variables you *might* need here,
//        but generally prefer theme variables. */
//   }

//   *, *::before, *::after {
//     box-sizing: border-box; /* Good practice for consistent sizing */
//   }

//     html, body {
//         height: 100%; /* Ensure full height */
//         width: 100%;   /* Ensure full width */
//         margin: 0;     /* Remove default margin */
//     }
//   body {
    
//     display: flex;
//     /* justify-content: center;  Removed: Let the Layout component handle this */
//     /* align-items: center; Removed: Let the Layout component handle this*/
//     /* min-width: 320px;  Removed:  Let components handle responsive sizing */
//     /* min-height: 100vh; Removed: height: 100% on html, body is enough */
//     /* width: 100%;     Removed: height and width defined above. */
//     font-family: ${theme.typography.fontFamily};
//     line-height: ${theme.typography.lineHeight};
//     font-weight: ${theme.typography.fontWeightRegular};
//     color: ${theme.palette.text.primary};
//     background-color: ${theme.palette.background.default};
//     font-synthesis: none;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;

//   }

//   a {
//     font-weight: 500;
//     color: ${theme.palette.primary.main};
//     text-decoration: inherit; /* Remove underlines */

//     &:hover {
//       color: ${theme.palette.primary.light};
//     }
//   }

//     h1 {
//         font-size: ${theme.typography.h1.fontSize};
//         line-height: ${theme.typography.h1.lineHeight};
//     }
//      h4{
//         color: ${theme.palette.primary.main};
//      }

//   /* Remove global button styles.  Use a common component (like you did with Button.jsx) */
//   /* button { ... }  <- REMOVE THIS */

//   /* You can add other global styles here *if absolutely necessary*,
//      but try to keep them to a minimum.  Prefer component-specific styles.
//   */

//   /* Example: If you *really* need a global style for a specific class,
//      do it here, but it's generally better to use styled components or
//      CSS Modules within the components themselves.
//   */
//   /* .my-global-class { ... } */

//   @media (prefers-color-scheme: light) {
//     :root {
//       /* Override variables for light mode */
//       --color-text: #213547;
//       --color-background: #ffffff;
//     }
//     body {
//         color: #213547;
//         background-color: #ffffff;
//     }
//     /* Override other variables as needed for light mode */
//   }
// `;

// src/styles/GlobalStyles.jsx
// REMOVE THIS LINE:
// import { createGlobalStyle } from 'styled-components'; 
import { GlobalStyles as MuiGlobalStyles } from '@mui/material'; // Import MUI's GlobalStyles
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

export const GlobalStyles = () => (
    <>
        <CssBaseline />
        <MuiGlobalStyles styles={{
            ':root': {
                '--logo-hover-color': '#646cffaa',
                '--react-logo-hover-color': '#61dafbaa',
                /* ... other variables ... */
            },
            '*, *::before, *::after': {
                boxSizing: 'border-box',
            },
            html: {
                height: '100%',
                width: '100%',
            },
            body: {
                height: '100%',
                width: '100%',
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: theme.typography.fontFamily,
                lineHeight: theme.typography.lineHeight,
                fontWeight: theme.typography.fontWeightRegular,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            },
            a: {
                fontWeight: 500,
                color: theme.palette.primary.main,
                textDecoration: 'inherit',
                '&:hover': {
                    color: theme.palette.primary.light,
                },
            },
            h1: {
                fontSize: theme.typography.h1.fontSize,
                lineHeight: theme.typography.h1.lineHeight,
            },
            h4: {
                color: theme.palette.primary.main,
            },
            '@media (prefers-color-scheme: light)': {
                ':root': {
                    '--color-text': '#213547',
                    '--color-background': '#ffffff',
                },
                body: {
                    color: '#213547',
                    backgroundColor: '#ffffff',
                },
            },
        }} />
    </>
);