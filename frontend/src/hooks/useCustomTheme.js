import { createTheme } from '@mui/material/styles';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import toggleTheme from '../store/toggleThemeAtom';

export const useCustomTheme = () => {
  const mode = useRecoilValue(toggleTheme)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              primary: {
                main: '#1976d2',
              },
              background: {
                default: '#f4f6f8',
                paper: '#ffffff',
              },
              text: {
                primary: '#000000',
                secondary: '#555555',
              },
            }
            : {
              primary: {
                main: '#90caf9',
              },
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
              text: {
                primary: '#ffffff',
                secondary: '#bbbbbb',
              },
            }),
        },
      }),
    [mode]
  );

  // Saves the theme in localstorage 
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return theme;
};
