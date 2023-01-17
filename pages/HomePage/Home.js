/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {colors, links} from '../../constants';
import ButtonControl from '../../controls/Button/Button';
import CreateTitleForList from '../CreateTitleForListModal/CreateTitleForList';
import SelecrColorForList from '../SelectColorForListModal/SelectColorForList';

const Home = ({navigation, route}) => {
  const [modalTitleVisible, setModalTitleVisible] = useState(false);
  const [modalColorVisible, setModalColorVisible] = useState(false);
  const [newListTitle, setNewListTitle] = React.useState('');
  const [newListColor, setNewListColor] = React.useState('');
  const [newListTasks, setNewListTasks] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: `1`,
      title: 'Daily Tasks',
      color: colors.orange,
      tasksList: [
        {
          id: `2`,
          done: false,
          value: 'first',
        },
        {
          id: `3`,
          done: true,
          value: 'first',
        },
      ],
    },
    {
      id: `4`,
      title: 'Shooping List',
      color: colors.lightGreen,
      tasksList: [
        {
          id: `5`,
          done: false,
          value: 'first',
        },
        {
          id: `6`,
          done: true,
          value: 'first',
        },
      ],
    },
    {
      id: `7`,
      title: 'Job Tasks',
      color: colors.purple,
      tasksList: [
        {
          id: `8`,
          done: false,
          value: 'first',
        },
        {
          id: `9`,
          done: true,
          value: 'first',
        },
      ],
    },
  ]);

  useEffect(() => {
    if (newListColor && !modalColorVisible) {
      navigation.navigate(links.TO_CREATE_NEW_LIST, {
        title: newListTitle,
      });
    }
  }, [newListColor, navigation, modalColorVisible, newListTitle]);

  useEffect(() => {
    if (route?.params?.list) {
      setNewListTasks(route.params.list);
    }

    if (route?.params?.updatedList && route?.params?.id) {
      setCategories(
        categories.map(category => {
          if (category.id === route?.params?.id) {
            return {
              ...category,
              tasksList: route?.params?.updatedList,
            };
          } else {
            return category;
          }
        }),
      );
    }
  }, [route]);

  useEffect(() => {
    if (newListTasks.length) {
      setCategories([
        ...categories,
        {
          id: `${new Date().getTime()} + ${Math.random()}`,
          title: newListTitle,
          color: newListColor,
          tasksList: newListTasks,
        },
      ]);

      setNewListTasks([]);
      setNewListColor('');
      setNewListTitle('');
    }
  }, [newListTasks, newListTitle, newListColor, categories]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          {categories.map(category => {
            return (
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate(links.TO_CREATE_NEW_LIST, {
                    title: category.title,
                    list: category.tasksList,
                    id: category.id,
                  })
                }
                underlayColor="#ffffff00"
                key={category.id}>
                <View
                  style={[
                    styles.categoryContainer,
                    {backgroundColor: category.color},
                  ]}>
                  <Text style={styles.categoryName}>{category.title}</Text>
                </View>
              </TouchableHighlight>
            );
          })}

          <TouchableHighlight
            onPress={() => setModalTitleVisible(true)}
            underlayColor="#ffffff00">
            <View
              style={[styles.categoryContainer, styles.emptyCategoryContainer]}>
              <Text style={[styles.categoryName, styles.emptyCategoryName]}>
                +
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>

      <CreateTitleForList
        modalVisible={modalTitleVisible}
        setModalVisible={setModalTitleVisible}
        newListTitle={newListTitle}
        setNewListTitle={setNewListTitle}
        setModalColorVisible={setModalColorVisible}
      />

      <SelecrColorForList
        modalVisible={modalColorVisible}
        setModalVisible={setModalColorVisible}
        setNewListColor={setNewListColor}
        newListColor={newListColor}
      />
    </>
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

export default Home;
