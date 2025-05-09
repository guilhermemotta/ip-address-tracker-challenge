// import styled from "styled-components";
import styles from "./title.module.css";

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className={styles.title}>{children}</h1>
);

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: white;
// `;

export { Title };
