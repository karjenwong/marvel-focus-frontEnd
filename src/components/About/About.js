import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2>Who is Karjen Wong?</h2>
        <p>
          I am a newly minted web developer gained after 12 weeks at
          Brainstation. I started coding Jan 2019 with no background in code and
          so far, I've enjoyed learning a lot of different programming stuff
          like node.js, vanilla javascript, react and html/css.
        </p>
        <h3>Links below</h3>
        <a href="https://github.com/karjenwong?tab=repositories">
          <img className="logo" src="/Assets/githublogo.svg" alt="logo" />
          Github
        </a>

        <a href="https://www.linkedin.com/in/karjenwong/">
          <img className="logo" src="/Assets/Linkedinlogo.svg" alt="logo" />
          LinkedIn
        </a>

        <h2>What is this site about?</h2>
        <p>
          Simply put, I wanted design a website to help people learn more about
          the marvel universe. I tried my best to incorporate the offical marvel
          api as much as possible in connection with marvel movies coming out
          and upcoming movies.
        </p>
      </div>
    );
  }
}

export default About;
