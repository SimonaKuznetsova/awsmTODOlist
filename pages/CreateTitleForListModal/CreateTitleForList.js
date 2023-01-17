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
import {colors} from '../../constants';
import ButtonControl from '../../controls/Button/Button';

const CreateTitleForList = ({
  modalVisible,
  setModalVisible,
  newListTitle,
  setNewListTitle,
  setModalColorVisible,
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
          <Text style={styles.modalText}>Think of a name for the list</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNewListTitle}
            value={newListTitle}
          />
          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable> */}
          <ButtonControl
            title="NEXT STEP"
            onClick={() => {
              setModalVisible(!modalVisible);
              setModalColorVisible(true);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
  },
});

export default CreateTitleForList;
