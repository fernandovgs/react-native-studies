import React, { useReducer } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const styles = StyleSheet.create({
  squareColorView: {
    width: 150,
    height: 150,
  }
});

const COLOR_INCREMENT = 17;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // color === { type: 'changeRed' || 'changeGreen' || 'changeBlue'; payload: 15 || -15 }

  switch(action.type) {
    // Never: state.red = state.red + 15
    case 'changeRed':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ?
        state :
        { ...state, red: state.red + action.payload };
    case 'changeGreen':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ?
        state :
        { ...state, green: state.green + action.payload };
    case 'changeBlue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
        state :
        { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }


};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state; 
  console.log(state);
  
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'changeRed', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'changeRed', payload: COLOR_INCREMENT * -1 })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'changeBlue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT * -1 })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'changeGreen', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'changeGreen ', payload: COLOR_INCREMENT * -1 })}
       />
      <View style={ [styles.squareColorView, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }] } />
    </View>
  );
};

export default SquareScreen;

/* SIMPLE WAY TO CHANGE THREE DIFFERENT STATES */
// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const [green, setGreen] = useState(0);

//   console.log('Red: ' + red);
//   console.log('Blue: ' + blue);
//   console.log('Green: ' + green);
//   console.log('------');

//   const setColor = (color, change) => {
//     switch(color) {
//       case 'red':
//         red + change > 255 || red + change < 0 ? null : setRed(red + change);
//         return;
//       case 'green':
//         green + change > 255 || green + change < 0 ? null : setRed(green + change);
//         return;
//       case 'blue':
//         blue + change > 255 || blue + change < 0 ? null : setRed(blue + change);
//         return;
//       default:
//         return; 
//     }
//   };
  
//   return (
//     <View>
//       <ColorCounter
//         color="Red"
//         onIncrease={() => setColor('red', COLOR_INCREMENT)}
//         onDecrease={() => setColor('red', (-1) * COLOR_INCREMENT)}
//       />
//       <ColorCounter
//         color="Blue"
//         onIncrease={() => setColor('blue', COLOR_INCREMENT)}
//         onDecrease={() => setColor('blue', (-1) * COLOR_INCREMENT)}
//       />
//       <ColorCounter
//         color="Green"
//         onIncrease={() => setColor('green', COLOR_INCREMENT)}
//         onDecrease={() => setColor('green', (-1) * COLOR_INCREMENT)}
//        />
//       <View style={ [styles.squareColorView, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }] } />
//     </View>
//   );
// };