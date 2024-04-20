import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamsList = {
  Home: {
    placeId?: string
  }
}
export type RootStackNavigationProps = StackNavigationProp<RootStackParamsList>
