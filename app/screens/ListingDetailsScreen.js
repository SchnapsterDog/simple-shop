import React, { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import initialCollection from '../static/collections';

function ListingDetailsScreen(props) {
  const [collections, setCollections] = useState(initialCollection);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    setCollections(collections.filter((i) => i.id !== item.id));
  };
  const onPress = (item) => console.log(item);

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setCollections(initialCollection)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  }
});

export default ListingDetailsScreen;
