import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { fetchPassions } from '../actions';
import PassionItem from './PassionItem';

class PassionsList extends Component {

  componentWillMount() {
    this.props.fetchPassions();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that the component will
    // be rendered with
    // this.props is still the old set of nextProps
    this.createDataSource(nextProps);
  }

  createDataSource({ passions }) {
    const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

    this.dataSource = ds.cloneWithRows(passions);
  }

  onPress(passionItem) {
    console.log(passionItem);
    Actions.passionView({ passionItem: passionItem });
  }


  render() {

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(rowData) =>
          <PassionItem passion={rowData} onPress={this.onPress.bind(rowData)} />}
      >
      </ListView>
    );
  }
}


const mapStateToProps = (state) => {
  const { passionItems } = state.passions;
  const passions = _.map(passionItems, (val, uid) => {
    return { ...val, uid };
  });
  return { passions };
};

const styles = {
  cardsectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  textStyle: {
    padding: 10,
    color: '#4c5267',
    fontSize: 22
  }
}

export default connect(mapStateToProps, { fetchPassions })(PassionsList);
