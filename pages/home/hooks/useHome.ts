import { useState, useEffect } from 'react'
import axios from 'axios'

import type { PlaceType } from 'types/place'

const useHome = () => {
  const [places, setPlaces] = useState<PlaceType[]>([])

  useEffect(() => {
    axios.get(process.env.EXPO_PUBLIC_API_URL as string)
      .then(data => {
        setPlaces(data.data)
      })
      .catch((err) => {
        console.log('Ошибка загрузки данных: ', err)
      })
  }, [])

  return { places }
}

export default useHome
