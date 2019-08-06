import React, { PureComponent } from "react";
import { ButtonGroup } from "react-native-elements";
import FilterLink from "../containers/FilterLink";

class Filters extends PureComponent {
  state = {
    selectedIndex: 0
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    const b1 = () => <FilterLink filter="SHOW_ALL">All</FilterLink>;
    const b2 = () => <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>;
    const b3 = () => <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>;

    const buttons = [{ element: b1 }, { element: b2 }, { element: b3 }];

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        buttons={buttons}
        containerStyle={{ height: 50 }}
      />
    );
  }
}

export default Filters;
