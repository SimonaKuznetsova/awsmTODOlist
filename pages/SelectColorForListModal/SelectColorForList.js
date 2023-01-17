/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors, colorsList, links} from '../../constants';
import ButtonControl from '../../controls/Button/Button';

const SelecrColorForList = ({
  modalVisible,
  setModalVisible,
  setNewListColor,
  newListColor,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select color for your List</Text>
          <View style={styles.colorsPicker}>
            {colorsList.map(color => {
              return (
                <View
                  key={color}
                  style={[
                    styles.colorItem,
                    {
                      backgroundColor: color,
                    },
                  ]}
                  onTouchStart={() => setNewListColor(color)}>
                  {newListColor === color ? (
                    <View
                      style={[
                        styles.selectedPin,
                        {
                          transform: [{rotate: '45deg'}],
                        },
                      ]}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
          <ButtonControl
            title="LET'S GO"
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  selectedPin: {
    width: '30%',
    height: '45%',
    borderBottomWidth: 7,
    borderBottomColor: 'white',
    borderRightWidth: 7,
    borderRightColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: colors.darkGreen,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    minWidth: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.darkGreen,
    color: colors.darkGreen,
    marginBottom: 30,
  },
  colorsPicker: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  colorItem: {
    width: 70,
    height: 70,
    borderRadius: 5,
    margin: 10,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelecrColorForList;
