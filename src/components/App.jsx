import Profile from "./Profile/Profile.jsx";
import user from './json/user.json';


export const App = () => {
  return (
    <>
    <Profile user={ user } />
    </>
  );
};
