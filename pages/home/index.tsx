import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/core'

import { Map } from 'components'
import { RootStackParamsList } from 'navigation/types'

import { useHome } from './hooks'

const Home = () => {
  const route = useRoute<RouteProp<RootStackParamsList, 'Home'>>()
  const { placeId } = route.params || {}
  const { places } = useHome()

  return (
    <Map
      places={places}
      defaultPlaceId={placeId ? Number(placeId) : undefined}
    />
  )
}

export default Home