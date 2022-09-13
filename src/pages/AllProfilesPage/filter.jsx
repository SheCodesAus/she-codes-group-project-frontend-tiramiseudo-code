import React from "react";
import "./filter.css"

function FilterDropdown(props) {
    const { skillData } = props;

    return(

        <form id="filter">
            <label>I am looking for community members who specialise in:  </label>
            <select class="dropdown">
                {skillData.map((skillsData, key) => {
                    return(
                    <option value="skill_name">{skillsData.skill_name}
                    </option>
                );
                })}
            </select>
        </form>
    )

    // return(

    //     <form id="filter" action="/action_page.php">
    //         <label for="skills">Choose a  skill:</label>
    //         <select id="cars" name="cars">
    //             {skillData.skills.map((skillsData, key) => {
    //                 return(
    //                 <option value="skill_name">{skillsData.skill_name}
    //                 </option>
    //             );
    //             })}
    //         </select>
    //     </form>
    // )
}

export default FilterDropdown;
