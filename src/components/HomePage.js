import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import PassionsList from './PassionsList';
import { PlusButton } from './symbols';
import { addPassion } from '../actions';
import { Card, CardSection, Input } from './common';


class HomePage extends Component {
  state = {
    newPassion: '',
    addingItem: null
  };

  onInputChange(text) {
    this.setState({newPassion: text});
    // this.setState({ addingItem: false });
    console.log(this.state);
  }

  onButtonPress() {
    this.setState({ addingItem: true });
  }

  addNewPassion() {
    if (this.state.addingItem) {
      return (
        <Input
          onChangeText={this.onInputChange.bind(this)}
        ></Input>
      );
    }
  }

  render(){
    console.log(this.state);
    const { viewStyle, buttonStyle } = styles ;

    return (
      <Card>
        <CardSection>
          {this.addNewPassion()}
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Add New Passion</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    height: 100
  }
};



export default connect(null, { addPassion })(HomePage);
