import {Button, Card, InputItem} from '@ant-design/react-native';
import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {Route} from '../../constants/enums/Route';

const MainScreen = ({navigation}: {navigation: any}) => {
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
          Search & pin place on maps..
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
              navigation.navigate(Route.MAP_SCREEN);
            }}>
            SEARCH
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default MainScreen;
