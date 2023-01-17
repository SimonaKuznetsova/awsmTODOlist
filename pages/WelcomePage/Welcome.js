/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors, links} from '../../constants';
import ButtonControl from '../../controls/Button/Button';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.darkGreen,
              fontSize: 30,
            },
          ]}>
          Welcome!
        </Text>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.darkGreen,
              fontSize: 30,
              marginBottom: 30,
            },
          ]}>
          Click to get started
        </Text>

        <ButtonControl
          title="GET STARTED"
          onClick={() => navigation.navigate(links.TO_HOME)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Welcome;
