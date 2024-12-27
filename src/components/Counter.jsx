import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Counter = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

/* useEffect(() => {
    console.log("input değeri değişti", inputValue)
},[inputValue]) */
useEffect(() => {
    console.log(">>>>>>>Bileşen Ekrana basıldı!!!!");
    return()=>console.log(">>>>>>>Bileşen Ekrandan Gitti!!!!");
  
},[inputValue]);

const handleInputChange = (value) => {
  setInputValue(value);

  // Sadece sayısal bir değer girilmişse `count` state'ini güncelle
  if (!isNaN(value) && value.trim() !== "") {
      setCount(Number(value));
  }
};



  return (

    <View style={styles.container}>

        <TextInput
        placeholder='Değer Giriniz'
        style={styles.textInput}
        value={inputValue}
        onChangeText={handleInputChange}
        />

      <TouchableOpacity style={[styles.button, {backgroundColor:count < 10 ? "red": "green"}]}
      onPress={()=>setCount(count-1)}
      disabled={count ===0}
      >
        <Text style={styles.buttonText}>Azalt</Text>
      </TouchableOpacity>

<Text style={styles.countText}>{count}</Text>

      <TouchableOpacity style={[styles.button, {backgroundColor:count > 10 ? "red": "green"}]}
      onPress={()=>setCount(count+1)}
      >
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>

      
      <TouchableOpacity 
      style={[styles.button,{backgroundColor:"blue"}]}
      onPress={()=>setCount(0)}
      >
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    button:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
        marginVertical:10
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    countText:{
        fontSize:60,
        fontWeight:"bold",
        color:"black",
        borderColor:"gray",
        marginVertical:20
    },
    textInput:{
        width:200,
        height:40,
        borderColor:"gray",
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:20,
        borderRadius:5,
        fontSize:20,
        color:"black",
        marginTop:-200
    }

})