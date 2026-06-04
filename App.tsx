/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Square } from './src/codes/Square';
import { FlexBoxExamples } from './src/codes/FlexBoxExamples';
import { Alignments } from './src/codes/Alignments';
import {D2i } from './src/practice/day2i';
import { D2ii } from './src/practice/day2ii';

function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <SafeAreaProvider>
      {/* <FlexBoxExamples /> */}
      {/* <Alignments /> */}
      {/* <D2i /> */}
      <D2ii  />
    </SafeAreaProvider>
  );
}

export default App;
