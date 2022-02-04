/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ThemeContextProvider, { Theme } from './app/hooks/context/Theme.context';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions, Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './app/components/button/Button';
import MainContainer from './app/components/container/main/MainContainer';
import { ThemeLight, ThemeDark } from './app/resources/themes/themes';

const { width: W, height: H } = Dimensions.get('window')

const App: () => Node = () => {

  //const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = true
  const [theme, setTheme] = useState(Theme)

  useEffect(() => {
    console.log("IsDarkMode")

    if (!theme.primaryColor) {
      setTheme(isDarkMode === true ? ThemeDark : ThemeLight)
    }
  }, [theme])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ThemeContextProvider value={{
        theme: theme,
        setTheme: setTheme
      }}>
        <MainContainer>
          <LinearGradient
            start={{ x: 0.8, y: 0.2 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.1, 0.9]}
            colors={["#3F388E", "#3F388E"]}
            style={{
              top: -250,
              left: -10,
              height: 600,
              width: 600,
              backgroundColor: "#3F388E",
              borderRadius: 400,
            }}
          >
            <View style={{
              top: 250,
              left: 10,
              width: W,
              height: H,

            }}>
              <StatusBar backgroundColor={theme.primaryColor} />
              <Button url="https://www.google.com.mx">Ir a google</Button>


            </View>

          </LinearGradient>
        </MainContainer>

      </ThemeContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
