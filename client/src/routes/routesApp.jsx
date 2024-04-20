import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default RoutesApp;
