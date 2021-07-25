import React from 'react';
import { View } from 'react-native';

import styles from "./styles";

function ListItemSeparator({ style }) {
  return (
    <View style={[styles.container, style]}></View>
  );
}

export default ListItemSeparator;