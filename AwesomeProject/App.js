import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      test1: '', 
      test2: '' 
    };
  }


  render() {
    return (
      
        <View style = {styles.box}>
          <TextInput
            style = {styles.Textinput1}
            onChangeText={(text) => this.setState({text})}
            placeholder = "textInput1"
          />
          <TextInput
            style = {styles.Textinput2}
            onChangeText={(text) => this.setState({text})}
            placeholder = "textInput2"
          />
        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Textinput1:
  {
    // flexDirection: 'column',
    flex: 3,
    textAlign: 'center',
    height: 50,
    padding: 12,
    backgroundColor : "#fff",
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 4,
    marginRight: 5,
  },
  Textinput2:
  {
    // flexDirection: 'column',
    marginLeft: 5,
    flex: 2,
    textAlign: 'center',
    height: 50,
    padding: 12,
    backgroundColor : "#fff",
    borderWidth: 3,
    borderColor: '#79a156',
    borderRadius: 4 ,
  },
  box: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'gold',
  }
});
