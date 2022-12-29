import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

const PalettePreview = ({ palette, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <View>
        <FlatList
          horizontal
          data={palette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View style={[styles.color, { backgroundColor: item.hexCode }]} />
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  color: {
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 5,
    marginRight: 10,
  },
});

export default PalettePreview;
