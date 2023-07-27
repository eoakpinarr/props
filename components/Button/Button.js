import { View, Text } from 'react-native'
import React from 'react'
import styles from './Button.style'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Button = ({text, onPress}) => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        style={styles.buton}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button