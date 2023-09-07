import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import UserList from "./Pages/UserList";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
