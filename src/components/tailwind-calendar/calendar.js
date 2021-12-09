/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { format, isBefore } from "date-fns/esm";
import { DropdownField, FieldGroup } from "@clevero/components";

import DayComponent from "./DayComponent";

import { useGetTours } from "../api/tours.api";
import {
  calcMonthList,
  calcYearList,
  roundCorner,
  takeMonth,
} from "../Utility/calenderUtils";

//----------------------Styles----------------------//
const MainContainer = (props) => (
  <div tw="container m-auto my-6 px-12 py-6 border-2 rounded-xl border-gray-400">
    {props.children}
  </div>
);

const CalendarContainer = (props) => (
  <div tw="grid grid-cols-7 auto-rows-[8.25rem] gap-px my-4 text-sm bg-gray-300 border-2 border-gray-300 rounded-xl">
    {props.children}
  </div>
);

const StyledDropDown = (props) => (
  <DropdownField
    {...props}
    color={"#E0F1D7"}
    isClearable={false}
    fieldStyle={{
      background: "#E0F1D7",
      backgroundFocus: "#639A33",
      border: "transparent",
      borderFocus: "transparent",
      borderRadius: "0.5rem",
    }}
  />
);
//----------------------Styles----------------------//

function Calendar() {
  //get product ID for API call//
  const { productId } = useParams();

  //memoize today's Date//
  const currentDate = useMemo(() => new Date("2022 May 01"), []);

  //initialize selectedDate as currentDate//
  const [selectedDate, setSelectedDate] = useState(currentDate);

  //generates a month array for currentDate/selectedDate//
  const month = takeMonth(selectedDate)();

  //get list of months and year//
  const monthList = calcMonthList(currentDate, selectedDate);
  const yearList = calcYearList(currentDate, selectedDate, 2);

  //API call to get events//
  const { data, isLoading, isFetching } = useGetTours({
    params: {
      month: format(selectedDate, "MMMM"),
      year: format(selectedDate, "yyyy"),
      productId,
    },
    enabled: !!selectedDate && !!productId,
  });
  console.log("isFetching :", isFetching);
  console.log("isLoading :", isLoading);
  console.log("data :", data);

  //month and year change handler//
  function handleChange(e, type) {
    let prevDate;
    const inputDate = e.value;

    inputDate &&
      setSelectedDate((prev) => {
        switch (type) {
          case "month":
            prevDate = format(prev, "yyyy");
            break;
          case "year":
            prevDate = format(prev, "MMMM");
            break;
          default:
            prevDate = new Date().toISOString();
        }

        const newDate = new Date(`${inputDate} ${prevDate}`);
        return isBefore(newDate, currentDate) ? currentDate : newDate;
      });
  }

  //reset date to current date if user skips to prev dates//
  useEffect(
    () =>
      isBefore(selectedDate, currentDate) ? setSelectedDate(currentDate) : null,
    [currentDate, selectedDate]
  );

  return (
    <MainContainer>
      <FieldGroup columns={2} tw="max-w-xs my-4">
        <StyledDropDown
          name="month-input"
          value={format(selectedDate, "MMMM")}
          options={monthList}
          onChange={(e) => handleChange(e, "month")}
        />

        <StyledDropDown
          name="year-input"
          value={format(selectedDate, "yyyy")}
          options={yearList}
          onChange={(e) => handleChange(e, "year")}
        />
      </FieldGroup>

      <CalendarContainer>
        {month.map((week, wIndex) =>
          week.map((day, dIndex) => (
            <DayComponent
              renderDate={day}
              selectedDate={selectedDate}
              currentDate={currentDate}
              roundCorner={roundCorner(month, wIndex, dIndex)}
              weekIndex={wIndex}
              data={data && data[format(day, "yyyy-MM-dd")]}
              key={day}
              onClick={() => {
                if (!isBefore(day, currentDate)) setSelectedDate(day);
              }}
            />
          ))
        )}
      </CalendarContainer>
    </MainContainer>
  );
}

export default Calendar;
