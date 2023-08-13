import { NavContainer, PostNavLink } from "./Header.styled.jsx";

export const Header = () => {
  return (
    <header>
      <NavContainer>
        <PostNavLink to="/">Перевірити ТТН</PostNavLink>
        <PostNavLink to="/department">Список відділень</PostNavLink>
      </NavContainer>
    </header>
  );
};
