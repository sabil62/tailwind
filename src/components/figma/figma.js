import tw, { styled } from "twin.macro";

const Modal = tw.div`h-screen bg-black bg-opacity-50 w-screen fixed top-0 left-0 z-30  `;
const Central = tw.div`flex justify-center items-center h-screen`;
const CentralBox = tw.div`h-[42rem] w-[70rem] z-40 bg-gray-500 rounded-[18px] relative`;
const LeftBox = tw.div`h-[42rem] w-[41rem] bg-white rounded-[18px] inline-block absolute left-0 z-[60] pt-[3rem] pb-[1.5rem] pl-[4rem] pr-[4rem] font-sans `;
const RightBox = tw.div`h-[42rem] w-[30rem] bg-red-300 inline-block absolute right-0 rounded-r-[18px] z-50 `;
const BlockBoxForCentering = tw.div`grid justify-center items-center h-[42rem] w-[31rem]`;
const RoundedBox = tw.div`h-[30.4rem] w-[20rem] rounded-[9.2rem] bg-red-100 block ml-[0.2rem]`;

//leftbox inside
const HalfBox = tw.div`w-6/12 inline-block text-[45px] font-semibold leading-[60px]`;
const QuaterBox = tw.div`w-2/5 inline-block`;
const MidText = tw.div`text-[15.8px] font-normal my-[1rem] tracking-[0.2px]`;

//mid
const LeftQuater = tw.div`w-8/12 inline-block`;
const RightQuater = tw.div`w-4/12 inline-block`;
const BoldText = tw.span`text-[28.8px] font-semibold tracking-[0.65px] flex items-center`;

const FlexB = styled.span(({ isLine, isMargin }) => [
  tw`flex items-center `,
  isLine && tw`w-[3rem] justify-center`,
  isMargin && tw`my-[0.4rem]`,
]);
// #62BA38

const FontWeight = styled.span(({ weightBold }) => [
  tw`font-normal text-[15px]`,
  weightBold && tw`font-semibold text-gray-700`,
]);

const DetailPopup = () => {
  let GreenLine = (
    <FlexB isLine>
      <div
        style={{
          height: "3.3px",
          width: "2.2rem",
          backgroundColor: "#62BA38",
          borderRadius: "6px",
        }}
      ></div>
    </FlexB>
  );
  let GreenCircle = (
    <span
      style={{
        height: "4px",
        width: "4px",
        borderRadius: "50%",
        backgroundColor: "#62BA38",
        margin: "4px 6px 0 6px",
      }}
    ></span>
  );

  return (
    <Modal>
      <Central>
        <CentralBox>
          <LeftBox>
            <div>
              <HalfBox>Three Capes 3-day walk</HalfBox>
              <QuaterBox>Active</QuaterBox>
            </div>
            <MidText style={{ color: " #5A5A5A" }}>
              Explore the natural beauty of the Tasman Peninsula in the far
              south-east corner of Tasmania. This region is famous for the
              highest vertical seas cliffs in Australia
            </MidText>
            <div>
              <LeftQuater>
                <BoldText>
                  03
                  {GreenLine}
                </BoldText>
                <FlexB isMargin>
                  <FontWeight weightBold>Days</FontWeight>
                  {GreenCircle}
                  <FontWeight style={{ color: " #5A5A5A" }}>
                    Duration
                  </FontWeight>
                </FlexB>
              </LeftQuater>
              <RightQuater>
                <BoldText>$2,199{GreenLine}</BoldText>
                <FlexB isMargin>
                  <FontWeight weightBold>AUD</FontWeight>
                  {GreenCircle}
                  <FontWeight style={{ color: " #5A5A5A" }}>
                    Normal Price
                  </FontWeight>
                </FlexB>
              </RightQuater>
            </div>
          </LeftBox>
          <RightBox>
            <BlockBoxForCentering>
              <RoundedBox></RoundedBox>
            </BlockBoxForCentering>
          </RightBox>
        </CentralBox>
      </Central>
    </Modal>
  );
};
export default DetailPopup;
