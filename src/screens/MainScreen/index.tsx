import {Button, Card, InputItem} from '@ant-design/react-native';
import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Route} from '../../constants/enums/Route';
import {placeRequest} from '../../redux/main/actions';

const MainScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

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
          Search cities & place on maps..
        </Text>
      </View>
      <Card style={{width: '100%'}}>
        <Card.Body>
          <View style={{padding: 10}}>
            <InputItem
              clear
              value={search}
              onChange={(value: any) => {
                setSearch(value);
              }}
              placeholder="Enter a place name"
            />
          </View>
        </Card.Body>
        <View style={{padding: 10}}>
          <Button
            type="primary"
            onPress={() => {
              // navigation.navigate(Route.MAP_SCREEN);
              //dispatch(placeRequest({name: search}));
            }}>
            SEARCH
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default MainScreen;
