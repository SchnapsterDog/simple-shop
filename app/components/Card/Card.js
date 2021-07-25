import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from '../AppText';

import colors from "../../config/colors";
import styles from "./styles";

function Card({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
        <View style={styles.card}>
          <Image style={styles.image} source={image}></Image>
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} title={title} />
            <AppText style={styles.subTitle} title={subTitle} />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default Card;