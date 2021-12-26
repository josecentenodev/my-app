import React from 'react';

const actualYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Centeno José Antonio © { actualYear }</p> 
        </footer>
}

export default Footer;