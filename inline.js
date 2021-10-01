import React from ‘react';
import {View, Text, StyleSheet, Alert} from ‘react-native';

class HelloThere extends React.Component {
  clickMe() {
    Alert.alert(‘hi!');
  }
  render() {
    return (
      <View style={styles.box} onClick={this.clickMe.bind(this)}>
        <Text>Hello {this.props.name}. Please click me.</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  }
});

React.render(<HelloThere name="Component" />, document.getElementById('content'));
