// "use client";

import styles from "./background-image.module.css";

const BackgroundImage = () => (
  <picture className={styles.backgroundimage}>
    <source media="(max-width: 375px)" srcSet="assets/pattern-bg-mobile.png" />
    <source media="(min-width: 376px)" srcSet="assets/pattern-bg-desktop.png" />
    <img
      style={{ width: "100%" }}
      src="assets/pattern-bg-mobile.png"
      alt="background pattern"
    />
  </picture>
);

export { BackgroundImage };
