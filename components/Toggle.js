import React from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

export class Toggle extends React.Component {
  render() {
    return (
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>{this.props.switchValue ? 'WakeOnLan' : 'Shutdown'}</Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.props.toggleSwitch}
          value={this.props.switchValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 20
  }
});

export default Toggle;