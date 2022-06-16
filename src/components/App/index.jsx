import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/reset.css";
import "../../assets/index.css";
import "../../assets/query.css";

import { Provider } from "../../hooks/UserContext";
import Timeline from "../Timeline";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
