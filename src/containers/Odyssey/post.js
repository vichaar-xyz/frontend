import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

const LongPost = () => {

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

    const tokens = [
        { id: 1, name: "Token 1" },
        { id: 2, name: "Token 2" },
        { id: 3, name: "Token 3" },
        { id: 4, name: "Token 4" },
    ];

    const users = [
        { id: 1, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b24d5d1d31eb51814dc300a6c28bfea52380ec86f8a5bcce23a3a203403b466?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { id: 2, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/efa44d9f08a1a3cafe9913d03355c1f15b007b5d85036cca431e26445d21dd3a?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
        { id: 3, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f51b3f7a242e9f1680d5c6995d842d31461d6c4c82581f42ad695a42f9c825?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" },
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

    const postData = {
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/732f6482c3017e3e025ae9caca33735232b4ab90848bdbec8d9a01bfbf280301?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        authorUsername: "@anddtrtess",
        postImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/832dfaaa4d5611ea46a61ab310465bf39eecb6d11cf86f93e6ac02d44becf8f4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        postDescription: "It serves as a central hub where users can discover, share, and discuss the latest insights",
    };

    const articleData = {
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee12f4e43f50d84b8adae9567c33a323d0ae9afd5b3707403f104bb88a492a59?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        authorName: "@maheshwari_009",
        bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/157815c6a31adc119ef1d48dabd076910cc555ff85ca3a44be78c4343c952002?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        articleImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc261ee592ce51cd329ae9a8c4d1bb606ad48c57e9af8f80b99e391297b81937?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        articleExcerpt: "It serves as a central hub where users can discover, share, and discuss the latest insights",
        publishDate: "Mar 8, 2022",
        readDuration: "6 min read",
        moreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67af8f857d9de33c5ee18395120172ecd74fc85f520f6537feae23c41501d570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
    };


    const tags = [
        { label: "Token", value: "token" },
        { label: "Bull Market", value: "bull-market" },
        { label: "Bit Coin", value: "bit-coin" },
        { label: "Finance", value: "finance" },
        { label: "sdfghjjmnhjk", value: "sdfghjjmnhjk" },
    ];

    const Tag = ({ label }) => (
        <div className="tag">{label}</div>
    );


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
                    <div className="odyssey_middle odyssey_middle_inside_long">

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


                                {/* <article className="article-card">
                                    <header className="article-header">
                                        <div className="author-info">
                                            <img src={articleData.authorImage} alt={articleData.authorName} className="author-avatar" />
                                            <span className="author-name">{articleData.authorName}</span>
                                            <img src={articleData.bookmarkIcon} alt="Bookmark" className="bookmark-icon" />
                                        </div>
                                        <button className="follow-button">Follow</button>
                                    </header>
                                    <div className="article-content">
                                        <div className="article-image-container">
                                            <img src={articleData.articleImage} alt="Article" className="article-image" />
                                        </div>
                                        <div className="article-excerpt-container">
                                            <p className="article-excerpt">{articleData.articleExcerpt}</p>
                                        </div>
                                    </div>
                                    <footer className="article-footer">
                                        <div className="article-meta">
                                            <time className="publish-date">{articleData.publishDate}</time>
                                            <span className="separator">.</span>
                                            <span className="read-time">{articleData.readTime}</span>
                                        </div>
                                    </footer>
                                </article> */}

                                <div className="long_article_content_card">

                                    <div className="article-card">
                                        <div className="author-info">
                                            <div className="author-details">
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee12f4e43f50d84b8adae9567c33a323d0ae9afd5b3707403f104bb88a492a59?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="author-avatar" alt="Author avatar" />
                                                <div className="author-username">@maheshwari_009</div>
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/157815c6a31adc119ef1d48dabd076910cc555ff85ca3a44be78c4343c952002?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="author-badge" alt="Author badge" />
                                            </div>
                                            <div className="follow-button">Follow</div>
                                        </div>
                                        <div className="article-content">
                                            <div className="article-image-container">
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc261ee592ce51cd329ae9a8c4d1bb606ad48c57e9af8f80b99e391297b81937?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="article-image" alt="Article featured image" />
                                            </div>
                                            <div className="article-text-container">
                                                <div className="article-description">
                                                    It serves as a central hub where users can discover, share, and discuss the latest insights
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-meta">
                                            <div className="article-date-info">
                                                <div className="article-date">Mar 8, 2022</div>
                                                <div className="article-date-separator">.</div>
                                                <div className="article-read-time">6 min read</div>
                                            </div>
                                            <div className="article-likes">
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddae5e4b4746e42226c70986f7ec83f18ade302ef61338f36613f3846e370e70?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="like-icon" alt="Like icon" />
                                                <div className="like-count">1.2k</div>
                                            </div>
                                            <div className="article-actions">
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa44d9f08a1a3cafe9913d03355c1f15b007b5d85036cca431e26445d21dd3a?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="bookmark-icon" alt="Bookmark icon" />
                                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f51b3f7a242e9f1680d5c6995d842d31461d6c4c82581f42ad695a42f9c825?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="bookmark-icon" alt="Bookmark icon" />
                                                <img loading="lazy" style={{ height: "20px", width: "20px" }} src="https://cdn.builder.io/api/v1/image/assets/TEMP/67af8f857d9de33c5ee18395120172ecd74fc85f520f6537feae23c41501d570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" className="share-icon" alt="Share icon" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text_description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        <br /> <br />
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    </div>

                                    <div className="tag-list">
                                        <div className="tag-list__row">
                                            {tags.slice(0, 3).map((tag) => (
                                                <Tag key={tag.value} label={tag.label} />
                                            ))}
                                        </div>
                                        <div className="tag-list__row">
                                            {tags.slice(3).map((tag) => (
                                                <Tag key={tag.value} label={tag.label} />
                                            ))}
                                        </div>
                                    </div>

                                </div>

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
        </div>
    )
}

export default LongPost