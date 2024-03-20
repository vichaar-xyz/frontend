import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

import { Button, Modal } from 'antd';
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
// import 'froala-editor/js/plugins/image.min.js'
import 'froala-editor/js/plugins/char_counter.min.js'
import axios from 'axios';
import { PINATA_API_KEY, YOUR_PINATA_SECRET_API_KEY } from '../../constants/common';

const Contraverse = () => {
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [postTitel, setPostTitle] = useState("");
  const [postPara, setPostPara] = useState("")
  const [postParaImg, setPostParaImg] = useState("")

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


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
    { label: "Odyssey", active: false, route: "/Odyssey" },
    { label: "Controverse", active: true, route: "/contraverse" },
    { label: "Lens", active: false, route: "/communidad" },
    { label: "Communidad", active: false, route: "/lens" },
  ];

  const tags = [
    'DAO',
    'NFT',
    'DeFi',
    'Tokens',
    'DeX',
    'Funding',
    'Startup',
    'Reputation',
    'Community Engagement',
    'Protocol layers',
    'Cryptocurrency',
    'Product Launch',
    'DID',
    'Infrastructural Layers',
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



  // Function to handle changes in the editor content
  const handlePostChange = (content) => {
    const editorElement = document.querySelector('.fr-element');
    let editorText = '';
    let imageUrls = [];

    if (editorElement) {
      editorText = editorElement.textContent;
      imageUrls = extractImageUrls(editorElement);
      console.log('Editor Text:', editorText);
      console.log('Image URLs:', imageUrls);

      // Set state inside the if block
      setPostPara(editorText);
      setPostParaImg(imageUrls);
    }
  };

  const extractImageUrls = (editorElement) => {
    const imgElements = editorElement.querySelectorAll('img');
    const imageUrls = Array.from(imgElements).map((img) => img.src);
    return imageUrls;
  };

  const handleTagClick = (tag) => {
    if (selectedTags.length < 5) {
      const newSelectedTags = [...selectedTags];
      if (newSelectedTags.includes(tag)) {
        const index = newSelectedTags.indexOf(tag);
        newSelectedTags.splice(index, 1);
      } else {
        newSelectedTags.push(tag);
      }
      setSelectedTags(newSelectedTags);
    }
  };

  const handleSubmit = async () => {
    try {
      const userTitle = postTitel;
      const userParagraph = postPara;
      const userTags = selectedTags;
      const userBlobUrls = postParaImg;
      const ipfsImageLinks = [];

      // Upload each image to IPFS and store the links
      for (const imageUrl of userBlobUrls) {
        const responses = await axios.get(imageUrl, { responseType: 'blob' });
        const file = new File([responses.data], 'image.jpg', { type: 'image/jpeg' });

        const fileData = new FormData();
        fileData.append('file', file);

        const responseData = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          fileData,
          {
            headers: {
              'pinata_api_key': PINATA_API_KEY,
              'pinata_secret_api_key': YOUR_PINATA_SECRET_API_KEY,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const fileDataUrls = 'https://gateway.pinata.cloud/ipfs/' + responseData.data.IpfsHash;
        ipfsImageLinks.push(fileDataUrls); // Pushing the IPFS link to the array
      }

      // Created JSON object with IPFS links
      const postData = {
        title: userTitle,
        paragraph: userParagraph,
        tags: userTags,
        images: ipfsImageLinks,
        wallet_address: "user address",
        timestamp: "date - time",
        rating: {
          like: 23,
          disLike: 5675,
        }, // For now using hardcode data
        user_name: "Abdul 123",// For now using hardcode data
        postType: "Long",
        quoteUrl: ""
      };

      // Upload JSON object to IPFS
      const jsonBlob = new Blob([JSON.stringify(postData)], { type: 'application/json' });
      const formData = new FormData();
      formData.append("file", jsonBlob, "post.json");

      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'pinata_api_key': PINATA_API_KEY,
            'pinata_secret_api_key': YOUR_PINATA_SECRET_API_KEY,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const jsonUrl = "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash;
      console.log("JSON file uploaded to IPFS:", jsonUrl);
    } catch (error) {
      console.error("Error uploading to IPFS:", error);
    }
  }


  return (
    <div>
      <div className="contraverse_main_container">
        <div className="contraverse_container max_width_container ">
          <div className="contraverse_left">
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
          <div className="contraverse_middle">

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
                    <h2 className="whats-happening-text" onClick={showModal}>{postTitel ? postTitel.substring(0, 25) + "..." : `What's happening`}</h2>

                  </div>
                  <div className="right">
                    <button onClick={handleSubmit}>Post</button>
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
                  <footer className="post-footer">
                    <div className="reactions">
                      {reactions.map((reaction, index) => (
                        <div key={index} className="reaction">
                          {reaction.icon && (
                            <img
                              src={reaction.icon}
                              alt={`Reaction ${index + 1}`}
                              className="reaction-icon"
                            />
                          )}
                          {reaction.count && (
                            <span className="reaction-count">{reaction.count}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="actions">
                      {actions.map((action, index) => (
                        <img
                          key={index}
                          src={action.icon}
                          alt={`Action ${index + 1}`}
                          className="action-icon"
                        />
                      ))}
                    </div>
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
                  <footer className="post-footer">
                    <div className="reactions">
                      {reactions.map((reaction, index) => (
                        <div key={index} className="reaction">
                          {reaction.icon && (
                            <img
                              src={reaction.icon}
                              alt={`Reaction ${index + 1}`}
                              className="reaction-icon"
                            />
                          )}
                          {reaction.count && (
                            <span className="reaction-count">{reaction.count}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="actions">
                      {actions.map((action, index) => (
                        <img
                          key={index}
                          src={action.icon}
                          alt={`Action ${index + 1}`}
                          className="action-icon"
                        />
                      ))}
                    </div>
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
                  <footer className="post-footer">
                    <div className="reactions">
                      {reactions.map((reaction, index) => (
                        <div key={index} className="reaction">
                          {reaction.icon && (
                            <img
                              src={reaction.icon}
                              alt={`Reaction ${index + 1}`}
                              className="reaction-icon"
                            />
                          )}
                          {reaction.count && (
                            <span className="reaction-count">{reaction.count}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="actions">
                      {actions.map((action, index) => (
                        <img
                          key={index}
                          src={action.icon}
                          alt={`Action ${index + 1}`}
                          className="action-icon"
                        />
                      ))}
                    </div>
                  </footer>
                </article>


              </div>
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



          {/* Post Modal  */}

          <Modal title="Create a Post"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered={true}
            footer={false}
            width={700}
          >
            <div className="post_main_container">
              <div className="post_container">
                {/* <div className="title_container">
                  <input type="Title" value={postTitel} onChange={(e) => setPostTitle(e.target.value)} className='title_input' placeholder='Title' />
                </div> */}
                <div className="post_container">
                  <FroalaEditorComponent
                    tag='textarea'
                    config={{
                      placeholderText: 'Edit Your Content Here!',
                      charCounterCount: true
                    }}
                    onModelChange={handlePostChange}
                  />
                </div>
                <div className="tags_container">
                  <div className="tag-selection">

                    <ul>
                      {tags.map((tag) => (
                        <li key={tag}>
                          <input
                            type="checkbox"
                            id={tag}
                            checked={selectedTags.includes(tag)}
                            onChange={() => handleTagClick(tag)}
                          />
                          <label htmlFor={tag}>{tag}</label>
                        </li>
                      ))}
                    </ul>
                    {selectedTags.length > 0 && (
                      <p>Selected Tags: {selectedTags.join(', ')}</p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </Modal>


        </div>
      </div>
    </div>
  )
}

export default Contraverse