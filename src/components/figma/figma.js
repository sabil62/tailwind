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
// const MidText = tw.div`text-[15.8px] font-normal my-[1rem] tracking-[0.2px]`;

const MidText = styled.div(({ isDown }) => [
  tw`text-[15.8px] font-normal my-[1rem] tracking-[0.2px]`,
  isDown && tw`text-[15px] tracking-[0px] mb-[0.5rem] mt-[0.2rem]`,
]);

//mid
const LeftQuater = tw.div`w-8/12 inline-block`;
const RightQuater = tw.div`w-4/12 inline-block`;
const BoldText = tw.span`text-[28.8px] font-semibold tracking-[0.65px] flex items-center`;

const FlexB = styled.span(({ isLine, isMargin, both }) => [
  tw`flex items-center `,
  isLine && tw`w-[3rem] justify-center`,
  isMargin && tw`my-[0.4rem]`,
  both && tw`justify-center`,
]);
// #62BA38

const FontWeight = styled.span(({ weightBold, isStartEnd, boldest }) => [
  tw`font-normal text-[15px]`,
  weightBold && tw`font-semibold text-gray-700`,
  isStartEnd && tw`font-semibold text-[13px] pl-[1rem] mt-[1.6rem]`,
  boldest && tw`font-semibold block text-gray-900`,
]);

const ShadowBox = tw.div`h-[70px] w-[520px] rounded-[8px] px-[20px] py-[12px] mt-[0.5rem] mb-[1rem]`;
const BigRed = tw.div`text-[15px] font-semibold tracking-tight`;

const Four12 = styled.span(({ three }) => [
  tw`inline-block w-4/12 ml-[0.4rem]`,
  three && tw`w-3/12 ml-[0px]`,
]);
const BottomMargin = tw.div`mb-[0.3rem]`;
const RightButtonFlex = tw.div`flex justify-end text-white`;
const RightButton = tw.span`px-[20px] py-[6px] text-[16.4px] font-semibold rounded-[4px]`;
const Available = tw.span`rounded-[12px] text-[15px] font-bold text-white px-[8px] py-[4px] tracking-wide ml-[0.4rem]`;

const Five12 = tw.div`inline-block w-5/12`;
// const Two12 = tw.div`inline-block w-2/12 text-center text-[2rem] font-bold`;
const Two12 = styled.div(({ bold }) => [
  tw`inline-block w-2/12 `,
  bold && tw`text-center text-[2rem] font-bold`,
]);

const DownFlex = tw.div`inline-block pl-[5px]`;

const Three12 = tw.div`inline-block w-3/12`;

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
              <QuaterBox>
                <Available style={{ backgroundColor: "#62BA38" }}>
                  Available
                </Available>
              </QuaterBox>
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
            {/* ------------middle segment---------- */}
            <div style={{ marginTop: "0.4rem" }}>
              <LeftQuater>
                <FontWeight isStartEnd style={{ color: "#62BA38" }}>
                  Start Date
                </FontWeight>
              </LeftQuater>
              <RightQuater>
                <FontWeight isStartEnd style={{ color: "#FF0000" }}>
                  End Date
                </FontWeight>
              </RightQuater>
            </div>
            {/* box segment  */}
            <ShadowBox style={{ boxShadow: "0px 0px 14px 0px #00000014" }}>
              <Five12>
                <Three12 style={{ color: "#62BA38" }}>Icon</Three12>
                <DownFlex>
                  <FontWeight boldest>Friday</FontWeight>
                  <FontWeight>11 Dec 2021</FontWeight>
                </DownFlex>
              </Five12>
              <Two12 bold> &gt; </Two12>
              <Five12>
                <Three12 style={{ color: "#FF0000" }}>Icon </Three12>
                <DownFlex>
                  <FontWeight boldest>Sunday</FontWeight>
                  <FontWeight bold>13 Dec 2021</FontWeight>
                </DownFlex>
              </Five12>
            </ShadowBox>
            <BigRed style={{ color: "#FF0000" }}>VARIED ITINERARY *</BigRed>
            <MidText isDown style={{ color: " #5A5A5A" }}>
              Please note that the itinerary on 11 Dec has been changed.
              &lt;explaination&gt;
            </MidText>
            {/* end  */}
            <BottomMargin>
              <Four12 three>
                <FontWeight weightBold>Day 1</FontWeight>
              </Four12>
              <Four12>
                <FontWeight>Sky Diving</FontWeight>
              </Four12>
            </BottomMargin>
            <BottomMargin>
              <Four12 three>
                <FontWeight weightBold>Day 2</FontWeight>
              </Four12>
              <Four12>
                <FontWeight>Walk on Beach 1</FontWeight>
              </Four12>
            </BottomMargin>
            <div>
              <Four12 three>
                <FontWeight weightBold>Day 3</FontWeight>
              </Four12>
              <Four12>
                <FontWeight>Walk on Track 2</FontWeight>
              </Four12>
            </div>
            <RightButtonFlex>
              <RightButton style={{ backgroundColor: "#62BA38" }}>
                CONTINUE &gt;{" "}
              </RightButton>
            </RightButtonFlex>
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
