import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const dates = [
  // Example dates, you can generate these dynamically if needed
  "10 Oct",
  "11 Oct",
  "12 Oct",
  "13 Oct",
  "14 Oct",
];

const DateFilters = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ padding: 16 }}
    >
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={{
            margin: 8,
            padding: 12,
            borderRadius: 8,
            backgroundColor: "lightgrey",
          }}
        >
          <Text>{date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default DateFilters;
