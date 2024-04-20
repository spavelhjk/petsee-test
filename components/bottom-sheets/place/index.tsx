import React, { forwardRef, useContext } from 'react'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

import { BottomSheetsContext } from 'contexts/bottom-sheet'
import { RootStackNavigationProps } from 'navigation/types'
import { PlaceType } from 'types/place'

import { BottomSheet, Container, Title, Coordinate, Text } from './styled'

export type PlaceBottomSheetState = PlaceType

type BottomSheetProps = {
  mainNavigation: RootStackNavigationProps
}

const PlaceBottomSheet = forwardRef<BottomSheetModalMethods, BottomSheetProps>((_, ref) => {
  const context = useContext(BottomSheetsContext)
  const place = context.state as PlaceBottomSheetState

  return (
    <BottomSheet ref={ref} onDismiss={context.resetState}>
      <Container>
        <Title>Лимон №{place?.id}</Title>

        <Coordinate>latitude: {place?.latitude}</Coordinate>
        <Coordinate>longitude: {place?.longitude}</Coordinate>
        <Text>{place?.content}</Text>
      </Container>
    </BottomSheet>
  )
})

export default PlaceBottomSheet
