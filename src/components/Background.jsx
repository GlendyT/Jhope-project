import React from "react"
import jhope from "../assets/jhope2.mp4"
import Hopeworld from "../assets/3.png"

const Background = () => {
    return (  
       <div className="main">
        <div className="overlay"></div>
        <video 
         src={jhope} 
         autoPlay 
         loop 
         muted
         playsInline
         preload="auto"
         id="bg"
         poster={Hopeworld}
         >
            <source src={jhope} type="video/mp4"/>
            </video>
       
       </div>
    )
  }

export default Background;