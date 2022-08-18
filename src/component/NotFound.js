import React from 'react'
import gifNf from '../images/giphy.gif';

const NotFound = () => {
    return (
        <div className="position-relative" style={{minHeight: "calc(100vh - 70px)"}} >
            
            <h2 className="position-absolute text-secondary back" style={{top: '50%', left:'50%', transform: 'translate(-50%, -50%)',textAlign:'center',paddingBottom:'50px'}} >
            <img src={gifNf}/>
                <br></br><br></br>404 | Page Not Found.
            </h2>
        </div>
    )
}

export default NotFound