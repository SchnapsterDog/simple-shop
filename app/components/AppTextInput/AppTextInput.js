import React from 'react';
import { TextInput, View } from 'react-native';

import Icon from '../Icon';

import styles from './styles';

function AppTextInput({iconName, iconSize, iconColor, iconBackgroundColor, ...otherProps}) {
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
      <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  );
}

export default AppTextInput;