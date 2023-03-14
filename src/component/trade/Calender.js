import { DateRangePicker } from "react-date-range";
import { Component, useState } from "react";
import { addDays } from "date-fns";

function Calender(props) {
  const handleSelect = (date) => {
    console.log(date);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return <DateRangePicker ranges={state} onChange={handleSelect} style={{}} />;
}

export default Calender;
