import { useReducer } from "react";

function UserForm() {
    const [state, dispatch] = useReducer((state, action) => ({
      ...state,
      ...action,
  }), {
    first: "",
    last: "",
  });
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.second}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First : {state.first}</div>
      <div>Last : {state.last}</div>
    </div>
  );
}

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div className="App">
      <ul>
        {state.names && state.names === ""
          ? state.names.map((name) => <li key={name}>{name}</li>)
          : null}
      </ul>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add name</button>
    </div>
  );
};

function UseReducer() {
  return (
    <div>
      <NameList />
      <UserForm />
    </div>
  );
}
export default UseReducer;
