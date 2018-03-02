import '../../_styles/components/Home/Home.css';
import React from 'react';

// import SocialItems from '../global/SocialItems.js';


export default function Home(props) {

  return(
    <div id="Home">
      <h1 className="page-title">Welcome to Code and Coffee OC</h1>
      <p>If you'd like to join us find us on <a href="https://www.meetup.com/Free-Code-Camp-Orange-County-CA/">Meetup.</a> or join us on <a href="#/slack">Slack.</a></p>
      {/* <SocialItems /> */}
    </div>
  )
}
