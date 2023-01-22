import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/calculator" />} />
      <Route path="/calculator" element={<Home />} />
    </Routes>
  );
};

export default Router;
