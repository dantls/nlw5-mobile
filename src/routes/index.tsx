import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import StackRoutes from './stack.routes'
import {NavigationContainer} from '@react-navigation/native'

import useToggleTheme from '../../src/hooks/useToggleTheme';

const Routes: React.FC = () => {

  const { theme } = useToggleTheme();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <StackRoutes />
      <StatusBar style={theme.title === 'dark'? 'light' : 'dark'} />
      </ThemeProvider>
     </NavigationContainer> 
  );
}
export default Routes;