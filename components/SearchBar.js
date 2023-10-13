import React from "react";
import { View, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ padding: 12, backgroundColor: "lightgrey", borderRadius: 8 }}
        placeholder="What event are you looking for..."
      />
    </View>
  );
};

export default SearchBar;
