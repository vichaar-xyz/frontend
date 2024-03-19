import React, { useState } from 'react'
import {Link, useNavigate,useParams,Outlet } from 'react-router-dom';
import './index.scss';

import Data  from '../../assets/Data.json'
import Events from './Events';
import Feed from './Feed';
import Communities from './Communities';

const Communidad = () => {
    const {catagory} = useParams();
    const navigate = useNavigate();
    const [page, selectpage] = useState("Feed");
    console.log(page);

    const stats = [
        { value: "6,664", label: "Following" },
        { value: "9,991", label: "Followers" },
    ];
    const tokens = [
        { id: 1, name: "Token 1" },
        { id: 2, name: "Token 2" },
        { id: 3, name: "Token 3" },
        { id: 4, name: "Token 4" },
    ];
    const icons = [
        { id: 1, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b24d5d1d31eb51814dc300a6c28bfea52380ec86f8a5bcce23a3a203403b466?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { id: 2, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/efa44d9f08a1a3cafe9913d03355c1f15b007b5d85036cca431e26445d21dd3a?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },        
        { id: 3, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f51b3f7a242e9f1680d5c6995d842d31461d6c4c82581f42ad695a42f9c825?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { id: 4, avatar: "https://github.com/vichaar-xyz/frontend/assets/87490161/2ad304d1-1d68-4c00-9397-d11cc19582f0" },

    ];

    const images = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e86de4dd1fe4e260bf4c3ec31987f94ee94896eba1cd21a7c4cfa3241e764570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Like icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a91c164475799a3fad37f4675e97f13d03d70f0a4ec7c991ea26f80ed9d439f5?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Comment icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b299f12d57ef24659cff76013f7b6fee92ea4dfb453badc499db353b28874b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Share icon" }
    ];


    const reactions = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7e31d14bb8ee2a432ae40b3432567e8de5199e4e5b2dc0c8c5962f104c9a554?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", count: "1.2k" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c5a856594c5687f75a8360c64dfde95937d06484425d3eb109a3cf574047447?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" }
    ];

    const actions = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80049d256481823ea98953419d1a961fa9a79f948aeb77dc09a5d76bff20a757?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8434b995a7a366ae87405469c727212ced1587aae165ea37e4fba8a876b182b7?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e30760babc5816d5ee82d58f2f0c6afddf824236184aee846d57358ade95803f?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" }
    ];


    const profiles = [
        {
            name: "Mohit Agrawal",
            username: "@manwhowrites",
            avatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4248454420d27552005e797acba8164c813709e08c59df54f818840234a161b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        },
        {
            name: "Meena Shekh",
            username: "@samramse",
            avatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fba83b673111c626b75fc8beccc1ba0a4fa48953e2ac04ef58209d171055529?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        },
        {
            name: "Mohit Agrawal",
            username: "@manwhowrites",
            avatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4248454420d27552005e797acba8164c813709e08c59df54f818840234a161b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        }
    ];

    const menuItems = [
        { label: "Odyssey", active: false, route: "/odyssey" },
        { label: "Controverse", active: false, route: "/contraverse" },
        { label: "Lens", active: false, route: "/lens" },
        { label: "Communidad", active: true, route: "/communidad" }
    ];

    const MenuItem = ({ label, active, route }) => (
        <div className={`menu-item ${active ? "active" : ""}`} onClick={() => navigate(route)}>{label}</div>
    );
    const postData = {
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/732f6482c3017e3e025ae9caca33735232b4ab90848bdbec8d9a01bfbf280301?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        authorUsername: "@anddtrtess",
        postImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/832dfaaa4d5611ea46a61ab310465bf39eecb6d11cf86f93e6ac02d44becf8f4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        postDescription: "It serves as a central hub where users can discover, share, and discuss the latest insights",
      };


    return (
        <div>

            <div className="odyssey_main_container">
                <div className="odyssey_container max_width_container">
                    <div className="odyssey_left">
                        {/* Left  */}
                        <div className="left_main_card_container">
                            <div className="left_main_card">
                                <div className="profile-card">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f733a70d87818e8514ff816d50a4b4528c31defe64d5f5aa4b088dd52eafc136?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                                        alt="Profile background"
                                        className="profile-background"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ab6cfc11783b97f4b721edc973b665b885f2ff386c8d3785866882e17d93020?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                                        alt="Profile avatar"
                                        className="profile-avatar"
                                    />
                                    <h2 className="profile-description">
                                        On a journey to explore the extraordinary ✈️
                                    </h2>
                                    <div className="profile-divider" />
                                    <div className="profile-stats">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="profile-stat">
                                                <div className="profile-stat-value">{stat.value}</div>
                                                <div className="profile-stat-label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* User follow  */}
                                <div className="user_follow_card_main_container">
                                    <div className="user_follow_container">
                                        <div className="profile-card">
                                            <div className="profile-card__content">
                                                <div className="profile-card__profiles">
                                                    {profiles.map((profile, index) => (
                                                        <div key={index} className="profile-card__profile">
                                                            <div className="left">
                                                                <div className="profile-card__avatar-group">
                                                                    <img
                                                                        loading="lazy"
                                                                        src={profile.avatarUrl}
                                                                        alt={`${profile.name}'s avatar`}
                                                                        className="profile-card__avatar"
                                                                    />
                                                                </div>
                                                                <div className="profile-card__info">
                                                                    <h2 className="profile-card__name">{profile.name}</h2>
                                                                    <p className="profile-card__username">{profile.username}</p>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <button className="profile-card__follow-btn">Follow</button>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

               

                {/* Middle  */}

                    <div className='news_middle'>
                        <div className='button_container'>
                            <ul className='unorder-container'>
                                {/* <Link to="/feed"> */}
                                    <li><button className={page == "Feed" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Feed")} >Feed</button></li>
                                {/* </Link>
                                <Link to= "/community" > */}
                                    <li><button className={page == "Communities" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Communities")}>Communities</button>
                                    </li>
                                {/* </Link>
                                <Link to="/events"  > */}
                                    <li><button className={page == "Event" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Events")}>Events </button>
                                    </li>
                                {/* </Link> */}
                            </ul>
                        </div>


                        {/*Middle_cards*/}   

                        <div>
                           {page=="Events"?(<Events/>):null}
                           {page=="Feed"?(<Feed/>):null}
                           {page=="Communities"?(<Communities/>):null}

                           {/* <Outlet/> */}
                            </div>
                    </div>
                    
                    


                {/* right  */}
                <div className="contraverse_right">
                    <div className="right_main_container">
                    <div className="right_container">
                        <div className="tab_card">
                        <div className="explore-menu">
                            <h2 className="explore-heading">Explore</h2>
                            {menuItems.map((item) => (
                            <MenuItem key={item.label} {...item} />
                            ))}
                        </div>
                        </div>


                        <article className="sponsored-post">
                        <div className="sponsored-label">SPONSORED</div>
                        <div className="author-info">
                            <img src={postData.authorImage} alt="Author profile" className="author-image" />
                            <div className="author-username">{postData.authorUsername}</div>
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04625bfbab85a66f908853fca785e524c247a2693eed915bf48cf9acab6f995b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="" className="verified-badge" />
                            <button className="follow-button">Follow</button>
                        </div>
                        <div className="post-content">
                            <img src={postData.postImage} alt="Post content" className="post-image" />
                            <p className="post-description">{postData.postDescription}</p>
                        </div>
                        </article>

                    </div>
                    </div>
                </div>
            </div>
               


        </div>
        </div >
    )
}

export default Communidad