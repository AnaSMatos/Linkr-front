import react from "react";

const context = react.createContext();

export function Provider(props) {
  const [contextData, setContext] = react.useState({
    url: process.env.REACT_APP_URL,
    config: {
      headers: {
        "Authorization": "Bearer a"
      }
    }
  });

  return (
    <context.Provider value={{ contextData, setContext }}>
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);