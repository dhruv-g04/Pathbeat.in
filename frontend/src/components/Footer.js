import React from "react";
import { BiCopyright } from "react-icons/bi";
import "./Footer.css"; // Import your CSS file

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div id="copy">
            <span className="type"><BiCopyright /> {year} Pathbeat.in</span>
        </div>
    );
}

export default Footer;
