import React, { Fragment, PureComponent } from "react";
import { FlatList } from "react-native";
import { Divider } from "react-native-elements";
import Todo from "./Todo";

class TodoList extends PureComponent {
  keyExtractor = (item, index) => index.toString();
  ItemSeparatorComponent = () => <Divider />;

  render() {
    const {
      props: { todos, onTodoPress }
    } = this;

    return (
      <Fragment>
        {todos.length ? (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={todos}
            renderItem={todo => (
              <Todo
                key={todo.item.index}
                {...todo.item}
                onPress={() => onTodoPress(todo.item.id)}
              />
            )}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
          />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default TodoList;
