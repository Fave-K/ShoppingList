import React from 'react';
import {View, Text} from 'react-native';

export default function Section({route, navigation}) {
  const {sectionName} = route.params;
  const [value, onChangeText] = React.useState(route.params.sectionName);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: value === '' ? 'Section' : value,
    });
  }, [navigation, value]);

  return (
    <View>
      <Text>
        This is the section page. It should contain specific details on what
        section was clicked. Section name : {sectionName}
      </Text>
    </View>
  );
}
