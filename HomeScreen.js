import React from 'react';
import { View, Text, Button } from 'react-native'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40}}>Caroline's first app</Text>
        <Button
         title='Show Camera'
         onPress={this.handlePress}
         />
      </View>
    );
  }

  handlePress = () => {
    this.props.navigation.navigate('Details');
  }
}


export default HomeScreen;
