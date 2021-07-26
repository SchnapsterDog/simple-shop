import React, {useState} from "react";
import { Button, FlatList, Modal, TouchableWithoutFeedback, View } from "react-native";

import Screen from '../Screen';
import AppText from '../AppText';
import Icon from "../Icon";
import PickerItem from "../PickerItem";

import styles from "./styles";


function AppPicker({
  items,
  iconName,
  iconSize,
  iconColor,
  iconBackgroundColor,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
          <AppText style={styles.text} title={selectedItem ? selectedItem.label : placeholder} />
          <Icon
            name="chevron-down"
            size={iconSize}
            iconColor={iconColor}
            backgroundColor={iconBackgroundColor}
          ></Icon>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => 
              <PickerItem 
                label={item.label} 
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item)
                  }
                }
              />
            }
          />
        </Screen>
      </Modal>
    </>
  );
}

export default AppPicker;
