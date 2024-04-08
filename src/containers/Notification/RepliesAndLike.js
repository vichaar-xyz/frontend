import React from "react";
import { Link } from "react-router-dom";

const RepliesAndLike = () => {

    const UserImage = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4248454420d27552005e797acba8164c813709e08c59df54f818840234a161b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            alt: "Image not found"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/87e73097cd679cb1c367d1f5b6d30edd2a83396f878336d237d436faa07c701d?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            alt: "Image not found"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea4026047dd4f10f99f7b3f7406ff02eb43622364882c53424cf223841370cd4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            alt: "Image not found"
        },
        {
            src: "https://github.com/vichaar-xyz/frontend/assets/87490161/f61da15c-6d50-47fa-a13d-a3098355f32d",
            alt: "Image not found"
        },
        {
            src: "https://github.com/vichaar-xyz/frontend/assets/87490161/29d21914-2917-4f39-b1be-a14894e7aa6e",
            alt: "Image not found"
        },
    ]

    return (
        <div>
            {/* first reply      */}
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
                    <Link className="see_notiification" to="/notification">See reply</Link>
                </div>

            </div>



            {/* Second reply without verification badge */}
            <div className="notification_post">
                <div className="notification_header">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4026047dd4f10f99f7b3f7406ff02eb43622364882c53424cf223841370cd4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="user_avatar" />
                    <div className="username_notifiaction">@xdfdfbgnhjj</div>
                    <div className="title_notifiaction">has on your post.</div>
                </div>
                <div className="notification_footer">
                    <div className="date_notification">Mar 8, 2022</div>
                    <div className="dot_between"></div>
                    <div className="time_notification">6 min read</div>
                    <Link className="see_notiification" to="/notification">See reply</Link>
                </div>

            </div>

            {/* list of user_avatar liked your post. */}
            <div className="post_like_notification">
                
                <div className="user_avatar_list" >
                {UserImage.map((data,index)=>(
                    <img src={data.src} alt={data.alt} key={index} className="user_avatar" />

                    ))}
                </div>
                <div className="like_post_footer">Abhishek and 12 other liked your post

                </div>

            </div>



        </div>
    )
}
export default RepliesAndLike;