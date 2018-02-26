import '../../_styles/components/Home/Home.css';
import React from 'react';
import { inviteEmail } from '../../actions/inviteActions';

// import SocialItems from '../global/SocialItems.js';


export default function Home(props) {

  function submitForm (e) {
    e.preventDefault();
    const target = e.target;
    const userEmail = target.email.value;
    console.log(props);
    inviteEmail(userEmail);
  }

  return(
    <div id="Home">
      <h1>Enter Your Email below to receive an invite for slack</h1>
      <form onSubmit={submitForm} className="inviteForm">
        <input name="email" type="email" placeholder="example@gmail.com"/>
        <button type="submit">Invite Me!</button>
      </form>
      {/* <SocialItems /> */}
    </div>
  )
}
