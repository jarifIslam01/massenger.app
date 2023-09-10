import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";

import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Navber />
      <hr />
      <Routes>
      <Route path="" element={<Login />} />
        
        <Route
          path="/Chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
