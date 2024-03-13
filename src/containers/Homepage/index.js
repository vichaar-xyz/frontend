import React from 'react'
import './index.scss'
import Icon from '../../assets/images/home_1.svg'
import wallet from '../../assets/images/wallet.svg'
import { Button } from 'antd'

const HomePage = () => {
    return (
        <div>
            <div className="homepage_main_container">
                <div className="homepage_container">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage