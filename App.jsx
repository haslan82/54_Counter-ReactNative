import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from './src/components/Counter';
import {useState} from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60,
      }}>

      <View style={{marginBottom: 20, marginTop:150}}>
        <Button 
        title='Gizle / Göster'
        onPress={() => setIsVisible(!isVisible)}
        />
      </View>
      {isVisible && <Counter />}
    </View>
  );
};

const style = StyleSheet.create({});

export default App;
