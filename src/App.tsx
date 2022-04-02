import React from "react";
import "./App.css";
import { Main } from "./pages/main/Main";
import { Post } from "./pages/post/Post";
import { Create } from "./pages/create/Create";
import { Profile } from "./pages/profile/Profile";
import { Authorization } from "./components/modal/authorization/Authorization";
import { Registration } from "./components/modal/registration/Registration";
import { EditingPage } from "./pages/editing/EditingPage";
import { useTypesSelector } from "./hooks/useTypeSelector";
import { Routes, Route } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";
import { RequireAuht } from "./hooks/RequireAuht";

function App() {
  const { flagAuth } = useTypesSelector((state) => state.auth);
  const { flagReg } = useTypesSelector((state) => state.reg);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <RequireAuht>
              <Profile />
            </RequireAuht>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuht>
              <Create />
            </RequireAuht>
          }
        />
        <Route
          path="/editingPage/:id"
          element={
            <RequireAuht>
              <EditingPage />
            </RequireAuht>
          }
        ></Route>
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      {flagReg && <Registration />}
      {flagAuth && <Authorization />}
    </>
  );
}

export default App;
