import React from "react";
import { FlatList, Text } from "react-native";
import ColorBox from "./ColorBox";

const Colors = [
  {
    name: "Blue",
    value: "#3CCCFA",
  },
  {
    name: "Green",
    value: "#75BE3C",
  },
  {
    name: "Red",
    value: "#BE3C3C",
  },
  {
    name: "Yellow",
    value: "#EBD939",
  },
];

const ColorBoxList = () => {
  return (
    <FlatList
      data={Colors}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <ColorBox colorName={item.name} colorHex={item.value} />
      )}
      ListHeaderComponent={<Text>Colors</Text>}
    />
  );
};

export default ColorBoxList;
