import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css";


function Page404 () {
    return (
        <div className="page404-container">
            <h1>Page not found!</h1>
            <br/>
            <Link to="/">
                <a className='btn'>Back to Home</a>
            </Link>
        </div>
    )


}

export default Page404