import React, { useState, useEffect } from 'react'

import DesktopCrypto from './desktopCrypto'
import MoblieCrypto from './moblieCrypto'

export const GetCryptoPage = ({ width }) => {

    if (width > 999) {
        return (
            <>
                <DesktopCrypto />
            </>
        );
    } else {
        return (
            <>
                <MoblieCrypto />
            </>
        );
    }
};

export default function Crypto() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();
    }, []);

    return (
        <GetCryptoPage width={windowSize.width} />
    );
}