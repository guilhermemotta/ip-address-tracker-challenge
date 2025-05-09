"use-client";
// import styled from "styled-components";
import styles from "./label.module.css";

// const Label = styled.div`
//   text-transform: uppercase;
//   color: hsl(0, 0%, 59%);
//   font-weight: bold;
//   text-align: center;
//   font-size: 0.75rem;
//   letter-spacing: 2px;
// `;

type LabelProps = { children: React.ReactNode };

const Label = ({ children }: LabelProps) => (
  <div className={styles.label}>{children}</div>
);

export default Label;
