import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Icon, Input } from "react-native-elements";
import { addTodo } from "../actions";

class AddTodo extends PureComponent {
  state = {
    newItem: undefined
  };

  _addItem = () => {
    const {
      state: { newItem },
      props: { dispatch }
    } = this;

    if (newItem) {
      dispatch(addTodo(newItem));
    }

    this.textInput.clear();
    this.setState({ newItem: "" });
  };

  render() {
    const sendButton = () => (
      <Icon
        type="ionicon"
        name="md-send"
        size={30}
        onPress={() => this._addItem()}
      />
    );

    return (
      <Input
        ref={input => {
          this.textInput = input;
        }}
        placeholder="Add something here!"
        rightIcon={sendButton()}
        containerStyle={{
          backgroundColor: "#eee"
        }}
        inputContainerStyle={{
          borderWidth: 0,
          padding: 5
        }}
        onChangeText={text => this.setState({ newItem: text })}
      />
    );
  }
}

AddTodo = connect()(AddTodo);
export default AddTodo;
