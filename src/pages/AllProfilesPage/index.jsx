
import React, { useState, useEffect } from "react";
import { allUsers, allSkills } from "./data";
// import { Footer } from "/../../components/Footer/footer";
// import ProfileCard from "./components/ProfileCard/profilecard"; 
import ProfileCard from "./profilecard";
import FilterDropdown from "./filter";
import "./index.css"


function AllUsersPage() {
    const [userList, setUserList] = useState([]);
    const [skillList, setSkillList] = useState([]);

    //local data
    useEffect(() => {
        setUserList(allUsers);
        setSkillList(allSkills);
    }, []);


    // When backend API is ready:
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}users`)
    //     .then((results) => {
    //     return results.json();
    //     })
    //     .then((data) => {
    //     setUserList(data);
    //     });
    // }, []);
    
    return(
        <div>
            <div id="dropDown">
                 <FilterDropdown skillData={skillList}/>
            </div>


            <div id="user-list">
                { userList.map((userData, key) => {
                return <ProfileCard key={key} userData={userData}/>;
                })}
            </div>
        </div>
    );
  
 }


/* <Footer />  */

export default AllUsersPage;
