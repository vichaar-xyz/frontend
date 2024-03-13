import React from 'react'
import './index.scss'
import Icon from '../../assets/images/home_1.svg'
import wallet from '../../assets/images/wallet.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const HomePage = () => {


    const features = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cb61552a00b50cc8e8fcf9c70b3a38552c97f211b6112431587d98365d3756e?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            title: "Odyssey",
            description: "Write long-term articles. Show your knowledge and earn on-chain reputation.",
            alt: "Odyssey feature image",
            route: "/odyssey"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c55192e71c3a7e572b4335e0948947a0dcfd9727e3e6ae3652434a139f2c447?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            title: "Contraverse",
            description: "Read contradictory opinions on your post to deepen your knowledge.",
            alt: "Contraverse feature image",
            route: "/contraverse"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec3c3bf8805f5f9beffab821d7f5fdb22170ee0a296e58835ab295321f6f85e5?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            title: "Communidad",
            description: "Find location based events, communities, etc.",
            alt: "Communidad feature image",
            route: "/communidad"
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c7aa95e1f77bf70a96afd899970195ae821ad401aab8ade422857663870338c?apiKey=7ba4ed5c97414425b9fc582a5867d5b9&",
            title: "Lens",
            description: "Read news and stay updated on web3.",
            alt: "Lens feature image",
            route: "/lens"
        },
    ];

    const FeatureCard = ({ src, title, description, alt }) => (
        // <div className="bg_border">


        <div className="feature-card">
            <img src={src} alt={alt} className="feature-image" />
            <div className="bottom_container_box">

                <div className="feature-title">{title}</div>
                <div className="feature-description">{description}</div>
            </div>
        </div>
        // </div>
    );


    return (
        <div>
            <div className="homepage_main_container">
                <div className="homepage_container max_width_container">
                    <div className="top_container">
                        <div className="icon_container">
                            <img src={Icon} alt="@icon" />
                        </div>
                        <div className="text_container">
                            Read Better.
                            <div className="gradient_text">
                                Learn Faster.
                            </div>
                            <div className="button_container">
                                <button><span>Connect</span>  <img src={wallet} alt="icon" /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_container">
                        <div className="features-container">
                            {features.map((feature, index) => (
                                <Link to={feature?.route}><FeatureCard key={index} {...feature} /></Link>
                                // <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage