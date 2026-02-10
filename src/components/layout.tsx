import * as React from "react";

import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <main className={styles.layout}>{children}</main>;
}

export { Layout };
