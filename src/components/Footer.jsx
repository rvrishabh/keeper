import React from "react";

function Footer() {
    const d = new Date();
    const currentYear = d.getFullYear();

    return(
        <footer>Copyright @ {currentYear}</footer>
        );
}

export default Footer;