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

export const introduction = StyleSheet.create({
    banner : {
        height : Dimensions.get('window').height / 3,
        justifyContent : 'center',
        alignItems : 'center'

    }, bannertext : {
        fontSize : 25,
        fontWeight : 'bold',
    }
})

export const jobItem = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor  : '#bdbdbd'
    },
    text: {
        fontWeight: 'bold',
        color: '#101010'
    }
  })