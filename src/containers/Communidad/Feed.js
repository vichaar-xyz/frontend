import React from 'react'
import Data  from '../../assets/Data.json'
const Feed = () => {



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

  return (
    <div>
        <div className='feed'>

{/*EventPost*/}
<div className='event_content'>
    <article className='event_card'>
        <header className='event_header'>
            <div className='user_info'>
                
                <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/31983fed-731f-4cc0-9eaf-4fd84cf7f97b" alt="User avatar not found"
                    className="user_avatar" loading="lazy" />
                <div className='username'>@maheshwari_009</div>
            </div>
            <div className="follow-button" >Follow</div>

        </header>
        <div className='event_content'>
            <div className='event_text_content'>
                <p className='event_text'>It serves as a central hub where users can discover, share, and discuss the latest insights, trends, and developments within the Web3 ecosystem.Key FeaturesPersonalized Feeds: Tailored to your interests, Connect3 delivers a personalized feed of articles, news, and updates relevant to the topics you care about most in the Web3 industry.Community Discussions: Engage in vibrant gasgvvv hshashajh ....<span className='event_text_end'>see more</span> </p>

            </div>

        </div>
        <footer className='event_footer'>
            <div className='footer_items'>
                <div className="like_count">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b24d5d1d31eb51814dc300a6c28bfea52380ec86f8a5bcce23a3a203403b466?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                        alt="Like icon"
                        className="like_icon"
                        loading="lazy"
                    />
                    <div className="like_number">1.2k</div>

                    <img
                        src="https://github.com/vichaar-xyz/frontend/assets/87490161/22efe628-eb0a-4e6a-9ccd-4e8c3866c854"
                        alt="Dislike icon"
                        className="dislike-icon"
                    />

                </div>
                <img
                    key={icons[1].id}
                    src={icons[1].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <img
                    key={icons[2].id}
                    src={icons[2].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <img
                    key={icons[3].id}
                    src={icons[3].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <div className='footer_dot'></div>
                <h4 className='footer_reply'>Reply</h4>
            </div>
        </footer>
    </article>
</div>




{/*short post*/}
<div className="content_card">
<article className="post-card">
            <header className="post-header">
                <div className="user-info">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4026047dd4f10f99f7b3f7406ff02eb43622364882c53424cf223841370cd4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                        alt="User avatar"
                        className="user-avatar"
                    />
                    <div className="username">@maheshwari_009</div>
                </div>
                <div className="follow-button" >Follow</div>
            </header>
            <div className="post-content">
                <div className="post-image-container">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbd2fb878ea7aaf52d3d8047fc13d942e60c018aab9a38d5868f171782fb5c23?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                        alt="Post image"
                        className="post-image"
                    />
                </div>
                <div className="post-text-container">
                    <p className="post-text">
                        It serves as a central hub where users can discover, share, and
                        discuss the latest insights
                    </p>
                </div>
            </div>
            <footer className="post-footer">
                <div className="token-list">
                    <div className="token-label">Tokens</div>
                    <div className="token-count">+ {tokens.length} more</div>
                </div>
                <div className="like-count">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b24d5d1d31eb51814dc300a6c28bfea52380ec86f8a5bcce23a3a203403b466?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                        alt="Like icon"
                        className="like-icon"
                    />
                    <div className="like-number">1.2k</div>
                    <img
                        key={icons[1].id}
                        src={icons[1].avatar}
                        alt="User avatar"
                        className="user-avatar-small"
                    />
                    <img
                        key={icons[2].id}
                        src={icons[2].avatar}
                        alt="User avatar"
                        className="user-avatar-small"
                    />
                </div>
                {/* <div className="user-list">
                {users.map((user) => (
                    <img
                        key={user.id}
                        src={user.avatar}
                        alt="User avatar"
                        className="user-avatar-small"
                    />
                ))}
            </div> */}
            </footer>
        </article>
    
</div>


{/*EventPost*/}
<div className='event_content'>
    <article className='event_card'>
        <header className='event_header'>
            <div className='user_info'>
                <img src="https://github.com/vichaar-xyz/frontend/assets/87490161/f61da15c-6d50-47fa-a13d-a3098355f32d" alt="User avatar not found"
                    className="user_avatar" />
                <div className='username'>@maheshwari_009</div>
            </div>
            <div className="follow-button" >Follow</div>

        </header>
        <div className='event_content'>
            <div className='event_text_content'>
                <p className='event_text'>It serves as a central hub where users can discover, share, and discuss the latest insights, trends, and developments within the Web3 ecosystem.Key FeaturesPersonalized Feeds: Tailored to your interests, Connect3 delivers a personalized feed of articles, news, and updates relevant to the topics you care about most in the Web3 industry.Community Discussions: Engage in vibrant gasgvvv hshashajh ....<span className='event_text_end'>see more</span> </p>

            </div>

        </div>
        <footer className='event_footer'>
            <div className='footer_items'>
                <div className="like_count">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b24d5d1d31eb51814dc300a6c28bfea52380ec86f8a5bcce23a3a203403b466?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
                        alt="Like icon"
                        className="like_icon"
                    />
                    <div className="like_number">1.2k</div>

                    <img
                        src="https://github.com/vichaar-xyz/frontend/assets/87490161/22efe628-eb0a-4e6a-9ccd-4e8c3866c854"
                        alt="Dislike icon"
                        className="dislike-icon"
                    />

                </div>
                <img
                    key={icons[1].id}
                    src={icons[1].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <img
                    key={icons[2].id}
                    src={icons[2].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <img
                    key={icons[3].id}
                    src={icons[3].avatar}
                    alt="User avatar"
                    className="user-avatar-small"
                />
                <div className='footer_dot'></div>
                <h4 className='footer_reply'>Reply</h4>
            </div>
        </footer>
    </article>
</div>


{/*News post*/}
<div className='news_mainBody'>
    <div className=' '>
        {Data.Main_News.map((data, index) => (
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
    </div>
  )
}

export default Feed