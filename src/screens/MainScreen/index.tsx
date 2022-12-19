import {Button, Card, InputItem, List} from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';
import React, {useEffect, useState} from 'react';

import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Route} from '../../constants/enums/Route';
import {placeRequest} from '../../redux/main/actions';

const MainScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [placeList, setPlaceList]: any = useState([]);

  const places = useSelector((state: any) => state.mainReducer.places);

  useEffect(() => {
    if (places.length > 0) {
      places.map(place => {
        setPlaceList(placeList => [
          ...placeList,
          <List.Item
            key={place.wikiDataId}
            wrap
            onPress={() => {
              navigation.navigate(Route.MAP_SCREEN, {place: place});
            }}>
            {place.city}
          </List.Item>,
        ]);
      });
    }
  }, [places]);

  return (
    <View
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View>
        <Text style={{fontSize: 20, padding: 10}}>
          Search cities & select to view on maps..
        </Text>
      </View>
      <Card style={{width: '100%'}}>
        <Card.Body>
          <View style={{padding: 10}}>
            <View>
              <InputItem
                clear
                value={search}
                onChange={(value: any) => {
                  setSearch(value);
                  if (value === '') {
                    setPlaceList([]);
                  }
                }}
                placeholder="Enter a place name"
              />
            </View>
            <View>
              <ScrollView
                style={{backgroundColor: '#f5f5f9'}}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <List>{placeList}</List>
              </ScrollView>
            </View>
          </View>
        </Card.Body>
        <View style={{padding: 10}}>
          <Button
            type="primary"
            onPress={() => {
              setPlaceList([]);
              dispatch(placeRequest({name: search}));
            }}>
            SEARCH
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default MainScreen;
