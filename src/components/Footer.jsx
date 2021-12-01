import React from 'react';

var date = new Date();
var actualYear = date.getFullYear();

function Footer() {
    return <footer>
        <p>Estudio Mola © { actualYear }</p> 
        </footer>
}

export default Footer;