import React, { useState } from 'react';
import * as Yup from "yup";

import Screen from '../components/Screen';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';

import colors from '../config/colors';
import categories from '../static/categories';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().max(50).label("Title"),
  price: Yup.number().integer().required().max(1000000).label("Price"),
});

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="format-title"
          iconSize={40}
          iconColor={colors.medium}
          iconBackgroundColor={colors.light}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="bookmark-check"
          iconSize={40}
          iconColor={colors.medium}
          iconBackgroundColor={colors.light}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;