import React, {useEffect} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle, styles} from './styles';

const MapScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    navigation.setOptions({title: 'Maps'});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.3995345,
          longitude: 2.1909796,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="standard">
        <Marker
          key={1}
          coordinate={{
            latitude: 41.40009,
            longitude: 2.1909796,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
