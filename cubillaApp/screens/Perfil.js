import React,{Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'



class Perfil extends Component{
  static navigationOptions = { 
    title : 'Cubilla',
    headerStyle: { backgroundColor: '#57c7db' },
    headerTitleStyle:{ color: 'white',fontFamily:'Pacifico',fontSize:30},
  };
    render(){
        return (
          <SafeAreaView>
            
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1,height:200,width:null,padding:10}}>
            <Image style={styles.avatar} source={{uri: 'https://randomuser.me/api/portraits/women/75.jpg'}}></Image>
            </View>

            <Text style={styles.usuario}>Mi Perfil</Text>
            <Text style={styles.descripcion}>Hola soy ........</Text>
            <Text style={{padding:10,alignSelf:'center',fontWeight:'bold',fontSize:20}}>Puntos: 100</Text>
            
            <Text style={{padding:10,fontSize:15,fontWeight:'bold'}}>Eventos Participados</Text>
          </ScrollView>
      
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  usuario:{
    fontSize:20,
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
  descripcion:{
    padding:10
  },

});

export default createStackNavigator({
  Perfil:{
    screen: Perfil
  }
});

