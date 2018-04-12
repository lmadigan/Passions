import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class PassionView extends Component {


  render() {
    console.log(this.props);

    return (
      <View>
        <Text>{this.props.passion}</Text>
      </View>
    );
  }
 }

 const mapStateToProps = (state) => {
   const { passion } = state.passions;
   return { passion };
 };

export default connect(mapStateToProps, {})(PassionView);
