import React from 'react';
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";

import colors from '../../config/colors';

function AppFormPicker({name, items, placeholder}) {
  const { values, setFieldValue} = useFormikContext();

  return (
    <>
      <AppPicker
        selectedItem={values[name] ? values[name] : () => {setFieldValue(name, items[0])}}
        onSelectItem={(item) => setFieldValue(name, item)}
        items={items}
        iconName="apps"
        iconSize={40}
        iconColor={colors.medium}
        iconBackgroundColor={colors.light}
        placeholder={placeholder}
      />
    </>
  );
}

export default AppFormPicker;