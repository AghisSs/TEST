import React from "react";
import { View, ScrollView } from "react-native";
import CategoryChip from "./CategoryChip";

const categories = ["All", "Party", "Anniversary", "Wedding"]; // Add more categories as needed

const CategoryFilters = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ padding: 16 }}
    >
      {categories.map((category, index) => (
        <CategoryChip
          key={index}
          label={category}
          isSelected={category === "All"}
        /> // 'All' is selected as default for now
      ))}
    </ScrollView>
  );
};

export default CategoryFilters;
