import react from "react";

const context = react.createContext();

export function Provider(props) {
  const [contextData, setContext] = react.useState({
    url: process.env.REACT_APP_URL,
    userImage: "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
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