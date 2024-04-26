import styled from "styled-components";

interface TwoContentProps {
  contentLeft: JSX.Element;
  contentRight: JSX.Element;
}

const TwoSectionContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TwoContent: React.FC<TwoContentProps> = ({
  contentLeft,
  contentRight,
}) => {
  return (
    <TwoSectionContainer>
      <div style={{ flexBasis: "20%" }}>{contentLeft}</div>
      <div style={{ flexBasis: "80%" }}>{contentRight}</div>
    </TwoSectionContainer>
  );
};

export default TwoContent;
