import * as React from "react";

import { Title } from "./components/title";
import InfoPanel from "./components/info-panel";
import Layout from "./components/layout";
import SearchBar from "./components/search-bar";

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
      <Title>IP Adress Tracker</Title>

      <SearchBar />

      <InfoPanel
        ipAdress={currentIpAddr}
        location="Brooklin, NY 10001"
        timezone="UTC -05:00"
        isp="SpaceX Starlink"
      />
    </Layout>
  );
}

export default App;
