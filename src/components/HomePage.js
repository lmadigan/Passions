import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';
import PassionsList from './PassionsList';
import { PlusButton } from './symbols';


class HomePage extends Component {
  onButtonPress() {

  }

  render(){
    const { viewStyle } = styles ;

    return (
      <View style={viewStyle}>
        <Text>User Home Page</Text>
        <PassionsList />
        <Button onPress={this.onButtonPress.bind(this)}>Add New Passion</Button>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    height: 100
  }
}

export default HomePage;
