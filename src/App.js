import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import AppLoading from "./components/AppLoading";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import { cacheAssets, cacheFonts } from "./helpers/AssetsCaching";

import Ionicons from "react-native-vector-icons/Ionicons";

import { Inbox, Starred, Week, Waiting, Projects } from "./screens";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const InboxStack = createStackNavigator(
  {
    Inbox: Inbox
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);

const AppNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Inbox: InboxStack,
      Starred: Starred,
      Week: Week,
      Waiting: Waiting,
      Projects: Projects
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === "Inbox") {
            iconName = `md-filing`;
          } else if (routeName === "Starred") {
            iconName = `md-star`;
          } else if (routeName === "Week") {
            iconName = `md-clipboard`;
          } else if (routeName === "Waiting") {
            iconName = `md-contact`;
          } else if (routeName === "Projects") {
            iconName = `md-folder`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      }),
      initialRouteName: "Inbox"
    }
  )
);

export default class AppContainer extends Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheAssets([]);

    const fontAssets = cacheFonts({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    await Promise.all([imageAssets, fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
