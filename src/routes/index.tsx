import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// import AppRoutes from './routes';

import useToggleTheme from '../../src/hooks/useToggleTheme';
import { UserIdentification } from '../screens/UserIndetification';
import { Welcome } from '../screens/Welcome';

const Routes: React.FC = () => {

  const { theme } = useToggleTheme();

  return (
    <ThemeProvider theme={theme}>
      <UserIdentification />
      <StatusBar style={theme.title === 'dark'? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
export default Routes;