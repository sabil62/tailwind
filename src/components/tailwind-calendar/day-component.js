/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import get from "lodash/get";
import { format, isSameDay, isSameMonth } from "date-fns/esm";

//----------------------Styles----------------------//
const DayContainer = styled.div(({ renderDate, roundCorner, selectedDate }) => [
  tw`grid grid-cols-3 grid-rows-[2rem 1fr 2rem] items-center gap-y-2 p-2 cursor-pointer`,
  tw`hover:outline-[2px solid #639A33] hover:z-10`,

  (isSameMonth(renderDate, selectedDate) && tw`bg-white`) || tw`bg-gray-100`,

  roundCorner.topLeft && tw`rounded-tl-xl`,
  roundCorner.topRight && tw`rounded-tr-xl`,
  roundCorner.bottomRight && tw`rounded-br-xl`,
  roundCorner.bottomLeft && tw`rounded-bl-xl`,
]);

const DayIcon = styled.span(
  ({ color, currentDate, renderDate, selectedDate }) => [
    tw`rounded-full h-[1.875rem] w-[1.875rem] flex items-center justify-center font-semibold`,

    (color && `color: ${color}; text-decoration: underline;`) ||
      tw`text-gray-800`,

    isSameDay(renderDate, currentDate) && tw`bg-[#639A33] text-white`,

    color &&
      isSameDay(renderDate, currentDate) &&
      `background-color: ${color}; text-decoration: underline; color: #fff;`,

    !isSameMonth(renderDate, selectedDate) && tw`opacity-30`,
  ]
);

const DisplayWeek = (props) =>
  props.weekIndex === 0 && (
    <span tw="col-start-3 col-span-1 justify-self-end font-bold">
      {props.children}
    </span>
  );

const StyledStatus = styled.span(({ color }) => [
  tw`min-w-min bg-yellow-600 rounded-xl px-2 py-1 text-white font-semibold`,
  (color && `background-color: ${color}`) || tw`bg-[#639A33]`,
]);
//----------------------Styles----------------------//

const AvailabilityStatus = ({ renderComponent, children, ...rest }) =>
  renderComponent && <StyledStatus {...rest}>{children}</StyledStatus>;

function DayComponent(props) {
  //Check and map data from api
  const data = {
    productValue: get(props.data, ["0", "product", "0", "value"], null),
    tag: get(props.data, ["0", "availability-status", "tag"], null),
    colorCode: get(props.data, ["0", "availability-status", "colorCode"], null),
  };

  return (
    <DayContainer {...props}>
      <DayIcon {...props} color={data.colorCode}>
        {format(props.renderDate, "d")}
      </DayIcon>

      <DisplayWeek weekIndex={props.weekIndex}>
        {format(props.renderDate, "iii")}
      </DisplayWeek>

      <div tw="col-span-full line-clamp-2">{data.productValue}</div>

      <div tw="col-span-2">
        <AvailabilityStatus color={data.colorCode} renderComponent={!!data.tag}>
          {data.tag}
        </AvailabilityStatus>
      </div>
    </DayContainer>
  );
}

export default DayComponent;
