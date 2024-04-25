import styled from "styled-components";

interface IllustrationProps {
  imageUrl: string;
  destinationUrl: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  imageUrl,
  destinationUrl,
}) => {
  const IllustrationImage = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  `;
  return (
    <a href={destinationUrl} target="_blank">
      <IllustrationImage src={imageUrl} className="react" alt="React logo" />
    </a>
  );
};

export default Illustration;
