import React from 'react';
import { TiSocialGithub, TiMail, TiSocialLinkedin } from 'react-icons/ti';

export default function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contact">
        <TiMail /> <p>Email</p>
      </div>
      <a
        href="www.linkedin.com/in/giada-boccali"
        target="_blank"
        className="contact"
      >
        <TiSocialLinkedin /> <p>LinkedIn</p>
      </a>
      <a href="www.github.com/JadeMugs" target="_blank" className="contact">
        <TiSocialGithub /> <p>GitHub</p>
      </a>
    </div>
  );
}
