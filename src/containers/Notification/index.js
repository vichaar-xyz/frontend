import React, { useState } from "react";
import ForYou from "./ForYou";
import Mentions from "./Mentions";
import RepliesAndLike from "./RepliesAndLike";
import './index.scss';

const Notification = () =>{
    const [page,setpage] = useState("Mentions")
    
    return(
        <div className="notification" >
        <div className="notification_container" >
            <div className="page_title" >Notifications</div>
            <div className="notification_nav">
            <ul className="notification_slider">
                <li className="current_slide" onClick={()=> setpage("Mentions")}>Mention{page=="Mentions"?<hr />:null}</li>
                <li className="current_slide" onClick={()=> setpage("RepliesAndLike")}>Replies & like{page=="RepliesAndLike"?<hr />:null}</li>
                <li className="current_slide" onClick={()=> setpage("ForYou")}>For you{page=="ForYou"?<hr />:null}</li>
            </ul>
            <hr className="horizontal"/> 
            </div>  
            <div className="notification_post_container">
                {page=="Mentions"?(<Mentions/>):null}    
                {page=="RepliesAndLike"?(<RepliesAndLike/>):null}    
                {page=="ForYou"?(<ForYou/>):null}    

            

                </div>
            
        </div>
        </div>
    )

}
export default Notification;