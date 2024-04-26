import TwoContent from "../../../components/TwoContent";

const ContentLeft = <span>Testimonial</span>;

const ContentRight = (
  <ul>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
    <li>Testimoni 1</li>
  </ul>
);

const Testimonial: React.FC = () => {
  return <TwoContent contentLeft={ContentLeft} contentRight={ContentRight} />;
};

export default Testimonial;
