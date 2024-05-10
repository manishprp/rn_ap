import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Canvas from 'react-native-canvas';
import colors from '../../config/colors';
import StatusesContext from './StatusesContext';

const CircularStatusImage = React.memo(
  ({radius = 30, statusNumber = 1, seen = 0, image}) => {
    const canvasRef = useRef(null);
    const size = radius * 2 - 3;
    const UserContext = createContext();
    let statusIn = useContext(StatusesContext);
    useEffect(() => {
      const drawCircle = async canvas => {
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const totalStatuses = statusIn;
        const totalArcs = totalStatuses * 2;
        const spaceAngleDeg = 10;
        const spaceAngle = (Math.PI / 180) * 10;
        const totalSpaceAvailableInDegree =
          (360 - totalStatuses * spaceAngleDeg) / totalStatuses;
        const arcAngle = (Math.PI / 180) * totalSpaceAvailableInDegree;

        let colorChange = false;
        context.lineWidth = 2;
        context.lineCap = 'round';
        let prevAngle = 0;
        let unseenItems = statusNumber - seen;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < totalArcs; i++) {
          let startAngle = 0;
          let endAngle = 0;

          if (colorChange) {
            startAngle = prevAngle;
            endAngle = prevAngle + arcAngle;
            prevAngle = endAngle;

            context.strokeStyle =
              unseenItems <= 0 ? colors.medium : colors.whatsappGreen;
            unseenItems--;
          } else {
            startAngle = prevAngle;
            endAngle = prevAngle + spaceAngle;
            prevAngle = endAngle;

            context.strokeStyle = 'transparent';
          }
          colorChange = !colorChange;

          context.beginPath();
          context.arc(centerX, centerY, radius, startAngle, endAngle);
          context.stroke();
        }
      };

      if (canvasRef.current) {
        drawCircle(canvasRef.current);
      }
    }, [statusIn, seen]);

    return (
      <View style={[styles.container, {height: size, width: size}]}>
        <Canvas ref={canvasRef} style={styles.canvas} />
        {image ? (
          <Image
            style={[
              styles.image,
              {
                height: size - 3,
                width: size - 3,
                borderRadius: radius - 3,
                transform: [
                  {translateX: -radius + 3},
                  {translateY: -radius + 3},
                ],
              },
            ]}
            source={image}
          />
        ) : (
          <Image
            style={[
              styles.image,
              {
                height: size - 3,
                width: size - 3,
                borderRadius: radius - 3,
                transform: [
                  {translateX: -radius + 3},
                  {translateY: -radius + 3},
                ],
              },
            ]}
            source={require('../../asset/user.png')}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  canvas: {
    transform: [{rotate: '270deg'}],
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: [{translateX: -30}, {translateY: -30}],
    backgroundColor: '#e2e2e2',
  },
});

export default CircularStatusImage;
