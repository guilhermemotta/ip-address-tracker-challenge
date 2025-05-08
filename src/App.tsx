import * as React from "react";

import { Title } from "./components/title";
import InfoPanel from "./components/info-panel";
import Layout from "./components/layout";
import SearchBar from "./components/search-bar";
import AppMap from "./components/map";
import HUD from "./components/hud";
import styled from "styled-components";
// import Image from "next/image";

const ipfyApiUrl = "https://api.ipify.org?format=json";

function App() {
  const [currentIpAddr, setCurrentIpAddr] = React.useState("");

  React.useEffect(() => {
    let ignore = false;

    const fetchCurrentIp = async () => {
      try {
        const response = await fetch(ipfyApiUrl);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data: { ip: string } = await response.json();
        if (!ignore) {
          setCurrentIpAddr(data.ip);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentIp();

    return () => {
      ignore = true;
    };
  }, []);

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

      <AppMap lat={40.731253} long={-73.996139} />

      <HUD>
        <Title>IP Adress Tracker</Title>

        <SearchBar />

        <InfoPanel
          ipAdress={currentIpAddr}
          location="Brooklin, NY 10001"
          timezone="UTC -05:00"
          isp="SpaceX Starlink"
        />
      </HUD>
    </Layout>
  );
}

export default App;

const BackgroundImage = styled.picture`
  @media (min-width: 376px) {
    height: 16rem;
    flex: 1;
  }
`;
