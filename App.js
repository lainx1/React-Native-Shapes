/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions, Button, Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Heart, Triangle } from 'react-native-shapes';

const { width: W, height: H } = Dimensions.get('window')


const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>

      <View style={{
        width: "100%",
        height: "100%",
      }}>

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
            <StatusBar  backgroundColor="#3F388E" />
            {/* <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} />
            <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} />
            <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} />
            <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} />
            <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} />
            <Button title="Hola sou un boton" onPress={() => Alert.alert('Left button pressed')} /> */}
            
            <Text>Hola soy un texto</Text>
            <Text>Hola soy un texto</Text>
            <Text>Hola soy un texto</Text>
            <Text>Hola soy un texto</Text>
            <Text>Hola soy un texto</Text>





          </View>

        </LinearGradient>

      </View>

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
