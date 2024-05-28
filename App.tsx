import React from 'react';
import {StyleSheet,  View} from 'react-native';
import ImageSlider from "./SRC/ImageSlider";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
