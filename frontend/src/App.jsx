import * as React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useCustomTheme } from './hooks/useCustomTheme';
import LeftBar from './Components/LeftBar';
import Topbar from './Components/Topbar';
import Posts from './Components/Posts';
import Rightbar from './Components/Rightbar';

export default function App() {
  const theme = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          overflowX:'hidden'
        }}
      >
        {/* Left Sidebar - Fixed Width */}
        <Box
          sx={{
            width: '240px',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            overflowY: 'auto',
            overflowX:'hidden'
          }}
        >
          <LeftBar />
        </Box>

        <Box
          sx={{
            flex: 1,
            ml: '240px', // Width of left sidebar
            mr: '320px', // Width of right sidebar
            maxWidth: '680px',
            mx: 'auto',
            py: 2,
            px: 3,
            overflowY: 'auto',
          }}
        >
          <Topbar />
          <Box sx={{ mt: 2 }}>
            <Posts />
            <Posts />
            <Posts />
          </Box>
        </Box>

        {/* Right Sidebar - Fixed Width */}
        <Box
          sx={{
            width: '320px',
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            borderLeft: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            overflowY: 'auto',
            p: 2,
          }}
        >
          <Rightbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}