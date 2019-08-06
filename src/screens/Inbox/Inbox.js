import React, { PureComponent, Fragment } from "react";
import { ScrollView } from "react-native";

import Filters from "../../components/Filters";
import AddTodo from "../../containers/AddTodo";
import InboxList from "../../containers/InboxList";

class Inbox extends PureComponent {
  static navigationOptions = {
    title: "Inbox"
  };

  render() {
    return (
      <Fragment>
        <ScrollView>
          <AddTodo />
          <Filters />
          <InboxList />
        </ScrollView>
      </Fragment>
    );
  }
}

export default Inbox;
