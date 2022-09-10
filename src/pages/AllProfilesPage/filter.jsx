import React from "react";

function FilterDropdown(props) {
    const { skillData } = props;

    return(

        <form id="filter">
            <label >Find community members with the skill you are interested in:</label>
            <select >
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
