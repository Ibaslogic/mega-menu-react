import { UserRoundX } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="register">
      <div className="block md:hidden">
        <button className="avatar">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden md:block">
        <Link to={`#`}>Log in</Link>
        <button className="sign">Sign up</button>
      </div>
    </div>
  );
};

export default UserProfile;
