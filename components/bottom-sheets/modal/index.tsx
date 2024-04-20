import React, { useContext, forwardRef } from 'react'
import { BottomSheetModalProps, useBottomSheetSpringConfigs, BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useReducedMotion, ReduceMotion, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

import { BottomSheetsContext } from 'contexts/bottom-sheet'

import Backdrop from '../backdrop'
import CloseButton from '../close-button'
import { HandleComponent, BottomSheetModal, CloseButtonWrapper } from './styled'

type BottomSheetProps = Omit<BottomSheetModalProps, 'snapPoints'> & {
  children?: React.ReactNode
}

const BottomSheet = forwardRef<BottomSheetModalMethods, BottomSheetProps>((props, ref) => {
  const { resetState } = useContext(BottomSheetsContext)
  const reducedMotion = useReducedMotion()
  const isButtonVisible = useSharedValue(false)

  const overrideConfig = useBottomSheetSpringConfigs({
    damping: 500,
    stiffness: 1000,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
    reduceMotion: ReduceMotion.Never,
  })

  const snapPoints = ['30%', '95%']

  const handleSnapTo = (index: number) => {
    isButtonVisible.value = index === snapPoints.length - 1 ? true : false
  }

  const handleDismissModal = () => {
    if (typeof ref === 'object') {
      ref?.current?.dismiss()
      resetState()
    }
  }

  const renderBackdrop = (props: BottomSheetBackdropProps) => {
    return <Backdrop {...props} onPress={handleDismissModal} />
  }

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(isButtonVisible.value ? 1 : 0),
    }
  })

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose
      index={0}
      onDismiss={resetState}
      enableContentPanningGesture={false}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      handleComponent={() => <HandleComponent />}
      animateOnMount
      animationConfigs={reducedMotion ? overrideConfig : undefined}
      onChange={handleSnapTo}
      {...props}
    >
      <CloseButtonWrapper style={buttonAnimatedStyle}>
        <CloseButton onPress={handleDismissModal} />
      </CloseButtonWrapper>

      {props.children}
    </BottomSheetModal>
  )
})

export default BottomSheet
