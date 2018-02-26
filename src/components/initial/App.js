import '../../_styles/global.css';
import React from 'react';

import NavBar from '../global/NavBar';
import Footer from '../global/Footer';

export default function App (props) {
    return (
      <div id="App">
        {/* <NavBar /> */}
        {props.children}
        {/* <Footer /> */}
      </div>
    );
};
