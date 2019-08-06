import React from "react";
import { Button } from "react-native-elements";

const Link = ({ active, children, onPress }) => {
  const textColor = active ? "black" : "#666";
  const fontWeight = active ? "bold" : "normal";
  return (
    <Button
      onPress={() => onPress()}
      title={children}
      type="clear"
      titleStyle={{
        color: `${textColor}`,
        fontWeight: `${fontWeight}`
      }}
      containerStyle={{ width: "100%" }}
    />
  );
};

export default Link;
