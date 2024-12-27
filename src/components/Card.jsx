import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View>
        <View style={styles.view}> 
            <Text style={styles.text}>App</Text>
        </View>
     
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt impedit ex perferendis dolorum recusandae aliquid praesentium, repellat asperiores fugiat autem, quos assumenda accusantium sint quasi ullam explicabo nostrum enim. Vitae.</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
text:{
    fontSize:40,
    color:"red",
    
},
view:{
   backgroundColor:"lightblue",
alignItems:"center",
    justifyContent:"center",
    marginBottom:40,
    marginTop:40
}
})