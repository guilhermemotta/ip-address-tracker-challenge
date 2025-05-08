interface GeoData {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
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
}

export async function getGeoData(ipAddress: string) {
  const ipRegexp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
  if (!ipRegexp.test(ipAddress)) {
    console.error("Invalid IP Address:", ipAddress);
    return;
  }

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ipAddress}`
  );
  if (!res.ok) {
    console.error("Failed to fetch geo data: ", res.statusText);
    return;
  }

  const data: GeoData = await res.json();

  return data;
}
