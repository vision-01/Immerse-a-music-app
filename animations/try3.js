import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

export default function App() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current; //Animated.Value() for single values:initialization

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {  //timing(): animates a value over time 
      toValue: 1,
      duration: 5000
    }).start();  //Animations are started by calling start() on your animation.
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000
    }).start();  //Animations are started by calling start() on your animation.
  };

  return (  //Defining styles of animation, //Fading View: text name for backgroung color should be fedding //styles.buttonRow:both button placed in row at bottom
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >  
        <Text style={styles.fadingText}>Fading View!</Text>  
      </Animated.View>
      <View style={styles.buttonRow}> 
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  //fixing the allignment of container
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {  //fixing the allignment/size and background color of container/box
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "red"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

