import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CategoryChip = ({ label, isSelected }) => (
  <TouchableOpacity
    style={{
      margin: 4,
      padding: 12,
      borderRadius: 16,
      backgroundColor: isSelected ? "purple" : "lightgrey",
    }}
  >
    <Text style={{ color: isSelected ? "white" : "grey" }}>{label}</Text>
  </TouchableOpacity>
);

export default CategoryChip;
