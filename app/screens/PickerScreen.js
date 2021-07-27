import React, { useState } from 'react';

import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';

import colors from '../config/colors';
import categories from '../static/categories';

function PickerScreen(props) {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
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

export default PickerScreen;