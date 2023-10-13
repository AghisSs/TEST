import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import TopNavigationBar from "./components/TopNavBar";
import SearchBar from "./components/SearchBar";
import CategoryFilters from "./components/CategoryFilters";
import DateFilters from "./components/DateFilters";
import BottomNavigationBar from "./components/BottomNavBar";
import HomePage from "./screens/HomePage";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />

      <TopNavigationBar />
      <SearchBar />
      <CategoryFilters />
      <DateFilters />
      <HomePage />
      <BottomNavigationBar />
    </SafeAreaView>
  );
}
