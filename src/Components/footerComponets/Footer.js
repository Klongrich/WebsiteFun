import React from 'react';
import './Footer.css'

import {Github} from "@styled-icons/boxicons-logos/Github";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Snapchat} from "@styled-icons/boxicons-logos/Snapchat";

import {IconStyleWrapper} from "./styles/iconStyle"

class Footer extends React.Component {
    render () {
        return(
            <>
                <IconStyleWrapper>
                    <Github />
                    <Twitter color="#00acee"/>
                    <Twitch color="#6441A4 " />
                    <Instagram />
                    <Snapchat color="#fffc00" />
                </IconStyleWrapper>
            </>
        );
    }
  }

export default Footer;