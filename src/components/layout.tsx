import React from "react";

import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <main className={styles.layout}>{children}</main>;
}

export default Layout;
