import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 20,
  },
});