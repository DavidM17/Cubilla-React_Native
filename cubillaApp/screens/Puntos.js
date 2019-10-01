import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import SafeAreaView from 'react-native-safe-area-view';



class Puntos extends Component{
  static navigationOptions = { 
    title : 'Cubilla',
    headerStyle: { backgroundColor: '#57c7db' },
    headerTitleStyle:{ color: 'white',fontFamily:'Pacifico',fontSize:30},
  };

  h(){
    
  }
    render(){
        return (
            <SafeAreaView>
              <ScrollView scrollEventThrottle={16}>
               {/* Fila 1 */}
              <View style={styles.row}>
              <TouchableOpacity onPress={() => this.h()}>
                  
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                    <Image source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                    
                  
                  
                  </View>
                  <Text style={styles.text}>Producto 1</Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.h()}>
                
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                      <Image style={{resizeMode:'cover'}} source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                
                  

                  </View>
                  <Text style={styles.text}>Producto 2</Text>
                </View>
                </TouchableOpacity>
                
                 
                </View>

                {/* Fila 2 */}
                <View style={styles.row}>
                <TouchableOpacity onPress={() => this.h()}>
                  
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                   <Image source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                    
                  
                  
                  </View>
                  <Text style={styles.text}>Producto 3</Text>
                </View>
                </TouchableOpacity>
                  
                <TouchableOpacity onPress={() => this.h()}>
                 
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                    <Image style={{resizeMode:'cover'}} source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                
                  

                  </View>
                  <Text style={styles.text}>Producto 4</Text>
                </View>

                </TouchableOpacity>
                 
                </View>

                {/* Fila 3 */}
                
                <View style={styles.row}>
                <TouchableOpacity onPress={() => this.h()}>
                  
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                    <Image source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                    
                 
                  
                  </View>
                  <Text style={styles.text}>Producto 5</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.h()}>
                  
                <View style={styles.box}>
                  
                  <View style={styles.container}>
                  
                    <Image style={{resizeMode:'cover'}} source={{uri:'https://img.webme.com/pic/a/artesaniasqrramba/figpeqbri.jpg'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
                
                  

                  </View>
                  <Text style={styles.text}>Producto 6</Text>
                </View>

                </TouchableOpacity>
                 
                </View>
                
                
              </ScrollView>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    height:180,
    width:180,
    padding:15
  },
  text:{
    fontSize:15,
    padding:5,
    fontWeight:'bold',
    alignSelf:'center'
  },
  row:{
    flexDirection:'row'
  },
  box:{
    backgroundColor:'#d4f8ff',
    borderRadius:20,
    marginLeft:10,
    marginTop:10
  }
});

export default createStackNavigator({
  Puntos:{
    screen: Puntos
  }
});

