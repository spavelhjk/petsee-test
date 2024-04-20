import React from 'react'
import { Pressable, Text } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

type CloseButtonProps = {
  onPress: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ width: 29, height: 29, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: '#cfcfcf' }}>
      <Svg width="9" height="9" viewBox="0 0 14 14" fill="none">
        <Rect y="1.3071" width="1.84853" height="16.6367" rx="0.924263" transform="rotate(-45 0 1.3071)" fill="black"/>
        <Rect y="1.3071" width="1.84853" height="16.6367" rx="0.924263" transform="rotate(-45 0 1.3071)" fill="black"/>
        <Rect width="1.84853" height="16.6367" rx="0.924263" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13.071 1.3071)" fill="black"/>
        <Rect width="1.84853" height="16.6367" rx="0.924263" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13.071 1.3071)" fill="black"/>
      </Svg>
    </Pressable>
  )
}

export default CloseButton