import React, { useState, useEffect } from "react";
// import React from "react";
// import { oneUser } from "./data";
// import { useParams } from "react-router-dom";
 


function HelloPage() {
    // When backend API is ready
    const [helloData, setHelloData] = useState({"String": ""});
    
   
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}hello`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setHelloData(data);
        });
    }, []); 

    return(
        <div>
           <h1>{helloData.String}</h1> 
        </div>
    );
    }
    // use local data
//     return(
//        <div>
//            <img src={oneUser.photo} alt=""/>
//            <h2>{oneUser.first_name}{oneUser.last_name}</h2>
//            {/* <h3>Created at: {users.date_created}</h3> */}
//            {/* <h3>{`Status: ${users.is_open}`}</h3> */}
//            <h3>Bio:{oneUser.bio}</h3>
//            <h3>Skills:</h3>
//                <ul>
//                    {oneUser.skills.map((skillsData, key) => {
//                        return (
//                        <li><img src={skillsData.icon} alt=""/> {skillsData.skill_name}
//                        </li>
//                        );
//                    })}
//                </ul>
//        </div>
//    );
// }


 
export default HelloPage;
