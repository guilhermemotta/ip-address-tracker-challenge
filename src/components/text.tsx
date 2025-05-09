"use-client";
// import styled from "styled-components";
import styles from "./text.module.css";

// const Text = styled.span`
//   color: hsl(0, 0%, 17%);
//   font-weight: bold;
//   text-align: center;
//   font-size: 1.2rem;
// `;

type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => (
  <span className={styles.text}>{children}</span>
);

export default Text;
