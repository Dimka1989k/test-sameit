import {
  HistoryWrapper,
  HistoryHead,
  Button,
  Paragraph,
  ListHistoty,
  Conatiner,
} from "./History.styled.jsx";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../../redux/operations";

import { updateSelectedNumber, clearRequestHistory } from "../../redux/slice";
import { selectNumbersList } from "../../redux/selectors";

export const History = () => {
  const requestHistory = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  const clearHistory = () => {
    dispatch(clearRequestHistory());
  };

  const handleClick = (clickedNumber) => {
    dispatch(updateSelectedNumber(clickedNumber));

    dispatch(fetchInfo(clickedNumber));
  };
  return (
    <>
      <HistoryWrapper>
        <HistoryHead>
          <Paragraph>Історія</Paragraph>
          <ListHistoty requestHistory={requestHistory}>
            {requestHistory.map((item) => {
              return (
                <Conatiner key={nanoid()}>
                  <li>
                    <div
                      onClick={() => {
                        handleClick(item);
                      }}
                    >
                      {item}
                    </div>
                  </li>
                </Conatiner>
              );
            })}
          </ListHistoty>
          {requestHistory.length !== 0 && (
            <Button
              type="button"
              onClick={() => {
                clearHistory();
              }}
            >
              Очистити
            </Button>
          )}
        </HistoryHead>
      </HistoryWrapper>
    </>
  );
};
