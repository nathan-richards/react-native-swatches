import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  boxText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ColorBox;
