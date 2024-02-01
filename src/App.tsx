
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/One.png'     //importing images from assets, an typescript error will surface
import Dicetwo from '../assets/two.png'     //for that create another file in src directory with name index.d.ts
import DiceThree from '../assets/Three.png' //inside that file write declare module '*.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
// <> or diamond brackets are for generalised syntax

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {
  
  return (
    <View><Text>hello</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2'
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#e5e0ff',
    fontSize: 16,
    color: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
  
});

export default App;


/*




*/