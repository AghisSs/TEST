import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TopNavigationBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <TouchableOpacity>
        <Text>👤</Text> {/* Placeholder for User Icon */}
      </TouchableOpacity>
      <Text>Paris, France</Text> {/* Placeholder for Location */}
    </View>
  );
};

export default TopNavigationBar;
