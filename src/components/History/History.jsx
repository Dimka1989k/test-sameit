import {
  HistoryWrapper,
  HistoryHead,
  Button,
  Paragraph,
} from "./History.styled";

export const History = () => {
  return (
    <>
      <HistoryWrapper>
        <HistoryHead>
          <Paragraph>Історія</Paragraph>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Button type="button">Очистити</Button>
        </HistoryHead>
      </HistoryWrapper>
    </>
  );
};
