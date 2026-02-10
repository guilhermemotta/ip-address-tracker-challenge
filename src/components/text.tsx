"use-client";

import styles from "./text.module.css";

type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => (
  <span className={styles.text}>{children}</span>
);

export { Text };
