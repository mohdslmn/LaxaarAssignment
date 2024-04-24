import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
