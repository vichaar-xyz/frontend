import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import './index.scss'
import { Select, Tag } from 'antd';
import { useState } from 'react';

const Profile = ({ handleWalletConnect, address }) => {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [intrestArea, setIntrestArea] = useState([]);
    // const [address, setAddress] = useState("")

    console.log(userName, "userName");
    console.log(email, "email");
    console.log(intrestArea, "intrestArea");


    const images = [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/269449117348c141aa9972cf6812d108cc08a1e5a2fe1e43e495ffaf40a117ef?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ceba41813fc071371764ae934fa2c1d6ac57b03994d099a873ec4100fbd9d6bb?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7c7cfe71991ef79553baf30aaa098a2458e00ab0878043b9053daa0a199ac5bf?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/05d8b4c6a331b9181635080827abc14d15e9ad50d74d149c1de9d3c56a2cbbae?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&"
    ];

    const options = [
        {
            value: 'gold',
        },
        {
            value: 'lime',
        },
        {
            value: 'green',
        },
        {
            value: 'cyan',
        },
    ];


    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginInlineEnd: 4,
                }}
            >
                {label}
            </Tag>
        );
    };

    const handleSelectchange = (e) => {
        console.log(e, "handleSelectchange");
        setIntrestArea(e)
    }

    return (
        <div>

            <div className="profile_page_main_container">
                <div className="profile_page_container">
                    <div className="form_container">
                        <div className="top">
                            <div className="heading">Welcome to Vichaar!</div>
                            <div className="photo_upload">

                                <Upload
                                    name="avatar"
                                    listType="picture-circle"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                // beforeUpload={beforeUpload}
                                // onChange={handleChange}
                                >
                                    {/* {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )} */}
                                    <PlusOutlined style={{ color: "white" }} />
                                </Upload>

                            </div>
                            <div className="button_container">
                                <button>Upload Photo</button>
                                <button>Use NFTs</button>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="middle_row">
                                <div className="input_row">
                                    <div className="name">Select username <span>*</span> </div>
                                    <div className="input">
                                        <input type="text" onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="input_row">
                                    <div className="name">Enter Email id <span>*</span> </div>
                                    <div className="input">
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="input_row">
                                    <div className="name">Interest Area <span>*</span> </div>
                                    <div className="input">
                                        <Select
                                            mode="multiple"
                                            tagRender={tagRender}
                                            // defaultValue={['gold', 'cyan']}
                                            placeholder="Any 5 interest areas"
                                            style={{
                                                width: '70%',
                                            }}
                                            options={options}
                                            onChange={handleSelectchange}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bottom">

                            <div className="connect-section">
                                <div className="connect-title">{address ? "Address : " : "Connect"}</div>
                                <div className="profile-images">
                                    {/* {images.map((image, index) => (
                                        <img
                                            key={index}
                                            loading="lazy"
                                            src={image}
                                            alt="Profile"
                                            className="profile-image"
                                        />
                                    ))} */}
                                    {address ? address : <button onClick={handleWalletConnect}><span>Connect Wallet</span>  </button>}

                                </div>
                            </div>


                            <div className="bottom_main_container">
                                <div className="left_button">
                                    <button>Save</button>
                                </div>
                                <div className="right_button">
                                    <button>Verify</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile