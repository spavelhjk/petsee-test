import { createContext } from 'react'
import { WithSpringConfig, WithTimingConfig } from 'react-native-reanimated'

export type BottomSheetAnimationConfigs = WithSpringConfig | WithTimingConfig
export type OpenBottomSheetMethod<T = { [a: string]: any }> = (state?: T, modalOptions?: BottomSheetAnimationConfigs) => void
export type BottomSheetsContextState = {
  openPlace: OpenBottomSheetMethod
  state: {
    [a: string]: any
  }
  resetState: () => void
}

export function createOpenHandler<T>(
  openFunc: (animationConfig?: BottomSheetAnimationConfigs) => void,
  setState: (state: { [a: string]: any }) => void
) {
  return function (state?: T, animationConfig?: BottomSheetAnimationConfigs) {
      if (state) {
          setState(state)
      }
      openFunc(animationConfig)
  }
}

export const BottomSheetsContext = createContext<BottomSheetsContextState>({} as BottomSheetsContextState)