import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

import { Home } from 'pages'
import PlaceBottomSheet, { PlaceBottomSheetState } from 'components/bottom-sheets/place'
import { BottomSheetsContext, BottomSheetsContextState, createOpenHandler } from 'contexts/bottom-sheet'

import { RootStackNavigationProps } from './types'

const Stack = createStackNavigator()

const RootNavigator = () => {
  const placeRef = useRef<BottomSheetModalMethods>(null)
  const [bottomSheetState, setBottomSheetState] = useState<{ [a: string]: any }>({} as { [a: string]: any })

  const bottomSheetMethods = {
    openPlace: createOpenHandler<PlaceBottomSheetState>(() => placeRef?.current?.present(), setBottomSheetState),
    state: bottomSheetState,
    resetState: () => setBottomSheetState({}),
  } as BottomSheetsContextState

  const navigation = useNavigation<RootStackNavigationProps>()

  return (
    <BottomSheetsContext.Provider value={bottomSheetMethods}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

      <PlaceBottomSheet ref={placeRef} mainNavigation={navigation} />
    </BottomSheetsContext.Provider>
  )
}

export default RootNavigator
