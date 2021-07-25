import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../../app/components/Card";
import Icon from "../../app/components/Icon";
import Screen from "../../app/components/Screen";
import ListItemSeparator from "../../app/components/ListItemSeparator";

import colors from '../config/colors';
import menuItems from '../static/menu-items';

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Card
          title="John Dostoevski"
          subTitle="sample@akrinum.com"
          cardStyle={{
            borderRadius: 0,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
          imageStyle={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          image={require("../assets/images/chair.jpg")}
        ></Card>
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              cardStyle={{
                borderRadius: 0,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  size={50}
                  backgroundColor={item.icon.backgroundColor}
                  iconColor="white"
                />
              }
            ></Card>
          )}
          ItemSeparatorComponent={() => (
            <ListItemSeparator style={{ height: 1 }}></ListItemSeparator>
          )}
        ></FlatList>
      </View>
      <Card
        title="Log Out"
        cardStyle={{
          borderRadius: 0,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          marginTop: 20
        }}
        IconComponent={
          <Icon
            name="logout"
            size={50}
            backgroundColor="#ffe66d"
            iconColor="white"
          />
        }
      ></Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginBottom: 20
  }
})

export default AccountScreen;