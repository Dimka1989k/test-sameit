import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import { Container } from "../../components/Container/Container.styled.jsx";
import { Header } from "../Header/Header.jsx";

export const Layout = () => {
  return (
    <main>
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
