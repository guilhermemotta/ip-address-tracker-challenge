import * as React from "react";

import styles from "./hud.module.css";

export type HUDProps = {
  children: React.ReactNode;
};

function HUD({ children }: HUDProps) {
  return <section className={styles.hud}>{children}</section>;
}

export { HUD };
