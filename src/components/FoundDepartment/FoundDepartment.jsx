import { useState } from "react";

import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import {
  selectDepartmentsList,
  selectDepartmentsError,
} from "../../redux/selectors";
import {
  DepartmentNotFound,
  TableWrapper,
  TableContainer,
  TheadContainer,
  StyledTh,
  StyledTd,
  ButtonDown,
  Wrapper,
  List,
  ListItem,
  StyledTdWork,
  ButtonUp,
} from "./FoundDepartment.styled.jsx";
import { FaArrowUpLong } from "react-icons/fa6";

import { IoCaretDownSharp } from "react-icons/io5";

export const FoundDepartment = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleIsOpen = (rowIndex) => {
    setIsOpen((prevOpenRows) => ({
      ...prevOpenRows,
      [rowIndex]: !prevOpenRows[rowIndex],
    }));
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listOfDepartments = useSelector(selectDepartmentsList);
  const departmentsError = useSelector(selectDepartmentsError);

  return (
    <TableWrapper>
      {departmentsError ? (
        <DepartmentNotFound>Такого міста немає у списку</DepartmentNotFound>
      ) : (
        <>
          <TableContainer>
            <TheadContainer>
              <tr>
                <StyledTh>Місто</StyledTh>
                <StyledTh>Відділення №/Адреса</StyledTh>
                <StyledTh>Роклад роботи</StyledTh>
              </tr>
            </TheadContainer>
            <tbody key={nanoid()}>
              {listOfDepartments.map((item, id) => (
                <tr key={id}>
                  <StyledTd>{item.CityDescription}</StyledTd>
                  <StyledTd>{item.Description}</StyledTd>
                  <StyledTdWork>
                    <List>
                      {isOpen[id] && (
                        <li style={{ position: "relative" }}>
                          <>
                            <Wrapper isOpen={isOpen[id]}>
                              <ListItem>Пн {item.Schedule.Monday}</ListItem>
                              <ListItem>Вт {item.Schedule.Tuesday}</ListItem>
                              <ListItem>Ср {item.Schedule.Wednesday}</ListItem>
                              <ListItem>Чт {item.Schedule.Thursday}</ListItem>
                              <ListItem>Пт {item.Schedule.Friday}</ListItem>
                              <ListItem>Сб {item.Schedule.Saturday}</ListItem>
                              <ListItem>Нд {item.Schedule.Sunday}</ListItem>
                            </Wrapper>
                          </>
                        </li>
                      )}
                    </List>
                    <ButtonDown
                      isOpen={isOpen[id]}
                      onClick={() => toggleIsOpen(id)}
                    >
                      <IoCaretDownSharp style={{ color: "red" }} />
                    </ButtonDown>
                  </StyledTdWork>
                </tr>
              ))}
            </tbody>
          </TableContainer>
        </>
      )}
      <ButtonUp onClick={handleScrollToTop}>
        <FaArrowUpLong />
      </ButtonUp>
    </TableWrapper>
  );
};
