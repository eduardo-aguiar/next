//https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1s

import React from "react";
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h4>The Nav</h4>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
