import {BrowserRouter, Routes, Route} from "react-router-dom";
import Userlist from "./components/Userlist.js";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlist/>}/>
      <Route path="add" element={<AddUser/>}/>
      <Route path="edit/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
