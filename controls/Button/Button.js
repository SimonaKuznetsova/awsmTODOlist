import React from 'react';
import {Button, StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../../constants';

const ButtonControl = ({title, onClick}) => {
  return (
    <TouchableHighlight style={styles.buttonStyles}>
      <Button onPress={onClick} title={title} color="white" />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    height: 50,
    width: 180,
    borderRadius: 30,
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonControl;
