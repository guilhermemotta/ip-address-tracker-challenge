import "server-only";
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

export const querySchema = z.object({
  search: z.ipv4().or(z.string().regex(z.regexes.domain)),
});

const ipv4Schema = z.ipv4();
const domainSchema = z.string().regex(z.regexes.domain);

export async function getGeoData(searchQuery: string) {
  let requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&`;
  const validatedSearch = querySchema.safeParse({
    search: searchQuery,
  });

  if (!validatedSearch.success) {
    return {
      errors: validatedSearch.error.flatten().fieldErrors,
    };
  }

  const validatedData = validatedSearch.data.search;

  if (ipv4Schema.safeParse(validatedData).success) {
    const { data } = ipv4Schema.safeParse(validatedData);
    requestUrl += `ipAddress=${data}`;
  } else if (domainSchema.safeParse(validatedData).success) {
    const { data } = domainSchema.safeParse(validatedData);
    requestUrl += `domain=${data}`;
  }

  const res = await fetch(requestUrl, { cache: "force-cache" });
  if (!res.ok) {
    console.error("Failed to fetch geo data: ", res.statusText);
    return { errors: { message: "Failed to fetch data" } };
  }

  const data: GeoData = await res.json();
  // console.log(data);

  return data;
}
