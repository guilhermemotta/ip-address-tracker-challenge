// "use client";

import styles from "./background-image.module.css";

interface Props {
  children: React.ReactNode;
}

const BackgroundImage = ({ children }: Props) => (
  <picture className={styles.backgroundimage}>{children}</picture>
);

export default BackgroundImage;
