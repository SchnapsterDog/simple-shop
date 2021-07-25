import React from "react";
import { Text } from "react-native";

import styles from "./styles.android";

function AppText({ title, style }) {
  return <Text style={[styles.text, style]}>{title}</Text>;
}

export default AppText;
