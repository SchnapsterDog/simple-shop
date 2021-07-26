import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppText from '../AppText';

import styles from './styles';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}title={label} />
    </TouchableOpacity>
  );
}

export default PickerItem;