/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {colors, links} from '../../constants';
import ButtonControl from '../../controls/Button/Button';
import NewTask from './parts/NewTask';

const NewList = ({navigation, route}) => {
  const [tasksList, setTasksList] = useState([]);
  const [doneId, setDoneId] = useState(null);

  useEffect(() => {
    if (doneId) {
      const updatedTasksList = tasksList.map(task => {
        if (task.id === doneId) {
          return {
            ...task,
            done: !task.done,
          };
        } else {
          return task;
        }
      });

      setTasksList(updatedTasksList);
      setDoneId(null);
    }
  }, [doneId, tasksList]);

  useEffect(() => {
    if (route?.params?.list) {
      setTasksList(route?.params?.list);
    }
  }, [route]);

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          // padding: '5%',
        }}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.darkGreen,
              fontSize: 30,
            },
          ]}>
          {route.params.title}
        </Text>
        <NewTask list={tasksList} setList={setTasksList} />
        {tasksList.length > 0 && (
          <View style={styles.tasksList}>
            <ScrollView>
              {tasksList.map(task => {
                return (
                  <TouchableHighlight
                    onPress={() => setDoneId(task.id)}
                    underlayColor="#ffffff00">
                    <View style={styles.taskContainer} key={task.id}>
                      <Text style={styles.taskPoint}>{'\u2B24'}</Text>
                      <Text
                        style={[
                          styles.taskValue,
                          {
                            textDecorationLine: task.done
                              ? 'line-through'
                              : 'none',
                          },
                        ]}>
                        {task.value}
                      </Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        )}
        <ButtonControl
          title="SAVE LIST"
          onClick={() => {
            if (route?.params?.id) {
              navigation.navigate(links.TO_HOME, {
                updatedList: tasksList,
                id: route?.params?.id,
              });
            } else {
              navigation.navigate(links.TO_HOME, {
                list: tasksList,
              });
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  taskValue: {
    fontSize: 25,
    color: colors.darkGreen,
  },
  taskPoint: {
    fontSize: 7,
    marginRight: 10,
    color: colors.darkGreen,
  },
  tasksList: {
    height: 120,
    width: '100%',
    flex: 1,
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NewList;
