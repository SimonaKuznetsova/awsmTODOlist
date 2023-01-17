import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, NewList, Welcome} from './pages';

const App = () => {
  const Stack = createNativeStackNavigator();

  // return <Welcome />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Welcome}
          options={{title: 'Start Page'}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewList" component={NewList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
