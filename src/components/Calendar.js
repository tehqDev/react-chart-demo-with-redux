import React from "react";
import styled from "styled-components";

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const Day = styled.div`
  margin: 10px;
  color: black;
`;

const CurrentDay = styled.div`
  margin: 10px;
  font-size: 110%;
  color: lightgreen;
  font-weight: bold;
  outline: solid;
  padding: 4px;
`;

const TotalDays = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const Calendar = ({ week, totalDays }) => {
  return (
    <div>
      <StyledCalendar>
        {week?.map((day, index) => {
          return day.CurrentDay ? (
            <CurrentDay key={index}>{day.Day}</CurrentDay>
          ) : (
            <Day key={index}>{day.Day}</Day>
          );
        })}
      </StyledCalendar>
      <TotalDays>Total Days: {totalDays}</TotalDays>
    </div>
  );
};

export default Calendar;
