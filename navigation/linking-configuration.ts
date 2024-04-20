import * as Linking from 'expo-linking'

const LinkingConfig = {
  prefixes: [
    Linking.createURL('/'),
  ],
  config: {
    screens: {
      Home: '/:placeId',
    }
  },
}

export default LinkingConfig
