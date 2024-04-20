import React from 'react'
import { Marker, MapViewProps } from 'react-native-maps'
import { Text } from 'react-native'

import { PlaceType } from 'types/place'

import { useMap } from './hooks'
import { MapView } from './styled'
import MarkerIcon from './marker-icon'

type MapProps = MapViewProps & {
  places: PlaceType[]
  defaultPlaceId?: number
}

const Map: React.FC<MapProps> = ({ places, defaultPlaceId, ...props }) => {
  const { averageCoords, zoom, mapRef, handleMarkerPress, deltas } = useMap({ places, defaultPlaceId })

  if (!places.length) return <Text>Loading...</Text>

  return (
    <MapView
      region={{
        latitude: averageCoords.lat,
        longitude: averageCoords.long,
        ...deltas,
      }}
      minZoomLevel={zoom}
      ref={ref => mapRef.current = ref}
      {...props}
    >
      {places.map((place) => <Marker onPress={() => handleMarkerPress(place)} key={place?.id} coordinate={place}><MarkerIcon fill={place?.color} /></Marker>)}
    </MapView>
  )
}

export default Map
