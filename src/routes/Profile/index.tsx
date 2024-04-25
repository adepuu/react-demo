import Illustration from "../../components/Illustration"
import './style.css';
import { useLocation } from "react-router-dom";

const Profile: React.FC = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="profile-container">
      Profile Page
      <Illustration imageUrl="https://tenor.com/view/mas-anies-anies-baswedan-gif-11441060049458111350" destinationUrl="https://tenor.com/view/mas-anies-anies-baswedan-gif-11441060049458111350"/>
    </div>
  );
};

export default Profile;