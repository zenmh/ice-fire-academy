import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/AuthProvider/AuthProvider";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className={theme ? "bg-black text-white" : " bg-white text-black"}>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
