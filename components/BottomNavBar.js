import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const BottomNavigationBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "lightgrey",
      }}
    >
      <TouchableOpacity>
        <Text>🏠</Text> {/* Home Icon Placeholder */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>📅</Text> {/* Calendar Icon Placeholder */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>🔔</Text> {/* Notifications Icon Placeholder */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>👤</Text> {/* Profile Icon Placeholder */}
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationBar;
