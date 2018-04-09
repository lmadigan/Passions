import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

const PassionItem = ({passion, onPress}) => {
    const { cardsectionStyle, textStyle } = styles;

    return (
        <CardSection style={styles.cardsectionStyle}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textStyle}>
            {passion.passion}
          </Text>
        </TouchableOpacity>
        </CardSection>
    );
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
};

export default PassionItem;
