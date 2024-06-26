import * as React from "react";
import './index.scss';
import { Input, Space, Select, Button } from 'antd';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from 'antd';
import Profile from "../../containers/Profile";
function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-icon" />
            <div className="search-input">Search...</div>
        </div>
    );
}

function ProfileLink() {
    return (
        // <div className="profile-link">
        //     <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/306a4bec59ea949461a29a50cab3324a940f117a15c3663f76bbb85000241334?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Profile avatar" className="profile-avatar" />
        //     <div className="profile-username">@notojoyoo</div>
        // </div>
        <div className="profile_links_container">
            <div className="icon_container">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/306a4bec59ea949461a29a50cab3324a940f117a15c3663f76bbb85000241334?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Profile avatar" className="profile-avatar" />
            </div>
            <div className="address_container">
                <div className="bg_color_container">
                    <div className="address">hgfhjds...hsdgudhkd</div>
                </div>
            </div>
        </div>
    );
}


function Header() {

    const { Search } = Input;
    const [address, setAddress] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(address, "address");
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);


    const handleWalletConnect = () => {
        // Check if Phantom Wallet is installed
        if (window.solana && window.solana.isPhantom) {
            const solana = window.solana;

            // Connect to Phantom Wallet provider
            solana.connect()
                .then(() => {
                    console.log('Connected to Phantom Wallet');

                    // Get the wallet address
                    const walletAddress = solana.publicKey.toString();
                    console.log('Wallet Address:', walletAddress);
                    setAddress(walletAddress)
                })
                .catch((error) => {
                    console.error('Failed to connect to Phantom Wallet', error);
                });
        } else {
            console.error('Phantom Wallet is not installed');
        }

    }

    return (
        <>
            <div className="header_main_container">

                {/* <header className="header">
                    <SearchBar />
                    <div className="left_section">
                        <div className="header-icons">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf683c09f23cc1d208be62b0a715d2afc156e0219f92f717eb100e6172eacbc4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/549f3bfc75c551cc8a6d0c18cb0e7f2eab99ab9662c3c1237649cce9205843fc?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c250e1b77ad2c84c9e8d284d240fee90654a8eff0f728108536a807c0de25ef?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                        </div>
                        <ProfileLink />
                    </div>
                </header> */}

                <div className="header_container max_width_container">
                    <div className="left_container">
                        <Link to="/"><div className="logo_container">Vichar.</div></Link>
                        <div className="search_container">
                            <Search
                                placeholder="Search"
                                onSearch={onSearch}
                                className='custom_search'
                                style={{
                                    width: 230,
                                }}
                            />
                        </div>
                    </div>
                    <div className="right_container">

                        <div className="left_section">
                            <div className="header-icons">
                                <Link to='/'><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf683c09f23cc1d208be62b0a715d2afc156e0219f92f717eb100e6172eacbc4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" /></Link>
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/549f3bfc75c551cc8a6d0c18cb0e7f2eab99ab9662c3c1237649cce9205843fc?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c250e1b77ad2c84c9e8d284d240fee90654a8eff0f728108536a807c0de25ef?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                            </div>


                            {/* {!isModalOpen ? */}
                            <div>
                                {/* <Button type="primary" onClick={showModal}>
                                    Open Modal
                                </Button> */}
                                <div className="button_container">
                                    {/* <button onClick={handleWalletConnect}><span>Connect Wallet</span>  </button> */}
                                    <button onClick={showModal}><span>Create Profile</span>  </button>
                                </div>
                                <Modal title={false}
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    centered={true}
                                    width={600}
                                    footer={false}
                                    className="custom_modal"
                                >
                                    <Profile handleWalletConnect={handleWalletConnect} address={address}/>
                                </Modal>
                            </div>
                            {/* // : <ProfileLink />} */}

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;