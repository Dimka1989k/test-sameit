import { Logo, ContainerApp } from "./App.styled.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

import { CheckingTTN } from "./pages/CheckingTTN/CheckingTTN.jsx";
import { PostDepartment } from "./pages/PostDepartment/PostDepartment.jsx";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./GlobalStyles.js";

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
