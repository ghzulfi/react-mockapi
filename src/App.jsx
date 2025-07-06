import { Routes, Route } from "react-router-dom";
import crud from "./pages/crud";
import Beranda from "./pages/Beranda";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" Component={crud} />
        <Route path="/" Component={Beranda} />
      </Routes>
    </div>
  );
}

export default App;
