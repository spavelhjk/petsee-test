import { PixelRatio, Platform } from 'react-native'

export const convertFontSize = (fontSize: number) => {
  const scale = PixelRatio.getFontScale()
  const newSize = fontSize * scale 

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
