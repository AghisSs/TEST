import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import TopNavigationBar from "../components/TopNavBar";
import SearchBar from "../components/SearchBar";
import CategoryFilters from "../components/CategoryFilters";
import DateFilters from "../components/DateFilters";
import BottomNavigationBar from "../components/BottomNavBar";
import EventCard from "../components/EventCard"; // Your provided component

const HomePage = () => {
  return (
    <View style={styles.container}>
      <TopNavigationBar />
      <SearchBar />

      <View style={styles.timeContainer}>
        <Text style={styles.time}>3:15</Text>
        <Text style={{ fontSize: 16 }}>What event ...</Text>
      </View>

      <CategoryFilters />
      <DateFilters />

      <ScrollView style={{ flex: 1 }}>
        {/* You can map through an array of events and render each EventCard */}
        <EventCard
          eventName="Art Workshop"
          dateHour="Fri, Dec 20 • 13.00 - 15.00"
          eventLocation="New Avenue, WA"
          imageSrc="URL_TO_IMAGE" // replace with an actual image URL
        />
        {/* ... add more EventCards if needed */}
      </ScrollView>

      <BottomNavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  time: {
    fontSize: 30,
    marginRight: 10,
  },
});

export default HomePage;
