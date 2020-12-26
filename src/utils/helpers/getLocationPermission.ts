import * as Location from 'expo-location';

export const getLocationPermission = async (): Promise<Coords> => {
  const { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Algo deu errado, não conseguimos sua localização');
  }
  const { coords } = await Location.getCurrentPositionAsync({});
  return coords;
};
