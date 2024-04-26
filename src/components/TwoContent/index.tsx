import styled from "styled-components";

interface TwoContentProps {
  contentLeft: JSX.Element;
  contentRight: JSX.Element;
}

const TwoSectionContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div:nth-child(1) {
    flex-basis: 20%;
  }
  div:nth-child(2) {
    flex-basis: 80%;
  }
`;

const TwoContent: React.FC<TwoContentProps> = ({
  contentLeft,
  contentRight,
}) => {
  return (
    <TwoSectionContainer>
      <div>{contentLeft}</div>
      <div>{contentRight}</div>
    </TwoSectionContainer>
  );
};

export default TwoContent;
