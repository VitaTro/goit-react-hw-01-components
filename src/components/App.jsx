import Profile from "./Profile/Profile.jsx";
import user from "./json/user.json";
import Statistics from "./Statistics/Statistics.jsx";
import data from "./json/data.json";
import FriendList from "./FriendList/FriendList.jsx";
import friend from "./json/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "./json/transactions.json";


export const App = () => {
  return (
    <>
    <Profile user = { user } />
    <Statistics data = { data } />
    <FriendList friend = { friend }/>
    <TransactionHistory items = { transactions }/>
    </>
  );
};
 export default App;