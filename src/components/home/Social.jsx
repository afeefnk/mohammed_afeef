import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mohammed-afeef-nk-468373291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="home__social-icon"
        style={{color:'#5b4fe1'}}
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/afeefnk"
        className="home__social-icon"
        style={{color:'#5b4fe1'}}
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/afyee__?igsh=MW92ZTZkczljY3ZybQ=="
        className="home__social-icon"
        style={{color:'#5b4fe1'}}
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
