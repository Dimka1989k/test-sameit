import { Logo, ContainerApp } from "./App.styled.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
import { GlobalStyle } from "./GlobalStyles.js";

const CheckingTTN = lazy(() => import("./pages/CheckingTTN/CheckingTTN.jsx"));
const PostDepartment = lazy(() =>
  import("./pages/PostDepartment/PostDepartment.jsx")
);

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Logo
          src={
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Nova_Poshta_2014_logo.svg"
          }
        />
      </ContainerApp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CheckingTTN />} />
          <Route path="/department" element={<PostDepartment />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
