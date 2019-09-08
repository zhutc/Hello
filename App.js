/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import AnExScroll from './AnExScroll'

import Carousel from './carousel/carousel'

const App = () => {
  let { width , height } = Dimensions.get('window')
  let itemWidth = width - 40
  let sliderWidth = width
  let data = [
    {
      title:"one",
      img:'',
      backgroundColor:'red',
    },
    {
      title:"two",
      img:'',
      backgroundColor:'orange',
    },
    {
      title:"three",
      img:'',
      backgroundColor:'green',
    }
  ]
  let renderItem = function(index,item){
    return(<View style={{backgroundColor:item.backgroundColor,flex:1}}>
      <Text>{item.title}</Text>
    </View>)
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.scrollView}>
          <Carousel 
          itemWidth={itemWidth} 
          sliderWidth={sliderWidth} 
          data={data}
          renderItem={renderItem}
          />

        </View>
      </SafeAreaView>

    </Fragment>
  );


};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
    height: 600,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
