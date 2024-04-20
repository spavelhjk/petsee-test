import styled from '@emotion/native'
import { Text as RNText, ScrollView } from 'react-native'

import { convertFontSize } from 'utils'

import BottomSheetModal from '../index'

export const BottomSheet = styled(BottomSheetModal)`
  flex-grow: 1;
`

export const Container = styled(ScrollView)`
  flex-grow: 1;
  margin-top: 10px;
  padding-vertical: 10px;
  padding-horizontal: 28px;
  border-radius: 18px;
  background-color: white;
`

export const Title = styled(RNText)`
  margin-bottom: 22px;
  font-size: ${String(convertFontSize(24))}px;
`

export const Text = styled(RNText)`
  font-size: ${String(convertFontSize(18))}px;
`

export const Coordinate = styled(Text)`
  margin-bottom: 16px;
`
