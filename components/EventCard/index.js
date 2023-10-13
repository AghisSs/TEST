import React from "react";
import { View, Text, Image } from "react-native";

const EventCard = ({ eventName, dateHour, eventLocation, imageSrc }) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "white",
        marginBottom: 16,
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: imageSrc }}
        style={{ height: 100, width: "100%", borderRadius: 8 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>
        {eventName}
      </Text>
      <Text style={{ fontSize: 14, color: "grey", marginTop: 4 }}>
        {dateHour}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
      >
        <Image
          source={require("../../assets/icons-png/location.png")}
          style={{ width: 16, height: 16, marginRight: 4 }}
        />
        <Text style={{ fontSize: 14, color: "grey" }}>{eventLocation}</Text>
      </View>
    </View>
  );
};

export default EventCard;
