// import "server-only";
import * as z from "zod";

export type GeoData = {
  ip: string;
  location: {
    city: string;
    country: string;
    region: string;
    timezone: string;
    lat: number | string;
    lng: number | string;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

export async function getGeoData(
  input: string,
): Promise<GeoData | Error | undefined> {
  let requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&`;
  const ipv4Schema = z.ipv4();
  const domainSchema = z.string().regex(z.regexes.domain);

  if (ipv4Schema.safeParse(input).success) {
    const { data } = ipv4Schema.safeParse(input);
    requestUrl += `ipAddress=${data}`;
  } else if (domainSchema.safeParse(input).success) {
    const { data } = domainSchema.safeParse(input);
    requestUrl += `domain=${data}`;
  } else {
    console.error("Invalid input:", input);
    return;
  }

  const res = await fetch(requestUrl);
  if (!res.ok) {
    console.error("Failed to fetch geo data: ", res.statusText);
    return { error: { message: "Bad input," } };
  }

  const data: GeoData = await res.json();
  // console.log(data);

  return data;
}
