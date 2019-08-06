import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";

class Todo extends PureComponent {
  render() {
    const {
      props: { text, completed, onPress }
    } = this;

    return (
      <ListItem
        containerStyle={{ paddingVertical: 8 }}
        title={
          <TouchableOpacity onPress={() => onPress()}>
            <Text
              style={{
                textDecorationLine: completed ? "line-through" : "none"
              }}
            >
              {text}
            </Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

export default Todo;
