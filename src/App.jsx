import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
