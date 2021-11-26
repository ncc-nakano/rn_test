import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  name = "hoge"
  state = {name:"hoge"}

  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!</Text>
        <Text>{this.state.name}</Text>
        <Button
            title="click here" onPress={this.thanksAlert}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
  
  // function
  thanksAlert = () => {
    alert("thanks!");
    console.log("thanks is pushed");
    this.setState({name:"fuga"});
  }

}


// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
