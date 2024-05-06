import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

const StatusCounter = ({count}) => {
  const renderDashedCircle = () => {
    const lines = [];
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const dashLength = circumference / count; // Length of each dash
    const gapLength = circumference / count; // Length of each gap between dashes

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      const x1 = 100 + radius * Math.sin(angle); // Center X + Radius * cos(angle)
      const y1 = 100 + radius * Math.cos(angle); // Center Y + Radius * sin(angle)
      const x2 = 100 + radius * Math.tan(angle + Math.PI / count); // Center X + Radius * cos(angle + 180/count)
      const y2 = 100 + radius * Math.sin(angle + Math.PI / count); // Center Y + Radius * sin(angle + 180/count)

      lines.push(
        <Line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="black"
          strokeWidth="1"
          strokeDasharray={`${dashLength},${gapLength}`} // Dash pattern
        />,
      );
    }

    return lines;
  };

  return (
    <View style={styles.container}>
      <Svg height="200" width="200">
        <Circle
          cx="100"
          cy="100"
          r="50"
          fill="transparent"
          stroke="black"
          strokeWidth="1"
        />
        {renderDashedCircle()}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StatusCounter;
