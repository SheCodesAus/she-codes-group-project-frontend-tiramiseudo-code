
// import React, { useState, useEffect } from "react";
import React from "react";
import { oneUser } from "./data";
import { useNavigate  } from "react-router-dom";
import "./index.css"
// import { useParams,Link, useNavigate } from "react-router-dom";

function OneUserPage() {
    // When backend API is ready
    // const [oneUserData, setOneUserData] = useState({profile: [] });
    // const { id } = useParams();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
    //     .then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //     setOneUserData(data);
    //     });
    // }, ); 

    // return(
    //     <div>
    //         <img src={oneUserData.photo} alt=""/>
    //         <h2>{oneUserData.first_name}{oneUserData.last_name}</h2>
    //         {/* <h3>Created at: {users.date_created}</h3> */}
    //         {/* <h3>{`Status: ${users.is_open}`}</h3> */}
    //         <h3>Bio:{oneUserData.bio}</h3>
    //         <h3>Skills:</h3>
    //             <ul>
    //                 {oneUserData.skills.map((skillsData, key) => {
    //                     return (
    //                     <li><img src={skillsData.icon} alt=""/> {skillsData.skill_name}
    //                     </li>
    //                     );
    //                 })}
    //             </ul>
    //     </div>
    // );

    // use local data

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/AllProfiles");}
 
 
    return(
        <div>
            <div className="user-container">
                <img className="user-image" src={oneUser.photo} alt="Avater for user"/>
                <div className="user-header">
                    <h2 className="user-h2">{oneUser.first_name}{oneUser.last_name}</h2>
                    <h3 className="user-h3">Brisbane, Australia</h3>
                    <h3 className="user-h3">{oneUser.pronoun}</h3>
                </div>
            </div>
          
            <div className="user-body">
                <h3 className="user-h3">Bio:</h3>
                <p className="user-p">{oneUser.bio}</p>
                <h3 className="user-h3">Skills:</h3>
                <ul>
                    {oneUser.skills.map((skillsData, key) => {
                        return (
                        <li className="skill-list"><img className="icon" src={skillsData.icon} alt=""/> {skillsData.skill_name}
                        </li>
                        );
                    })}
                </ul>
                <button className="user-button" type="submit" onClick={handleSubmit}>Find me on LinkedIn</button>
            </div>
        </div>
   );
}


 
export default OneUserPage;
