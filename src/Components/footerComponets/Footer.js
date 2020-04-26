import React from 'react';
import './Footer.css'

import {Github} from "@styled-icons/boxicons-logos/Github";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Snapchat} from "@styled-icons/boxicons-logos/Snapchat";

import {IconStyleWrapper, SocialLink} from "./styles/iconStyle"

class Footer extends React.Component {
    render () {
        return(
            <>  
                <IconStyleWrapper>
                    <SocialLink href="https://github.com/klongrich">
                        <Github />
                    </SocialLink>

                    <a href="https://twitter.com/longrichk?lang=en">
                        <Twitter color="#00acee"/>
                    </a>

                    <a href="https://www.twitch.tv/slyle714/">
                        <Twitch color="#6441A4 " />
                    </a>

                    <a href="https://www.instagram.com/longrichk">
                        <Instagram />
                    </a>

                    <a href="">
                        <Snapchat color="#fffc00" />
                    </a>
                </IconStyleWrapper>
            </>
        );
    }
  }

export default Footer;