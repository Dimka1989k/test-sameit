import { useState } from "react";
import {
  TableContainer,
  TheadContainer,
  StyledTh,
  StyledTd,
  ButtonDown,
  Wrapper,
  List,
  ListItem,
  StyledTdWork,
} from "./FoundDepartment.styled.jsx";

import { IoCaretDownSharp } from "react-icons/io5";

export const FoundDepartment = () => {
  const [isOpen, setIsOpen] = useState(false); // Додали стан isOpen

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const listItems = [
    "Пн 08:00-21:00",
    "Вт 08:00-21:00",
    "Ср 08:00-21:00",
    "Чт 08:00-21:00",
    "Пт 08:00-21:00",
    "Сб 09:00-19:00",
    "Нд 09:00-19:00",
  ];

  return (
    <TableContainer>
      <TheadContainer>
        <tr>
          <StyledTh>Місто</StyledTh>
          <StyledTh>Відділення №/Адреса</StyledTh>
          <StyledTh>Роклад роботи</StyledTh>
        </tr>
      </TheadContainer>
      <tbody>
        <tr>
          <StyledTd>Київ</StyledTd>
          <StyledTd>Відділення №10: вул. Василя Жуковського, 22А</StyledTd>
          <StyledTdWork>
            <Wrapper isOpen={isOpen}>
              <List>
                {listItems
                  .slice(0, isOpen ? listItems.length : 1)
                  .map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
              </List>
              <ButtonDown isOpen={isOpen} onClick={toggleIsOpen}>
                <IoCaretDownSharp style={{ color: "red" }} />
              </ButtonDown>
            </Wrapper>
          </StyledTdWork>
        </tr>
      </tbody>
    </TableContainer>
  );
};
