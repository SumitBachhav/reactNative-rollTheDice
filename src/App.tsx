
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'     //importing images from assets, an typescript error will surface
import DiceTwo from '../assets/Two.png'     //for that create another file in src directory with name index.d.ts
import DiceThree from '../assets/Three.png' //inside that file write declare module '*.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
// <> or diamond brackets are for generalised syntax

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }

  return (
    <View style = {styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceTap}
      >
        <Text style = {styles.rollDiceBtnText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
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