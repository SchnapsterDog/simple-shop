import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    color: colors.dark
  },
});

export default styles;
