import React, { useState }from 'react';

import { Text } from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Text>{firstName}</Text>
      <AppTextInput
        iconName="email"
        iconSize={40}
        iconColor="#a8a8a8"
        iconBackgroundColor="#f8f4f4"
        placeholder="User Name"
        secureTextEntry
        clearButtonMode="never"
        maxLength={10}
        onChangeText={(text) => setFirstName(text)}
      />
    </Screen>
  );
}

export default LoginScreen;