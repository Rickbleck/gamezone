import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20
    },
    titleText:{
        fontSize:20,
        fontFamily: 'nunito-bold',
        color: 'white'
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    }
})

export const images={
    ratings:{
        '1': require('../assets/rating-1.png')
    }
}