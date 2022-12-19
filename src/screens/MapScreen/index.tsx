import React, {useEffect} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle, styles} from './styles';

const MapScreen = ({navigation, route}: {navigation: any; route: any}) => {
  useEffect(() => {
    navigation.setOptions({title: route.params.place.city});
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        style={styles.mapStyle}
        initialRegion={{
          latitude: route.params.place.latitude,
          longitude: route.params.place.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard">
        <Marker
          key={1}
          coordinate={{
            latitude: route.params.place.latitude,
            longitude: route.params.place.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
