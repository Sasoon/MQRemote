import React, { Component } from "react";
import {
  NativeModules,
  Image,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View, 
  Dimensions,
  Switch,
} from "react-native";
import Room from "./components/Room";
import Toggle from "./components/Toggle";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const bg =
  "https://staff.mq.edu.au/media/photos/shared_identity_three-colour_gradient.jpg";
const icon =
  "https://webresources.mq.edu.au/mq_templates/global/images/2015/logo.png";
const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
state = { switchValue: false };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: icon }}
            style={{ height: 60, width: 120 }}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>MQRemote</Text>
        </View>
        <View style={styles.roomContainer}>
          <Room roomNumber="104" />
          <Room roomNumber="118" />
          <Room roomNumber="206" />
          <Room roomNumber="208" />
          <Room roomNumber="214" />
          <Room roomNumber="316" />
        </View>
        <View style={styles.switchContainer}>
          <Toggle />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F51B5',
    width: width,
    height: height,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 3,
  },
  switchContainer: {
    flex: 3,
  },
  header: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#fff',
  }
});