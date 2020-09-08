/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WWText from '.componment/WWText';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello ReactNative</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
            <View style={stylesEnd.sectionContainer}>
              <Text style={stylesEnd.textTitle}> 王大吉1 </Text>
              <Text style={stylesEnd.textTitle}> 王大吉1 </Text>
              <Text style={stylesEnd.textTitle}> 王大吉1 </Text>
              <Text style={stylesEnd.textTitle}> 王大吉1 </Text>
            </View>
            <View>
              <Text style={stylesDimensions.textTitle}>当前屏幕的宽：{Dimensions.get('window').width} </Text>
              <Text style={stylesDimensions.textTitle}>当前屏幕的高：{Dimensions.get('window').height} </Text>
              <Text style={stylesDimensions.textTitle}>当前屏幕的分辨率：{Dimensions.get('window').scale} </Text>
              <Text style={stylesDimensions.textTitle}>当前平台：{Platform.OS} </Text>
            </View>
          </View>
          <View>
            <WWText></WWText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const stylesDimensions = StyleSheet.create({
  textTitle: {
    textAlign: "center",
    margin: 10
  }
})

const stylesEnd = StyleSheet.create({
  textTitle: {
    color: Colors.red,
    fontSize: 12,
    backgroundColor: 'red'
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    padding: 12,
    margin: 0,
    // top:-12,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'yellow'
  },
  iconContainer: {
    width: 100,
    width: 100,
    color: Colors.white,
    fontSize: 30,
    backgroundColor: Colors.dark
  }
})

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
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
    // flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.red,
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
