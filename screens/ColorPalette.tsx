import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ColorBox from "../components/ColorBox";
// import ColorBoxList from "../components/ColorBoxList";

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
      />
      {/* <ColorBoxList colors={route.colors} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default ColorPalette;
