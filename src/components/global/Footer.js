import '../../_styles/components/global/Footer.css';
import React from 'react';

export default function Footer() {

  const renderFooter = (
    <div className="Footer">
      <div className="legal-wrapper">
        <p className="legal-text">&copy; Miguel Pardo 2017</p>
      </div>
    </div>
  );

  return(
    renderFooter
  )
}
