import * as React from 'react';

export default function ExperienceItem() {
  return(
    <div className="resume-item">
      <div className="resume-icon">
        <img src="https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png" />
      </div>
      <div className="resume-content">
        <h3>2019 to Present</h3>
        <h1>Technical Lead</h1>
        <h4>WooliesX</h4>
        <div className="resume-summary">
          This is a summary of the work done here.
          <ul>
            <li>Did stuff</li>
            <li>Did some more stuff</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
