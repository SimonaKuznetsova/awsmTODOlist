/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors, links} from '../../constants';
import ButtonControl from '../../controls/Button/Button';

const CreateList = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View
          style={[styles.categoryContainer, {backgroundColor: colors.orange}]}>
          <Text style={styles.categoryName}>Daily Tasks</Text>
        </View>
        <View
          style={[
            styles.categoryContainer,
            {backgroundColor: colors.lightGreen},
          ]}>
          <Text style={styles.categoryName}>Shooping List</Text>
        </View>
        <View
          style={[styles.categoryContainer, {backgroundColor: colors.purple}]}>
          <Text style={styles.categoryName}>Job Tasks</Text>
        </View>
        <View
          style={[styles.categoryContainer, styles.emptyCategoryContainer]}
          onTouchStart={() => navigation.navigate(links.TO_MAIN)}>
          <Text style={[styles.categoryName, styles.emptyCategoryName]}>+</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: 'yellow',
    width: 170,
    height: 170,
    borderRadius: 15,
    margin: 5,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCategoryContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.darkGreen,
  },
  categoryName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  emptyCategoryName: {
    color: colors.darkGreen,
    fontSize: 40,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 25,
  },
});

export default CreateList;
