import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from '../AppText';

import colors from "../../config/colors";
import styles from "./styles";

function Card({
  cardStyle,
  title,
  image,
  imageStyle,
  IconComponent,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
        <View style={[styles.card, cardStyle]}>
          {IconComponent}
          {image && <Image style={[styles.image, imageStyle]} source={image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} title={title} />
            {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default Card;