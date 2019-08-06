# React Cross-Platform Demo

This is a demo of a simple Todo List implemented in React that uses the same code for Web, Android & iOS.

![react](public/react-cross-platform-todo.png?raw=true)

It uses:

- [Expo](https://expo.io/) Set of tools for building, deploying native iOS, Android, and web apps from the same codebase.
- [React Native Web](https://github.com/necolas/react-native-web) Makes it possible to run React Native components and APIs on the web using React DOM.
- [React Native Elements](https://react-native-training.github.io/react-native-elements/) Cross Platform React Native UI Toolkit.
- [React Navigation](https://reactnavigation.org/) Routing and navigation for React apps.
- [React Redux](https://react-redux.js.org/) A predictable state container for JavaScript apps.


## Run with Docker

1. Install [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/)

2. Clone the project

```
git clone https://github.com/jferrer/react-cross-platform-demo
```

3. Build the image

```
cd react-cross-platform-demo

docker-compose build
```

To rebuild use:

```
rm -fr node_modules && docker-compose build --no-cache
```

4. Run the web app
```
docker-compose up
```

5. Run the mobile app
```
HOSTNAME=YOUR-LOCAL-IP-ADDRESS PLATFORM=mobile docker-compose up
```

## Run it locally

1. Clone the project

```
git clone https://github.com/jferrer/react-cross-platform-demo
```

2. Install dependencies

```
cd react-cross-platform-demo

# Using yarn
yarn install
```

3. Run the mobile app (uses [Expo](https://expo.io/learn))

```
# Install the expo-cli
npm install -g expo-cli

yarn native
```

4. Run the web app

```
yarn web
```

## Deploy Web app

First you must build the web app using:

```
yarn build:web
```

Once you have built it, you can see generated `build` folder.

This folder can be hosted as static website. For example you can publish on [Github Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) cli.

```
yarn deploy
```

**Note:** don't forget to add or change "homepage" key in your package.json
