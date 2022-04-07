import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

const App = ({ componentId }) => {
  pushDetailScreen = () => Navigation.push(componentId, { component: { name: 'com.myApp.DetailScreen' } });

  _renderItem = ({ index }) => (
    <TouchableOpacity style={{padding: 20, borderWidth: 1, marginVertical: 20}} onPress={pushDetailScreen}>
      <Text>{`Open item ${index}'s details`}</Text>
    </TouchableOpacity>
  )
  
  return (
    <View style={{flex: 1}}>
      <Text>ActivityIndicator's presence below will prevent details screen from unmounting properly on iOS</Text>
      <FlatList 
        data={[1]} 
        keyExtractor={(item, index) => `${index}`}
        renderItem={_renderItem}
        ListFooterComponent={<ActivityIndicator />}
      />
    </View>
  );
};

export default App;
