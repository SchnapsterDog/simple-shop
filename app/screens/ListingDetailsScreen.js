import React from "react";

import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import collections from "../static/collections";

function ListingDetailsScreen(props) {
  const onPress = (item) => console.log(item) 
  return (
    <Screen style={styles.container}>
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => onPress(item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default ListingDetailsScreen;
