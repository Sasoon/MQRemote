import React, { Component } from "react";
import {
  NativeModules,
  Image,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View, 
  ImageBackground,
  Dimensions,
  Switch,
} from "react-native";
import Svg, { Path } from 'react-native-svg'
import Room from "./components/Room";
import Toggle from "./components/Toggle";
import Logo from "./components/Logo";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const bg =
  "https://staff.mq.edu.au/media/photos/shared_identity_three-colour_gradient.jpg";
const icon =
  "https://i.imgur.com/CN0lorK.png";
const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      isOn: false
    };
    this.updateStatus();
    console.log("woot");
  }
  turnOn = () => {
    NativeModules.Wol.turnOn();
    this.updateStatus();
  };
  turnOff = () => {
    NativeModules.Wol.turnOff();
    this.updateStatus();
  };
  updateStatus = () => {
    NativeModules.Wol.getStatus((error, isOn) => {
      this.setState({
        isOn: isOn
      });
    });
  };
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
          <Logo />     
        </View>
        <View style={styles.roomContainer}>
        <ImageBackground source={{uri: bg}} style={{width: '100%', height: '100%'}}> 
          <Room roomNumber="104" start={this.start} switchValue={this.state.switchValue}/>
          <Room roomNumber="118" start={this.start} switchValue={this.state.switchValue}/>
          <Room roomNumber="206" start={this.start} switchValue={this.state.switchValue}/>
          <Room roomNumber="208" start={this.start} switchValue={this.state.switchValue}/>
          <Room roomNumber="214" start={this.start} switchValue={this.state.switchValue}/>
          <Room roomNumber="316" start={this.start} switchValue={this.state.switchValue}/>          
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
  container: {
    flex: 1,
    backgroundColor: '#EAE6DB',
    width: width,
    height: height,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
  switchContainer: {
    flex: 5,
  },
  // Header styles
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerImage: {
    height: 100,
    width: 200, 
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#fff',
  }
});