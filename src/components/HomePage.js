import React, { Component } from 'react';
import { View, Text, TextInput, CameraRoll, Dimensions, ImagePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import PassionsList from './PassionsList';
import { PlusButton, CheckCircle } from './symbols';
import { addPassion } from '../actions';
import { Card, CardSection, Input } from './common';
import {PassionItemEnter} from './PassionItemEnter';
import PhotoUpload from './PhotoUpload';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passion: '',
      addingItem: null
    };
    this.getPhotosFromGallery = this.getPhotosFromGallery.bind(this);
  }

  state = {

  };

  onInputChange(text) {
    this.setState({passion: text});
  }

  onButtonPress() {
    this.setState({ addingItem: true });
  }

  onCheckEnter() {
    const { passion } = this.state;
    this.props.addPassion({ passion });
    this.setState({ addingItem: false });
  }

  addNewPassion() {
    const hiking = "Hiking";
    if (this.state.addingItem) {
      return (
        <PassionItemEnter
          placeholder={hiking}
          onChangeText={this.onInputChange.bind(this)}
          onCheckEnter={this.onCheckEnter.bind(this)}
        ></PassionItemEnter>
      );
    }
  }

  getPhotosFromGallery() {
    console.log("Photos");
   // CameraRoll.getPhotos({ first: 1000000 })
   //   .then(res => {
   //     console.log(res, "images data")
   //   });
   ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));

   }

  render(){
    const { viewStyle } = styles ;

    return (
      <Card style={viewStyle}>
        <PhotoUpload onPress={this.getPhotosFromGallery}/>
        <PassionsList />
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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = {
  viewStyle: {
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};



export default connect(null, { addPassion })(HomePage);


//to debug go to =>
//http://localhost:8081/debugger-ui/
