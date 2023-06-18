import React from "react";

export default function FooterContent () {
    return (
        <div className="footer-content">
            <div className="logo"><img src={process.env.PUBLIC_URL + '/F_LOGO.svg'} alt={"Logo KASA"}/></div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}