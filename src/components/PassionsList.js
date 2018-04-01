import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchPassions } from '../actions';

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

  createDataSource({ passionItems }) {
    const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

    this.dataSource = ds.cloneWithRows(passionItems);
  }

  renderRow(passionItem) {
    return <Text>{passionItem.name}</Text>;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      >
      </ListView>
    );
  }
}

const mapStateToProps = (state) => {
  const { passionItems } = state;
  return { passionItems };
};

export default connect(mapStateToProps, { fetchPassions })(PassionsList);
