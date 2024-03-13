import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Odyssey = () => {

    const navigate = useNavigate();

    const stats = [
        { value: "6,664", label: "Following" },
        { value: "9,991", label: "Followers" },
    ];

    const images = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e86de4dd1fe4e260bf4c3ec31987f94ee94896eba1cd21a7c4cfa3241e764570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Like icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a91c164475799a3fad37f4675e97f13d03d70f0a4ec7c991ea26f80ed9d439f5?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Comment icon" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b299f12d57ef24659cff76013f7b6fee92ea4dfb453badc499db353b28874b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Share icon" },
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
                    <div className="odyssey_middle">

                        <div className="post_main_container">
                            <div className="post_container">
                                <section className="whats-happening-card">
                                    <div className="left">
                                        <img
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34b2072670ebd6b08eb2fc43f3a0d10579027e43ab74fda29655758904b05434?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                                            alt="Profile"
                                            className="profile-image"
                                            loading="lazy"
                                        />
                                        <h2 className="whats-happening-text">What's happening</h2>

                                    </div>
                                    <div className="right">
                                        <button>Post</button>
                                    </div>
                                </section>


                            </div>
                        </div>

                        {/* Content  */}
                        <div className="content_card_main_container">
                            <div className="content_card">
                                <article className="post-card">
                                    <header className="post-header">
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e73097cd679cb1c367d1f5b6d30edd2a83396f878336d237d436faa07c701d?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="User avatar" className="avatar" />
                                        <h2 className="username">@maheshwari_009</h2>
                                    </header>
                                    <p className="post-content">
                                        It serves as a central hub where users can discover, share, and
                                        discuss the latest insights, trends, and developments within the Web3
                                        ecosystem.
                                        <br />
                                        Key FeaturesPersonalized Feeds: Tailored to your interests, Connect3
                                        delivers a personalized feed of articles, news, and updates relevant
                                        to the topics you care about most in the Web3 industry.Community
                                        Discussions: Engage in vibrant gasgvvv hshashajh gvhgxshgsg svs
                                        ghgsshakj hvxabahsbasg bnabxnxh hbxabj bnxabsjash bnbnnx bxaba....
                                        <span className="see-more">see more </span>
                                    </p>
                                    <footer className="post-actions">
                                        <div className="likes-container">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/078ebc073013649ae54cb9f6a8cbc9a3f4a3e76be767e180e992df45dd2a075b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Heart icon" className="heart-icon" />
                                            <span className="likes-count">1.2k</span>
                                        </div>
                                        {images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.src}
                                                alt={image.alt}
                                                className="action-icon"
                                            />
                                        ))}
                                    </footer>
                                </article>


                                <article className="post-card">
                                    <header className="post-header">
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e73097cd679cb1c367d1f5b6d30edd2a83396f878336d237d436faa07c701d?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="User avatar" className="avatar" />
                                        <h2 className="username">@maheshwari_009</h2>
                                    </header>
                                    <p className="post-content">
                                        It serves as a central hub where users can discover, share, and
                                        discuss the latest insights, trends, and developments within the Web3
                                        ecosystem.
                                        <br />
                                        Key FeaturesPersonalized Feeds: Tailored to your interests, Connect3
                                        delivers a personalized feed of articles, news, and updates relevant
                                        to the topics you care about most in the Web3 industry.Community
                                        Discussions: Engage in vibrant gasgvvv hshashajh gvhgxshgsg svs
                                        ghgsshakj hvxabahsbasg bnabxnxh hbxabj bnxabsjash bnbnnx bxaba....
                                        <span className="see-more">see more </span>
                                    </p>
                                    <footer className="post-actions">
                                        <div className="likes-container">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/078ebc073013649ae54cb9f6a8cbc9a3f4a3e76be767e180e992df45dd2a075b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Heart icon" className="heart-icon" />
                                            <span className="likes-count">1.2k</span>
                                        </div>
                                        {images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.src}
                                                alt={image.alt}
                                                className="action-icon"
                                            />
                                        ))}
                                    </footer>
                                </article>



                                <article className="post-card">
                                    <header className="post-header">
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e73097cd679cb1c367d1f5b6d30edd2a83396f878336d237d436faa07c701d?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="User avatar" className="avatar" />
                                        <h2 className="username">@maheshwari_009</h2>
                                    </header>
                                    <p className="post-content">
                                        It serves as a central hub where users can discover, share, and
                                        discuss the latest insights, trends, and developments within the Web3
                                        ecosystem.
                                        <br />
                                        Key FeaturesPersonalized Feeds: Tailored to your interests, Connect3
                                        delivers a personalized feed of articles, news, and updates relevant
                                        to the topics you care about most in the Web3 industry.Community
                                        Discussions: Engage in vibrant gasgvvv hshashajh gvhgxshgsg svs
                                        ghgsshakj hvxabahsbasg bnabxnxh hbxabj bnxabsjash bnbnnx bxaba....
                                        <span className="see-more">see more </span>
                                    </p>
                                    <footer className="post-actions">
                                        <div className="likes-container">
                                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/078ebc073013649ae54cb9f6a8cbc9a3f4a3e76be767e180e992df45dd2a075b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Heart icon" className="heart-icon" />
                                            <span className="likes-count">1.2k</span>
                                        </div>
                                        {images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.src}
                                                alt={image.alt}
                                                className="action-icon"
                                            />
                                        ))}
                                    </footer>
                                </article>

                            </div>
                        </div>



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
                </div>
            </div>
        </div>
    )
}

export default Odyssey