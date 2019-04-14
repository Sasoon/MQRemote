import React, { Component } from "react";
import {
  NativeModules,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View, 
  ImageBackground,
  Dimensions,
  Switch,
} from "react-native";
import Room from "./components/Room";
import Toggle from "./components/Toggle";

// Variables
const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const bg =
  "https://staff.mq.edu.au/media/photos/shared_identity_three-colour_gradient.jpg";
const icon =
  "https://i.imgur.com/CN0lorK.png";
const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
    console.log("App loaded");
  }
  start = (roomNumber) => {
    NativeModules.Wol.Start(roomNumber, this.state.switchValue);
    console.log('Start method initialized')
    console.log(roomNumber, this.state.switchValue)
  };  
  toggleSwitch = (switchValue) => {
    this.setState({ switchValue: switchValue });
  };  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MQRemote</Text>  
        </View>
        <View style={styles.roomContainer}>
          <ImageBackground source={{uri: bg}} style={styles.roomBackground}> 
            <View style={styles.mqLogoWrapper}>
              <Image source={{uri: icon}} style={styles.mqLogo} resizeMode='contain' /> 
            </View> 
            <Room roomNumber="104" start={this.start} switchValue={this.state.switchValue}/>
            <Room roomNumber="118" start={this.start} switchValue={this.state.switchValue}/>
            <Room roomNumber="206" start={this.start} switchValue={this.state.switchValue}/>
            <Room roomNumber="208" start={this.start} switchValue={this.state.switchValue}/>
            <Room roomNumber="214" start={this.start} switchValue={this.state.switchValue}/>
            <Room roomNumber="306" start={this.start} switchValue={this.state.switchValue}/>
        </ImageBackground>
        </View>
        <View style={styles.switchContainer}>
          <Toggle switchValue={this.state.switchValue} toggleSwitch={this.toggleSwitch} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,
    backgroundColor: '#EAE6DB',
    width: width,
    height: height,
  },
  // Room 
  roomContainer: {
    margin: 10,
  },
  roomBackground: {
    width: '100%',
    height: '72%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // Switch 
  switchContainer: {
    flex: 5,
  },
  // Logo
  mqLogo: {
    height: 100,
    width: 200, 
    marginLeft: 10,
  },
  mqLogoWrapper: {
    height: 100,
    width: 400, 
  },
  // Header 
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 35,
    color: '#000',
  }
});