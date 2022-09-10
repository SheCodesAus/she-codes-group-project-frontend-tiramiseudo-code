
// import React, { useState, useEffect } from "react";
import React from "react";
import { oneUser } from "./data";
import { useNavigate  } from "react-router-dom";
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
           <img src={oneUser.photo} alt=""/>
           <h2>{oneUser.first_name}{oneUser.last_name}</h2>
           {/* <h3>Created at: {users.date_created}</h3> */}
           {/* <h3>{`Status: ${users.is_open}`}</h3> */}
           <h3>Bio:{oneUser.bio}</h3>
           <h3>Skills:</h3>
               <ul>
                   {oneUser.skills.map((skillsData, key) => {
                       return (
                       <li><img src={skillsData.icon} alt=""/> {skillsData.skill_name}
                       </li>
                       );
                   })}
               </ul>
            <button type="submit" onClick={handleSubmit}>Back to Home</button>
       </div>
   );
}


 
export default OneUserPage;
