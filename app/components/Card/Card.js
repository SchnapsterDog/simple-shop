import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import AppText from '../AppText';

import styles from "./styles";

function Card({ title, subTitle, image, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} title={title} />
          <AppText style={styles.subTitle} title={subTitle} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;