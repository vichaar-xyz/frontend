import * as React from "react";
import './index.scss';

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
        <div className="profile-link">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/306a4bec59ea949461a29a50cab3324a940f117a15c3663f76bbb85000241334?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Profile avatar" className="profile-avatar" />
            <div className="profile-username">@notojoyoo</div>
        </div>
    );
}

function Header() {
    return (
        <>
            <header className="header">
                <SearchBar />
                <div className="header-icons">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf683c09f23cc1d208be62b0a715d2afc156e0219f92f717eb100e6172eacbc4?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/549f3bfc75c551cc8a6d0c18cb0e7f2eab99ab9662c3c1237649cce9205843fc?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c250e1b77ad2c84c9e8d284d240fee90654a8eff0f728108536a807c0de25ef?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&" alt="Header icon" className="header-icon" />
                </div>
                <ProfileLink />
            </header>

        </>
    );
}

export default Header;