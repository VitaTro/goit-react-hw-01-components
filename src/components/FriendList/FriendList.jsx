import React from "react";
import PropTypes from "prop-types";
import css from "./FriendsList.module.css";

const FriendList = ({ friend }) => {
return (
    <ul className="friend-list">
        <li className="item">
  <span className="status"></span>
  <img className="avatar" src="" alt="User avatar" width="48" />
  <p className="name"></p>
</li>

</ul>
);
};

FriendList.propTypes = {
friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,
}).isRequired
};

export default FriendList;