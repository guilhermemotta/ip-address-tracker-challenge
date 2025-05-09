import Layout from "../components/layout";
import InfoPanel from "../components/info-panel";
import HUD from "../components/hud";
import { Title } from "../components/title";
import SearchBar from "../components/search-bar";
import AppMap from "../components/map";
import BackgroundImage from "../components/background-image";

import "../index.css";
import { GeoData, getGeoData } from "../lib/getGeoData";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

const ipfyApiUrl = "https://api.ipify.org?format=json";

interface IpfyData {
  ip: string;
}

export default async function Page() {
  const ipfyResponse = await fetch(ipfyApiUrl);
  const data: IpfyData = await ipfyResponse.json();
  const currentIpAddr = data.ip;

  const geoData = await getGeoData(currentIpAddr);

  return (
    <Layout>
      <BackgroundImage>
        <source
          media="(max-width: 375px)"
          srcSet="assets/pattern-bg-mobile.png"
        />
        <source
          media="(min-width: 376px)"
          srcSet="assets/pattern-bg-desktop.png"
        />
        <img
          style={{ width: "100%" }}
          src="assets/pattern-bg-mobile.png"
          alt="background pattern"
        />
      </BackgroundImage>

      <AppMap
        lat={Number(geoData?.location.lat)}
        long={Number(geoData?.location.lng)}
      />

      <HUD>
        <Title>IP Adress Tracker</Title>

        <SearchBar />

        <InfoPanel
          ipAddress={currentIpAddr}
          location={geoData?.location.region}
          timezone={geoData?.location.timezone}
          isp={geoData?.isp}
        />
      </HUD>
    </Layout>
  );
}
