import React, { useState, useEffect } from "react";
import ProfileCard from "./profilecard";
import "./index.css"
 
function AllUsersPage() {
   const [userList, setUserList] = useState([]);
   const [skillList, setSkillList] = useState([]);
   const [usersToShow, setUsersToShow] = useState(['all']);
   
   useEffect(() => {
       fetch(`${process.env.REACT_APP_API_URL}users`)
       .then((results) => {
           return results.json();
        })
        .then((data) => {
            console.log('all users', data)
            setUserList(data);
        });
    }, []);
    
   useEffect(() => {
       fetch(`${process.env.REACT_APP_API_URL}skills`)
       .then((results) => {
            return results.json();
       })
       .then((data) => {
            console.log('skill list', data)
            setSkillList(data);
       });
   }, []);
 

   const handleChange = event => {
       
        if (event.target.value === 'all') {
            setUsersToShow([event.target.value]);
            return
        }
        const valueString = event.target.value
        const arrayOfUserIDs = valueString.split(',').filter((id) => Boolean(id)).map(id => Number(id))
        setUsersToShow(arrayOfUserIDs);
   }
  
   return(
      
       <div>
           <div id="filter">
           <label >Find community members with the skill you are interested in:</label>
           <select onChange={handleChange}>
               <option value='all'> All </option>
               {skillList.map((skill, key) => {
                   return(
                        <option key={skill.skill_name} value={skill.users}>{skill.skill_name}
                        </option>
                    );
               })}
           </select>
 
           <div id="user-list">
                {usersToShow.includes('all') ? (
                        userList.map((userData, key) => 
                            <ProfileCard key={key} userData={userData}/>
                        )
                    ) : (
                        userList.map((userData, key) => {
                            if (usersToShow.includes(userData.id)) {
                                return <ProfileCard key={key} userData={userData}/>;
                            }
                            return null
                        })
                    )
                }
           </div>
       </div>       
          
       </div>
   );
 }
 
 
export default AllUsersPage;