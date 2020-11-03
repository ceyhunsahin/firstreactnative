import { StyleSheet, Dimensions } from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
      padding: 12,
      margin: 7,
      borderRadius: 6
  },
  text: {
      fontWeight: 'bold',
      color: 'white'
  }
})

export const intrdoduction = StyleSheet.create({
    banner : {
        height : Dimensions.get('height').height/3,
        justifyContent : 'center',
        alignItems : 'center'

    }
})