import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import { fadeIn } from 'react-navigation-transitions';
import Eventdetail from './eventdetail';



class Eventos extends React.Component{

   
  static navigationOptions = { 
    title : 'Cubilla',
    headerStyle: { backgroundColor: '#57c7db' },
    headerTitleStyle:{ color: 'white',fontFamily:'Pacifico',fontSize:30},
  };
  h(a){
    this.props.navigation.push('Eventdetail', {
      itemId: 1,
      otherParam: a,
    });
  }; 

  
    render(){
      
        return (
            <SafeAreaView>
            
              <ScrollView scrollEventThrottle={16}>
                <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>Festival Internacional de Cine de Terror</Text>
                <View style={{flex:2,height:300,width:null,padding:10}}>
                
                <TouchableOpacity onPress={() => this.h('https://cdn-az.allevents.in/events4/banners/b0726b1189d4d7b70e87b1d24ce95a28c0eeee47fee948bf1e99f3f290564f64-rimg-w517-h296-gmir.jpg?v=1568787458')}>
                  <Image style={{resizeMode:'cover'}} source={{uri:'https://cdn-az.allevents.in/events4/banners/b0726b1189d4d7b70e87b1d24ce95a28c0eeee47fee948bf1e99f3f290564f64-rimg-w517-h296-gmir.jpg?v=1568787458'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
               
                </TouchableOpacity>

                </View>
                
                <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>Safari Nocturno</Text>
                <View style={{flex:2,height:300,width:null,padding:10}}>
                
                <TouchableOpacity onPress={() => this.h()}>
                  <Image source={{uri:'https://pbs.twimg.com/media/Dqr4MnwXgAEykCM.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                </TouchableOpacity>

                </View>

                <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>IX Festival Internacional de Música de Cámara</Text>
                <View style={{flex:2,height:300,width:null,padding:10}}>
                
                <TouchableOpacity onPress={() => this.h()}>
                  <Image source={{uri:'https://farm5.static.flickr.com/4886/46217151022_f208c21fa7.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
              
                </TouchableOpacity>

                </View>
                
                
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
});

export default createStackNavigator({
  Eventos:{
    screen: Eventos
  },
  Eventdetail:{
    screen: Eventdetail
  }
},
  {
  transitionConfig: () => fadeIn(),
  }
);
