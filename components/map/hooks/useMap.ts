import { BottomSheetsContext } from 'contexts/bottom-sheet';
import { useEffect, useState, useRef, useContext } from 'react'
import MapView from 'react-native-maps'

import type { PlaceBottomSheetState } from 'components/bottom-sheets/place'
import { PlaceType } from 'types/place'

const DEFAULT_ZOOM_VALUE = 11
const PLACE_ZOOM_VALUE = 13

const useMap = ({ places, defaultPlaceId }: { places: PlaceType[]; defaultPlaceId?: number }) => {
  const mapRef = useRef<MapView | null>()
  const [averageCoords, setAverageCoords] = useState({ lat: 0, long: 0 })
  const { openPlace, state } = useContext(BottomSheetsContext)
  const [zoom, setZoom] = useState(DEFAULT_ZOOM_VALUE)
  const place = state as PlaceBottomSheetState

  const deltas = {
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }

  useEffect(() => {
    if (defaultPlaceId && places.length) {
      const defaultPlace = places.find(({ id }) => defaultPlaceId === id)

      if (defaultPlace) handleMarkerPress(defaultPlace)
    }
  }, [places, defaultPlaceId])

  useEffect(() => {
    if (!places.length) return

    let lat = 0
    let long = 0

    for (const { latitude, longitude } of places) {
      lat += latitude
      long += longitude
    }

    setAverageCoords({
      lat: lat / places.length,
      long: long / places.length
    })
  }, [places])

  useEffect(() => {
    if (Object.keys(place).length) {
      mapRef?.current?.animateToRegion({
        latitude: place.latitude,
        longitude: place.longitude,
        ...deltas,
      })
      setZoom(PLACE_ZOOM_VALUE)
      return
    }

    mapRef?.current?.animateToRegion({
      latitude: averageCoords.lat,
      longitude: averageCoords.long,
      ...deltas,
    })
    setZoom(DEFAULT_ZOOM_VALUE)
  }, [place, averageCoords])

  const handleMarkerPress = (place: PlaceType) => {
    openPlace(place)
  }

  return {
    mapRef,
    averageCoords,
    zoom,
    deltas,
    handleMarkerPress,
  }
}

export default useMap
