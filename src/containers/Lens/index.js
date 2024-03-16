import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { props } from '../../assets/Data.json'

const Lens = ({ props }) => {
    const navigate = useNavigate();
    const [page, selectpage] = useState("Feed");

    const stats = [
        { value: "6,664", label: "Following" },
        { value: "9,991", label: "Followers" },
    ];

    const images = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e86de4dd1fe4e260bf4c3ec31987f94ee94896eba1cd21a7c4cfa3241e764570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Like icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a91c164475799a3fad37f4675e97f13d03d70f0a4ec7c991ea26f80ed9d439f5?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Comment icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b299f12d57ef24659cff76013f7b6fee92ea4dfb453badc499db353b28874b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Share icon" },
    ];


    const reactions = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7e31d14bb8ee2a432ae40b3432567e8de5199e4e5b2dc0c8c5962f104c9a554?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", count: "1.2k" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c5a856594c5687f75a8360c64dfde95937d06484425d3eb109a3cf574047447?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
    ];

    const actions = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80049d256481823ea98953419d1a961fa9a79f948aeb77dc09a5d76bff20a757?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8434b995a7a366ae87405469c727212ced1587aae165ea37e4fba8a876b182b7?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e30760babc5816d5ee82d58f2f0c6afddf824236184aee846d57358ade95803f?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
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
        },
    ];

    const menuItems = [
        { label: "Odyssey", active: true, route: "/odyssey" },
        { label: "Controverse", active: false, route: "/contraverse" },
        { label: "Lens", active: false, route: "/communidad" },
        { label: "Communidad", active: false, route: "/lens" },
    ];

    const MenuItem = ({ label, active, route }) => (
        <div className={`menu-item ${active ? "active" : ""}`} onClick={() => navigate(route)}>{label}</div>
    );


    return (
        <div>

            <div className="odyssey_main_container">
                <div className="odyssey_container">
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
                                <li><button className={page == "Feed" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Feed")} >Feed</button></li>
                                <li><button className={page == "Surprise" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Surprise")}>Surprise me</button></li>
                                <li><button className={page == "Discover" ? ' switch-trueButton' : 'switch-falseButton'} onClick={() => selectpage("Discover")}>Discover </button></li>
                            </ul>
                        </div>

                        <div className='news_mainBody'>
                            <div className=' '>
                                {props.Main_News.map((data, index) => (
                                    <div key={data.id} id={data.id} className='news_card '>
                                        <div className='news_cardleft'>
                                            <img src={data.src} alt={data.alt} className='img_newscardleft' />

                                            <div className='heading_newscardleft '>
                                                <div className='profile_newscardleft  '></div>
                                                <h3 className=''>{data.heading}</h3>
                                            </div>
                                            <p className='mb-3 font-bold'>{data.paragraph}</p>
                                            <div className='time_newscardleft '>
                                                <p>{data.time}</p>
                                                <div className='gap_aftertime  '></div>
                                                <p>{data.postBy}</p>
                                            </div>

                                        </div>

                                        <div className='news_cardright '>
                                            {data.relatedTo.map((relatedArticle, relatedIndex) => (

                                                <div key={relatedIndex} id={relatedArticle.id} className='container_newscardright'>
                                                    <div className='heading_newscardright '>
                                                        <div className='profile_newscardright'></div>
                                                        <div>{relatedArticle.heading}</div>
                                                    </div>
                                                    <p className=' mb-1 font-bold para_newscardright'>{relatedArticle.paragraph}</p>
                                                    <div className='time_newscardright '>
                                                        <p>{relatedArticle.time}</p>
                                                        <div className='gap_aftertime'></div>
                                                        <p>{relatedArticle.postBy}</p>

                                                    </div>

                                                </div>
                                            ))}



                                        </div>


                                    </div>



                                ))}

                            </div>


                        </div >



                    </div>

                    {/* right  */}
                    <div className="odyssey_right">
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
                            </div>
                        </div>
                    </div>

                    {/* for you page*/}
                    <div className='foryou_page'>
                        <h3 className='h3'>For you</h3>
                        <p className='para'>Recommendation based on your activity ? </p>
                        <div className='container_foryoupage'>
                            {props.Foryou_page.map((data, index) => (

                                <div key={index} index={data.id} className='card_foryoupage'>
                                    <div className='left_foryoupage'>
                                        <div className='heading'>
                                            <div className='profile_foryoupage'></div>
                                            <h3 className='heading_foryoupage'>{data.heading}</h3>
                                        </div>
                                        <p className='para_foryoupage'>{data.paragraph}</p>
                                        <p className='time'>{data.time}</p>
                                    </div>
                                    <div className='right_foryoupage'>
                                        <img src={data.src} alt={data.alt} className='img_rightforyoupage' />
                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>
                    {/* for you cards */}
                    <div className='foryou_cards'>
                        <h3 className='h3'>For you</h3>
                        <p className='para'>Recommendation based on your activity ? </p>
                        <div className='container_foryoucards'>
                            {props.Foryou_cards.map((data, index) => (

                                <div key={index} id={data.id} className='card_foryoucards'>
                                    <p>{data.cardname}</p>
                                    {data.article.map((data, index) => (

                                        <div key={index} id={data.id} className='single_card'>
                                            <div className='left_foryoucards'>
                                                <div className='heading'>
                                                    <div className='profile_foryoucards'></div>
                                                    <h3 className='heading_foryoucards'>{data.heading}</h3>
                                                </div>
                                                <p className='para_foryoucards'>{data.paragraph}</p>
                                                <p className='time'>{data.time}</p>
                                            </div>
                                            <div className='right_foryoucards'>
                                                <img src={data.src} alt={data.alt} className='img_rightforyoucards' />
                                            </div>
                                        </div>
                                    ))}


                                </div>

                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Lens