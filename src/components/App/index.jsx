import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/reset.css";
import "../../assets/index.css";
import "../../assets/query.css";

import { Provider } from "../../hooks/UserContext";
import Timeline from "../Timeline";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
