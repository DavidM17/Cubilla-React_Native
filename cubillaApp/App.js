import React from 'react';


import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Eventos from './screens/Eventos';
import Calendario from './screens/Calendario';
import Puntos from './screens/Puntos';
import Perfil from './screens/Perfil';



import Icon from 'react-native-vector-icons/Ionicons'


  


  
const navig = createBottomTabNavigator(
  {

    Eventos:{
      screen: Eventos,
      navigationOptions:{
        tabBarLabel: 'Eventos',
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-search" color= {tintColor} size={24} />
        )
      }
    },
    Calendario:{
      screen: Calendario,
      navigationOptions:{
        tabBarLabel: 'Calendario',
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-calendar" color= {tintColor} size={24} />
        )
      }
    },
    Puntos:{
      screen: Puntos,
      navigationOptions:{
        tabBarLabel: 'Puntos',
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-heart" color= {tintColor} size={24} />
        )
      }
    },
    Perfil:{
      screen: Perfil,
      navigationOptions:{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-person" color= {tintColor} size={24} />
        )
      }
    }
  
    
  },
  {
    tabBarOptions:{
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

      style: {
        backgroundColor: '#57c7db',
      },
    }
  }
);


const App = createAppContainer(navig);

export default App;

