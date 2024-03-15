import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Lens = ({props}) => {
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
  
  // const images = [
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e86de4dd1fe4e260bf4c3ec31987f94ee94896eba1cd21a7c4cfa3241e764570?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Like icon" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a91c164475799a3fad37f4675e97f13d03d70f0a4ec7c991ea26f80ed9d439f5?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Comment icon" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7b299f12d57ef24659cff76013f7b6fee92ea4dfb453badc499db353b28874b?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&", alt: "Share icon" },
  // ];

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
                  <div className="container">
            <div className="bg-black">
                <div className="py-10">
                    <ul className="flex flex-row justify-center items-center gap-x-8">
                        <li><button className={page === "Feed" ? 'btn-feed active' : 'btn-feed'} onClick={() => selectPage("Feed")}>Feed</button></li>
                        <li><button className={page === "Surprise" ? 'btn-surprise active' : 'btn-surprise'} onClick={() => selectPage("Surprise")}>Surprise me</button></li>
                        <li><button className={page === "Discover" ? 'btn-discover active' : 'btn-discover'} onClick={() => selectPage("Discover")}>Discover</button></li>
                    </ul>
                </div>
                <div className="grid grid-cols-7">
                    <div className="col-span-4 bg-midnight text-white flex flex-col py-10 px-12 my-10 mx-5 rounded-3xl">
                        {/* Main News Section */}
                        {mainNews.map((data, index) => (
                            <div key={index} id={data.id} className="flex flex-row gap-10 mb-9">
                                <div className="w-1/2">
                                    <img src={data.src} alt={data.alt} className="rounded-2xl" />
                                    <div className="flex flex-row items-center gap-3 my-4">
                                        <div className="bg-white w-5 h-5"></div>
                                        <h1>{data.heading}</h1>
                                    </div>
                                    <p className="mb-3 font-bold">{data.paragraph}</p>
                                    <div className="flex flex-row gap-2 items-center opacity-50">
                                        <p>{data.time}</p>
                                        <div className="bg-white opacity-50 w-1 h-1 rounded-full"></div>
                                        <p>{data.postBy}</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    {/* Related Articles */}
                                    {data.relatedTo.map((relatedArticle, relatedIndex) => (
                                        <div key={relatedIndex} id={relatedArticle.id} className="pb-6">
                                            <div className="flex flex-row items-center gap-3 mb-2">
                                                <div className="bg-white w-5 h-5"></div>
                                                <div>{relatedArticle.heading}</div>
                                            </div>
                                            <p className="mb-2 font-bold">{relatedArticle.paragraph}</p>
                                            <div className="flex flex-row gap-2 opacity-50 items-center">
                                                <p>{relatedArticle.time}</p>
                                                <div className="bg-white opacity-50 w-1 h-1 rounded-full"></div>
                                                <p>{relatedArticle.postBy}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Lens