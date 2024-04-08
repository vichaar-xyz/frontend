import React from 'react';
import { Link } from "react-router-dom";

const Mentions = () => {
    return (
        <div>{/* first post      */}
            <div className="notification_post">
                <div className="notification_header">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4026047dd4f10f99f7b3f7406ff02eb43622364882c53424cf223841370cd4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="user_avatar" />
                    <div className="username_notifiaction">@maheshwari_099</div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04625bfbab85a66f908853fca785e524c247a2693eed915bf48cf9acab6f995b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Image not found" loading="Lazy" className="verified-badge" />
                    <div className="title_notifiaction">has mentioned you on post.</div>
                </div>
                <div className="notification_footer">
                    <div className="date_notification">Mar 8, 2022</div>
                    <div className="dot_between"></div>
                    <div className="time_notification">6 min read</div>
                    <Link className="see_notiification" to="/notification">See post</Link>
                </div>

            </div>



            {/* Second post without verification badge */}
            <div className="notification_post">
                <div className="notification_header">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4026047dd4f10f99f7b3f7406ff02eb43622364882c53424cf223841370cd4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="user_avatar" />
                    <div className="username_notifiaction">@xdfdfbgnhjj</div>
                    <div className="title_notifiaction">has mentioned you on post.</div>
                </div>
                <div className="notification_footer">
                    <div className="date_notification">Mar 8, 2022</div>
                    <div className="dot_between"></div>
                    <div className="time_notification">6 min read</div>
                    <Link className="see_notiification" to="/notification">See post</Link>
                </div>

            </div>
        </div>
    )
}

export default Mentions