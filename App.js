import React, { Component } from "react";
import { NativeModules, TouchableOpacity, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Room from "./components/Room";
import Toggle from "./components/Toggle";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const bg = "https://staff.mq.edu.au/media/photos/shared_identity_three-colour_gradient.jpg";
const icon = "https://webresources.mq.edu.au/mq_templates/global/images/2015/logo.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.updateStatus();
    console.log("woot");
  }
  Start = () => {
    console.log("woot");
    NativeModules.Wol.Start();
    console.log("woot");
  };
  turnOn = () => {
    NativeModules.Wol.turnOn();
    this.updateStatus();
    console.log("woot");
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

                            <Image
              source={{ uri: bg }}
              style={{ position: "absolute", height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          <View style={styles.header}>
                            <Image
              source={{ uri: icon }}
              style={{ height: 60, width: 120 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 30, color: "#ffff", fontWeight: "bold", paddingLeft: 15, paddingRight: 15 }}>
              MQRemote
            </Text>
          </View>
          <View>
            <Room roomNumber="104"></Room>
            <Room roomNumber="118"></Room>
            <Room roomNumber="206"></Room>
            <Room roomNumber="208"></Room>
            <Room roomNumber="214"></Room>
            <Room roomNumber="316"></Room>
          </View>
          

              <Text> Wol is {this.state.isOn ? "ON" : "OFF"} </Text>
    <Button onPress={this.Start} title="Start" />
    {!this.state.isOn ? (
      <Button onPress={this.turnOn} title="Turn ON" />
    ) : (
      <Button onPress={this.turnOff} title="Turn OFF"/>
    )}

      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCFC"
  },
  header: {
    marginTop: STATUS_BAR_HEIGHT,
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row'
  },
});
