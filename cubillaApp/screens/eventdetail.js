import React,{Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapboxGL from '@react-native-mapbox-gl/maps';





MapboxGL.setAccessToken('pk.eyJ1IjoiZGF2aWNhemEiLCJhIjoiY2sxMmV4MWxrMDExNjNncWNnZDJibjNjYSJ9.hfOIW9su0xQ7fGPV6Gxang');
class Eventdetail extends Component{
  static navigationOptions = { 
    title : 'Cubilla',
    headerStyle: { backgroundColor: '#57c7db' },
    headerTitleStyle:{ color: 'white',fontFamily:'Pacifico',fontSize:30},
  };

  constructor(props){
    super(props);
     
    
  }

  alert(){
    Alert.alert('Registrado');
  }
  
    render(){
      
        return (
         
          
          <ScrollView style={{flex:1}}>
          <SafeAreaView>
            
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1,height:200,width:null,padding:10}}>
            <Image source={{uri:'https://cdn-az.allevents.in/events4/banners/b0726b1189d4d7b70e87b1d24ce95a28c0eeee47fee948bf1e99f3f290564f64-rimg-w517-h296-gmir.jpg?v=1568787458'}} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
            </View>

            <Text style={styles.des}>Descripción</Text>
            <Text style={styles.descripcion}>
            
            El Festival Internacional De Cine Terror Barranquilla, sera un espacio para los creadores audiovisuales de Barranquilla en crear cortos de terror &Horror bajo la tendencia cultural de la región caribe , sus cuentos y leyendas del folclore de nuestro país.
            </Text>
            <Text style={styles.descripcion}>
                id:
                {JSON.stringify(this.props.navigation.getParam('itemId','NO-ID'))}
            </Text>
            <Text style={{padding:10,alignSelf:'center',fontWeight:'bold',fontSize:20}}>Fecha: 6/10/2019 3:00pm</Text>
            <View style={{paddingHorizontal:50}}>
                <TouchableOpacity style={styles.button} onPress={() => this.alert()}>
                    <Text style={styles.text}>Asistir</Text>
                </TouchableOpacity>
            </View>
            <Text style={{padding:10,fontSize:15,fontWeight:'bold'}}>Mapa</Text>
            
          </ScrollView>
      
        </SafeAreaView> 

          <MapboxGL.MapView
            style={{flex:1, width: '100%',height:500}}
            styleURL={MapboxGL.StyleURL.Street}
            showUserLocation={true}
            >
                <MapboxGL.Camera
                zoomLevel={12}
                animationMode={'flyTo'}
                animationDuration={3000}
                centerCoordinate={[-74.821883,11.006798,]}
                />
            </MapboxGL.MapView>
            </ScrollView>
            
        );
    }
    
}


const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
  des:{
    fontSize:20,
    fontWeight:'bold',
    padding:10
  },
  descripcion:{
    padding:10
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight:'bold'
    },
});


export default Eventdetail;
