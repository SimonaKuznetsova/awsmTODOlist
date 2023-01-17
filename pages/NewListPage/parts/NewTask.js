/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../constants';

const NewTask = ({navigation, route, list, setList}) => {
  const [value, setValue] = useState(null);

  const onAddTaskHandler = () => {
    if (value) {
      setList([
        ...list,
        {
          value,
          id: new Date().getTime(),
          done: false,
        },
      ]);
      setValue(null);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What are you planning?"
        placeholderTextColor={'white'}
        autoCorrect={false}
        onChangeText={setValue}
        value={value}
      />
      <View style={styles.button}>
        <Text onPress={onAddTaskHandler} style={styles.plusIcon}>
          +
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '100%',
    backgroundColor: colors.lightGreen,
    // flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 24,
    color: 'white',
  },
  plusIcon: {
    fontSize: 50,
    color: 'white',
  },
});

export default NewTask;
