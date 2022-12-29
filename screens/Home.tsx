import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import PalettePreview from "./PalettePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    );

    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          palette={item}
          handlePress={() => navigation.navigate("ColorPalette", item)}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("ColorPaletteModal")}
        >
          <Text style={styles.btnText}>Add New Palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "teal",
    paddingVertical: 8,
    paddingHorizontal: 12,
    textAlign: "center",
    width: 200,
    borderRadius: 4,
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
  list: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
});

export default Home;
