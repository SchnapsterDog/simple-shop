import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete-outline" size={35} color={colors.white}/>
      </View>
      <Image resizeMode={'contain'} style={styles.image} source={require('../assets/images/chair.jpg')}></Image>
    </View>
    
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 50,
    left: 30,
    borderColor: colors.borderPrimary,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 50,
    right: 30,
    borderColor: colors.borderSecondary,
    borderWidth: 5,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen;