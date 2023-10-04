import Nav from "./components/Nav";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";


function App() {
  return (
    <>
    <AuthContextProvider>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/account" element={ <ProtectedRoute><Account/></ProtectedRoute> }/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
