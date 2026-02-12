"use client";

import { Label } from "./label";
import { Text } from "./text";

import styles from "./info-panel.module.css";

export type InfoPanelProps = {
  ipAddress?: string;
  location?: {
    region: string;
    city: string;
  };
  timezone?: string;
  isp?: string;
};

function InfoPanel({ ipAddress, location, timezone, isp }: InfoPanelProps) {
  return (
    <section className={styles.infopanel}>
      <InfoGroup>
        <Label>Ip Address</Label>
        <Text>{ipAddress}</Text>
      </InfoGroup>

      <InfoGroup>
        <Label>Location</Label>
        <Text>
          {location?.city}, {location?.region}
        </Text>
      </InfoGroup>

      <InfoGroup>
        <Label>Timezone</Label>
        <Text>UTC {timezone}</Text>
      </InfoGroup>

      <InfoGroup>
        <Label>ISP</Label>
        <Text>{isp}</Text>
      </InfoGroup>
    </section>
  );
}

const InfoGroup = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.infogroup}>{children}</div>
);

export { InfoPanel };
