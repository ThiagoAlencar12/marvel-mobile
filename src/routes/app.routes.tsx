import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/themes';

import { Films } from '../sreens/Films';
import { FilmDetail } from '../sreens/FilmDetail';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >     
      <Screen 
        name="Films"
        component={Films}
      />
      <Screen 
        name="FilmDetail"
        component={FilmDetail}
      />
    </Navigator>
  )
}