/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import ThemeContextProvider, { Theme } from './app/hooks/context/Theme.context';
import { SafeAreaView, StatusBar } from 'react-native';
import MainContainer from './app/components/container/main/MainContainer';
import { ThemeLight, ThemeDark } from './app/resources/themes/themes';
import Home from './app/screens/Home';

const App: () => Node = () => {

  //const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false
  const [theme, setTheme] = useState(Theme)

  useEffect(() => {
    
    if (!theme.primaryColor) {
      setTheme(isDarkMode === true ? ThemeDark : ThemeLight)
    }
  }, [theme])

  

  return (
    <SafeAreaView style={{
      backgroundColor: theme.backgroundColor
    }}>
      <ThemeContextProvider value={{
        theme: theme,
        setTheme: setTheme
      }}>

        <MainContainer>
          <StatusBar backgroundColor={theme.primaryColor} />
          <Home/>
        </MainContainer>

      </ThemeContextProvider>
    </SafeAreaView>
  );
};

export default App;
