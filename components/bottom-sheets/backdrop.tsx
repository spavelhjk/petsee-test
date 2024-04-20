import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import { Pressable } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

export type BackdropProps = BottomSheetBackdropProps & {
  onPress: () => void
}

const Backdrop = ({ animatedIndex, style, onPress }: BackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.6], Extrapolate.CLAMP),
    }
  })

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'transparent',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  )

  return (
    <Animated.View style={containerStyle}>
      <Pressable onPress={onPress} style={{ flexGrow: 1 }} />
    </Animated.View>
  )
}

export default Backdrop
