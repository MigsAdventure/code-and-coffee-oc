import '../../_styles/components/global/SocialItems.css';
import React from 'react';

export default function SocialItems() {
  const renderSocialItems = (
    <ul className="SocialItems">
      <li className="social-item facebook-social"><a href="https://www.facebook.com"></a></li>
      <li className="social-item instagram-social"><a href="https://www.instagram.com"></a></li>
      <li className="social-item twitter-social"><a href="https://www.twitter.com"></a></li>
      <li className="social-item linkedin-social"><a href="https://www.linkedin.com"></a></li>
    </ul>
  );
  return (
    renderSocialItems
  );
};
