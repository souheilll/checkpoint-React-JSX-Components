import React from 'react'
import souPic from "../../images/sou.jpg"
import prof from "../../style/profilePhoto.css"




function ProfilePhoto() {
    return (
        <div >
            <img className='profile' style={prof} src={souPic} alt='pic-sou'></img>
        </div>
    )
}
export default ProfilePhoto