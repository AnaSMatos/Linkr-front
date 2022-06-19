import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/reset.css";
import "../../assets/index.css";
import "../../assets/query.css";

import { Provider } from "../../hooks/UserContext";
import { AuthenticationProvider } from "../../hooks/AuthContext";
import Timeline from "../Timeline";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

function App() {
  return (
    <AuthenticationProvider>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/hashtag/:hashtag" element={<Timeline />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthenticationProvider>
  );
}

export default App;
