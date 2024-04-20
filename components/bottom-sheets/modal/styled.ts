import { View } from 'react-native'
import styled from '@emotion/native'
import { BottomSheetModal as RNBottomSheet } from '@gorhom/bottom-sheet'
import Animated from 'react-native-reanimated'

export const HandleComponent = styled(View)`
  position: absolute;
  top: 4px;
  align-self: center;
  height: 18px;
  width: 75px;
  border-radius: 4px;
  background-color: transparent;
  border-top-width: 3px;
  border-top-color: lightgray;
`

export const BottomSheetModal = styled(RNBottomSheet)`
  flex-grow: 1;
  border-radius: 18px;
`

export const CloseButtonWrapper = styled(Animated.View)`
  position: absolute;
  top: 16px;
  right: 19px;
  z-index: 10;
`
