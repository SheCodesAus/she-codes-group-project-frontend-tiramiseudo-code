import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./profilecard.css";


function ProfileCard(props) {
    const { userData } = props;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/ProfileView");}

    return (
        <div className="profile-card">
            <Link to="/AllProfiles">
            <img src={userData.photo} alt=""/>
            <h1>{userData.first_name }{userData.last_name }</h1>
            <h2>{userData.pronoun }</h2>
            <h3>{userData.bio}</h3>
            <button type="submit" onClick={handleSubmit}>Get To Know Me</button>
            </Link>
        </div>
    )
}

export default ProfileCard;