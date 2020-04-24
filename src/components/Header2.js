import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../core/theme";
import Background from "./Background";

const Header = ({ children }) => <View style={styles.header}>{children}</View>;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#F3F3F3",
  }
});

export default memo(Header);
