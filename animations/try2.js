import React from 'react';
//import react in our project

import { StyleSheet, View, Animated, Image, Easing } from 'react-native';
////import all the components we needed

export default class App extends React.Component {
  //Create A variable inside the constructor and set rotate value 
  //using animation value. We would set the RotateValueHolder  value 
  //using Animated set its default value as Zero.
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }	

  componentDidMount() {
    this.StartImageRotateFunction();  //It will call the StartImageRotateFunction() function inside it. 
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0); // Set the Spin – Rotate value to Zero.

    Animated.timing(this.RotateValueHolder, { //This function would used to set the animation timing which would start from 0 to 3000 milliseconds.
      toValue: 1,
      duration: 3000,
      easing: Easing.circle, //The Easing module implements common easing functions ease, sin, back, elastic, linear, bounce, quad, bezier, cubic, 
                            //in and out type easing present in React native animated API.
                            //This module is used by Animated.timing() to convey physically believable motion in animations.
                            //for more: https://reactnative.dev/docs/easing
    }).start(() => this.StartImageRotateFunction()); //code we will recursively calling the StartImageRotateFunction() in start ( () => ) method. 
                                                    //So by calling this it will spin for infinite time. 
                                                    //If you want to stop the spin after 1 round then remove the function from start ( () => ) method.
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({ //Create a constant variable named as RotateData inside the Render’s block . 
                                                            //This would tell us the Spin animation range, means from which degree 
                                                            //we we have to start rotating the Image.
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (                                          //   Create a Animated.Image view inside the Render’s return block.
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            borderRadius:100,
            transform: [{ rotate: RotateData }],
          }}
          source={{
            uri:
                  'https://aboutreact.com/wp-content/uploads/2018/08/logo1024.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({  //Create CSS for main container view.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C2C2',
  },
});


