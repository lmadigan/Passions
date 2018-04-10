import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class PassionView extends Component {


  render() {
    console.log(this.props.passionItem);
    const { passion, uid } = this.props.passionItem;
    return (
      <View>
        <Text>{passion}</Text>
      </View>
    );
  }
 }

export default PassionView;
