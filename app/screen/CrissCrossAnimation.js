import React, {useRef, useEffect} from 'react';
import {Animated, Easing, Text, View, useWindowDimensions} from 'react-native';

const FadeInView = props => {
  const {width, height} = useWindowDimensions();
  const initValX = -(width / 2) + 50;
  const finalValX = -initValX;
  const initValY = -(height / 2) + 50;
  const finalValY = -initValY;
  const durationY = 4000;
  const durationX = durationY / 4;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const moveX = useRef(new Animated.Value(initValX)).current; //
  const moveY = useRef(new Animated.Value(initValY)).current; //

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(moveX, {
            toValue: finalValX,
            duration: durationX,
            useNativeDriver: true,
          }),
          Animated.timing(moveX, {
            toValue: initValX,
            duration: durationX,
            useNativeDriver: true,
          }),
          Animated.timing(moveX, {
            toValue: finalValX,
            duration: durationX,
            useNativeDriver: true,
          }),
          Animated.timing(moveX, {
            toValue: initValX,
            duration: durationX,
            useNativeDriver: true,
          }),
        ]),
        // animation to change Y
        Animated.sequence([
          Animated.timing(moveY, {
            toValue: finalValY,
            duration: durationY,
            useNativeDriver: true,
          }),
        ]),
      ]),
      {iterations: -1},
    ).start();
  });

  return (
    <Animated.View // Special animatable View
      style={[
        {
          transform: [{translateX: moveX}, {translateY: moveY}],
          ...props.style,
          opacity: 1, // Bind opacity to animated value
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default function CrissCrossAnimation() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'powderblue',
        }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
}
