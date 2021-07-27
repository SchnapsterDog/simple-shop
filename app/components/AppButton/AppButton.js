import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import colors from "../../config/colors";

function AppButton({ title, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity style={[styles.button, style, { backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
