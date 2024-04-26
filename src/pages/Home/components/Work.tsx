import TwoContent from "../../../components/TwoContent";

const ContentLeft = <span>Work</span>;

const ContentRight = (
  <ul>
    <li>Decodable.co</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
  </ul>
);

const Work: React.FC = () => {
  return <TwoContent contentLeft={ContentLeft} contentRight={ContentRight} />;
};

export default Work;
