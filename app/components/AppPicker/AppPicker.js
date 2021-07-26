import React from "react";
import { TextInput, View } from "react-native";

import AppText from '../AppText';
import Icon from "../Icon";

import styles from "./styles";

function AppPicker({
  iconName,
  iconSize,
  iconColor,
  iconBackgroundColor,
  placeholder
}) {
  return (
    <View style={styles.container}>
      {iconName && (
        <Icon
          name={iconName}
          size={iconSize}
          iconColor={iconColor}
          backgroundColor={iconBackgroundColor}
          style={styles.icon}
        ></Icon>
      )}
      <AppText style={styles.text} title={placeholder} />
      <Icon
        name="chevron-down"
        size={iconSize}
        iconColor={iconColor}
        backgroundColor={iconBackgroundColor}
      ></Icon>
    </View>
  );
}

export default AppPicker;
