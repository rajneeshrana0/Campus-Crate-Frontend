import "./App.css";
import 'flowbite';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import User from "./components/User";
import Student from "./components/Student";
import Profile from "./components/Profile";
import Adduser from "./components/Adduser";
import Addstu from "./components/Addstu";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/User" element={<User />} />
      <Route path="/Adduser" element={<Adduser />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Addstu" element={<Addstu />} />
      <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}
export default App;