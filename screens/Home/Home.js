import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.overall}>
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Section', {
              sectionName: 'Toiletries',
            })
          }>
          <View style={styles.card}>
            <Text>Toiletries</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Section', {
              sectionName: 'Food',
            })
          }>
          <View style={styles.card}>
            <Text>Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Section', {
              sectionName: 'Hardware',
            })
          }>
          <View style={styles.card}>
            <Text>Hardware</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Section', {
              sectionName: 'Electronics',
            })
          }>
          <View style={styles.card}>
            <Text>Electronics</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overall: {},
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C1C2',
  },
});
