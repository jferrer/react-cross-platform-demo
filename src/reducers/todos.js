const todo = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const defaultData = [
  { id: 0, text: "Persist data", completed: false },
  { id: 1, text: "Add Redux", completed: true },
  { id: 2, text: "Add React Native Elements", completed: true },
  { id: 3, text: "Add React Native Web", completed: true },
  { id: 4, text: "Add React Navigation", completed: true },
  { id: 5, text: "Configure Docker", completed: true },
  { id: 6, text: "Start Expo Project", completed: true }
];

const todos = (state = defaultData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [todo(undefined, action), ...state];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
