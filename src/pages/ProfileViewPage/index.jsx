
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

 
function OneUserPage() {
    const [oneUserData, setOneUserData] = useState({profile: [] });
    const { id } = useParams();

    const navigate = useNavigate();
    const handleSubmit = (e) => {
                e.preventDefault();
                navigate("/AllProfiles");}


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setOneUserData(data);
        
        });
    }, [id]);  
  
    if (!oneUserData.skills) {
    return ("Data is loading")
    }
    

    return(
        <div>
            <img src={oneUserData.photo} alt=""/>
            <h2>{oneUserData.first_name}{oneUserData.last_name}</h2>
            <h2>{oneUserData.pronoun }</h2>
            <h3>{oneUserData.bio}</h3>
            <h3>Skills:</h3>
                <ul>
                    {oneUserData.skills.map((skillsData, key) => {
                        return (
                        <li><img src={skillsData.icon} alt=""/> {skillsData.skill_name}
                        </li>
                        );
                    })}
                </ul>
            <button type="submit" onClick={handleSubmit}>Back to all profiles page</button>
        </div>
    );}

export default OneUserPage;
