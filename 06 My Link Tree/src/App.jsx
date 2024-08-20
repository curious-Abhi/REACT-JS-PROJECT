import React from "react";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import "./App.css";

const App = () => {
  return (
    <div className="linktree-container">
      <div className="profile-pic-container">
        <img src="./mypic.png" alt="Profile" className="profile-pic" />
      </div>
      <h3>Computer Science Engineer</h3>
      <h1 className="header">My TopLinks</h1>

      <section className="section portfolio">
        <h2 className="section-title">My Portfolio</h2>
        <div className="links">
          <a
            href="https://beautiful-lily-99f642.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <AiOutlineGlobal className="icon portfolio-icon" />
            <span>My Portfolio</span>
          </a>
        </div>
      </section>

      <section className="section social">
        <h2 className="section-title">Social Links</h2>
        <div className="links">
          <a
            href="https://github.com/curious-Abhi"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FaGithub className="icon github-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kumarabhi01/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FaLinkedin className="icon linkedin-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.youtube.com/@curiousabhi550"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FaYoutube className="icon youtube-icon" />
            <span>YouTube</span>
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FaTwitter className="icon twitter-icon" />
            <span>Twitter</span>
          </a>

          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FaInstagram className="icon instagram-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </section>

      <section className="section coding">
        <h2 className="section-title">Coding Platforms</h2>
        <div className="links">
          <a
            href="https://www.geeksforgeeks.org/user/abhishekwbdk/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <SiGeeksforgeeks className="icon gfg-icon" />
            <span>Geeks for Geeks</span>
          </a>

          <a
            href="https://leetcode.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <SiLeetcode className="icon leetcode-icon" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://codeforces.com/profile/curiousabhi"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <SiCodeforces className="icon codeforces-icon" />
            <span>Codeforces</span>
          </a>

          <a
            href="https://www.hackerrank.com/profile/abhishekk67781"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <SiHackerrank className="icon hackerrank-icon" />
            <span>HackerRank</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
