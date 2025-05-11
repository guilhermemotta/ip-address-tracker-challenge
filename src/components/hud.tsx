import * as React from "react";

import styles from "./hud.module.css";

type HUDProps = {
  children: React.ReactNode;
};

export default function HUD({ children }: HUDProps) {
  return <section className={styles.hud}>{children}</section>;
}
