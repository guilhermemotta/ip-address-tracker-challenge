import { revalidatePath } from "next/cache";

import { Layout } from "../components/layout";
import { InfoPanel } from "../components/info-panel";
import { HUD } from "../components/hud";
import { Title } from "../components/title";
import { SearchBar } from "../components/search-bar";
import { BackgroundImage } from "../components/background-image";
import { MapWrapper } from "../components/map-wrapper";
import { GeoData, getGeoData } from "../lib/getGeoData";

import "../index.css";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

const ipfyApiUrl = "https://api.ipify.org?format=json";

interface IpfyData {
  ip: string;
}

let currentGeoData: GeoData | undefined = undefined;
let badInput = false;

export default async function Page() {
  badInput = false;
  const ipfyResponse = await fetch(ipfyApiUrl);
  const data: IpfyData = await ipfyResponse.json();
  const currentIpAddr = data.ip;

  // currentGeoData = currentGeoData ?? await getGeoData(currentIpAddr);
  currentGeoData = currentGeoData ?? fakeGeoData;

  const getSearchInput = async (formData: FormData) => {
    "use server";
    currentGeoData = await getGeoData(formData.get("search") as string);
    // TODO: adicionar feedback ao usuário
    badInput = !currentGeoData;
    revalidatePath("/");
  };

  return (
    <Layout>
      <BackgroundImage />

      <MapWrapper
        lat={Number(currentGeoData?.location.lat)}
        long={Number(currentGeoData?.location.lng)}
      />

      <HUD>
        <Title>IP Address Tracker</Title>

        <SearchBar searchBarAction={getSearchInput} badInput={badInput} />

        <InfoPanel
          // ipAddress={currentIpAddr}
          ipAddress={currentGeoData?.ip}
          location={currentGeoData?.location}
          timezone={currentGeoData?.location.timezone}
          isp={currentGeoData?.isp}
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
