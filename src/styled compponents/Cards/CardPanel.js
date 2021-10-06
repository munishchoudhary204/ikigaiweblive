import React from 'react'
import "./CardPanel.scss"
import {Link} from "react-router-dom"

const CardPanel = () => {
    return (
        <div className="homecardpanel">
            <div className="cholderhome">
                <div className="propcard">
                    <h2> Individuals</h2> 
                    <p>Students and Working Professionals</p>
                    <button> <Link to="/program1"  style={{textDecoration:"none",color:"white"}}>Know More</Link></button>
                

                </div>
                <div className="propcard">
                <h2> Academics</h2> 
                <p>For Institutions</p>
                <button> <Link to="/academics"  style={{textDecoration:"none",color:"white"}}>Know More</Link></button>
                </div>
                <div className="propcard">
                <h2> Industry</h2> 
                <p>For Businesses</p>
                <button> <Link to="/industry"  style={{textDecoration:"none",color:"white"}}>Know More</Link></button>
                </div>
                <div className="propcard">
                <h2> Government</h2> 
                <p>For Government Institutions</p>
                <button> <Link to="/program1"  style={{textDecoration:"none",color:"white"}}>Know More</Link></button>
                </div>
            </div>
        </div>
     )
}

export default CardPanel
