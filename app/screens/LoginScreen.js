import React, { useState }from 'react';

import { Text } from 'react-native';

import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';

import colors from '../config/colors';

function LoginScreen(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppPicker
        iconName="apps"
        iconSize={40}
        iconColor={colors.medium}
        iconBackgroundColor={colors.light}
        placeholder="Category"
      />
      <AppTextInput
        iconName="email"
        iconSize={40}
        iconColor={colors.medium}
        iconBackgroundColor={colors.light}
        placeholder="Email"
        secureTextEntry
        clearButtonMode="never"
        maxLength={10}
        onChangeText={(text) => setFirstName(text)}
      />
    </Screen>
  );
}

export default LoginScreen;