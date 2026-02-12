import { Layout } from "../components/layout";
import { InfoPanel } from "../components/info-panel";
import { HUD } from "../components/hud";
import { Title } from "../components/title";
import { SearchBar } from "../components/search-bar";
import { BackgroundImage } from "../components/background-image";
import { MapWrapper } from "../components/map-wrapper";
import { type GeoData, getGeoData } from "../lib/getGeoData";

import "../index.css";

const ipfyApiUrl = "https://api.ipify.org?format=json";

interface IpfyData {
  ip: string;
}

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = await searchParams;
  const ipfyResponse = await fetch(ipfyApiUrl);
  const data: IpfyData = await ipfyResponse.json();
  const currentIpAddr = data.ip;

  const currentGeoData = search.query
    ? await getGeoData(search.query)
    : await getGeoData(currentIpAddr);
  // currentGeoData = currentGeoData ?? fakeGeoData;
  // const currentGeoData = fakeGeoData;
  const hasErrors = currentGeoData && "errors" in currentGeoData;

  return (
    <Layout>
      <BackgroundImage />

      <MapWrapper
        lat={Number(hasErrors ? 0 : currentGeoData.location.lat)}
        long={Number(hasErrors ? 0 : currentGeoData.location.lng)}
      />

      <HUD>
        <Title>IP Address Tracker</Title>

        <SearchBar />

        <InfoPanel
          // ipAddress={currentIpAddr}
          ipAddress={hasErrors ? "" : currentGeoData.ip}
          location={
            hasErrors ? { region: "", city: "" } : currentGeoData.location
          }
          timezone={hasErrors ? "" : currentGeoData.location.timezone}
          isp={hasErrors ? "" : currentGeoData.isp}
        />
      </HUD>
    </Layout>
  );
}

const fakeGeoData: GeoData = {
  ip: "8.8.8.8",
  location: {
    country: "US",
    region: "California",
    city: "Mountain View",
    lat: 32.69922,
    lng: -117.11281,
    // postalCode: "",
    timezone: "-07:00",
    // geonameId: 5375481,
  },
  domains: [
    "0-e.in",
    "0-firstsearch.oclc.org.skyline.0252.12345678.nahamstore.com",
    "004e.com",
    "0102.0501.12345678.nahamstore.com",
    "012727da-19b3-4f39-8bdc-ac2688d60abe.random.general1tj.duckdns.org",
  ],
  as: {
    asn: 15169,
    name: "GOOGLE",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
  // proxy: {
  //   proxy: false,
  //   vpn: false,
  //   tor: false,
  // },
};
